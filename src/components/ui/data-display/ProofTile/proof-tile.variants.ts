import { cva, type VariantProps } from 'class-variance-authority';

export const proofTileVariants = cva(
  [
    'bg-background-tertiary rounded-xl flex flex-col items-center text-center',
    'border border-brand-500/40 ring-1 ring-brand-500/15 shadow-sm',
    'transition-all duration-200',
    'hover:-translate-y-1 hover:shadow-md hover:border-brand-500/80 hover:ring-brand-500/30',
    'h-full',
  ],
  {
    variants: {
      size: {
        /** Compact proof tile: icon and a single bold line, vertically centered */
        sm: 'p-5 gap-2 justify-center',
        /** Feature tile: icon (or number), title, and a short description */
        md: 'p-6 gap-3',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export type ProofTileVariants = VariantProps<typeof proofTileVariants>;
