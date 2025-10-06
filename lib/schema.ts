import { navigation, resolveSocialUrl, showContent } from './content';

export const buildOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: showContent.title,
  url: 'https://www.example.com',
  sameAs: (Object.entries(showContent.social) as [keyof typeof showContent.social, string][]) 
    .map(([platform, handle]) => resolveSocialUrl(platform, handle))
    .filter(Boolean),
  contactPoint: [
    {
      '@type': 'ContactPoint',
      email: showContent.contact.email,
      contactType: 'customer support',
    },
    {
      '@type': 'ContactPoint',
      email: showContent.contact.press,
      contactType: 'press inquiries',
    },
  ],
});

export const buildBreadcrumbSchema = (segments: { name: string; href: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: segments.map((segment, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: segment.name,
    item: `https://www.example.com${segment.href}`,
  })),
});

export const buildNavigationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'SiteNavigationElement',
  name: showContent.title,
  url: 'https://www.example.com',
  about: navigation.map((item) => ({
    '@type': 'WebPage',
    name: item.name,
    url: `https://www.example.com${item.href}`,
  })),
});


