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

## Overview

Velocity accelerates Astro project delivery with a comprehensive foundation that includes a design token system, 57 components across 7 categories, SEO, dynamic OG image generation, and content management — built on Astro 6 (beta) and Tailwind CSS v4.

### Key Features

| Feature | Description |
|---------|-------------|
| **Astro 6** | Latest version with Content Layer API, security features, and performance optimizations |
| **Tailwind CSS v4** | CSS-first configuration with OKLCH color system and fluid typography |
| **Design Tokens** | Three-tier token architecture (reference → semantic → component) |
| **57 Components** | 31 UI, 7 patterns, 1 hero, 4 layout, 4 blog, 7 landing, 3 SEO — all accessible with TypeScript |
| **SEO Toolkit** | Meta tags, JSON-LD structured data, sitemap, and robots.txt |
| **Dynamic OG Images** | Auto-generated Open Graph images using Satori |
| **Dark Mode** | System preference detection with localStorage persistence |
| **Content Collections** | Type-safe blog, pages, authors, and FAQs with Zod validation |
| **API Routes** | Contact form and newsletter endpoints with validation |
| **React Islands** | Optional client-side interactivity where needed |

### Internationalization (i18n)

i18n support is available through the **[create-velocity-astro](https://github.com/southwellmedia/create-velocity-astro)** CLI. The base boilerplate is i18n-ready with locale-aware content collection schemas — run the CLI with the i18n option to add full translation support, language routing, and the LanguageSwitcher component.

---

## Quick Start

### Prerequisites

- **Node.js 22.12.0+** (required for Astro 6)
- **pnpm 9.x** (recommended) or npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/southwellmedia/velocity.git my-project
cd my-project

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env

# Start development server
pnpm dev
```

Visit `http://localhost:4321` to see your site.

### Using the CLI (Recommended)

For the full experience including i18n support:

```bash
pnpm create velocity-astro my-project
```

The CLI provides interactive prompts for optional features like i18n, additional components, and deployment configurations.

---

## Project Structure

```
velocity/
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
│   │   ├── layout/          # Header, Footer, Navigation, ThemeToggle
│   │   ├── seo/             # SEO, JsonLd, Breadcrumbs
│   │   ├── blog/            # Blog-specific components
│   │   └── landing/         # Landing page components
│   ├── content/             # Content collections
│   │   ├── blog/            # Blog posts (en/, es/, fr/)
│   │   ├── authors/         # Author profiles
│   │   └── faqs/            # FAQ entries
│   ├── layouts/             # Page layouts
│   ├── lib/                 # Utilities (schema, cn, og)
│   ├── pages/               # Routes and API endpoints
│   │   ├── api/             # Contact, newsletter endpoints
│   │   ├── og/              # Dynamic OG image generation
│   │   └── blog/            # Blog routes
│   ├── styles/              # Global CSS and design tokens
│   │   └── tokens/          # colors.css, typography.css, spacing.css
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
  ogImage: '/og/index.png',
  author: 'Your Name',
  email: 'hello@yoursite.com',
  twitter: {
    site: '@yourhandle',
    creator: '@yourhandle',
  },
};
```

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

Velocity uses a three-tier design token system with OKLCH colors for perceptual uniformity:

1. **Primitives** (`src/styles/tokens/primitives.css`) — raw color scales (gray, brand, status)
2. **Semantic tokens** (`src/styles/themes/*.css`) — purpose-based mappings (background, foreground, border, etc.)
3. **Tailwind** (`src/styles/global.css`) — `@theme` directives that expose tokens as utility classes

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

### Switching Themes

Velocity ships with two themes: `default` and `midnight`. To switch, edit `src/styles/tokens/colors.css` line 9:

```css
/* Default theme */
@import '../themes/default.css';

/* Or use midnight */
@import '../themes/midnight.css';
```

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

### Dark Mode

Dark mode toggles via the `.dark` class on `<html>`. FOUC is prevented by an inline script that reads `localStorage` before first paint. Use the included `ThemeToggle` component:

```astro
---
import ThemeToggle from '@/components/layout/ThemeToggle.astro';
---

<ThemeToggle />
```

To opt out of dark mode, remove the `.dark { ... }` block from your theme file.

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

Velocity includes 57 components across 7 categories. All UI components use [class-variance-authority (CVA)](https://cva.style) for type-safe variant management and are organized into 8 subcategories.

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
| Icon | SVG icon component |

#### Content (`ui/content/`)

| Component | Description |
|-----------|-------------|
| CodeBlock | Syntax-highlighted code display |

#### Marketing (`ui/marketing/`)

| Component | Description |
|-----------|-------------|
| Logo | Brand logo with size variants and dark mode |
| CTA | Call-to-action sections with slot-based composition |
| NpmCopyButton | NPM install command with copy-to-clipboard |
| SocialProof | Testimonial and trust indicator cards |
| TerminalDemo | Animated terminal demonstration (React) |

### Pattern Components (7)

| Component | Description |
|-----------|-------------|
| ContactForm | Complete contact form with validation |
| NewsletterForm | Email subscription form |
| FormField | Reusable form field wrapper |
| SearchInput | Search input with icon |
| PasswordInput | Password input with visibility toggle |
| StatCard | Statistics display card |
| EmptyState | Empty state placeholder with icon and action |

### Other Categories

| Category | Count | Components |
|----------|-------|------------|
| Hero | 1 | Hero section with centered/split layouts, grid, and blob effects |
| Layout | 4 | Header, Footer, ThemeToggle, Analytics |
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
locale: en
---

Your content here...
```

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
- **OG Images**: Auto-generated for all pages and blog posts

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

### Dynamic OG Images

OG images are automatically generated at `/og/[slug].png`. The SEO component references these automatically. Customize the design in `src/lib/og.ts`.

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

### Cloudflare Pages

```bash
wrangler pages deploy dist
```

### Static Export

Build outputs to `dist/` for any static host:

```bash
pnpm build
```

---

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

---

## Performance

Velocity is optimized for Core Web Vitals:

- **Lighthouse Score**: 95+ across all categories
- **Zero JavaScript** by default (islands architecture)
- **Optimized fonts** with `font-display: swap`
- **Image optimization** via Astro's built-in processing
- **Prefetching** for instant page transitions

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

- [Documentation](https://github.com/southwellmedia/velocity-docs)
- [CLI Tool](https://github.com/southwellmedia/create-velocity-astro)
- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS v4](https://tailwindcss.com/docs)

---

**Built & maintained by [Southwell Media](https://southwellmedia.com)**
