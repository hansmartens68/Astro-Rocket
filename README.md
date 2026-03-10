# Astro Rocket

**Astro 6 Theme** — A production-ready starter built on Astro 6 and Tailwind CSS v4.

[![Astro](https://img.shields.io/badge/Astro-6.0-bc52ee?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-MIT-22c55e)](LICENSE)

---

## What's Included

- **57 components** across 7 categories — all accessible, typed, and dark-mode ready
- **Design token system** with OKLCH colors, fluid typography, and two built-in themes
- **SEO toolkit** — meta tags, JSON-LD, sitemap, robots.txt, and auto-generated OG images
- **Content collections** — type-safe blog, pages, authors, and FAQs with Zod validation
- **API routes** — contact form and newsletter endpoints with validation
- **React islands** — optional client-side interactivity where needed
- **i18n-ready** — locale-aware schemas for multi-language sites

---

## Quick Start

```bash
# Clone
git clone https://github.com/hansmartens68/astro--rocket.git my-project
cd my-project

# Install (requires Node 22.12+)
pnpm install

# Configure
cp .env.example .env

# Develop
pnpm dev
```

---

## Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server |
| `pnpm build` | Production build |
| `pnpm preview` | Preview production build |
| `pnpm check` | Astro type checker |
| `pnpm lint` | ESLint |
| `pnpm format` | Prettier |
| `pnpm test` | Vitest |
| `pnpm test:e2e` | Playwright E2E |

---

## Project Structure

```
src/
  components/
    ui/           # UI components (form, data-display, feedback, overlay, etc.)
    patterns/     # Composed patterns (ContactForm, SearchInput, StatCard, etc.)
    layout/       # Header, Footer, ThemeToggle, Analytics
    blog/         # ArticleHero, BlogCard, ShareButtons, RelatedPosts
    landing/      # Landing page sections
    seo/          # SEO, JsonLd, Breadcrumbs
  content/        # Blog posts, authors, FAQs
  config/         # Site and navigation config
  styles/         # Global CSS and design tokens
  pages/          # Routes, API endpoints, OG image generation
```

---

## Configuration

**Site config**: `src/config/site.config.ts` — name, description, URL, social links

**Design tokens**: `src/styles/tokens/` — colors, typography, spacing

**Themes**: `src/styles/themes/` — switch between `default` and `midnight`, or create your own

**Environment**: `.env` — see `.env.example` for available variables

---

## License

MIT — see [LICENSE](LICENSE) for details.
