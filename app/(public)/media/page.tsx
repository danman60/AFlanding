import type { Metadata } from 'next';
import { Gallery } from '@/components/Gallery';
import { Section } from '@/components/Section';
import { VideoEmbed } from '@/components/VideoEmbed';
import { Schema } from '@/components/Schema';
import { showContent } from '@/lib/content';
import { buildBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Media',
  description: 'Watch teasers, hear concept demos, and explore visual development for Animal Farm: The Musical.',
};

const breadcrumbs = buildBreadcrumbSchema([
  { name: 'Home', href: '/' },
  { name: 'Media', href: '/media' },
]);

const MediaPage = () => (
  <div className="flex flex-col gap-24">
    <Section
      eyebrow="Teaser"
      title="The call to revolution"
      description="Preview footage from our latest workshop, featuring the anthemic opener and snapshots of the farm's transformation."
    >
      <VideoEmbed title={`${showContent.title} teaser`} src={showContent.media.teaserUrl} />
    </Section>
    <Section
      eyebrow="Listen"
      title="Concept recordings"
      description="Studio demos highlighting Steve Wallace's genre-blending score with lyrics by Daniel Abrahamson."
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-on-surface shadow-lg">
        <p className="text-sm text-on-surface/70">
          Hear the evolution of key songs including &ldquo;Beasts of England&rdquo; and &ldquo;Windmill Dreams&rdquo; while we continue to
          refine orchestrations and vocal arrangements.
        </p>
        <a
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-accent hover:border-accent"
          href={showContent.media.playlistUrl}
          target="_blank"
          rel="noreferrer"
        >
          Stream the concept playlist
        </a>
      </div>
    </Section>
    <Section
      eyebrow="Gallery"
      title="Visual language"
      description="Renderings and motion tests that track the farm's shift from utopia to authoritarian regime."
    >
      <Gallery images={showContent.media.gallery} />
    </Section>
    <Schema id="breadcrumb-media" data={breadcrumbs} />
  </div>
);

export default MediaPage;
