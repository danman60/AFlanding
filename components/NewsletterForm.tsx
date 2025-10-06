'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { showContent } from '@/lib/content';

export const NewsletterForm = () => {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  return (
    <form
      id="newsletter"
      action={showContent.newsletterAction}
      method="post"
      className="flex flex-col gap-3 sm:flex-row"
      onSubmit={(event) => {
        if (showContent.newsletterProvider === 'static') {
          event.preventDefault();
          setStatus('success');
        }

        if (typeof window !== 'undefined') {
          window.dispatchEvent(
            new CustomEvent('analytics:cta', {
              detail: {
                event: 'newsletter_submit',
                email: (event.currentTarget.elements.namedItem('email') as HTMLInputElement)?.value,
              },
            })
          );
        }
      }}
      data-analytics="newsletter"
    >
      <label className="sr-only" htmlFor="newsletter-email">
        Email address
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="you@example.com"
        className="w-full flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-base text-on-surface placeholder:text-on-surface/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
      />
      <Button type="submit" size="lg" className="px-8" data-analytics="newsletter-cta">
        Join Mailing List
      </Button>
      {status === 'success' ? (
        <p className="w-full text-sm text-accent sm:w-auto sm:pl-4">
          Thanks for joining! We will be in touch soon.
        </p>
      ) : null}
    </form>
  );
};


