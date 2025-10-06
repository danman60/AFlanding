export const designTokens = {
  colors: {
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    accent: 'var(--color-accent)',
    surface: 'var(--color-surface)',
    onSurface: 'var(--color-on-surface)',
  },
  spacing: {
    none: '0',
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  typography: {
    display: 'var(--font-display)',
    text: 'var(--font-text)',
    scale: {
      xs: '0.8125rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      h2: '2rem',
      h1: '2.75rem',
    },
  },
  motion: {
    duration: {
      fast: '150ms',
      base: '300ms',
      slow: '500ms',
    },
    easing: {
      standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
      damped: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
    },
  },
} as const;

