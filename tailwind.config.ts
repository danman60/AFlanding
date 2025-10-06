import type { Config } from 'tailwindcss';
import animatePlugin from 'tailwindcss-animate';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
      },
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        surface: 'var(--color-surface)',
        'on-surface': 'var(--color-on-surface)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        text: ['var(--font-text)', 'sans-serif'],
      },
      boxShadow: {
        'glow-accent': '0 0 30px rgba(245, 158, 11, 0.35)',
      },
    },
  },
  plugins: [animatePlugin],
};

export default config;

