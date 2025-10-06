# Broadway Site Builder ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“ Pre-Production Template

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

- `app/` ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“ Next.js app router pages with semantic, accessible layouts
- `components/` ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“ UI building blocks (Hero, NavBar, NewsletterForm, etc.) powered by shadcn/ui primitives
- `lib/` ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“ Content loaders, schema helpers, and press data utilities
- `styles/` ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“ Design tokens consumed across the UI layer
- `public/` ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“ Placeholder media, hero art, and share images
- `content.json` / `theme.json` ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“ Primary data sources for show content and branding tokens

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

- `npm run dev` ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“ Start the development server
- `npm run build` ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“ Production build
- `npm run start` ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“ Start the production server
- `npm run lint` ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“ ESLint with Next core rules
- `npm run format` ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“ Prettier with Tailwind plugin

## Analytics Hooks

Primary CTAs dispatch a custom `analytics:cta` event on `window`. Subscribe to this event to integrate analytics without touching UI code.

## Deployment

Run `npm run build` and deploy the `.next` output via your preferred platform (Vercel recommended). Ensure environment variables or serverless functions back your newsletter/contact endpoints if you replace the static placeholders.


## Netlify Deployment

This repo includes a static mockup under `mockups/` tailored for Netlify:

1. Netlify build command: _(leave blank)_
2. Publish directory: `mockups`
3. Output includes `index.html` plus `/images` assets.

Alternatively, use the CLI:

```bash
netlify deploy --prod --dir=mockups
```