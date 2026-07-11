import { SITE_URL, GOOGLE_SITE_VERIFICATION, BING_SITE_VERIFICATION } from 'astro:env/server';
import i18nConfig, { type I18nConfig } from './i18n.config';

export { i18nConfig };
export type { I18nConfig };

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  author: string;
  email: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  socialLinks: string[];
  /**
   * Header options. Set `showSocialLinks: true` to render an icon link in the
   * top-right for each entry in `socialLinks` (GitHub, X, etc. — the icon is
   * inferred from the URL). Off by default; an explicit `<Header
   * showSocialLinks>` prop still overrides this per-usage.
   */
  header?: {
    showSocialLinks?: boolean;
  };
  twitter?: {
    site: string;
    creator: string;
  };
  verification?: {
    google?: string;
    bing?: string;
  };
  /** Path to author photo (relative to site root, e.g. '/avatar.jpg'). Used in Person schema. */
  authorImage?: string;
  /**
   * Set to false if your blog post images already match your theme color
   * and you don't want the brand color overlay applied on top of them.
   */
  blogImageOverlay?: boolean;
  /**
   * Global, decorative visual effects (purely additive — the site works
   * fully without them).
   */
  effects?: {
    /**
     * Cursor trail on desktop (pointer dot + lagging ring + comet particles).
     * `true` by default; set to `false` to turn it off site-wide as a
     * visual-comfort / accessibility preference. The trail is already skipped
     * automatically under `prefers-reduced-motion` and on coarse/touch
     * pointers, regardless of this flag.
     */
    cursorTrail?: boolean;
  };
  /**
   * Article features — opt-in modules for blog posts.
   * Each is OFF by default so the theme stays as light as it is today
   * for users who don't enable them.
   */
  articleFeatures?: {
    /** Table of contents shown on blog posts (auto-generated from headings) */
    toc?: {
      /** Master switch — set to true to enable site-wide */
      enabled: boolean;
      /**
       * Where to render the TOC.
       * - 'inline'  → card at the top of every post (default; preserves
       *               full reading width on desktop)
       * - 'sidebar' → sticky sidebar on `xl+` viewports (≥1280px),
       *               hidden on smaller screens
       * - 'auto'    → sidebar on `xl+`, inline card below `xl` so phone
       *               and tablet readers still get the navigation
       */
      layout?: 'inline' | 'sidebar' | 'auto';
      /**
       * Which side the sidebar TOC sits on (only applies when `layout` is
       * 'sidebar' or 'auto'). Defaults to 'right'.
       */
      sidebarPosition?: 'left' | 'right';
      /** Minimum headings before the TOC renders (avoid TOCs on short posts) */
      minHeadings?: number;
      /** Deepest heading level to include (2 = H2 only, 3 = H2+H3, etc.) */
      maxDepth?: 2 | 3 | 4;
    };
    /** Comments at the bottom of blog posts (powered by Giscus, Cusdis, or Artalk) */
    comments?: {
      /** Master switch — set to true to enable site-wide */
      enabled: boolean;
      /** Comments provider — 'giscus' (GitHub Discussions) or 'cusdis'. */
      provider?: 'giscus' | 'cusdis' | 'artalk';
      /** Giscus configuration. Get values from https://giscus.app */
      giscus?: {
        repo: `${string}/${string}`;
        repoId: string;
        category: string;
        categoryId: string;
        mapping?: 'pathname' | 'url' | 'title' | 'og:title' | 'specific' | 'number';
        strict?: boolean;
        reactionsEnabled?: boolean;
        emitMetadata?: boolean;
        inputPosition?: 'top' | 'bottom';
        /**
         * Giscus theme. Leave empty (the default) to follow the site's own
         * light/dark mode — resolved on the client and kept in sync as the
         * visitor toggles. Set a specific Giscus theme name (e.g.
         * 'dark_dimmed', 'preferred_color_scheme') to override.
         */
        theme?: string;
        /**
         * Giscus language. Leave empty (the default) to follow the site's
         * current locale. Set a specific Giscus lang code (e.g. 'en', 'nl')
         * to override.
         */
        lang?: string;
      };
      /** Cusdis configuration. Get your App ID from your Cusdis dashboard. */
      cusdis?: {
        /** Cusdis App ID (from the Cusdis dashboard's "Embed Code"). */
        appId: string;
        /**
         * Cusdis instance host. Defaults to the hosted service
         * 'https://cusdis.com'; set this to your own URL when self-hosting.
         */
        host?: string;
        /**
         * Theme. Leave empty (the default) to follow the site's own light/dark
         * mode — resolved on the client and re-rendered when the visitor
         * toggles (Cusdis has no live theme API, so the thread briefly reloads
         * on toggle). Use 'auto' to follow the OS preference instead, or
         * 'light' / 'dark' for a fixed theme.
         */
        theme?: '' | 'light' | 'dark' | 'auto';
        /**
         * Language. Leave empty (the default) to follow the site's current
         * locale. Set a Cusdis language code to override. Availability depends
         * on Cusdis's language packs; an unknown code falls back to English.
         */
        lang?: string;
      };
      /** Artalk configuration. Requires your own Artalk server. */
      artalk?: {
        /**
         * Artalk server address, for example:
         * 'https://comments.example.com'
         */
        server: string;
        /**
         * Site name used by Artalk for multi-site isolation. This should match
         * the site created in the Artalk dashboard/server config.
         */
        site: string;
        /**
         * Optional client JS URL. Defaults to `${server}/dist/Artalk.js`.
         * Useful when serving the client from a CDN or custom asset path.
         */
        jsUrl?: string;
        /**
         * Optional client CSS URL. Defaults to `${server}/dist/Artalk.css`.
         * Useful when serving the client from a CDN or custom asset path.
         */
        cssUrl?: string;
        /**
         * Dark mode. Leave empty (the default) to follow the site's own
         * light/dark mode and keep it in sync live. Set 'auto' to follow the
         * OS preference instead, or use true / false for a fixed mode.
         */
        darkMode?: boolean | 'auto';
        /**
         * Language. Leave empty (the default) to follow the site's current
         * locale. Set a specific Artalk locale code such as 'zh-CN' or 'en'
         * to override.
         */
        locale?: string;
      };
    };
  };
  /**
   * Blog listing configuration. Counts that were previously hard-coded across
   * `lib/blog.ts` and the route files live here so they're tunable in one
   * place. (The existing `blogImageOverlay` / `articleFeatures` keys are left
   * where they are for backwards compatibility and may fold in at a major.)
   */
  blog?: {
    /** Regular (non-featured) posts shown per blog index page. Default 12. */
    postsPerPage?: number;
    /** How many of the most-used tags to surface in the blog tag cloud. Default 10. */
    tagCloudLimit?: number;
  };
  /** Projects listing configuration. */
  projects?: {
    /** Projects shown per page on the projects listing. Default 12. */
    perPage?: number;
    /** How many of the most-used tags to surface in the projects tag cloud. Default 10. */
    tagCloudLimit?: number;
  };
  /**
   * Internationalization (i18n) — see `src/config/i18n.config.ts`.
   * Lives in a separate file so the i18n module can be imported by
   * unit tests without pulling in `astro:env/server`.
   */
  i18n?: I18nConfig;
  /**
   * Branding configuration
   * Logo files: Replace SVGs in src/assets/branding/
   * Favicon: Replace in public/favicon.svg
   */
  branding: {
    /** Logo alt text for accessibility */
    logo: {
      alt: string;
      /**
       * Optional path to a custom logo image in public/ (e.g. '/logo.svg').
       * When set, it replaces the generated letter-monogram badge in the
       * header, footer, and anywhere <Logo> is rendered — no layout edits
       * needed. Leave unset to keep the monogram. Per-author byline avatars
       * (which pass an explicit letter) are unaffected.
       */
      image?: string;
      /** Path to logo image for structured data (e.g. '/logo.png'). Add a PNG to public/ and set this. */
      imageUrl?: string;
    };
    /** Favicon path (lives in public/) */
    favicon: {
      svg: string;
    };
    /** Theme colors for manifest and browser UI */
    colors: {
      /** Browser toolbar color (hex) */
      themeColor: string;
      /** PWA splash screen background (hex) */
      backgroundColor: string;
    };
  };
}

const siteConfig: SiteConfig = {
  name: 'Astro Rocket',
  description:
    'Astro Rocket — A free, open-source Astro 7 theme: a complete component library for building beautiful websites, with 12 colour themes, 57+ components, built-in i18n, and dark mode.',
  url: SITE_URL || 'https://astrorocket.dev',
  ogImage: '/og-default.svg',
  author: 'Hans Martens',
  email: 'hello@hansmartens.dev',
  address: {
    street: '',
    city: 'Amsterdam',
    state: '',
    zip: '',
    country: 'the Netherlands',
  },
  socialLinks: [
    'https://github.com/hansmartensdev',
    'https://x.com/hansmartens_dev',
    'https://www.linkedin.com',
    'https://bsky.app/profile/hansmartensdev.bsky.social',
  ],
  header: {
    // Flip to `true` to show the social icons (incl. GitHub) in the header.
    showSocialLinks: false,
  },
  twitter: {
    site: 'https://x.com/hansmartens_dev',
    creator: '@hansmartens_dev',
  },
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
    bing: BING_SITE_VERIFICATION,
  },
  authorImage: '/avatar.svg',
  blogImageOverlay: true,
  effects: {
    cursorTrail: true,
  },
  articleFeatures: {
    toc: {
      enabled: true,
      layout: 'auto',
      sidebarPosition: 'left',
      minHeadings: 3,
      maxDepth: 3,
    },
    comments: {
      enabled: false,
      provider: 'giscus',
      giscus: {
        repo: 'owner/repo',
        repoId: '',
        category: 'General',
        categoryId: '',
        mapping: 'pathname',
        strict: false,
        reactionsEnabled: true,
        emitMetadata: false,
        inputPosition: 'bottom',
        // Empty → follow the site's light/dark mode and current locale.
        theme: '',
        lang: '',
      },
      // Used when provider is 'cusdis'. Get your App ID from the Cusdis
      // dashboard (Embed Code); `host` defaults to the hosted service.
      cusdis: {
        appId: '',
        host: 'https://cusdis.com',
        // Empty → follow the site's light/dark mode and current locale.
        theme: '',
        lang: '',
      },
      // Used when provider is 'artalk'. Point `server` at your own Artalk
      // service — use an https:// address in production (a plain http:// URL
      // is blocked as mixed content on an https site and is open to
      // tampering). Comments render only once both `server` and `site` are set.
      artalk: {
        server: '',
        // The Artalk "site" name you configured in the Artalk dashboard
        // (used for multi-site isolation).
        site: '',
        // Optional: override the client asset URLs when needed.
        // jsUrl: 'https://cdn.example.com/artalk/Artalk.js',
        // cssUrl: 'https://cdn.example.com/artalk/Artalk.css',
        // Leave undefined → follow the site's light/dark mode and locale.
        // darkMode: 'auto',
        // locale: 'en',
      },
    },
  },
  blog: {
    postsPerPage: 12,
    tagCloudLimit: 10,
  },
  projects: {
    perPage: 12,
    tagCloudLimit: 10,
  },
  i18n: i18nConfig,
  branding: {
    logo: {
      alt: 'Astro Rocket',
      // image: '/logo.svg', // Optional: set to a file in public/ to use a custom logo image instead of the letter monogram.
      imageUrl: '/favicon.svg',
    },
    favicon: {
      svg: '/favicon.svg',
    },
    colors: {
      themeColor: '#6b65ff',
      backgroundColor: '#ffffff',
    },
  },
};

export default siteConfig;
