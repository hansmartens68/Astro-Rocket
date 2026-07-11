<p align="center">
  <img src="public/readme-hero.svg" alt="Astro Rocket" width="880" />
</p>

<p align="center">
  <strong>Astro Rocket</strong> — A free, open-source Astro 7 theme: a complete component library for building beautiful websites.
</p>

<p align="center">
  <a href="https://astro.build"><img src="https://img.shields.io/badge/Astro-7.0-bc52ee?logo=astro&logoColor=white" alt="Astro" /></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" /></a>
  <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-5.7-3178c6?logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-22c55e" alt="License" /></a>
  <a href="https://github.com/hansmartensdev/astro-rocket"><img src="https://img.shields.io/github/stars/hansmartensdev/astro-rocket?style=flat&label=%E2%AD%90%20Star%20on%20GitHub&color=f59e0b" alt="Star on GitHub" /></a>
  <a href="https://github.com/hansmartensdev/astro-rocket"><img src="https://visitor-badge.laobi.icu/badge?page_id=hansmartensdev.astro-rocket" alt="Visitors" /></a>
</p>

<p align="center">
  <img src="public/readme-lighthouse.svg" alt="Lighthouse 100/100/100/100 — Performance, Accessibility, Best Practices, SEO" width="880" />
</p>

<p align="center">
  <em>Perfect Lighthouse scores.</em>
</p>


---

## Overview

Astro Rocket is a **free, open-source Astro theme** built around a complete component library: 57 designed, accessible, TypeScript components that all speak one design language — so whatever you build with them looks right. Around that library it brings everything a real website needs: pages to start from, a full blog, search, SEO, i18n, dark mode, and 12 colour themes. It's made for web designers, developers, bloggers, and anyone who wants to build a beautiful website without starting from zero. Use all of it or only the parts you need — the website you build on it is yours.

It ships with a full blog, a complete component library, a built-in SEO layer, dark mode, a contact form, and 12 colour themes you can switch with one click. It's built on Astro 7 and Tailwind CSS v4.

**[Live demo → astrorocket.dev](https://astrorocket.dev)** · **[Built by Hans Martens → hansmartens.dev](https://hansmartens.dev)**

> **Origins & credits.** Astro Rocket was originally forked from [Velocity](https://github.com/southwellmedia/velocity) by [Southwell Media](https://southwellmedia.com). Velocity provided the solid base — a well-engineered Astro boilerplate with a thoughtful design system and component library — and full credit for that foundation goes to the Southwell Media team. Since then, Astro Rocket has evolved into a theme in its own right, with far more to offer than the original: live colour-theme switching, built-in i18n, static search, project galleries with video, blog comments, durable internal links, and much more — see [What Astro Rocket has to offer](#what-astro-rocket-has-to-offer) below.

---

## What Astro Rocket has to offer

| Feature | Description |
|---------|-------------|
| **Astro 7** | Latest version with the Rust compiler, Vite 8, Content Layer API, and performance optimizations |
| **Tailwind CSS v4** | CSS-first configuration with OKLCH color system and fluid typography |
| **12 Colour Themes** | All 12 colour swatches are shown in the header dropdown — click one and the logo badge, blog image gradients, and every brand color update live instantly. No file edits, no rebuilds. The selector can be removed from the header once you've settled on a color. |
| **Scroll Progress Bar** | A thin 2px brand-coloured bar on the header edge that fills as you scroll. Enabled on the homepage (above the floating header), blog index, and post pages (below the solid header). Controlled via `showScrollProgress` and `scrollProgressPosition` props on the Header component. |
| **Design Tokens** | Three-tier token architecture (reference → semantic → component) |
| **57 Components** | 33 UI, 7 patterns, 1 hero, 4 layout, 4 blog, 7 landing, 3 SEO — all accessible with TypeScript |
| **Auto Logo & Favicon** | First letter of your site name on brand color — generated automatically from `site.config.ts`, no design tools needed. Prefer your own logo? Set `branding.logo.image` to a file in `public/`. |
| **Icon System** | Unified `Icon` component (Astro + React) — 350+ [Lucide](https://lucide.dev) UI icons and 3000+ [Simple Icons](https://simpleicons.org) brand icons via Iconify |
| **Typing Effect** | Animated typing effect in the hero section |
| **Page Animations** | Smooth page transitions via Astro View Transitions, scroll-triggered counter and score animations, scroll-reactive header, card hover effects, and a full suite of UI micro-animations — all with reduced-motion support |
| **SEO Toolkit** | Meta tags, JSON-LD structured data, sitemap, and robots.txt |
| **Static OG Image** | A polished default Open Graph image serves as social preview for all pages — no build-time generation required |
| **Colour Mode** | 3-state picker — **System / Light / Dark** with `localStorage` persistence and live OS-preference tracking under 'System'; surfaced as a pill dropdown in the header (and inside the mobile menu) |
| **Content Collections** | Type-safe blog, pages, authors, and FAQs with Zod validation |
| **API Routes** | Contact form and newsletter endpoints with validation |
| **Table of Contents** | Optional table of contents on blog posts, auto-generated from MDX headings, with three layouts: inline card, sticky desktop sidebar, or `auto` (sidebar on `xl+`, inline card below). Includes `IntersectionObserver` scroll-spy. Off by default; per-post `toc: false` in frontmatter hides on a single post |
| **Blog Comments (Giscus / Cusdis / Artalk)** | Optional comments at the bottom of blog posts via a pluggable provider — [Giscus](https://giscus.app) (GitHub Discussions), the privacy-friendly [Cusdis](https://cusdis.com) (hosted or self-hosted), or self-hosted [Artalk](https://artalk.js.org) (point `comments.artalk.server` at your own instance — use an `https://` URL in production). Choose with `comments.provider`. **Lazy-loaded** so readers who don't scroll to comments pay zero network cost; reserved `min-height` prevents CLS. Theme and language follow the site. Off by default; per-post `comments: false` in frontmatter hides on a single post |
| **Durable Internal Links** | Link between posts by a stable canonical id with `<PostLink uid="…">` instead of a slug, so renaming a post never breaks inbound links. Ids resolve to the correct locale-aware URL at build time, and a broken reference **fails the build** rather than shipping a 404. Add an optional `uid` to a post's frontmatter to make it linkable |
| **Build-Time Content Validation** | The build fails with a clear error if two pieces of content resolve to the same URL within a locale (duplicate slugs across posts, projects, and pages), or if two posts claim the same canonical id — catching silent content mistakes before they ship |
| **Independent Footer Menu** | Header and footer navigation configured separately in `nav.config.ts` (`navItems`, `footerNavItems`, `legalLinks`) — add a Privacy or Imprint link to the footer without cluttering the main nav |
| **Static Search (Pagefind)** | Site-wide search in the header — a ⌘K / Ctrl+K modal powered by a [Pagefind](https://pagefind.app) index generated at build time. Zero JS until the modal opens; works on every deploy target. Hide it with `showSearch={false}` on the Header |
| **Project Galleries** | Multiple images per project: a `gallery` array in frontmatter swaps the hero image for a swipeable carousel, and the `<ProjectGallery>` MDX component renders an in-body carousel with a click-to-zoom lightbox. See [Project Galleries](#project-galleries) |
| **YouTube Embeds (Click-to-Play)** | `<YouTube id="…" title="…" />` in any MDX post or page renders a lightweight thumbnail facade — **zero YouTube JavaScript and no third-party cookies until the reader presses play**, then the player loads from privacy-friendly `youtube-nocookie.com`. Keeps article pages at Lighthouse 100; self-hosted files just use a native `<video>` tag |
| **React Islands** | Optional client-side interactivity where needed |

### Internationalization (i18n)

Astro Rocket ships with **native, opt-in i18n** since 1.3.0. When the flag is off (the default) the build is byte-for-byte identical to a single-locale Astro Rocket site — no `/en/` prefix, no `LanguageSwitcher`, no `hreflang`, no JS for locale routing. Turn it on and you get locale-prefixed routes, an accessible `LanguageSwitcher` dropdown in the header (and mobile menu), `hreflang` SEO tags, and a `t()` translation helper backed by JSON dictionaries.

#### Enabling i18n

Open `src/config/i18n.config.ts` and flip the flag:

```ts
const i18nConfig: I18nConfig = {
  enabled: true,                     // master switch
  defaultLocale: 'en',               // stays at the site root (/about)
  locales: ['en', 'nl'],             // additional locales live at /nl/about
  localeNames: {
    en: 'English',
    nl: 'Nederlands',
    // …add more as needed; any BCP 47 code works
  },
  detectBrowserLocale: false,
};
```

Astro's native i18n is wired up automatically when `enabled: true` AND `locales.length > 1`. With `prefixDefaultLocale: false`, the default locale stays at the site root and additional locales live under `/<locale>/`.

#### Pages in another language

The bundled pages — the **home page, About, Services and Contact** — are already locale-aware, exactly like the blog and projects. Enable a second locale and `/<locale>`, `/<locale>/about`, `/<locale>/services` and `/<locale>/contact` are generated automatically, so the `LanguageSwitcher` never lands on a 404. You do **not** create `src/pages/<locale>/about.astro` files for these — remove any you added previously, as they would collide with the generated routes.

Their text lives in the locale dictionaries under the `pages.*` keys (`pages.home`, `pages.about`, `pages.services`, `pages.contact`). **To translate a page, copy those keys from `src/i18n/en.json` into your locale file (e.g. `src/i18n/nl.json`) and translate the values — there is no markup to touch.** Anything you haven't translated yet falls back to the default locale, so a localized page is never blank. The design lives in one shared view per page under `src/components/pages/views/`, rendered by both the default route and the `/<locale>/…` route.

Adding your **own** new page follows the same three-file pattern — a view holding the design, a default-locale route, and a locale-prefixed route:

```astro
---
// src/components/pages/views/PricingView.astro — the design; copy comes from the dictionary
import { t, defaultLocale } from '@/i18n';
interface Props { locale?: string }
const { locale = defaultLocale } = Astro.props;
---
<h1>{t('pages.pricing.heading', locale)}</h1>
```

```astro
---
// src/pages/pricing.astro          →  /pricing            (default locale)
import PricingView from '@/components/pages/views/PricingView.astro';
import { defaultLocale } from '@/i18n';
---
<PricingView locale={defaultLocale} />
```

```astro
---
// src/pages/[locale]/pricing.astro →  /<locale>/pricing   (every other locale)
import PricingView from '@/components/pages/views/PricingView.astro';
import { getSecondaryLocales } from '@/i18n';
export function getStaticPaths() {
  return getSecondaryLocales().map((locale) => ({ params: { locale } }));
}
const { locale } = Astro.params;
---
<PricingView locale={locale} />
```

For lists and structured sections (an array of FAQ items, feature cards, …) use `tData('pages.pricing.faqs', locale)`, which returns arrays/objects from the dictionary with the same default-locale fallback as `t()`. Or, for a quick one-off, just write a standalone `src/pages/nl/pricing.astro` directly. Either way, the `LanguageSwitcher` automatically builds links to `/<locale>/<current-path>` for every configured locale.

#### Translating UI strings

UI strings (button labels, "Read more", "Published on", etc.) live in `src/i18n/<locale>.json`. Astro Rocket ships English (`en.json`) and Dutch (`nl.json`) out of the box. Use the `t()` helper in any `.astro` file:

```astro
---
import { t, getLocaleFromPath } from '@/i18n';
const locale = getLocaleFromPath(Astro.url.pathname);
---

<a href="/blog">{t('common.readMore', locale)}</a>
```

To add another language, drop a new `src/i18n/<code>.json` mirroring the structure of `en.json` — it's loaded automatically, with no edits to `src/i18n/index.ts`. Just add the locale code to `locales` in `src/config/i18n.config.ts` so it gets served. Missing keys fall back to the default locale's value, then to the key itself — so partial translations are safe.

#### Navigation, legal links & the logo

You write each navigation entry once in `nav.config.ts` (`navItems`, `footerNavItems`, `legalLinks`); the Header and Footer localize it for the active locale automatically, so the nav and logo keep visitors inside their locale:

- **Paths** are locale-prefixed via `localizedPath` — `/blog` stays `/blog` on the default locale and becomes `/<locale>/blog` elsewhere. External, `mailto:`/`tel:`, and `#anchor` hrefs are left untouched, and the logo points at the locale's home (`/` or `/<locale>`).
- **Labels** are translated when an item carries a `labelKey` pointing at a string in `src/i18n/<locale>.json` (the bundled items use `nav.items.*`). Without a `labelKey`, the literal `label` is used as-is.

For the rare case where a locale needs a structurally different label or path (e.g. a localized slug like `/over-ons`), add a per-locale `locales` override to the item:

```ts
{ label: 'About', href: '/about', order: 4, labelKey: 'nav.items.about',
  locales: { nl: { href: '/over-ons' } } },
```

With i18n off, none of this runs and the nav renders exactly as written.

#### Content collections

Blog posts, projects, and pages already carry a `locale` field on their schema (`src/content.config.ts`), validated against the `locales` you list in `src/config/i18n.config.ts` — register a locale there and the content schema accepts it automatically, with no enum to edit. Organize translated content by locale folder:

```
src/content/blog/en/hello-world.mdx
src/content/blog/nl/hallo-wereld.mdx
src/content/projects/en/studio-portfolio.mdx
src/content/projects/nl/studio-portfolio.mdx
```

> **Switching the default locale.** Changing `defaultLocale` in `i18n.config.ts` is a routing label — it controls which locale serves at the site root, not which content folder gets read. To make a different language the default, also rename the matching content folder (e.g. `src/content/blog/en/` → `src/content/blog/zh-CN/`) so the root URL resolves to the right posts. The locale code in `i18n.config.ts` and the folder name under `src/content/blog/` must match.

> **Localized blog routing is automatic.** Enable a locale in `i18n.config.ts`, drop posts under its folder (e.g. `src/content/blog/nl/`), and the whole blog is served at that locale's prefix with no extra wiring: the index (`/nl/blog`), individual posts (`/nl/blog/<slug>`), pagination (`/nl/blog/page/N`) and tag archives (`/nl/blog/tag/<tag>`) are all generated, and every in-locale link — cards, tag chips, pagination, breadcrumbs, related posts — stays inside that locale. The `defaultLocale` keeps its prefix-free URLs (`/blog`). A locale with no posts yet still gets a `/<locale>/blog` index that shows the empty state, so the `LanguageSwitcher` never lands on a 404. You do **not** create `src/pages/<locale>/blog*` files yourself — remove any you added previously, as they would collide with the generated routes. (The bundled static pages — home, About, Services and Contact — are generated for every locale the same way; you translate their text in `src/i18n/<locale>.json`, as shown in *Pages in another language* above.)
>
> On blog posts, the `LanguageSwitcher` and the `hreflang` tags link to each translation's **real** URL — paired by canonical `uid` when the posts declare one (so a translation can live at a different slug, `/blog/hello` ↔ `/nl/blog/hallo`), otherwise by an identical slug. A locale with no translation of the current post is dropped from `hreflang`, and the switcher falls back to that locale's blog index instead of a dead URL. (Other page types resolve alternates by swapping the locale segment, which is correct when slugs match across locales.)
>
> **Projects are localized the same way.** Drop translations under `src/content/projects/<locale>/` and the whole projects section is served at that locale's prefix — index (`/nl/projects`), each project (`/nl/projects/<slug>`), pagination (`/nl/projects/page/N`), and tag archives (`/nl/projects/tag/<tag>`), with every in-locale link, `hreflang`, and the `LanguageSwitcher` resolving inside that locale. Projects share one slug across locales: keep the same filename in each locale folder (e.g. `en/studio-portfolio.mdx` ↔ `nl/studio-portfolio.mdx`) and the theme pairs them automatically. As with the blog, you do **not** create `src/pages/<locale>/projects*` files yourself.

#### Performance

The whole system is build-time. No client-side routing, no framework hydration for the `LanguageSwitcher` — just static HTML and a tiny vanilla-JS open/close handler for the dropdown panel. Verified zero output-size delta on the disabled path between 1.2.1 and 1.3.0.

---

## Quick Start

### Prerequisites

- **Node.js 22.12.0+** (required for Astro 7)
- **pnpm 9.x** (recommended) or npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/hansmartensdev/astro-rocket.git my-project
cd my-project

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env

# Start development server
pnpm dev
```

Visit `http://localhost:4321` to see your site.

---

## Project Structure

```
astro-rocket/
├── public/                  # Static assets (fonts, favicon)
├── src/
│   ├── assets/              # Images and icons (processed by Astro)
│   ├── components/
│   │   ├── ui/              # UI component library (31 components)
│   │   │   ├── form/        # Button, Input, Textarea, Select, Checkbox, Radio, Switch
│   │   │   ├── data-display/ # Card, Badge, Avatar, Table, Pagination, Progress, Skeleton
│   │   │   ├── feedback/    # Alert, Toast, Tooltip
│   │   │   ├── overlay/     # Dialog, Dropdown, Tabs, VerticalTabs, Accordion
│   │   │   ├── layout/      # Separator
│   │   │   ├── primitives/  # Icon
│   │   │   ├── content/     # CodeBlock
│   │   │   └── marketing/   # Logo, CTA, NpmCopyButton, SocialProof, TerminalDemo
│   │   ├── patterns/        # Composed patterns (ContactForm, SearchInput, StatCard, etc.)
│   │   ├── layout/          # Header, Footer, Navigation, ThemeModeDropdown, ThemeSelector(Dropdown)
│   │   ├── seo/             # SEO, JsonLd, Breadcrumbs
│   │   ├── blog/            # Blog-specific components
│   │   └── landing/         # Landing page components
│   ├── content/             # Content collections
│   │   ├── blog/            # Blog posts (en/, es/, fr/)
│   │   ├── projects/        # Portfolio project pages
│   │   ├── authors/         # Author profiles
│   │   └── faqs/            # FAQ entries
│   ├── layouts/             # Page layouts
│   ├── lib/                 # Utilities (schema, cn)
│   ├── pages/               # Routes and API endpoints
│   │   ├── api/             # Contact, newsletter endpoints
│   │   └── blog/            # Blog routes
│   ├── styles/              # Global CSS and design tokens
│   │   ├── tokens/          # colors.css, typography.css, spacing.css
│   │   └── themes/          # 12 colour theme files
│   └── config/              # Site and navigation configuration
├── astro.config.mjs         # Astro configuration
├── package.json
└── tsconfig.json
```

---

## Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with hot reload |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build locally |
| `pnpm check` | Run Astro type checker |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Fix ESLint issues |
| `pnpm format` | Format code with Prettier |
| `pnpm format:check` | Check code formatting |
| `pnpm test` | Run Vitest tests |
| `pnpm test:e2e` | Run Playwright E2E tests |

---

## Configuration

### Site Configuration

Edit `src/config/site.config.ts`:

```typescript
const siteConfig = {
  name: 'Your Site Name',
  description: 'Your site description for SEO',
  url: 'https://yoursite.com',
  ogImage: '/og-default.svg',
  author: 'Your Name',
  email: 'hello@yoursite.com',
  twitter: {
    site: '@yourhandle',
    creator: '@yourhandle',
  },
};
```

### Custom Logo

By default the logo is an auto-generated monogram — the first letter of `name` on the active brand color, no logo file required. To use your own logo image instead, drop a file in `public/` and set `branding.logo.image`:

```typescript
branding: {
  logo: {
    alt: 'Your Brand',
    image: '/logo.svg', // any file in public/ — replaces the monogram everywhere
  },
},
```

That single field swaps the monogram for your image in the header, footer, and anywhere `<Logo>` is rendered — **no layout edits needed**. Leave `image` unset to keep the monogram. Square marks and wide wordmarks both render correctly, and blog author avatars keep their initials.

### Environment Variables

Create a `.env` file from `.env.example`:

```bash
# Required
SITE_URL=https://yoursite.com

# Optional - Analytics
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
PUBLIC_GTM_ID=GTM-XXXXXXX

# Optional - Verification
GOOGLE_SITE_VERIFICATION=your-code
BING_SITE_VERIFICATION=your-code
```

---

## Design System

Astro Rocket uses a three-tier design token system with OKLCH colors for perceptual uniformity:

1. **Primitives** (`src/styles/tokens/primitives.css`) — raw color scales (gray, brand, status)
2. **Semantic tokens** (`src/styles/themes/*.css`) — purpose-based mappings (background, foreground, border, etc.)
3. **Tailwind** (`src/styles/global.css`) — `@theme` directives that expose tokens as utility classes

### Switching Themes

Astro Rocket ships with 12 colour themes, all based on Tailwind's color palette. All 12 are shown as colour swatches in the header dropdown (`ThemeSelectorDropdown`) on desktop and in the mobile menu (`ThemeSelector`). Clicking a swatch applies the theme instantly — the logo badge, blog image gradients, and every brand color on the page update live. No file edits, no rebuilds. This is a key difference from the original Velocity theme, where switching theme requires editing a CSS import file and rebuilding.

The 12 themes in order: Orange, Amber, Lime, Emerald, Teal, Cyan, Sky, Blue, Indigo, Violet (default), Purple, and Magenta. The `themes` array in `src/components/layout/ThemeSelector.astro` controls which swatches are shown and in what order. You can also **remove the selector from the header entirely** once you've settled on a color — just remove `showThemeSelector` from the layout file.

The theme files live in `src/styles/themes/`:

```
amber.css   blue.css    cyan.css    emerald.css
green.css   indigo.css  lime.css    magenta.css
orange.css  purple.css  sky.css     teal.css
violet.css
```

### Customizing Brand Colors

Edit `src/styles/tokens/primitives.css` and update the `--brand-*` OKLCH values:

```css
:root {
  --brand-50:  oklch(97.5% 0.02 45);  /* lightest tint */
  --brand-100: oklch(94.8% 0.04 45);
  --brand-200: oklch(87.5% 0.08 45);
  --brand-300: oklch(77.8% 0.14 45);
  --brand-400: oklch(68.5% 0.19 40);
  --brand-500: oklch(62.5% 0.22 38);  /* primary brand color */
  --brand-600: oklch(53.2% 0.19 38);
  --brand-700: oklch(45.5% 0.16 38);
  --brand-800: oklch(37.2% 0.13 38);
  --brand-900: oklch(26.5% 0.09 38);
}
```

OKLCH values are `oklch(lightness chroma hue)`. To shift your brand to blue, change the hue from `38-45` to `~260`. Use [oklch.com](https://oklch.com) to pick colors visually.

### Creating a New Theme

1. Duplicate `src/styles/themes/default.css` as your starting point
2. Implement all ~35 semantic tokens for both `:root` (light) and `.dark` (dark):

   **Backgrounds**: `--background`, `--background-secondary`, `--background-tertiary`, `--background-elevated`

   **Foregrounds**: `--foreground`, `--foreground-secondary`, `--foreground-muted`, `--foreground-subtle`

   **Borders**: `--border`, `--border-strong`, `--border-subtle`

   **Interactive**: `--primary`, `--primary-hover`, `--primary-foreground`, `--secondary`, `--secondary-hover`, `--secondary-foreground`, `--accent`, `--accent-hover`, `--accent-light`

   **Surfaces**: `--muted`, `--muted-foreground`, `--card`, `--card-border`, `--input-bg`, `--input-border`, `--input-focus`, `--ring`

   **Destructive**: `--destructive`, `--destructive-foreground`

   **Gradients**: `--gradient-start`, `--gradient-end`

   **Invert sections**: `--surface-invert`, `--surface-invert-secondary`, `--surface-invert-tertiary`, `--on-invert`, `--on-invert-secondary`, `--on-invert-muted`, `--border-invert`, `--border-invert-strong`

3. Update the import in `src/styles/tokens/colors.css` to point to your new theme file

### Colour Mode

Astro Rocket ships a 3-state colour-mode system — **System / Light / Dark** — instead of a binary toggle. The user's choice is persisted in `localStorage` under the key `theme`, and the resolved appearance is applied via the `.dark` class on `<html>`. Under `'system'`, the page tracks `window.matchMedia('(prefers-color-scheme: dark)')` live, so flipping the OS theme updates the page in real time without a reload.

State contract:

| Storage / DOM | Values | Role |
|---|---|---|
| `localStorage.theme` | `'system' \| 'light' \| 'dark'` | The user's saved choice (default `'system'`) |
| `<html data-theme-mode="…">` | mirrors the saved mode | Drives the trigger icon (monitor / sun / moon) via CSS |
| `<html>.dark` | present or absent | Resolved appearance — Tailwind dark variant keys off this |

Defaults are seeded directly on the `<html>` element in `src/layouts/BaseLayout.astro` so JS-disabled visitors still see a sensible state:

```html
<html lang="en" class="scroll-smooth dark" data-theme="violet" data-theme-mode="system">
```

Flash-of-wrong-theme is prevented by an inline `<script>` in `<head>` that runs synchronously before body paint, reads `localStorage.theme`, and reconciles `data-theme-mode` + `.dark`. The same script also re-applies on `astro:before-swap` / `astro:after-swap` to handle view transitions, and subscribes once to the OS-preference media query.

The picker is exposed as a pill-shaped dropdown in the header — `ThemeModeDropdown` — and re-rendered inside the mobile menu below the `md` breakpoint, so both desktop and mobile users get the full 3-state picker:

```astro
---
import ThemeModeDropdown from '@/components/layout/ThemeModeDropdown.astro';
---

<ThemeModeDropdown />
```

The full design — bootstrap script, dropdown anatomy, the live "Currently dark/light" sub-line under 'System', and how two component instances stay state-synced — is written up in the [System, Light, Dark blog post](https://astrorocket.dev/blog/colour-mode-system).

> **Why `localStorage` for colour mode but `sessionStorage` for the colour palette?** They serve different intents. The colour mode is the user's accessibility / preference setting and should survive reloads and new tabs — `localStorage`. The 12-swatch colour palette is a brand-discovery toy that should reset on every new visit so first impressions stay on-brand — `sessionStorage`. Keeping them on different storage tiers is intentional, not accidental.

### WCAG Contrast Requirements

Foreground tokens are documented with their contrast ratios inline. When customizing, maintain these minimums:

| Token | Minimum ratio | Standard |
|-------|:---:|:---:|
| `--foreground` | 7:1 | WCAG AAA |
| `--foreground-secondary` | 7:1 | WCAG AAA |
| `--foreground-muted` | 4.5:1 | WCAG AA |
| `--foreground-subtle` | 4.5:1 | WCAG AA |
| Status `-foreground` tokens | 4.5:1 | WCAG AA (on their `-light` bg) |

### Using Design Tokens

```astro
<!-- Tailwind utilities (recommended) -->
<div class="bg-background text-foreground">
  <h1 class="text-primary font-display">Hello</h1>
</div>

<!-- CSS custom properties -->
<style>
  .custom {
    background: var(--background-secondary);
    color: var(--foreground);
  }
</style>
```

---

## Components

Astro Rocket includes 57 components across 7 categories. All UI components use [class-variance-authority (CVA)](https://cva.style) for type-safe variant management.

### UI Components (31)

#### Form (`ui/form/`)

| Component | Description |
|-----------|-------------|
| Button | Interactive button with primary, secondary, outline, ghost, destructive variants and loading state |
| Input | Text input with label, hint, and error states |
| Textarea | Multi-line text input |
| Select | Dropdown selection |
| Checkbox | Boolean toggle with indeterminate state |
| Radio | Single selection from group |
| Switch | Toggle switch input |

#### Data Display (`ui/data-display/`)

| Component | Description |
|-----------|-------------|
| Card | Content container with variant, padding, and hover options |
| Badge | Status labels and tags with contextual variants |
| Avatar | User images with fallback |
| AvatarGroup | Grouped avatar display with overlap |
| Table | Styled data table |
| Pagination | Page navigation controls |
| Progress | Progress bar indicator |
| Skeleton | Loading placeholders |

#### Feedback (`ui/feedback/`)

| Component | Description |
|-----------|-------------|
| Alert | Contextual feedback messages (info, success, warning, error) |
| Toast | Temporary notification messages |
| Tooltip | Hover tooltips with positioning |

#### Overlay (`ui/overlay/`)

| Component | Description |
|-----------|-------------|
| Dialog | Modal overlay |
| Dropdown | Menu with trigger |
| Tabs | Horizontal tabbed content panels |
| VerticalTabs | Vertical tab navigation |
| Accordion | Collapsible content sections |

#### Layout (`ui/layout/`)

| Component | Description |
|-----------|-------------|
| Separator | Visual divider between sections |

#### Primitives (`ui/primitives/`)

| Component | Description |
|-----------|-------------|
| Icon | Unified icon component (Astro + React) powered by Iconify. Supports all [Lucide](https://lucide.dev) icons (`lucide:*`) and all [Simple Icons](https://simpleicons.org) brand icons (`simple-icons:*`). Includes shorthand names for common social and brand icons. Five size variants: `xs`, `sm`, `md`, `lg`, `xl`. |

#### Content (`ui/content/`)

| Component | Description |
|-----------|-------------|
| CodeBlock | Syntax-highlighted code display |

#### Marketing (`ui/marketing/`)

| Component | Description |
|-----------|-------------|
| Logo | Auto-generated monogram badge — renders the first letter of `siteConfig.name` on the active brand color. Five sizes: `sm`, `md`, `lg`, `xl`, `2xl`. No logo file required — or set `branding.logo.image` in `site.config.ts` to use a custom image instead. |
| CTA | Call-to-action sections with slot-based composition |
| NpmCopyButton | NPM install command with copy-to-clipboard |
| SocialProof | Testimonial and trust indicator cards |
| TerminalDemo | Animated terminal demonstration (React) |

### Pattern Components (8)

| Component | Description |
|-----------|-------------|
| ContactForm | Complete contact form with validation |
| NewsletterForm | Email subscription form |
| FormField | Reusable form field wrapper |
| SearchInput | Search input with icon |
| PasswordInput | Password input with visibility toggle |
| StatCard | Statistics display card |
| EmptyState | Empty state placeholder with icon and action |
| YouTube | Privacy-friendly click-to-play video embed for MDX posts and pages |

### Other Categories

| Category | Count | Components |
|----------|-------|------------|
| Hero | 1 | Hero section with centered/split layouts, grid pattern, and typing effect |
| Layout | 6 | Header (with scroll progress bar), Footer, ThemeModeDropdown, ThemeSelector, ThemeSelectorDropdown, Analytics |
| Blog | 4 | ArticleHero, BlogCard, ShareButtons, RelatedPosts |
| Landing | 5 | Credibility, LighthouseScores, TechStack, FeatureTabs, and more |
| SEO | 3 | SEO, JsonLd, Breadcrumbs |

### Usage Example

```astro
---
import { Button, Input, Card } from '@/components/ui';
---

<Card>
  <Input label="Email" type="email" name="email" required />
  <Button variant="primary">Submit</Button>
</Card>
```

### Icon Usage

```astro
---
import Icon from '@/components/ui/primitives/Icon/Icon.astro';
---

<!-- Lucide UI icons — use any icon name from lucide.dev -->
<Icon name="arrow-right" size="md" />
<Icon name="mail" size="sm" />
<Icon name="layers" size="lg" />

<!-- Simple Icons brand icons — shorthand names available -->
<Icon name="github" size="md" />
<Icon name="x-twitter" size="md" />
<Icon name="brand-astro" size="md" />
<Icon name="brand-tailwind" size="md" />

<!-- Or use the full Iconify name directly -->
<Icon name="simple-icons:vercel" size="md" />
<Icon name="lucide:rocket" size="xl" />
```

All UI components are imported via barrel exports from `@/components/ui`. View all components at `/components` in development.

---

## Content Management

### Blog Posts

Create posts in `src/content/blog/[locale]/`:

```markdown
---
title: "Your Post Title"
description: "Brief description for SEO"
publishedAt: 2026-01-30
author: "Author Name"
tags: ["astro", "tutorial"]
uid: "your-post-id"        # optional — stable id used by <PostLink> for internal links
locale: en
---

Your content here...
```

To link from one post to another, use `<PostLink uid="target-post-id">link text</PostLink>` in your MDX instead of a hard-coded `/blog/...` URL. The id resolves to the right URL at build time, and a broken reference fails the build — so renaming a post never leaves a dead internal link. Give a post an optional `uid` (above) to make it a link target. The [configuration guide](/blog/astro-rocket-configuration-guide) post has the full walkthrough.

### Project Galleries

Projects live in `src/content/projects/<locale>/` (the bundled ones in `src/content/projects/en/`) as one MDX file per project, and there are two ways to show more than one image.

**1. Hero carousel (frontmatter).** Add a `gallery` array and the project hero swaps the single `image` for a swipeable carousel (touch swipe, prev/next arrows, dot indicators, keyboard navigation). The first slide is the lead image:

```yaml
---
title: "My Product"
description: "..."
gallery:
  - src: "../../assets/projects/shot-1.jpg"
    alt: "Dashboard view"
  - src: "../../assets/projects/shot-2.jpg"
    alt: "Settings page"
---
```

Keep the single `image` field set as well — project cards on the index and homepage still use it.

**2. In-body carousel with lightbox (MDX).** For an e-commerce-style gallery inside the project body, import the `ProjectGallery` component. Clicking a slide opens a full-screen lightbox, and each image takes an optional caption:

```mdx
import ProjectGallery from '@/components/projects/ProjectGallery.astro';
import shot1 from '@/assets/projects/shot-1.jpg';
import shot2 from '@/assets/projects/shot-2.jpg';

<ProjectGallery
  images={[
    { src: shot1, alt: 'Dashboard', caption: 'The main dashboard' },
    { src: shot2, alt: 'Settings' },
  ]}
/>
```

**3. Video slides.** Both carousels also accept self-hosted video slides — drop an `.mp4` (or `.webm`) in `public/`, reference it by root-relative path, and give it a **required poster image**:

```yaml
gallery:
  - video: "/videos/demo.mp4"
    poster: "../../assets/projects/demo-poster.jpg"
    alt: "30-second product demo"
  - src: "../../assets/projects/shot-1.jpg"
    alt: "Dashboard view"
```

The same shape works in `<ProjectGallery>` (`{ video, poster, alt, caption? }`). Video slides render the poster with `preload="none"`, so **zero video bytes are downloaded until the visitor presses play** — the poster goes through the regular image pipeline and the Lighthouse scores stay intact. Swiping away from a playing video pauses it. YouTube/Vimeo embeds are deliberately not supported: third-party iframes drag in scripts, cookies, and consent requirements that this theme avoids.

Both carousels are dependency-free (native scroll-snap plus a small vanilla script) and lazy-load every slide after the first, so they don't cost you the Lighthouse score. `src/content/projects/ecommerce-store.mdx` demonstrates both in one file.

### Querying Content

```astro
---
import { getCollection } from 'astro:content';

const posts = await getCollection('blog', ({ data }) => {
  return import.meta.env.PROD ? !data.draft : true;
});
---
```

---

## SEO

### Automatic Features

- **Meta tags**: Title, description, canonical URL
- **Open Graph**: Complete OG tags for social sharing
- **Twitter Cards**: Large image cards
- **JSON-LD**: WebSite, Organization, BlogPosting, Breadcrumb, FAQ schemas
- **Sitemap**: Auto-generated at `/sitemap-index.xml`
- **robots.txt**: Dynamic generation with sitemap reference
- **OG Images**: A static default OG image serves all pages and blog posts

### Using the SEO Component

```astro
---
import SEO from '@/components/seo/SEO.astro';
---

<head>
  <SEO
    title="Page Title"
    description="Page description"
  />
</head>
```

### OG Image

A static default OG image (`public/og-default.svg`) serves as the social preview for all pages. The path is set via `ogImage` in `src/config/site.config.ts`. To use a custom image for a specific page, pass it as the `image` prop to the layout component.

---

## Search

Site-wide static search is powered by [Pagefind](https://pagefind.app) and surfaced as a search button in the header that opens a command-palette style modal (also bound to <kbd>⌘K</kbd> / <kbd>Ctrl+K</kbd>).

**How it works**

- The index is generated automatically at the end of every `astro build` by the `pagefind()` hook in `astro.config.mjs`. It indexes the real output directory on every deploy target (Vercel, Netlify, Cloudflare) — no extra build command needed.
- The header and footer carry `data-pagefind-ignore`, so navigation chrome never pollutes results.
- The modal lazy-loads the Pagefind bundle on first open, so search adds **zero JavaScript** to the initial page load and doesn't touch the Lighthouse score.

**Trying it locally**

The index only exists after a production build, so search has no results under `astro dev` (the modal tells you this instead of failing):

```bash
pnpm build && pnpm preview
```

**Turning it off**

The search button shows by default. Hide it per header instance:

```astro
<Header showSearch={false} />
```

---

## API Routes

### Contact Form

**POST** `/api/contact`

```typescript
// Request (FormData)
{
  name: string,      // 2-100 chars
  email: string,     // Valid email
  subject: string,   // Required
  message: string,   // 10-5000 chars
  honeypot: string   // Must be empty (spam check)
}

// Response
{ success: true }
// or
{ success: false, errors: { field: ["message"] } }
```

### Newsletter

**POST** `/api/newsletter`

```typescript
// Request (FormData)
{ email: string }

// Response
{ success: true }
// or
{ success: false, error: "message" }
```

---

## Deployment

Configuration files included for major platforms.

### Vercel (Recommended)

```bash
vercel
```

### Netlify

```bash
netlify deploy --prod
```

### Cloudflare

Astro's Cloudflare adapter (`@astrojs/cloudflare`) targets **Cloudflare Workers** (the platform behind today's "Workers & Pages"): the prerendered pages are served as static assets and the `/api/*` routes — the contact form and newsletter — run as the Worker. Build with the Cloudflare target, then deploy with Wrangler:

```bash
DEPLOY_TARGET=cloudflare pnpm build
npx wrangler deploy
```

The build generates the Worker and static-asset config automatically; the bundled `wrangler.toml` adds the `nodejs_compat` flag the API routes need. Prefer the dashboard? In **Workers & Pages → Create → Connect to Git**, set the build command to `DEPLOY_TARGET=cloudflare pnpm build`. Either way, add your secrets — `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `NEWSLETTER_API_KEY` — plus `SITE_URL` as environment variables so the contact form and newsletter work.

### Static export (no serverless)

`pnpm build` uses the default Vercel adapter and writes the static site to `dist/client/`. You can host that folder on any static host — but the `/api/*` routes (contact form, newsletter) need a serverless/edge runtime, so on a purely static host you'd wire those forms up to an external service instead.

---

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

---

## Performance

Astro Rocket is optimized for Core Web Vitals:

- **Lighthouse Score**: 100/100/100/100 on both mobile and desktop
- **Zero JavaScript** by default (islands architecture)
- **Optimized fonts** with `font-display: swap`
- **Image optimization** via Astro's built-in processing
- **Prefetching** for instant page transitions

---

## Animations

Every page in Astro Rocket includes purposeful animations that make the site feel polished and alive. All animations respect the user's `prefers-reduced-motion` setting — they are disabled automatically for users who prefer less motion.

### Page transitions

Astro Rocket uses Astro's built-in `<ClientRouter />` (View Transitions API) to animate between pages. Instead of a full browser reload, content fades smoothly from one page to the next. This is enabled globally in `BaseLayout.astro` and requires no per-page configuration.

### Scroll-triggered animations

Two components use an `IntersectionObserver` to trigger animations when elements enter the viewport:

- **Counter animation** — the stats block on the homepage (Years Experience, Projects Delivered, etc.) counts up from zero when it scrolls into view. Each number animates with a cubic ease-out over 1.2 seconds.
- **Lighthouse score bars** — the `LighthouseScores` landing component animates its score bars into place as the section becomes visible.

### Scroll-reactive header

The floating header changes its appearance as the user scrolls. When the page is at the top, the header is transparent with inverted text. Once the user scrolls past 60px, the header gains a solid background and the text flips to normal colors — all driven by CSS transitions via a `data-scrolled` attribute.

### Scroll progress bar

A thin 2px brand-coloured bar on the header edge that grows from left to right as the user scrolls, showing reading progress at a glance. Enable it with two props on the `<Header>` component:

| Prop | Type | Default | What it does |
|------|------|:-------:|--------------|
| `showScrollProgress` | `boolean` | `false` | Renders the progress bar |
| `scrollProgressPosition` | `'top'` \| `'bottom'` | `'bottom'` | Edge of the header where the bar sits |

The bar is enabled by default on three page types: the **homepage** (above the floating header), the **blog index**, and **individual blog posts** (both below the solid bar header). Use `scrollProgressPosition="top"` on a floating capsule header and `'bottom'` on a solid bar header. The bar colour always matches `--color-brand-500` and updates instantly when the visitor switches themes.

### Card hover effects

Cards throughout the site lift slightly on hover (`-translate-y-1`) and gain a subtle shadow. This is a Tailwind utility applied consistently to all interactive cards.

### UI micro-animations

The full animation library is defined in `src/styles/global.css`. These classes are used by components throughout the site:

| Class | What it does |
|-------|-------------|
| `animate-fade-in` | Fades an element from transparent to visible (0.5s ease-out) |
| `animate-slide-up` | Slides an element up from 12px below while fading in (0.5s ease-out) |
| `animate-slide-down` | Slides an element down from 12px above while fading in (0.5s ease-out) |
| `animate-dropdown-in` | Slides and scales a dropdown menu into view (0.2s spring) |
| `animate-dropdown-out` | Collapses a dropdown menu out of view (0.15s) |
| `animate-sheet-up` | Slides a bottom sheet up from off-screen (0.25s spring) |
| `animate-menu-down` | Slides the mobile navigation drawer open (0.25s spring) |
| `animate-tab-enter` | Crossfades tab panel content when switching tabs |
| `animate-toast-in` | Slides a toast notification in from the right (350ms spring) |
| `animate-tooltip-in` | Fades and scales a tooltip into view |
| `animate-pulse` | Breathing pulse for skeleton loading states |
| `animate-spin` | Continuous rotation for loading spinners |
| `animate-shake` | Brief shake for error feedback (400ms) |

Animation delay utilities (`.delay-0` through `.delay-5`, in 50ms steps) let you stagger multiple elements into view.

---

## Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code passes linting (`pnpm lint`) and type checking (`pnpm check`) before submitting.

---

## License

MIT License — see [LICENSE](LICENSE) for details.

---

## Links

- [Astro Rocket on GitHub](https://github.com/hansmartensdev/astro-rocket)
- [Velocity](https://github.com/southwellmedia/velocity) by [Southwell Media](https://southwellmedia.com) — the theme Astro Rocket was originally forked from
- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS v4](https://tailwindcss.com/docs)

---

**Astro Rocket** is designed and maintained by [Hans Martens](https://hansmartens.dev).
Originally forked from [Velocity](https://github.com/southwellmedia/velocity) by [Southwell Media](https://southwellmedia.com) — credit to them for the solid base it grew from.
