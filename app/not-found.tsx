import Link from 'next/link';
import { Button } from '@/components/ui/button';

const NotFound = () => (
  <div className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-center justify-center gap-6 px-4 text-center">
    <p className="text-xs uppercase tracking-[0.4em] text-accent">404</p>
    <h1 className="text-4xl font-semibold text-on-surface">This scene isn&apos;t staged yet.</h1>
    <p className="text-on-surface/70">
      The page you are looking for hasn&apos;t taken the spotlight. Check the navigation or head back to the home page.
    </p>
    <Button asChild>
      <Link href="/">Return home</Link>
    </Button>
  </div>
);

export default NotFound;


