import content from '@/content.json';
import theme from '@/theme.json';

export type CreativeTeamMember = {
  name: string;
  role: string;
  bio: string;
  photo: string;
};

export type MediaContent = {
  teaserUrl: string;
  gallery: string[];
  playlistUrl: string;
};

export type PressQuote = {
  quote: string;
  source: string;
};

export type ContactInfo = {
  email: string;
  press: string;
  general: string;
};

export type SocialLinks = {
  x: string;
  instagram: string;
  facebook: string;
  youtube: string;
  tiktok: string;
};

export type NewsletterProvider = 'static' | 'convertkit' | 'mailchimp' | 'custom';

export type ShowContent = {
  title: string;
  tagline: string;
  synopsis: string;
  creativeTeam: CreativeTeamMember[];
  media: MediaContent;
  pressQuotes: PressQuote[];
  contact: ContactInfo;
  social: SocialLinks;
  newsletterProvider: NewsletterProvider;
  newsletterAction: string;
};

export type ThemeConfig = {
  palette: {
    primary: string;
    secondary: string;
    accent: string;
    surface: string;
    onSurface: string;
  };
  typography: {
    display: string;
    text: string;
  };
  hero: {
    mediaType: 'video' | 'image';
    src: string;
    poster: string;
    overlay: string;
  };
};

export const showContent = content as ShowContent;
export const themeConfig = theme as ThemeConfig;

export const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Creative Team', href: '/creative-team' },
  { name: 'Media', href: '/media' },
  { name: 'Press', href: '/press' },
  { name: 'Contact', href: '/contact' },
] as const;

export const siteMeta = {
  baseUrl: 'https://www.animalfarmthemusical.com',
  defaultTitle: `${showContent.title} | Concept Musical`,
  defaultDescription: showContent.tagline,
  ctaLabel: 'Join Mailing List',
  socialShareImage: '/images/social-share.png',
};

const socialBaseMap: Record<keyof SocialLinks, string> = {
  x: 'https://x.com/',
  instagram: 'https://instagram.com/',
  facebook: 'https://facebook.com/',
  youtube: 'https://youtube.com/',
  tiktok: 'https://tiktok.com/@',
};

export const resolveSocialUrl = (platform: keyof SocialLinks, handle: string) => {
  if (!handle) return '';
  if (handle.startsWith('http')) return handle;
  const base = socialBaseMap[platform];
  return `${base}${handle.replace(/^@/, '')}`;
};

export const socialLinksList = () =>
  (Object.entries(showContent.social) as [keyof SocialLinks, string][])
    .filter(([, value]) => Boolean(value))
    .map(([platform, handle]) => ({
      platform,
      handle,
      url: resolveSocialUrl(platform, handle),
    }));

