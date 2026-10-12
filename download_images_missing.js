// Baixa todas as imagens locais (/images/...) referenciadas nos JS do site
// que ainda nao existem localmente. O WebCopy nao executa JS, entao nao
// enxerga as imagens usadas pelos componentes React.
//
// Uso:  node download_images_missing.js
//
const fs = require('fs');
const path = require('path');
const https = require('https');

const ROOT = __dirname;
const BASE = 'https://stalkeia.website';
const UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1';

// 1. Varre todos os .js em assets/ procurando caminhos /images/....ext
const assetsDir = path.join(ROOT, 'assets');
const jsFiles = fs.readdirSync(assetsDir).filter(f => f.endsWith('.js'));
const re = /\/images\/[A-Za-z0-9._/-]+\.(?:png|jpe?g|webp|gif|svg)/g;
const found = new Set();
for (const f of jsFiles) {
  const src = fs.readFileSync(path.join(assetsDir, f), 'utf8');
  const m = src.match(re);
  if (m) m.forEach(x => found.add(x));
}
const imgPaths = Array.from(found);
console.log('Referenciadas no codigo:', imgPaths.length);

// 2. Filtra as que faltam localmente
const missing = imgPaths.filter(p => !fs.existsSync(path.join(ROOT, p.replace(/^\//, ''))));
if (missing.length === 0) {
  console.log('Nada a baixar — todas as imagens ja existem.');
  process.exit(0);
}
console.log('Faltando:', missing.length, '\n');

// 3. Baixa cada uma
function download(urlPath) {
  return new Promise((resolve) => {
    const url = BASE + encodeURI(urlPath);
    const dest = path.join(ROOT, urlPath.replace(/^\//, ''));
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    https.get(url, { headers: { 'User-Agent': UA, 'Accept': 'image/*,*/*', 'Referer': BASE + '/' } }, (res) => {
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
        console.log('  [OK] ' + urlPath);
        resolve({ ok: true, urlPath });
      });
    }).on('error', (e) => {
      console.log('  [ERRO] ' + urlPath + '  ' + e.message);
      resolve({ ok: false, urlPath, error: e.message });
    });
  });
}

(async () => {
  const results = [];
  for (const p of missing) results.push(await download(p));
  const failed = results.filter(r => !r.ok);
  console.log('\n──────────────────────────────');
  console.log('Baixadas:', results.length - failed.length, '/ Falharam:', failed.length);
  failed.forEach(f => console.log('   -', f.urlPath, f.status || f.error));
  console.log('──────────────────────────────');
})();
