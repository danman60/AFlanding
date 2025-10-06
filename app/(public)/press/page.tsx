import type { Metadata } from 'next';
import { Quote } from '@/components/Quote';
import { Section } from '@/components/Section';
import { Schema } from '@/components/Schema';
import { showContent } from '@/lib/content';
import { buildBreadcrumbSchema } from '@/lib/schema';
import { newsFeed, pressQuotes } from '@/lib/press';

export const metadata: Metadata = {
  title: 'Press',
  description: 'Press releases, announcements, and quotes about Animal Farm: The Musical.',
};

const breadcrumbs = buildBreadcrumbSchema([
  { name: 'Home', href: '/' },
  { name: 'Press', href: '/press' },
]);

const PressPage = () => {
  const quotes = pressQuotes();
  const news = newsFeed();

  return (
    <div className="flex flex-col gap-24">
      <Section
        eyebrow="Press"
        title="Early acclaim"
        description="Critics and partners highlight the immediacy of this new musical retelling of Animal Farm."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {quotes.map((quote) => (
            <Quote key={quote.source} source={quote.source}>
              &ldquo;{quote.quote}&rdquo;
            </Quote>
          ))}
        </div>
      </Section>
      <Section
        eyebrow="News"
        title="Latest announcements"
        description="Stay current on residencies, casting, and special presentations."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {news.map((item) => (
            <article key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-on-surface shadow-lg">
              <p className="text-xs uppercase tracking-[0.3em] text-accent/80">{new Date(item.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}</p>
              <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-on-surface/70">{item.summary}</p>
              <a className="mt-4 inline-flex text-sm font-semibold text-accent" href={item.href}>
                Read full release
              </a>
            </article>
          ))}
        </div>
      </Section>
      <Schema id="breadcrumb-press" data={breadcrumbs} />
    </div>
  );
};

export default PressPage;