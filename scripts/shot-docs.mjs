// Visual verification for t08/t09: serves build/ and screenshots the pages
// that changed — homepage (shared Transcript) and skill pages (transcript
// blocks + copy-as-markdown affordance). Output: ../scratch-shots/*.png
// Run after `npm run build`: node scripts/shot-docs.mjs
import puppeteer from 'puppeteer-core';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import fs from 'node:fs';
import http from 'node:http';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
if (!fs.existsSync(EDGE)) {
  console.error(`Edge not found at ${EDGE} — set the EDGE path in this script for your machine.`);
  process.exit(1);
}
const outDir = 'D:\\ai\\scratch-shots';
fs.mkdirSync(outDir, {recursive: true});

const MIME = {'.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.svg': 'image/svg+xml', '.txt': 'text/plain', '.md': 'text/plain; charset=utf-8', '.json': 'application/json', '.xml': 'application/xml', '.woff2': 'font/woff2'};
const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  urlPath = urlPath.replace(/^\/waypower-docs/, ''); // baseUrl prefix — build/ is flat
  let file = path.join(root, 'build', urlPath === '/' ? 'index.html' : urlPath);
  if (!fs.existsSync(file) && fs.existsSync(file + '.html')) file += '.html';
  if (!fs.existsSync(file) && fs.existsSync(path.join(file, 'index.html'))) file = path.join(file, 'index.html');
  if (!fs.existsSync(file)) { res.writeHead(404); res.end('nf'); return; }
  res.writeHead(200, {'content-type': MIME[path.extname(file)] || 'application/octet-stream'});
  fs.createReadStream(file).pipe(res);
});
await new Promise((r) => server.listen(4199, r));

const browser = await puppeteer.launch({executablePath: EDGE, headless: true, args: ['--force-color-profile=srgb', '--hide-scrollbars']});
const page = await browser.newPage();
await page.setViewport({width: 1440, height: 960, deviceScaleFactor: 1});

const shots = [
  ['/', 'home', 1400],
  ['/docs/skills/design-interview', 'skill-design-interview', 2600],
  ['/docs/skills/hypothesis-debugging', 'skill-hypothesis-debugging', 2400],
  ['/docs/skills/dual-axis-review', 'skill-dual-axis-review', 2400],
];

for (const [route, name, height] of shots) {
  await page.setViewport({width: 1440, height: 960, deviceScaleFactor: 1});
  await page.emulateMediaFeatures([{name: 'prefers-color-scheme', value: 'light'}]);
  await page.goto(`http://localhost:4199/waypower-docs${route}`, {waitUntil: 'networkidle0'});
  await page.evaluateHandle('document.fonts.ready');
  await new Promise((r) => setTimeout(r, 700));
  await page.screenshot({path: path.join(outDir, `${name}-light.png`), clip: {x: 0, y: 0, width: 1440, height}});
  // dark theme
  await page.evaluate(() => {
    document.documentElement.dataset.theme = 'dark';
    localStorage.setItem('theme', 'dark');
  });
  await new Promise((r) => setTimeout(r, 300));
  await page.screenshot({path: path.join(outDir, `${name}-dark.png`), clip: {x: 0, y: 0, width: 1440, height}});
  await page.evaluate(() => localStorage.setItem('theme', 'light'));
  console.log(`shot ${name} (light+dark)`);
}

// raw markdown twin + llms.txt smoke check over HTTP
for (const p of ['/waypower-docs/llms.txt', '/waypower-docs/md/skills/hypothesis-debugging.md']) {
  const res = await fetch(`http://localhost:4199${p}`);
  console.log(`${p} -> ${res.status} ${res.headers.get('content-type')}`);
}

await browser.close();
server.close();
console.log(`done -> ${outDir}`);
