import { PressQuote, showContent } from './content';

type NewsItem = {
  title: string;
  date: string;
  summary: string;
  href: string;
};

const defaultNews: NewsItem[] = [
  {
    title: 'Creative residency confirmed',
    date: '2025-05-12',
    summary: 'Animal Farm: The Musical secures a development home with Chicago Music Theatre for a three-week staging lab.',
    href: '#',
  },
  {
    title: 'Concept album enters production',
    date: '2025-04-01',
    summary: 'The original creative trio heads into the studio with a 10-piece ensemble to capture the score\'s revolutionary sound.',
    href: '#',
  },
];

export const pressQuotes = (): PressQuote[] => showContent.pressQuotes ?? [];

export const newsFeed = (): NewsItem[] => defaultNews;
