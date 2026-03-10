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
    'Web designer and developer based in Veghel, the Netherlands. I build fast, modern websites for businesses and creators.',
  url: SITE_URL || 'https://hansmartens.dev',
  ogImage: '/og-default.png',
  author: 'Hans Martens',
  email: 'hello@hansmartens.dev',
  address: {
    street: '',
    city: 'Veghel',
    state: 'Noord-Brabant',
    zip: '',
    country: 'NL',
  },
  socialLinks: [
    'https://github.com/hansmartens-dev',
    'https://linkedin.com/in/hansmartens',
    'https://x.com/hansmartens_dev',
  ],
  twitter: {
    site: '@hansmartens_dev',
    creator: '@hansmartens_dev',
  },
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
    bing: BING_SITE_VERIFICATION,
  },
  authorImage: '/avatar.svg',
  branding: {
    logo: {
      alt: 'Hans Martens',
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
