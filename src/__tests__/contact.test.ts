import { describe, it, expect } from 'vitest';
import { z } from 'zod';

// Schema mirroring src/pages/api/contact.ts
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.email('Please enter a valid email address'),
  subject: z.string().max(200).optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000),
  honeypot: z.string().max(0),
});

describe('Contact form validation', () => {
  const validData = {
    name: 'Jane Doe',
    email: 'jane@example.com',
    subject: 'Hello',
    message: 'This is a test message that is long enough.',
    honeypot: '',
  };

  it('accepts valid form data', () => {
    const result = contactSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('accepts data without optional subject', () => {
    const { subject: _s, ...data } = validData;
    const result = contactSchema.safeParse(data);
    expect(result.success).toBe(true);
  });

  it('rejects name shorter than 2 characters', () => {
    const result = contactSchema.safeParse({ ...validData, name: 'J' });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Name must be at least 2 characters');
    }
  });

  it('rejects invalid email address', () => {
    const result = contactSchema.safeParse({ ...validData, email: 'not-an-email' });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].path[0]).toBe('email');
    }
  });

  it('rejects message shorter than 10 characters', () => {
    const result = contactSchema.safeParse({ ...validData, message: 'Too short' });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Message must be at least 10 characters');
    }
  });

  it('rejects filled honeypot field (bot detection)', () => {
    const result = contactSchema.safeParse({ ...validData, honeypot: 'bot-value' });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].path[0]).toBe('honeypot');
    }
  });

  it('rejects subject longer than 200 characters', () => {
    const result = contactSchema.safeParse({ ...validData, subject: 'a'.repeat(201) });
    expect(result.success).toBe(false);
  });

  it('rejects message longer than 5000 characters', () => {
    const result = contactSchema.safeParse({ ...validData, message: 'a'.repeat(5001) });
    expect(result.success).toBe(false);
  });
});
