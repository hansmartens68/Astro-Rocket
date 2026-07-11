import { type HTMLAttributes, type Ref, type ReactNode, createElement } from 'react';
import { cn } from '@/lib/cn';
import { proofTileVariants, type ProofTileVariants } from './proof-tile.variants';

interface ProofTileProps extends Omit<HTMLAttributes<HTMLElement>, 'ref' | 'title'> {
  ref?: Ref<HTMLElement>;
  /** Pre-rendered icon node, shown bare in the brand colour above the text */
  icon?: ReactNode;
  /** Step number, rendered in place of an icon (process steps) */
  number?: string | number;
  /** Bold tile title */
  title?: string;
  /** Heading element for the title. Match your page's heading hierarchy. */
  titleTag?: 'h3' | 'h4' | 'p';
  /** Render the tile as a link */
  href?: string;
  target?: string;
  rel?: string;
  size?: ProofTileVariants['size'];
  /** Short description below the title */
  children?: ReactNode;
}

export function ProofTile({
  ref,
  icon,
  number,
  title,
  titleTag = 'h3',
  href,
  size = 'md',
  className,
  children,
  ...rest
}: ProofTileProps) {
  const Element = href ? 'a' : 'div';
  return (
    <Element
      ref={ref as Ref<never>}
      href={href}
      className={cn(proofTileVariants({ size }), !href && 'cursor-default', className)}
      {...rest}
    >
      {icon && <span className="w-10 h-10 text-brand-500 [&>svg]:w-full [&>svg]:h-full">{icon}</span>}
      {number !== undefined && (
        <span className="font-display text-3xl font-bold text-brand-500 leading-none">{number}</span>
      )}
      {(title || children) && (
        <div>
          {title &&
            createElement(
              titleTag,
              { className: cn('font-semibold text-foreground', size === 'sm' ? 'text-sm' : 'text-base') },
              title
            )}
          {children && (
            <p className={cn('text-sm text-foreground-muted leading-relaxed', title && 'mt-1.5')}>
              {children}
            </p>
          )}
        </div>
      )}
    </Element>
  );
}

export default ProofTile;
