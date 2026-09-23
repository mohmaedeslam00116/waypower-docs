// Renders scripts/social-card.html → static/img/social-card.png (2400×1260, 2x retina)
// using the locally installed Edge (Chromium). Run: npm run social-card
import puppeteer from 'puppeteer-core';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const browser = await puppeteer.launch({
  executablePath: EDGE,
  headless: true,
  args: ['--force-color-profile=srgb', '--hide-scrollbars'],
});

const page = await browser.newPage();
await page.setViewport({width: 1200, height: 630, deviceScaleFactor: 2});
await page.goto(`file:///${path.join(root, 'scripts', 'social-card.html').replace(/\\/g, '/')}`, {
  waitUntil: 'networkidle0',
});
await page.evaluateHandle('document.fonts.ready');
await new Promise((r) => setTimeout(r, 400)); // let webfonts settle

const out = path.join(root, 'static', 'img', 'social-card.png');
await page.screenshot({path: out, type: 'png'});
await browser.close();
console.log(`wrote ${out}`);
