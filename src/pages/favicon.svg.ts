import type { APIRoute } from 'astro';
import siteConfig from '@/config/site.config';

// Pre-render at build time so the favicon is a plain static file in the
// output — no serverless function needed, no runtime overhead.
export const prerender = true;

export const GET: APIRoute = () => {
  const letter = siteConfig.name.charAt(0).toUpperCase();
  const color  = siteConfig.branding.colors.themeColor;

  const svg = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" rx="8" fill="${color}"/>
  <text x="24" y="24" text-anchor="middle" dominant-baseline="central" fill="white" font-family="Outfit, system-ui, sans-serif" font-weight="700" font-size="34">${letter}</text>
</svg>`;

  return new Response(svg, {
    headers: { 'Content-Type': 'image/svg+xml' },
  });
};
