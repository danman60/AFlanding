import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { Section } from '@/components/Section';
import { Schema } from '@/components/Schema';
import { showContent, socialLinksList } from '@/lib/content';
import { buildBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Reach the Echoes in Amber creative team for general, press, and collaboration inquiries.',
};

const breadcrumbs = buildBreadcrumbSchema([
  { name: 'Home', href: '/' },
  { name: 'Contact', href: '/contact' },
]);

const ContactPage = () => {
  const socials = socialLinksList();

  return (
    <div className="flex flex-col gap-24">
      <Section
        eyebrow="Contact"
        title="We would love to connect"
        description="Reach out for press, producing partnerships, or creative collaborations."
      >
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />
          <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-on-surface/80 shadow-lg">
            <div>
              <h3 className="text-sm uppercase tracking-[0.3em] text-accent">Direct email</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a className="font-medium text-on-surface transition hover:text-accent" href={`mailto:${showContent.contact.email}`}>
                    General: {showContent.contact.email}
                  </a>
                </li>
                <li>
                  <a className="font-medium text-on-surface transition hover:text-accent" href={`mailto:${showContent.contact.press}`}>
                    Press: {showContent.contact.press}
                  </a>
                </li>
                <li>
                  <a className="font-medium text-on-surface transition hover:text-accent" href={`mailto:${showContent.contact.general}`}>
                    Collaborations: {showContent.contact.general}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-[0.3em] text-accent">Social</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {socials.map((social) => (
                  <li key={social.platform}>
                    <a
                      className="font-medium text-on-surface transition hover:text-accent"
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {social.platform.toUpperCase()}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>
      <Schema id="breadcrumb-contact" data={breadcrumbs} />
    </div>
  );
};

export default ContactPage;


