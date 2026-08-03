# Avery Stone — Premium Portfolio

A fully customizable, dark-first personal portfolio built with Next.js 15 App Router, React, TypeScript, Tailwind CSS, Framer Motion, GSAP, Lenis, Lucide icons, and Next Image.

## Project structure

- [`data/site.ts`](data/site.ts) — the single source of truth for all personal details, navigation, colors, copy, social links, projects, skills, experience, achievements, services, testimonials, and journal posts.
- [`app/page.tsx`](app/page.tsx) — page composition only; sections are reusable and content-free.
- [`components/`](components) — reusable UI, atmosphere, navigation, section, card, and footer components.
- [`public/images/`](public/images) — replaceable local SVG artwork and portrait assets.

## Edit text, links, and colors

Open [`data/site.ts`](data/site.ts) and update the matching property. The page is rendered directly from this object, so text, links, stats, cards, and navigation update without changing component code.

Theme colors live inside `siteData.theme` as `primary`, `secondary`, `background`, and `accent`. To apply custom values automatically, update the CSS variables in [`app/globals.css`](app/globals.css) to reference your chosen palette, or change the shared variables at the top of that file.

## Replace images

1. Add a `.png`, `.jpg`, `.jpeg`, `.webp`, or `.svg` file inside [`public/images/`](public/images/).
2. Change the matching filename in [`data/site.ts`](data/site.ts), for example `avatar: "/images/my-avatar.webp"`.
3. For remote image URLs, add the domain to `images.remotePatterns` in [`next.config.mjs`](next.config.mjs).

All displayed images use Next Image with responsive sizing and meaningful alt text.

## Add a project

Add another object to `siteData.projects` with `title`, `image`, `description`, `technologies`, `github`, `live`, `year`, and `category`. The [`ProjectCard`](components/ProjectCard.tsx) component renders it automatically.

## Animations and accessibility

The site includes Framer Motion entrance/reveal animations, GSAP/ScrollTrigger parallax and timeline motion, Lenis smooth scrolling, particles, a mouse-follow glow, magnetic buttons, counters, theme switching, and a loading screen. Every animation is skipped or minimized when `prefers-reduced-motion: reduce` is active. The layout uses semantic sections, accessible labels, keyboard-focusable controls, responsive typography, and alt text.

To disable the enhanced motion globally, remove the Lenis/GSAP effect from [`components/Providers.tsx`](components/Providers.tsx) and set `reduced` behavior in the Framer Motion components. To disable only the visual atmosphere, remove [`AnimatedBackground`](components/Atmosphere.tsx:5) and [`Particles`](components/Atmosphere.tsx:21) from [`app/page.tsx`](app/page.tsx).

## Run locally

Install Node.js 20+ first, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Deploy to Vercel

Import the repository into Vercel. The framework is detected as Next.js automatically. Build command: `npm run build`; output settings can remain at their defaults.

## Deploy to Netlify

Connect the repository in Netlify and use:

- Build command: `npm run build`
- Publish directory: `.next`
- Node version: `20`

For the best Next.js support, enable the official Netlify Next.js runtime/plugin if Netlify does not add it automatically.

## Notes

The included [`index.html`](index.html), [`styles.css`](styles.css), and [`script.js`](script.js) are the original static prototype files and are no longer used by the Next.js App Router. They can be archived or removed after confirming the new app is the intended deployment entry point.
# avery-portfolio 
