'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navigation, showContent, siteMeta } from '@/lib/content';
import { cn } from '@/lib/utils';

export const NavBar = () => {
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full border-b border-white/5 bg-surface/70 backdrop-blur-lg transition-all',
        isScrolled ? 'py-2 shadow-[0_10px_30px_rgba(15,23,42,0.35)]' : 'py-4',
      )}
      role="banner"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3" aria-label={`${showContent.title} home`}>
          <span className="text-lg font-semibold tracking-[0.2em] uppercase text-accent drop-shadow">{showContent.title}</span>
        </Link>
        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-on-surface/80 transition hover:text-on-surface"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild>
            <Link href="#newsletter">{siteMeta.ctaLabel}</Link>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger className="rounded-full p-2 text-on-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden">
            <span className="sr-only">Open navigation</span>
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent>
            <div className="mt-6 flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl bg-white/5 px-4 py-3 text-base font-medium text-on-surface hover:bg-white/10"
                >
                  {item.name}
                </Link>
              ))}
              <Button className="mt-4" asChild>
                <Link href="#newsletter">{siteMeta.ctaLabel}</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};


