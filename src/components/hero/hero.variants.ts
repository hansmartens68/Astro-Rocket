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

export type HeroSectionVariants = VariantProps<typeof heroSectionVariants>;

export const heroBlobVariants = cva(
  'pointer-events-none absolute rounded-full blur-[120px] hidden dark:block dark:opacity-[0.20]',
  {
    variants: {
      position: {
        left:   'left-0 top-1/2 h-[500px] w-[500px] -translate-x-1/3 -translate-y-1/2',
        right:  'right-0 top-1/2 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/2',
        center: 'left-1/2 top-1/2 h-[600px] w-[700px] -translate-x-1/2 -translate-y-1/2',
      },
    },
    defaultVariants: { position: 'center' },
  }
);

export type HeroBlobVariants = VariantProps<typeof heroBlobVariants>;
