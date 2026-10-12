// Baixa todos os assets que o manifest do React Router referencia mas que
// nao existem localmente (o WebCopy nao executa JS, entao nunca ve os modulos
// de pagina carregados via lazy-loading).
//
// Uso:  node download_missing.js
//
const fs = require('fs');
const path = require('path');
const https = require('https');

const ROOT = __dirname;
const BASE = 'https://stalkeia.website';
const MANIFEST = path.join(ROOT, 'assets', 'manifest-958455cb.js');

const UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1';

// 1. Le o manifest e extrai todos os caminhos /assets/....js|css
const manifestSrc = fs.readFileSync(MANIFEST, 'utf8');
const matches = manifestSrc.match(/\/assets\/[A-Za-z0-9._$-]+\.(?:js|css)/g) || [];
const assetPaths = Array.from(new Set(matches));

console.log('Manifest referencia', assetPaths.length, 'assets.\n');

// 2. Filtra os que ja existem localmente
const missing = assetPaths.filter(p => {
  const local = path.join(ROOT, p.replace(/^\//, ''));
  return !fs.existsSync(local);
});

if (missing.length === 0) {
  console.log('Nada a baixar — todos os assets ja existem localmente.');
  process.exit(0);
}

console.log('Faltando', missing.length, 'arquivos. Baixando...\n');

// 3. Baixa cada um
function download(urlPath) {
  return new Promise((resolve) => {
    const url = BASE + urlPath;
    const dest = path.join(ROOT, urlPath.replace(/^\//, ''));
    fs.mkdirSync(path.dirname(dest), { recursive: true });

    const req = https.get(url, {
      headers: {
        'User-Agent': UA,
        'Accept': '*/*',
        'Referer': BASE + '/',
      },
    }, (res) => {
      if (res.statusCode !== 200) {
        console.log('  [FALHA ' + res.statusCode + '] ' + urlPath);
        res.resume();
        resolve({ ok: false, urlPath, status: res.statusCode });
        return;
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => {
        fs.writeFileSync(dest, Buffer.concat(chunks));
        console.log('  [OK] ' + urlPath + '  (' + Buffer.concat(chunks).length + ' bytes)');
        resolve({ ok: true, urlPath });
      });
    });
    req.on('error', (e) => {
      console.log('  [ERRO] ' + urlPath + '  ' + e.message);
      resolve({ ok: false, urlPath, error: e.message });
    });
  });
}

(async () => {
  const results = [];
  for (const p of missing) {
    results.push(await download(p));
  }
  const failed = results.filter(r => !r.ok);
  console.log('\n──────────────────────────────');
  console.log('Baixados com sucesso:', results.length - failed.length);
  if (failed.length) {
    console.log('Falharam:', failed.length);
    failed.forEach(f => console.log('   -', f.urlPath, f.status || f.error));
  }
  console.log('──────────────────────────────');
})();
