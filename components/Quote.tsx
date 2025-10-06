import { ReactNode } from 'react';
import { Quote as QuoteIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuoteProps {
  children: ReactNode;
  source: string;
  className?: string;
}

export const Quote = ({ children, source, className }: QuoteProps) => (
  <figure
    className={cn(
      'rounded-3xl border border-accent/20 bg-surface/70 p-8 text-on-surface shadow-lg backdrop-blur',
      className,
    )}
  >
    <QuoteIcon className="mb-4 h-8 w-8 text-accent" aria-hidden="true" />
    <blockquote className="text-lg font-medium leading-relaxed">{children}</blockquote>
    <figcaption className="mt-6 text-sm uppercase tracking-[0.3em] text-on-surface/60">{source}</figcaption>
  </figure>
);


