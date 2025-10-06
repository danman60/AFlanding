import Link from 'next/link';
import { siteMeta, showContent, socialLinksList } from '@/lib/content';
import { NewsletterForm } from '@/components/NewsletterForm';

export const Footer = () => {
  const socials = socialLinksList();

  return (
    <footer className="border-t border-white/10 bg-surface/90 text-on-surface">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 md:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-accent">Stay in Orbit</p>
            <h2 className="mt-2 text-2xl font-semibold">Receive development updates first.</h2>
          </div>
          <NewsletterForm />
          <p className="text-sm text-on-surface/70">We respect inboxes. Expect periodic updates at key milestones.</p>
        </div>
        <div className="grid gap-6 text-sm">
          <div>
            <h3 className="font-semibold uppercase tracking-wide text-on-surface/80">Contact</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a className="transition hover:text-accent" href={`mailto:${showContent.contact.email}`}>
                  General: {showContent.contact.email}
                </a>
              </li>
              <li>
                <a className="transition hover:text-accent" href={`mailto:${showContent.contact.press}`}>
                  Press: {showContent.contact.press}
                </a>
              </li>
              <li>
                <a className="transition hover:text-accent" href={`mailto:${showContent.contact.general}`}>
                  Collaboration: {showContent.contact.general}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold uppercase tracking-wide text-on-surface/80">Social</h3>
            <ul className="mt-3 space-y-2">
              {socials.map((social) => (
                <li key={social.platform}>
                  <a className="transition hover:text-accent" href={social.url} target="_blank" rel="noreferrer">
                    {social.platform.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold uppercase tracking-wide text-on-surface/80">Explore</h3>
            <ul className="mt-3 space-y-2">
              {navigationWithHome.map((item) => (
                <li key={item.href}>
                  <Link className="transition hover:text-accent" href={item.href}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 bg-black/20 py-6 text-center text-xs uppercase tracking-[0.3em] text-on-surface/60">
        Â© {new Date().getFullYear()} {showContent.title}. All development materials subject to change.
      </div>
    </footer>
  );
};

const navigationWithHome = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Creative Team', href: '/creative-team' },
  { name: 'Media', href: '/media' },
  { name: 'Press', href: '/press' },
  { name: 'Contact', href: '/contact' },
];


