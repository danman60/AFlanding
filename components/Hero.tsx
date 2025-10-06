'use client';

import { useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { showContent, themeConfig } from '@/lib/content';

export const Hero = () => {
  const hero = themeConfig.hero;

  const handleCta = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('analytics:cta', {
          detail: { event: 'hero_primary_cta', location: 'hero', label: 'Join the Mailing List' },
        })
      );
    }
  }, []);

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: hero.overlay,
        }}
      >
        {hero.mediaType === 'video' ? (
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-50"
            autoPlay
            loop
            muted
            playsInline
            poster={hero.poster}
          >
            <source src={hero.src} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={hero.src}
            alt="Concept art hero"
            fill
            priority
            className="object-cover opacity-60"
          />
        )}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-surface to-transparent" />
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-32">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
          className="w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.45em] text-on-surface/80"
        >
          Concept Musical in Development
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl text-5xl font-semibold leading-tight text-on-surface drop-shadow md:text-6xl"
        >
          {showContent.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl text-lg text-on-surface/80 md:text-xl"
        >
          {showContent.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
          className="flex flex-wrap gap-4"
        >
          <Button size="lg" asChild data-analytics="hero-cta" onClick={handleCta}>
            <a href="#newsletter">Join the Mailing List</a>
          </Button>
          <Button size="lg" variant="secondary" asChild data-analytics="hero-secondary-cta">
            <a href="/media">Explore Media</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};


