import type { Metadata } from 'next';
import { Section } from '@/components/Section';
import { showContent } from '@/lib/content';
import { buildBreadcrumbSchema } from '@/lib/schema';
import { Schema } from '@/components/Schema';

export const metadata: Metadata = {
  title: 'About',
  description: showContent.synopsis,
  openGraph: {
    title: `${showContent.title} | About`,
    description: showContent.synopsis,
  },
};

const breadcrumbs = buildBreadcrumbSchema([
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
]);

const AboutPage = () => (
  <div className="flex flex-col gap-24">
    <Section
      title="Bringing Orwell&rsquo;s warning to a new generation"
      description={showContent.synopsis}
      eyebrow="About"
    >
      <div className="prose prose-invert max-w-none text-on-surface/80">
        <p>
          Animal Farm: The Musical keeps the bite of Orwell&rsquo;s satire while embracing the emotional power of live
          theatre. We anchor the show in the animals&rsquo; collective voice&mdash;each number spotlights a different musical
          vernacular to reflect the farm&rsquo;s evolving social order, from rafter-shaking jubilation to fractured,
          whispered dissent.
        </p>
        <p>
          The creative team approaches the material through an intersectional lens, interrogating how propaganda
          morphs when filtered through contemporary media. Physical theatre, puppetry, and projected collage art
          allow the animals to manifest in surprising ways without relying on literal costuming.
        </p>
        <p>
          As the project advances toward production, we are partnering with institutions that champion politically
          resonant work and ensemble-driven storytelling.
        </p>
      </div>
    </Section>
    <Section
      eyebrow="Development Path"
      title="Upcoming milestones"
      description="Where the musical is headed as it builds toward first preview performances."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {milestones.map((milestone) => (
          <article key={milestone.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg">
            <p className="text-xs uppercase tracking-[0.3em] text-accent/80">{milestone.phase}</p>
            <h3 className="mt-3 text-xl font-semibold text-on-surface">{milestone.title}</h3>
            <p className="mt-2 text-sm text-on-surface/70">{milestone.description}</p>
            <p className="mt-4 text-sm font-semibold text-on-surface">Target: {milestone.timeline}</p>
          </article>
        ))}
      </div>
    </Section>
    <Section
      eyebrow="Partnerships"
      title="Collaborate with the farm"
      description="We&rsquo;re seeking producing, presenting, and educational allies who share our passion for socially-charged musicals."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-on-surface">Invest in the uprising</h3>
          <p className="mt-2 text-sm text-on-surface/70">
            Producers and regional theatres interested in bold, issue-driven storytelling are invited to connect for
            upcoming workshop presentations and co-production opportunities.
          </p>
          <a className="mt-4 inline-flex text-sm font-semibold text-accent" href={`mailto:${showContent.contact.general}`}>
            Start a conversation
          </a>
        </article>
        <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-on-surface">Educational outreach</h3>
          <p className="mt-2 text-sm text-on-surface/70">
            We are developing study guides and talkbacks that unpack revolution, media literacy, and collective
            action. Educators can collaborate on pilot residencies aligned with the show&rsquo;s themes.
          </p>
          <a className="mt-4 inline-flex text-sm font-semibold text-accent" href={`mailto:${showContent.contact.email}`}>
            Explore programming
          </a>
        </article>
      </div>
    </Section>
    <Schema id="breadcrumb-about" data={breadcrumbs} />
  </div>
);

const milestones = [
  {
    title: 'Chicago staging lab',
    phase: 'In Progress',
    description: 'Physical theatre intensive shaping the animal ensemble language and scenic transitions.',
    timeline: 'Summer 2025',
  },
  {
    title: 'Industry concert presentation',
    phase: 'Next',
    description: 'A concert-style evening in NYC featuring selections with narration and visual design previews.',
    timeline: 'Fall 2025',
  },
  {
    title: 'Regional premiere planning',
    phase: 'Future',
    description: 'Securing partner theatre for pre-Broadway run with community engagement initiatives.',
    timeline: '2026',
  },
];

export default AboutPage;
