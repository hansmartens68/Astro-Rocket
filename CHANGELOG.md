# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [1.0.0] — 2026-04-04

Initial public release of Astro Rocket.

### Added

- Production-ready Astro 6 starter theme built on Tailwind CSS v4 and TypeScript
- 57 UI and pattern components (buttons, forms, cards, badges, inputs, selects, etc.)
- 12 live colour themes (Orange, Amber, Lime, Emerald, Teal, Cyan, Sky, Blue, Indigo, Violet, Purple, Magenta) switchable at runtime without a rebuild
- Full blog with MDX support, syntax highlighting (Shiki), and RSS feed
- Auto-generated SVG favicon and monogram logo badge from `site.config.ts`
- Unified `Icon` component via Iconify (350+ Lucide icons + 3000+ Simple Icons)
- Animated typing effect in hero section
- Contact form with Zod validation, honeypot bot detection, and Resend integration
- Newsletter signup form with Resend Audiences integration
- Cookie consent banner with Google Consent Mode v2 support
- Google Analytics 4 and Google Tag Manager integration (consent-aware)
- Built-in SEO layer: JSON-LD structured data, Open Graph, sitemap, robots.txt
- Dark mode via `sessionStorage` (resets to dark on each new session)
- Search powered by Pagefind
- Multiple deployment targets: Vercel, Netlify, Cloudflare Pages
- Security headers configured for all deployment targets
- GitHub Actions CI/CD workflow (lint, type-check, build)
- Vitest unit tests for API endpoint validation schemas

### Changed (from Velocity)

- Forked and extended [Velocity](https://github.com/southwellmedia/velocity) by Southwell Media
- Added theme switching, 12 colour themes, typed logo badge, auto favicon
- Replaced localStorage with sessionStorage for dark mode preference
- Added blog image gradients that update with the active theme
- Upgraded icon system to Iconify
- Targeted at complete, ready-to-launch sites rather than a bare boilerplate
