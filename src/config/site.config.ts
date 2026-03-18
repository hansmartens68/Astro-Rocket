import { SITE_URL, GOOGLE_SITE_VERIFICATION, BING_SITE_VERIFICATION } from 'astro:env/server';

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
   * Set to false to hide the decorative glow in blog article headers.
   */
  blogHeaderGlow?: boolean;
  /**
   * Branding configuration
   * Logo files: Replace SVGs in src/assets/branding/
   * Favicon: Replace in public/favicon.svg
   */
  branding: {
    /** Logo alt text for accessibility */
    logo: {
      alt: string;
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
    'Astro Rocket is a free, open-source Astro 6 theme with 57+ components, 8 color themes, dark mode, i18n, and a perfect Lighthouse score — everything you need to launch a fast, modern website.',
  url: SITE_URL || 'https://hansmartens.dev',
  ogImage: '/og-default.png',
  author: 'Astro Rocket',
  email: 'hello@youremail.com',
  address: {
    street: '',
    city: 'Veghel',
    state: 'Noord-Brabant',
    zip: '',
    country: 'NL',
  },
  socialLinks: [
    'https://github.com',
    'https://linkedin.com',
    'https://x.com',
  ],
  twitter: {
    site: '',
    creator: '',
  },
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
    bing: BING_SITE_VERIFICATION,
  },
  authorImage: '/avatar.svg',
  blogImageOverlay: true,
  blogHeaderGlow: false,
  branding: {
    logo: {
      alt: 'Astro Rocket',
      imageUrl: '/favicon.svg',
    },
    favicon: {
      svg: '/favicon.svg',
    },
    colors: {
      themeColor: '#F94C10',
      backgroundColor: '#ffffff',
    },
  },
};

export default siteConfig;
