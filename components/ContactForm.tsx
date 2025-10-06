'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  return (
    <form
      className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur"
      action="https://example.com/contact"
      method="post"
      onSubmit={(event) => {
        event.preventDefault();
        setStatus('sent');
      }}
    >
      <div className="grid gap-2">
        <label className="text-sm font-medium text-on-surface" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="rounded-xl border border-white/10 bg-surface/70 px-4 py-3 text-on-surface focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm font-medium text-on-surface" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-xl border border-white/10 bg-surface/70 px-4 py-3 text-on-surface focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm font-medium text-on-surface" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="rounded-xl border border-white/10 bg-surface/70 px-4 py-3 text-on-surface focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
          required
        />
      </div>
      <Button type="submit" className="mt-2 w-full">
        Send Message
      </Button>
      {status === 'sent' ? (
        <p className="text-sm text-accent">Thanks! We will reply shortly.</p>
      ) : null}
    </form>
  );
};


