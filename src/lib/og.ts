import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import satori from 'satori';
import { html } from 'satori-html';
import sharp from 'sharp';
import siteConfig from '@/config/site.config';

export interface OGImageOptions {
  title: string;
  description?: string;
  type?: 'website' | 'article';
}

// Load Inter font for OG images (Satori requires TTF/OTF, not WOFF2)
// Bundled locally in public/fonts/ to avoid CDN dependency during builds
let fontCache: ArrayBuffer | null = null;

function loadFont(): ArrayBuffer {
  if (!fontCache) {
    const fontPath = resolve(process.cwd(), 'public/fonts/inter-latin-400-normal.ttf');
    fontCache = readFileSync(fontPath).buffer as ArrayBuffer;
  }
  return fontCache;
}

export async function generateOGImage(options: OGImageOptions): Promise<Buffer> {
  const { title, description, type = 'website' } = options;

  const fontData = loadFont();

  const truncatedDescription = description
    ? description.length > 120
      ? description.slice(0, 117) + '...'
      : description
    : '';

  const markup = html`
    <div style="height: 100%; width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #07070a; font-family: 'Inter'; position: relative;">

      <!-- Orange launch glow — top center -->
      <div style="display: flex; position: absolute; top: -220px; left: 250px; width: 700px; height: 700px; border-radius: 9999px; background: radial-gradient(circle, rgba(249,115,22,0.22) 0%, transparent 55%);"></div>

      <!-- Indigo glow — bottom right -->
      <div style="display: flex; position: absolute; bottom: -120px; right: -80px; width: 420px; height: 420px; border-radius: 9999px; background: radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 60%);"></div>

      <!-- Star field -->
      <div style="display: flex; position: absolute; top: 52px;  left: 88px;   width: 3px; height: 3px; border-radius: 9999px; background: rgba(255,255,255,0.55);"></div>
      <div style="display: flex; position: absolute; top: 160px; left: 174px;  width: 2px; height: 2px; border-radius: 9999px; background: rgba(255,255,255,0.35);"></div>
      <div style="display: flex; position: absolute; top: 78px;  left: 340px;  width: 2px; height: 2px; border-radius: 9999px; background: rgba(255,255,255,0.4);"></div>
      <div style="display: flex; position: absolute; top: 32px;  left: 560px;  width: 3px; height: 3px; border-radius: 9999px; background: rgba(255,255,255,0.5);"></div>
      <div style="display: flex; position: absolute; top: 110px; left: 720px;  width: 2px; height: 2px; border-radius: 9999px; background: rgba(255,255,255,0.3);"></div>
      <div style="display: flex; position: absolute; top: 44px;  left: 910px;  width: 3px; height: 3px; border-radius: 9999px; background: rgba(255,255,255,0.5);"></div>
      <div style="display: flex; position: absolute; top: 130px; left: 1060px; width: 2px; height: 2px; border-radius: 9999px; background: rgba(255,255,255,0.4);"></div>
      <div style="display: flex; position: absolute; top: 55px;  left: 1140px; width: 3px; height: 3px; border-radius: 9999px; background: rgba(255,255,255,0.45);"></div>
      <div style="display: flex; position: absolute; top: 480px; left: 60px;   width: 2px; height: 2px; border-radius: 9999px; background: rgba(255,255,255,0.35);"></div>
      <div style="display: flex; position: absolute; top: 390px; left: 210px;  width: 3px; height: 3px; border-radius: 9999px; background: rgba(255,255,255,0.5);"></div>
      <div style="display: flex; position: absolute; top: 560px; left: 420px;  width: 2px; height: 2px; border-radius: 9999px; background: rgba(255,255,255,0.3);"></div>
      <div style="display: flex; position: absolute; top: 510px; left: 980px;  width: 3px; height: 3px; border-radius: 9999px; background: rgba(255,255,255,0.45);"></div>
      <div style="display: flex; position: absolute; top: 430px; left: 1100px; width: 2px; height: 2px; border-radius: 9999px; background: rgba(255,255,255,0.35);"></div>
      <div style="display: flex; position: absolute; top: 575px; left: 1160px; width: 3px; height: 3px; border-radius: 9999px; background: rgba(255,255,255,0.5);"></div>

      <!-- Centered content column -->
      <div style="display: flex; flex-direction: column; align-items: center; width: 100%; padding: 0 100px;">

        <!-- Rocket + brand -->
        <div style="display: flex; align-items: center; gap: 18px; margin-bottom: 28px;">
          <span style="font-size: 52px; line-height: 1;">🚀</span>
          <span style="font-size: 30px; font-weight: 700; color: #fafafa; letter-spacing: 0.1em; text-transform: uppercase;">ASTRO ROCKET</span>
        </div>

        <!-- Orange gradient divider -->
        <div style="display: flex; width: 480px; height: 2px; background: linear-gradient(90deg, transparent 0%, #f97316 25%, #fb923c 50%, #f97316 75%, transparent 100%); margin-bottom: 44px;"></div>

        <!-- Page title -->
        <div style="display: flex; font-size: ${title.length > 38 ? '58px' : '76px'}; font-weight: 700; color: #fafafa; line-height: 1.1; letter-spacing: -0.03em; text-align: center; margin-bottom: 22px;">${title}</div>

        <!-- Description -->
        <div style="display: ${truncatedDescription ? 'flex' : 'none'}; font-size: 22px; color: #71717a; line-height: 1.5; text-align: center; max-width: 820px; margin-bottom: 44px;">${truncatedDescription}</div>

        <!-- Domain -->
        <span style="display: flex; font-size: 16px; color: #52525b; letter-spacing: 0.06em; margin-top: ${truncatedDescription ? '0' : '44px'};">hansmartens.dev</span>

      </div>
    </div>
  `;

  // Generate SVG with satori
  // @ts-expect-error satori-html VNode is compatible with satori
  const svg = await satori(markup, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: 'Inter',
        data: fontData,
        weight: 400,
        style: 'normal',
      },
      {
        name: 'Inter',
        data: fontData,
        weight: 500,
        style: 'normal',
      },
      {
        name: 'Inter',
        data: fontData,
        weight: 600,
        style: 'normal',
      },
      {
        name: 'Inter',
        data: fontData,
        weight: 700,
        style: 'normal',
      },
    ],
  });

  // Convert SVG to PNG
  return Buffer.from(
    await sharp(Buffer.from(svg)).resize(1200).png().toBuffer()
  );
}
