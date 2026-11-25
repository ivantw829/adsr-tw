#!/usr/bin/env node
/**
 * 產生 ADSR 官網專屬社群分享預覽圖（1200×630 PNG）與行動裝置圖示（180 / 192 / 512 PNG）
 * 執行方式：node scripts/generate-og.mjs
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const LOGO_PATH = path.join(ROOT, 'public/assets/logo.png');
const OG_DIR = path.join(ROOT, 'public/og');
const ASSETS_DIR = path.join(ROOT, 'public/assets');

const WIDTH = 1200;
const HEIGHT = 630;
const FONT_STACK = "'PingFang TC', 'Noto Sans TC', 'Heiti TC', 'STHeiti', 'Microsoft JhengHei', sans-serif";
const DISPLAY_FONT = "'Montserrat', 'Helvetica Neue', 'PingFang TC', sans-serif";

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const OG_CARDS = [
  {
    filename: 'home.png',
    badge: 'ACTION TO DEFEND THE STUDENT RIGHTS IN TAIWAN',
    titleLines: ['捍衛全台學權行動'],
    titleHighlight: 'ADSR',
    subtitleLines: ['全台學生，絕不容許自由倒退！', '團結反抗，寸步不讓，守護校園多元民主。'],
    urlLabel: 'adsr.asdtw.org',
    accentColor: '#dc2626',
  },
  {
    filename: 'events.png',
    badge: 'ACTION TIMELINE',
    titleLines: ['行動紀實'],
    subtitleLines: ['紀錄 ADSR 自創立以來每一場與學生站在一起的', '和平示威、記者會、靜坐抗議與跨校倡議行動。'],
    urlLabel: 'adsr.asdtw.org/events/',
    accentColor: '#dc2626',
  },
  {
    filename: 'papers.png',
    badge: 'ADVOCACY PAPERS',
    titleLines: ['倡議文章'],
    subtitleLines: ['深度剖析台灣教育政策、校園權益與學生自主議題，', '以理性論述與行動研究累積校園改革能量。'],
    urlLabel: 'adsr.asdtw.org/papers/',
    accentColor: '#ef4444',
  },
  {
    filename: 'bylaws.png',
    badge: 'CHARTER & REGULATIONS',
    titleLines: ['組織章程與紀律規章'],
    subtitleLines: ['明定組織架構、雙社長制、社員代表會、社員大會與紀律程序。', '2026 年 09 月 13 日會員大會訂定。'],
    urlLabel: 'adsr.asdtw.org/bylaws/',
    accentColor: '#dc2626',
  },
  {
    filename: 'links.png',
    badge: 'OFFICIAL CHANNELS',
    titleLines: ['相關連結'],
    subtitleLines: ['追蹤 ADSR 官方 Instagram、Threads 與 Facebook，', '即時掌握最新學權倡議、行動快訊與組織文件。'],
    urlLabel: 'adsr.asdtw.org/links/',
    accentColor: '#dc2626',
  },
];

function buildOgSvg(card) {
  const badgeText = escapeXml(card.badge);
  const badgeWidth = Math.min(720, Math.max(220, Math.round(card.badge.length * 10.6 + 68)));
  const titleFontSize = card.titleLines[0].length >= 9 ? 54 : 64;
  const titleY = 232;

  const titleMarkup = card.titleHighlight
    ? `<text x="76" y="${titleY}" font-family="${FONT_STACK}" font-size="${titleFontSize}" font-weight="800" fill="#ffffff" letter-spacing="1">${escapeXml(
        card.titleLines[0]
      )}</text>
       <text x="76" y="${titleY + 72}" font-family="${DISPLAY_FONT}" font-size="56" font-weight="800" fill="#ef4444" letter-spacing="6">${escapeXml(
         card.titleHighlight
       )}</text>`
    : `<text x="76" y="${titleY + 18}" font-family="${FONT_STACK}" font-size="${titleFontSize}" font-weight="800" fill="#ffffff" letter-spacing="1">${escapeXml(
        card.titleLines[0]
      )}</text>`;

  const subtitleStartY = card.titleHighlight ? 366 : 332;
  const subtitleMarkup = card.subtitleLines
    .map(
      (line, idx) =>
        `<text x="76" y="${subtitleStartY + idx * 42}" font-family="${FONT_STACK}" font-size="25" font-weight="400" fill="#d1d5db" letter-spacing="0.5">${escapeXml(
          line
        )}</text>`
    )
    .join('\n');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#090b10" />
      <stop offset="55%" stop-color="#0d111a" />
      <stop offset="100%" stop-color="#140d12" />
    </linearGradient>
    <linearGradient id="topBar" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#dc2626" />
      <stop offset="60%" stop-color="#ef4444" />
      <stop offset="100%" stop-color="#7f1d1d" />
    </linearGradient>
    <radialGradient id="redGlowRight" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${card.accentColor}" stop-opacity="0.32" />
      <stop offset="55%" stop-color="${card.accentColor}" stop-opacity="0.10" />
      <stop offset="100%" stop-color="${card.accentColor}" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="redGlowLeft" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#dc2626" stop-opacity="0.16" />
      <stop offset="100%" stop-color="#dc2626" stop-opacity="0" />
    </radialGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255,255,255,0.045)" stroke-width="1" />
    </pattern>
  </defs>

  <!-- Base Dark Canvas -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bgGrad)" />
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#grid)" />

  <!-- Ambient Crimson Glows -->
  <circle cx="965" cy="295" r="290" fill="url(#redGlowRight)" />
  <circle cx="180" cy="520" r="240" fill="url(#redGlowLeft)" />

  <!-- Top Crimson Accent Bar -->
  <rect x="0" y="0" width="${WIDTH}" height="7" fill="url(#topBar)" />

  <!-- Subtle Outer Inner Frame -->
  <rect x="28" y="30" width="${WIDTH - 56}" height="${HEIGHT - 58}" rx="24" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1.5" />

  <!-- Right Logo Glass Medallion -->
  <rect x="812" y="128" width="312" height="312" rx="36" fill="rgba(17,22,33,0.78)" stroke="rgba(239,68,68,0.32)" stroke-width="2" />

  <!-- Category / Brand Pill Badge -->
  <rect x="76" y="102" width="${badgeWidth}" height="38" rx="19" fill="rgba(127,29,29,0.45)" stroke="rgba(239,68,68,0.45)" stroke-width="1.2" />
  <circle cx="100" cy="121" r="5" fill="#ef4444" />
  <text x="116" y="127" font-family="${DISPLAY_FONT}" font-size="14" font-weight="700" fill="#fca5a5" letter-spacing="1.8">${badgeText}</text>

  <!-- Main Heading -->
  ${titleMarkup}

  <!-- Subtitle -->
  ${subtitleMarkup}

  <!-- Footer Divider & Domain Bar -->
  <line x1="76" y1="504" x2="1124" y2="504" stroke="rgba(255,255,255,0.12)" stroke-width="1" />

  <text x="76" y="550" font-family="${DISPLAY_FONT}" font-size="22" font-weight="700" fill="#f87171" letter-spacing="1">${escapeXml(
    card.urlLabel
  )}</text>

  <text x="1124" y="550" text-anchor="end" font-family="${FONT_STACK}" font-size="20" font-weight="600" fill="#9ca3af" letter-spacing="1">捍衛全台學權行動 ADSR</text>
</svg>`;
}

async function generateOgCards() {
  await fs.mkdir(OG_DIR, { recursive: true });

  const logoResized = await sharp(LOGO_PATH)
    .resize(248, 248, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  for (const card of OG_CARDS) {
    const svgBuffer = Buffer.from(buildOgSvg(card));
    const outPath = path.join(OG_DIR, card.filename);

    await sharp(svgBuffer)
      .composite([
        {
          input: logoResized,
          left: 812 + Math.round((312 - 248) / 2),
          top: 128 + Math.round((312 - 248) / 2),
        },
      ])
      .png({ compressionLevel: 9, palette: false })
      .toFile(outPath);

    console.log(`Generated ${path.relative(ROOT, outPath)}`);
  }
}

async function generateAppIcons() {
  const sizes = [
    { filename: 'apple-touch-icon.png', size: 180, logoSize: 136 },
    { filename: 'icon-192.png', size: 192, logoSize: 146 },
    { filename: 'icon-512.png', size: 512, logoSize: 388 },
  ];

  for (const { filename, size, logoSize } of sizes) {
    const bgSvg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <defs>
        <radialGradient id="g" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stop-color="#2a1115" />
          <stop offset="100%" stop-color="#090b10" />
        </radialGradient>
      </defs>
      <rect width="${size}" height="${size}" fill="url(#g)" />
    </svg>`);

    const logoBuf = await sharp(LOGO_PATH)
      .resize(logoSize, logoSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();

    const offset = Math.round((size - logoSize) / 2);
    const outPath = path.join(ASSETS_DIR, filename);

    await sharp(bgSvg)
      .composite([{ input: logoBuf, left: offset, top: offset }])
      .png({ compressionLevel: 9 })
      .toFile(outPath);

    console.log(`Generated ${path.relative(ROOT, outPath)}`);
  }
}

async function main() {
  await generateOgCards();
  await generateAppIcons();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
