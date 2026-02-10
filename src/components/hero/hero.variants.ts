import { cva, type VariantProps } from 'class-variance-authority';

export const heroSectionVariants = cva('relative overflow-hidden bg-background', {
  variants: {
    size: {
      sm: 'pt-[var(--space-page-top-sm)] pb-[var(--space-section-sm)]',
      md: 'pt-[var(--space-page-top)] pb-[var(--space-section-md)]',
      lg: 'pt-[calc(var(--space-page-top)_+_var(--space-8))] pb-[var(--space-section-lg)]',
      xl: 'pt-[calc(var(--space-page-top)_+_var(--space-16))] pb-[var(--space-section-xl)]',
    },
  },
  defaultVariants: {
    size: 'lg',
  },
});

export const heroBlobVariants = cva(
  'bg-brand-200/20 pointer-events-none absolute h-64 w-64 rounded-full blur-3xl',
  {
    variants: {
      position: {
        left: '-left-20 -top-20',
        right: '-right-20 -top-20',
        center: 'left-1/2 -translate-x-1/2 -top-20',
      },
    },
    defaultVariants: {
      position: 'right',
    },
  }
);

export type HeroSectionVariants = VariantProps<typeof heroSectionVariants>;
export type HeroBlobVariants = VariantProps<typeof heroBlobVariants>;
