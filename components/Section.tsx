import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  title: string;
  eyebrow?: string;
  description?: string;
  className?: string;
  children: ReactNode;
}

export const Section = ({ id, title, eyebrow, description, className, children }: SectionProps) => (
  <section id={id} className={cn('relative py-20', className)}>
    <div className="mx-auto w-full max-w-5xl px-4">
      <div className="max-w-3xl space-y-4">
        {eyebrow ? (
          <p className="text-xs uppercase tracking-[0.4em] text-accent">{eyebrow}</p>
        ) : null}
        <h2 className="text-3xl font-semibold text-on-surface md:text-4xl">{title}</h2>
        {description ? <p className="text-base text-on-surface/80 md:text-lg">{description}</p> : null}
      </div>
      <div className="mt-12">{children}</div>
    </div>
  </section>
);


