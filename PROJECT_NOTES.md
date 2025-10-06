# Animal Farm: The Musical – Landing Site Notes

- Repository: https://github.com/danman60/AFlanding.git (main branch)
- Hosting target: Netlify, static deployment from `mockups/` directory.
  - `netlify.toml` sets publish dir to `mockups`, build command `echo "Skipping Next.js build"`, `NETLIFY_NEXT_PLUGIN_SKIP=true` to bypass Next.js runtime.
- Primary deliverable: `mockups/index.html` and `mockups/images/*` assets (static landing page derived from earlier Next.js prototype).
  - Hero, creative team panels, gallery, and media embed now reference real assets supplied in `AFAssets` directory.
  - Newsletter form intercepts submits, opens `mailto:animalfarmthemusical@gmail.com` with prefilled body and shows confirmation copy.
  - Contact email for all inquiries: `animalfarmthemusical@gmail.com`.
- Next.js project scaffold still present at repo root but not used for production; kept for future expansion.
- Additional files of note:
  - `content.json` / `theme.json` contain Animal Farm copy/theme (if Next.js build resumed).
  - `mockups/images/` includes imported headshots and hero art: `af-hero-landscape.jpg`, `steve-wallace-headshot.jpg`, `daniel-abrahamson-headshot.jpg`, `sarah-mucek-headshot.jpeg`, `af-logo-banner.jpg`, `af-logo-transparent.png`, `af-hero-landscape-alt.jpg`.
  - PDF export with encoding artifacts located at repo root; Garbled characters stem from double-encoded UTF-8 in source; recommend regenerating from UTF-8 clean HTML.
- Git commits of interest:
  - `757ee10`: mailto-based newsletter flow.
  - `3f8a5ba`: swapped mockup imagery with provided assets.
  - `d886597`: skip Netlify Next.js plugin for static deploy.

Use this as quick context when rehydrating the project.
