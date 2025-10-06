import type { Metadata } from 'next';
import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { Schema } from '@/components/Schema';
import { showContent } from '@/lib/content';
import { buildBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Creative Team',
  description: 'Meet the composers, lyricists, and librettists behind Animal Farm: The Musical.',
};

const breadcrumbs = buildBreadcrumbSchema([
  { name: 'Home', href: '/' },
  { name: 'Creative Team', href: '/creative-team' },
]);

const CreativeTeamPage = () => (
  <div className="flex flex-col gap-24">
    <Section
      eyebrow="Creative Team"
      title="Artists behind the revolution"
      description="The trio behind Animal Farm: The Musical merges genre-spanning songwriting with politically charged storytelling."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {showContent.creativeTeam.map((member) => (
          <Card key={member.name} title={member.name} subtitle={member.role} image={member.photo}>
            {member.bio}
          </Card>
        ))}
      </div>
    </Section>
    <Section
      eyebrow="Allies"
      title="Extended collaborators"
      description="A growing circle of designers, dramaturgs, and activists contribute insight as the musical evolves."
    >
      <div className="grid gap-4 text-sm text-on-surface/80">
        {extendedCollaborators.map((collaborator) => (
          <div key={collaborator} className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
            {collaborator}
          </div>
        ))}
      </div>
    </Section>
    <Schema id="breadcrumb-creative-team" data={breadcrumbs} />
  </div>
);

const extendedCollaborators = [
  'Kara Patel – Dramaturg',
  'Barnstorm Collective – Scenic & Projection Design',
  'Revolution Rhythm Section – Music Direction',
  'Voices Rising – Community Engagement',
];

export default CreativeTeamPage;
