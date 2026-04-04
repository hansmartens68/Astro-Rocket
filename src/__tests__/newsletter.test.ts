import { describe, it, expect } from 'vitest';
import { z } from 'zod';

// Schema mirroring src/pages/api/newsletter.ts
const newsletterSchema = z.object({
  email: z.email('Please enter a valid email address'),
  honeypot: z.string().max(0).optional(),
});

describe('Newsletter form validation', () => {
  it('accepts a valid email address', () => {
    const result = newsletterSchema.safeParse({ email: 'user@example.com', honeypot: '' });
    expect(result.success).toBe(true);
  });

  it('rejects an invalid email address', () => {
    const result = newsletterSchema.safeParse({ email: 'not-an-email' });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Please enter a valid email address');
    }
  });

  it('rejects an empty email field', () => {
    const result = newsletterSchema.safeParse({ email: '' });
    expect(result.success).toBe(false);
  });

  it('rejects filled honeypot field (bot detection)', () => {
    const result = newsletterSchema.safeParse({ email: 'user@example.com', honeypot: 'bot' });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].path[0]).toBe('honeypot');
    }
  });

  it('accepts missing honeypot field (it is optional)', () => {
    const result = newsletterSchema.safeParse({ email: 'user@example.com' });
    expect(result.success).toBe(true);
  });
});
