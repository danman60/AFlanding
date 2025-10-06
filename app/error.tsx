'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-center justify-center gap-6 px-4 text-center">
      <p className="text-xs uppercase tracking-[0.4em] text-accent">500</p>
      <h1 className="text-4xl font-semibold text-on-surface">Something went off-script.</h1>
      <p className="text-on-surface/70">
        We hit an unexpected snag. Try refreshing the page or return home while we reset the stage.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button onClick={() => reset()}>Try again</Button>
        <Button variant="secondary" asChild>
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </div>
  );
};

export default Error;


