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

  const hostname = new URL(siteConfig.url).hostname;

  // Create the OG image markup using satori-html
  // Note: All divs must have explicit display property for Satori
  // HTML elements must be in the template literal, not interpolated as strings
  const markup = html`
    <div style="height: 100%; width: 100%; display: flex; background: #09090b; font-family: 'Inter'; position: relative;">

      <!-- Orange glow — top right -->
      <div style="display: flex; position: absolute; top: -100px; right: -100px; width: 500px; height: 500px; border-radius: 9999px; background: radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 65%);"></div>

      <!-- Orange glow — bottom left -->
      <div style="display: flex; position: absolute; bottom: -80px; left: -80px; width: 360px; height: 360px; border-radius: 9999px; background: radial-gradient(circle, rgba(249,115,22,0.09) 0%, transparent 65%);"></div>

      <!-- Left accent bar -->
      <div style="display: flex; position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: linear-gradient(180deg, transparent 0%, #f97316 25%, #fb923c 50%, #f97316 75%, transparent 100%);"></div>

      <!-- Main content -->
      <div style="display: flex; flex-direction: column; justify-content: space-between; height: 100%; width: 100%; padding: 56px 80px 56px 92px;">

        <!-- Top: logomark + brand name -->
        <div style="display: flex; align-items: center; gap: 14px;">
          <svg width="42" height="42" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="6" fill="#F94C10"/>
            <path d="M4 8V24M4 16H12M12 8V24" stroke="white" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 24V8L22.5 18L29 8V24" stroke="white" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          </svg>
          <span style="font-size: 17px; font-weight: 600; color: #a1a1aa; letter-spacing: 0.07em; text-transform: uppercase;">${siteConfig.name}</span>
          <div style="display: flex; width: 4px; height: 4px; border-radius: 9999px; background: #3f3f46;"></div>
          <div style="display: flex; padding: 5px 12px; background: rgba(249,115,22,0.1); border: 1px solid rgba(249,115,22,0.3); border-radius: 9999px; color: #fb923c; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em;">${type === 'article' ? 'Article' : 'Page'}</div>
        </div>

        <!-- Middle: title + description -->
        <div style="display: flex; flex-direction: column; gap: 20px;">
          <div style="display: flex; font-size: ${title.length > 45 ? '52px' : '64px'}; font-weight: 700; color: #fafafa; line-height: 1.1; letter-spacing: -0.03em;">${title}</div>
          <div style="display: ${truncatedDescription ? 'flex' : 'none'}; font-size: 22px; color: #71717a; line-height: 1.5; max-width: 780px;">${truncatedDescription}</div>
        </div>

        <!-- Bottom: feature chips + hostname -->
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <div style="display: flex; gap: 8px; align-items: center;">
            <div style="display: flex; padding: 6px 14px; background: rgba(249,115,22,0.1); border: 1px solid rgba(249,115,22,0.3); border-radius: 9999px; color: #fb923c; font-size: 13px; font-weight: 500;">57+ Components</div>
            <div style="display: flex; padding: 6px 14px; background: rgba(249,115,22,0.1); border: 1px solid rgba(249,115,22,0.3); border-radius: 9999px; color: #fb923c; font-size: 13px; font-weight: 500;">8 Color Themes</div>
            <div style="display: flex; padding: 6px 14px; background: rgba(249,115,22,0.1); border: 1px solid rgba(249,115,22,0.3); border-radius: 9999px; color: #fb923c; font-size: 13px; font-weight: 500;">Dark Mode</div>
            <div style="display: flex; padding: 6px 14px; background: rgba(249,115,22,0.1); border: 1px solid rgba(249,115,22,0.3); border-radius: 9999px; color: #fb923c; font-size: 13px; font-weight: 500;">i18n</div>
          </div>
          <span style="display: flex; font-size: 15px; color: #52525b;">${hostname}</span>
        </div>

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
