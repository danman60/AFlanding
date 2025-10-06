# Broadway Site Builder Ã¢â‚¬â€œ Pre-Production Template

A polished Next.js 14 + TypeScript starter tailored for Broadway productions in development. The project ships with a pre-production information architecture, Tailwind CSS design tokens, shadcn/ui primitives, Framer Motion enhancements, SEO metadata, and schema.org JSON-LD helpers.

## Requirements

- Node.js 18+
- npm (bundled with Node) or pnpm

## Getting Started

```bash
npm install
npm run dev
```

Then open http://localhost:3000 to view the site. Edit content in `content.json` and `theme.json` to reskin the experience.

## Project Structure

- `app/` Ã¢â‚¬â€œ Next.js app router pages with semantic, accessible layouts
- `components/` Ã¢â‚¬â€œ UI building blocks (Hero, NavBar, NewsletterForm, etc.) powered by shadcn/ui primitives
- `lib/` Ã¢â‚¬â€œ Content loaders, schema helpers, and press data utilities
- `styles/` Ã¢â‚¬â€œ Design tokens consumed across the UI layer
- `public/` Ã¢â‚¬â€œ Placeholder media, hero art, and share images
- `content.json` / `theme.json` Ã¢â‚¬â€œ Primary data sources for show content and branding tokens

## Tailwind & Design Tokens

Theme colors, typography, and motion values are exposed as CSS custom properties and in `styles/tokens.ts`. Update `theme.json` to globally restyle the site. Tailwind consumes the tokens via `tailwind.config.ts` for consistent theming.

## Content Model

`content.json` matches the `ShowContent` TypeScript type. Key fields:

- `title`, `tagline`, `synopsis`
- `creativeTeam[]` with `name`, `role`, `bio`, `photo`
- `media` object (teaser URL, gallery images, playlist link)
- `pressQuotes[]`
- `contact` and `social` details
- `newsletterProvider` + `newsletterAction`

`theme.json` matches the `ThemeConfig` type. Configure palette, typography, and hero media.

Sample blueprints are included at `content.example.json` and `theme.example.json` for quick duplication.

## Scripts

- `npm run dev` Ã¢â‚¬â€œ Start the development server
- `npm run build` Ã¢â‚¬â€œ Production build
- `npm run start` Ã¢â‚¬â€œ Start the production server
- `npm run lint` Ã¢â‚¬â€œ ESLint with Next core rules
- `npm run format` Ã¢â‚¬â€œ Prettier with Tailwind plugin

## Analytics Hooks

Primary CTAs dispatch a custom `analytics:cta` event on `window`. Subscribe to this event to integrate analytics without touching UI code.

## Deployment

Run `npm run build` and deploy the `.next` output via your preferred platform (Vercel recommended). Ensure environment variables or serverless functions back your newsletter/contact endpoints if you replace the static placeholders.

