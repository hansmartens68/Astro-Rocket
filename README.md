<p align="center">
  <img src="src/assets/branding/logo-full.svg" alt="Velocity" width="370" />
</p>

<p align="center">
  <strong>Astro 6 Boilerplate</strong> — A production-ready starter template built on Astro 6 and Tailwind CSS v4.
</p>

<p align="center">
  <a href="https://astro.build"><img src="https://img.shields.io/badge/Astro-6.0-bc52ee?logo=astro&logoColor=white" alt="Astro" /></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" /></a>
  <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-5.7-3178c6?logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-22c55e" alt="License" /></a>
</p>

---

## What's Included

- **57 components** across 7 categories — all accessible, typed, and dark-mode ready
- **Design token system** with OKLCH colors, fluid typography, and two built-in themes
- **SEO toolkit** — meta tags, JSON-LD, sitemap, robots.txt, and auto-generated OG images
- **Content collections** — type-safe blog, pages, authors, and FAQs with Zod validation
- **API routes** — contact form and newsletter endpoints with validation
- **React islands** — optional client-side interactivity where needed
- **i18n-ready** — locale-aware schemas; full i18n via the [CLI](https://github.com/southwellmedia/create-velocity-astro)

---

## Quick Start

```bash
# Clone
git clone https://github.com/southwellmedia/velocity.git my-project
cd my-project

# Install (requires Node 22.12+)
pnpm install

# Configure
cp .env.example .env

# Develop
pnpm dev
```

Or use the CLI for the full experience including i18n:

```bash
pnpm create velocity-astro my-project
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
    ui/           # 31 UI components (form, data-display, feedback, overlay, etc.)
    patterns/     # 7 composed patterns (ContactForm, SearchInput, StatCard, etc.)
    layout/       # Header, Footer, ThemeToggle, Analytics
    blog/         # ArticleHero, BlogCard, ShareButtons, RelatedPosts
    landing/      # Credibility, TechStack, FeatureTabs, and more
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

View all components at `/components` in development.

---

## Contributing

1. Fork the repo
2. Create a feature branch
3. Ensure `pnpm lint` and `pnpm check` pass
4. Open a PR

---

## License

MIT — see [LICENSE](LICENSE) for details.

---

**Links**: [Docs](https://github.com/southwellmedia/velocity-docs) | [CLI](https://github.com/southwellmedia/create-velocity-astro) | [Astro](https://docs.astro.build) | [Tailwind v4](https://tailwindcss.com/docs)

**Built by [Southwell Media](https://southwellmedia.com)**
