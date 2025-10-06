import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/NavBar';
import { Schema } from '@/components/Schema';
import { buildOrganizationSchema } from '@/lib/schema';
import { showContent, siteMeta, themeConfig } from '@/lib/content';

const themeStyles = {
  '--color-primary': themeConfig.palette.primary,
  '--color-secondary': themeConfig.palette.secondary,
  '--color-accent': themeConfig.palette.accent,
  '--color-surface': themeConfig.palette.surface,
  '--color-on-surface': themeConfig.palette.onSurface,
  '--font-display': themeConfig.typography.display,
  '--font-text': themeConfig.typography.text,
} as CSSProperties;

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.baseUrl),
  title: {
    default: siteMeta.defaultTitle,
    template: `%s | ${showContent.title}`,
  },
  description: siteMeta.defaultDescription,
  openGraph: {
    title: showContent.title,
    description: showContent.tagline,
    type: 'website',
    images: [siteMeta.socialShareImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: showContent.title,
    description: showContent.tagline,
    images: [siteMeta.socialShareImage],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-surface text-on-surface antialiased" style={themeStyles}>
        <NavBar />
        <main className="relative flex flex-col gap-20 pb-24">{children}</main>
        <Footer />
        <Schema id="organization-schema" data={buildOrganizationSchema()} />
      </body>
    </html>
  );
}
