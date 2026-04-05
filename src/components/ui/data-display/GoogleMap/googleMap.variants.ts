import { cva, type VariantProps } from 'class-variance-authority';

export const googleMapVariants = cva(
  'relative w-full overflow-hidden rounded-xl border border-border',
  {
    variants: {
      size: {
        sm: 'h-[250px]',
        md: 'h-[400px]',
        lg: 'h-[500px]',
        xl: 'h-[600px]',
        full: 'h-[70vh]',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export type GoogleMapVariants = VariantProps<typeof googleMapVariants>;
