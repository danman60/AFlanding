import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { Gallery } from '@/components/Gallery';
import { Quote } from '@/components/Quote';
import { VideoEmbed } from '@/components/VideoEmbed';
import { NewsletterForm } from '@/components/NewsletterForm';
import { navigation, showContent } from '@/lib/content';
import { newsFeed, pressQuotes } from '@/lib/press';

const HomePage = () => {
  const creativeSpotlights = showContent.creativeTeam.slice(0, 3);
  const quotes = pressQuotes().slice(0, 2);

  return (
    <div className="flex flex-col gap-24">
      <Hero />
      <Section
        id="about"
        eyebrow="The Story"
        title="Revolution on Manor Farm"
        description={showContent.synopsis}
      >
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6 text-base leading-relaxed text-on-surface/80">
            <p>
              Animal Farm: The Musical pulses with barnstorming folk, gospel, hip-hop, and orchestral colors as the
              animals seize their future. The score ricochets between rousing anthems and intimate confessionals,
              revealing how easily the promise of liberation can be bent by propaganda.
            </p>
            <p>
              A nimble ensemble creates the animals and their human counterparts, supported by projection mapping
              and tactile scenic design that transforms the barn into a revolution-ready engine. The creative team
              leans into satire and urgency while keeping the emotional stakes grounded in community.
            </p>
            <div className="flex flex-wrap gap-3">
              {navigation.slice(1, 4).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-on-surface/80 transition hover:border-accent hover:text-on-surface"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-on-surface/80 shadow-lg">
            <h3 className="text-lg font-semibold text-on-surface">Development Snapshot</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                <div>
                  <p className="font-medium text-on-surface">Equity workshop</p>
                  <p className="text-on-surface/70">Summer 2025 – Chicago showcase</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                <div>
                  <p className="font-medium text-on-surface">Concept album</p>
                  <p className="text-on-surface/70">Recording highlights with original cast</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                <div>
                  <p className="font-medium text-on-surface">Industry presentation</p>
                  <p className="text-on-surface/70">Targeting NYC fall 2025</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Section>
      <Section
        eyebrow="Creative Team"
        title="Architects of the rebellion"
        description="Composer Steve Wallace, lyricist Daniel Abrahamson, and librettist Sarah Mucek steer this bold reimagining of Orwell&rsquo;s allegory."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {creativeSpotlights.map((member) => (
            <Card key={member.name} title={member.name} subtitle={member.role} image={member.photo}>
              {member.bio}
            </Card>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/creative-team"
            className="rounded-full border border-accent px-6 py-2 text-sm font-semibold text-accent transition hover:bg-accent hover:text-surface"
          >
            Meet the full creative team
          </Link>
        </div>
      </Section>
      <Section
        eyebrow="Media"
        title="Witness the uprising"
        description="See the latest workshop moments, hear the teaser track, and explore concept art from the world of the farm."
      >
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <VideoEmbed title="Animal Farm teaser" src={showContent.media.teaserUrl} />
          <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-on-surface">Sound of the farm</h3>
            <p className="text-sm text-on-surface/70">
              From barn stomp rhythms to electrifying protest chants, the concept playlist traces the score&rsquo;s
              evolution with demos direct from the studio.
            </p>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-on-surface transition hover:border-accent hover:text-accent"
              href={showContent.media.playlistUrl}
              target="_blank"
              rel="noreferrer"
            >
              Listen to select tracks
            </a>
          </div>
        </div>
        <div className="mt-12">
          <Gallery images={showContent.media.gallery} />
        </div>
      </Section>
      {quotes.length ? (
        <Section
          eyebrow="Press"
          title="Amplifying the revolution"
          description="Industry buzz highlights the urgency and musical muscle of this new adaptation."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {quotes.map((quote) => (
              <Quote key={quote.source} source={quote.source}>
                “{quote.quote}”
              </Quote>
            ))}
          </div>
        </Section>
      ) : null}
      <Section
        eyebrow="Newsletter"
        title="Join the collective"
        description="Sign up for development news, casting calls, and exclusive workshop invitations."
      >
        <NewsletterForm />
      </Section>
      <Section
        eyebrow="Latest"
        title="News and announcements"
        description="Track Animal Farm&rsquo;s journey from workshop to premiere."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {newsFeed().map((item) => (
            <article key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-on-surface shadow-lg">
              <p className="text-xs uppercase tracking-[0.3em] text-accent/80">{new Date(item.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}</p>
              <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-on-surface/70">{item.summary}</p>
              <a className="mt-4 inline-flex items-center text-sm font-semibold text-accent" href={item.href}>
                Read more
              </a>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default HomePage;

