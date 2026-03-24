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
    <div style="height: 100%; width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #0d1117; font-family: 'Inter'; position: relative; overflow: hidden;">

      <!-- Top accent stripe -->
      <div style="display: flex; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: #10b981;"></div>

      <!-- Radial glow — centre -->
      <div style="display: flex; position: absolute; top: -200px; left: 300px; width: 600px; height: 600px; border-radius: 9999px; background: radial-gradient(circle, rgba(16,185,129,0.18) 0%, transparent 60%);"></div>

      <!-- Corner marks -->
      <div style="display: flex; position: absolute; top: 28px;    left: 28px;   width: 22px; height: 22px; border-top: 1.5px solid rgba(16,185,129,0.5); border-left:  1.5px solid rgba(16,185,129,0.5);"></div>
      <div style="display: flex; position: absolute; top: 28px;    right: 28px;  width: 22px; height: 22px; border-top: 1.5px solid rgba(16,185,129,0.5); border-right: 1.5px solid rgba(16,185,129,0.5);"></div>
      <div style="display: flex; position: absolute; bottom: 28px; left: 28px;   width: 22px; height: 22px; border-bottom: 1.5px solid rgba(16,185,129,0.5); border-left:  1.5px solid rgba(16,185,129,0.5);"></div>
      <div style="display: flex; position: absolute; bottom: 28px; right: 28px;  width: 22px; height: 22px; border-bottom: 1.5px solid rgba(16,185,129,0.5); border-right: 1.5px solid rgba(16,185,129,0.5);"></div>

      <!-- Centered content column -->
      <div style="display: flex; flex-direction: column; align-items: center; width: 100%; padding: 0 120px;">

        <!-- Rocket icon + brand -->
        <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 24px;">
          <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/>
            <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/>
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/>
          </svg>
          <div style="display: flex; font-size: 30px; font-weight: 800; color: white; letter-spacing: -0.5px;">Astro <span style="color: #10b981; margin-left: 8px;">Rocket</span></div>
        </div>

        <!-- Green divider -->
        <div style="display: flex; width: 440px; height: 1px; background: rgba(16,185,129,0.3); margin-bottom: 40px;"></div>

        <!-- Page title -->
        <div style="display: flex; font-size: ${title.length > 38 ? '56px' : '72px'}; font-weight: 800; color: white; line-height: 1.1; letter-spacing: -0.03em; text-align: center; margin-bottom: 20px;">${title}</div>

        <!-- Description -->
        <div style="display: ${truncatedDescription ? 'flex' : 'none'}; font-size: 22px; color: #71717a; line-height: 1.5; text-align: center; max-width: 820px; margin-bottom: 40px;">${truncatedDescription}</div>

        <!-- Domain -->
        <span style="display: flex; font-size: 16px; color: rgba(16,185,129,0.5); letter-spacing: 0.06em; margin-top: ${truncatedDescription ? '0' : '40px'};">hansmartens.dev</span>

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
