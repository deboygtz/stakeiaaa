const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const ROOT = __dirname;

// Chave de autorizacao exigida pela API do stalkeia.ai (header x-site-key).
// Capturada de uma requisicao autorizada no site real.
const SITE_KEY = 'f36ea0b8b6c2a6bbd745bc50e473bfc5b39d0c2a075a38e9';

const UA_IOS = 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.htm':  'text/html; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.mjs':  'application/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif':  'image/gif',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
  '.ttf':  'font/ttf',
  '.json': 'application/json',
  '.txt':  'text/plain',
};

function jsonRes(res, data, status=200) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.end(JSON.stringify(data));
}

const server = http.createServer(async (req, res) => {
  const urlObj = new URL(req.url, 'http://localhost');
  const pathname = urlObj.pathname;

  // CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    res.end(); return;
  }

  // ── PROXY REVERSO /api/proxy/* → stalkeia.ai ─────────────────────────────
  // Repassa qualquer chamada de API (instagram.php, hikerapi.php, leads.php,
  // image-proxy.php) para o backend real, injetando o header de autorizacao.
  if (pathname.startsWith('/api/proxy/')) {
    // O endpoint antigo instagram.php?tipo=perfil foi descontinuado.
    // Traduzimos para o endpoint novo hikerapi.php e desembrulhamos {"user":{...}}.
    let unwrapUser = false;
    let proxyPath = req.url;
    if (pathname === '/api/proxy/instagram.php') {
      const tipo = urlObj.searchParams.get('tipo');
      const username = (urlObj.searchParams.get('username') || '').replace(/^@+/, '').trim();
      if (tipo === 'perfil' && username) {
        proxyPath = '/api/proxy/hikerapi.php?path=' +
          encodeURIComponent('/v2/user/by/username') +
          '&username=' + encodeURIComponent(username);
        unwrapUser = true;
      }
    }
    const targetUrl = 'https://stalkeia.ai' + proxyPath;
    const isImageProxy = pathname === '/api/proxy/image-proxy.php';

    let bodyBuffer = null;
    if (req.method === 'POST') {
      bodyBuffer = await new Promise(resolve => {
        const chunks = [];
        req.on('data', c => chunks.push(c));
        req.on('end', () => resolve(Buffer.concat(chunks)));
      });
    }

    const proxyReq = https.request(targetUrl, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
        'User-Agent': UA_IOS,
        'Referer': 'https://stalkeia.ai/',
        'Origin':  'https://stalkeia.ai',
        // Header de autorizacao exigido pela API (destrava "acesso nao autorizado")
        'x-site-key': SITE_KEY,
      },
    }, (proxyRes) => {
      const ct = proxyRes.headers['content-type'] || '';
      const isText = ct.includes('json') || ct.includes('text');

      // image-proxy.php (ou qualquer resposta binaria): repassa cru, sem mexer.
      if (isImageProxy || !isText) {
        res.writeHead(proxyRes.statusCode, {
          'Content-Type': ct || 'image/jpeg',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'public, max-age=3600',
        });
        proxyRes.pipe(res);
        return;
      }

      let raw = '';
      proxyRes.on('data', c => raw += c.toString());
      proxyRes.on('end', () => {
        // Se veio do hikerapi (tipo=perfil), desembrulha {"user":{...}} para o
        // nivel raiz, que e o formato que o front espera.
        if (unwrapUser) {
          try {
            const parsed = JSON.parse(raw);
            if (parsed && parsed.user) raw = JSON.stringify(parsed.user);
          } catch (e) { /* mantem raw original se nao for JSON valido */ }
        }
        // Reescreve URLs de imagem para passarem pelo proxy local de imagem,
        // que repassa ao image-proxy.php do backend (evita 403 do CDN).
        // A URL no JSON pode ter barras escapadas: https:\/\/...
        const fixed = raw
          .replace(/stalkeia\.website/g, 'stalkeia.ai')
          .replace(
            /"(https?:\\?\/\\?\/[^"]*(?:workers\.dev|cdninstagram\.com|fbcdn\.net|scontent)[^"]*)"/g,
            (_, url) => {
              const clean = url.replace(/\\\//g, '/');
              return '"http:\\/\\/localhost:3000\\/img?url=' + encodeURIComponent(clean) + '"';
            }
          );
        res.writeHead(proxyRes.statusCode, {
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Cache-Control': 'no-cache',
        });
        res.end(fixed);
      });
    });

    proxyReq.on('error', (e) => {
      jsonRes(res, { error: 'Proxy error: ' + e.message }, 502);
    });

    if (bodyBuffer) proxyReq.write(bodyBuffer);
    proxyReq.end();
    return;
  }

  // ── PROXY DE IMAGEM /img?url=... → worker mr.userfounded.workers.dev ──────
  // O CDN do Instagram devolve 403 para requisicoes diretas do nosso IP.
  // O funil real carrega as fotos atraves do worker Cloudflare
  // mr.userfounded.workers.dev, passando a URL COMPLETA do CDN (com os tokens
  // oh/oe/_nc_sid etc). E esse worker que replicamos aqui.
  if (pathname === '/img') {
    let imageUrl = urlObj.searchParams.get('url');
    if (!imageUrl) { res.writeHead(400); res.end(); return; }

    // Se ja veio um wrapper workers.dev, extrai a URL interna do CDN
    try {
      const wrapped = new URL(imageUrl);
      if (wrapped.hostname.includes('workers.dev')) {
        const inner = wrapped.searchParams.get('url');
        if (inner) imageUrl = decodeURIComponent(inner);
      }
    } catch(e) {}

    const WORKER = 'https://mr.userfounded.workers.dev/?url=';

    // Repassa a imagem a partir de uma URL, seguindo redirects.
    function pipeFrom(url, hops, triedDirect) {
      if (hops > 5) { res.writeHead(502); res.end(); return; }
      const mod = url.startsWith('https') ? https : http;
      const r = mod.request(url, {
        method: 'GET',
        headers: {
          'User-Agent': UA_IOS,
          'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'Accept-Language': 'pt-BR,pt;q=0.9',
          'Referer': 'https://stalkeia.website/',
        },
      }, (imgRes) => {
        if ([301,302,307,308].includes(imgRes.statusCode) && imgRes.headers.location) {
          imgRes.resume();
          const loc = imgRes.headers.location;
          pipeFrom(loc.startsWith('http') ? loc : 'https://scontent.cdninstagram.com' + loc, hops + 1, triedDirect);
          return;
        }
        if (imgRes.statusCode === 200) {
          res.writeHead(200, {
            'Content-Type': imgRes.headers['content-type'] || 'image/jpeg',
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'public, max-age=3600',
          });
          imgRes.pipe(res);
          return;
        }
        imgRes.resume();
        // Se o worker falhou, tenta o CDN direto uma vez (fallback).
        if (!triedDirect) { pipeFrom(imageUrl, 0, true); return; }
        res.writeHead(imgRes.statusCode || 502); res.end();
      });
      r.on('error', () => {
        if (!triedDirect) { pipeFrom(imageUrl, 0, true); return; }
        res.writeHead(502); res.end();
      });
      r.end();
    }

    // 1a tentativa: worker com a URL COMPLETA do CDN encodada
    pipeFrom(WORKER + encodeURIComponent(imageUrl), 0, false);
    return;
  }

  // ── ARQUIVOS ESTATICOS ─────────────────────────────────────────────────────
  let urlPath = pathname;
  const ext = path.extname(urlPath);
  let filePath;

  if (!ext || ext === '.htm' || ext === '.html') {
    // /cta/?username=... → pagina de loading estatica
    // /cta/ (sem username) → React Router
    const isCtaLoading = (urlPath === '/cta' || urlPath === '/cta/' || urlPath.startsWith('/cta/'))
      && urlObj.searchParams.has('username');
    const reactRoutes = ['/cta', '/in-stalker', '/in-stalker-results', '/back-redirect', '/feed', '/direct', '/chat'];
    const isReactRoute = !isCtaLoading && reactRoutes.some(r => urlPath === r || urlPath === r + '/' || urlPath.startsWith(r + '/'));

    if (isReactRoute) {
      filePath = path.join(ROOT, 'index.htm');
    } else {
      const candidate = path.join(ROOT, urlPath === '/' ? 'index.htm' : urlPath);
      if (fs.existsSync(candidate) && fs.statSync(candidate).isDirectory()) {
        const indexHtm = path.join(candidate, 'index.htm');
        const indexHtml = path.join(candidate, 'index.html');
        if (fs.existsSync(indexHtm))       filePath = indexHtm;
        else if (fs.existsSync(indexHtml)) filePath = indexHtml;
        else                               filePath = path.join(ROOT, 'index.htm');
      } else if (fs.existsSync(candidate)) {
        filePath = candidate;
      } else {
        if (fs.existsSync(candidate + '.htm'))       filePath = candidate + '.htm';
        else if (fs.existsSync(candidate + '.html')) filePath = candidate + '.html';
        else filePath = path.join(ROOT, 'index.htm');
      }
    }
  } else {
    filePath = path.join(ROOT, urlPath);
  }

  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403); res.end('Forbidden'); return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found: ' + urlPath); return;
    }

    const mimeType = MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': mimeType,
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
      'Referrer-Policy': 'unsafe-url',
    });
    res.end(data);
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log('\n  \u2705 Servidor rodando!\n');
  console.log('  \uD83D\uDC49 Abra: http://localhost:' + PORT + '\n');
  console.log('  (Ctrl+C para parar)\n');
});
