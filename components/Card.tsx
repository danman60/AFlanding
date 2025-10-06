import Image from 'next/image';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  title: string;
  subtitle?: string;
  image?: string;
  children: ReactNode;
  className?: string;
}

export const Card = ({ title, subtitle, image, children, className }: CardProps) => (
  <article
    className={cn(
      'group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-2xl',
      className,
    )}
  >
    {image ? (
      <div className="relative aspect-[5/3] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 768px) 33vw, 90vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
    ) : null}
    <div className="flex flex-1 flex-col gap-4 p-6">
      <div>
        <h3 className="text-xl font-semibold text-on-surface">{title}</h3>
        {subtitle ? <p className="text-sm uppercase tracking-wide text-accent/90">{subtitle}</p> : null}
      </div>
      <div className="text-sm leading-relaxed text-on-surface/80">{children}</div>
    </div>
  </article>
);


