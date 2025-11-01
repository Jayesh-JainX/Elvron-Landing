# Elvron

Elvron is the decentralized AI compute marketplace and GPU rental platform for the future of open, community-driven AI.

This landing site is built with Vite + React + TypeScript and styled with Tailwind CSS and shadcn/ui. Routing is handled by `react-router-dom`, data fetching by `@tanstack/react-query`, and Vercel Web Analytics is integrated.

## Getting Started

- Requirements: `Node >= 18`, `npm >= 8`
- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Build for production: `npm run build`
- Preview production build: `npm run preview`

## Figma Design

- [Elvron Template](https://www.figma.com/design/PHH3euonLUGCCRo4sbSzZR/Elvron-Template?node-id=7-3503&t=HcqQyAHu10FUHXp4-1)

## Vercel Analytics

This project includes Vercel Web Analytics. It is automatically active when deployed on Vercel, and has minimal impact on performance.

- Package: `@vercel/analytics`
- Import: `import { Analytics } from '@vercel/analytics/react'`
- Rendered in: `src/App.tsx`

Snippet used in `src/App.tsx`:

```tsx
import { Analytics } from "@vercel/analytics/react";

// ... inside the App component JSX
<Analytics />;
```

Notes:

- Analytics events are collected only on Vercel deployments by default.
- No additional configuration is needed for basic page view tracking.

## Deploying to Vercel

- Ensure you have a Vercel account and the CLI: `npm i -g vercel`
- From the project root, run: `vercel` (first time) and follow prompts
- Subsequent deploys: `vercel --prod`

This repository includes `vercel.json` for basic configuration and `public/` assets for SEO (`sitemap.xml`, `robots.txt`, `manifest.json`).

## Scripts

- `npm run dev` — Launches the Vite dev server
- `npm run build` — Type-checks and builds the app into `dist/`
- `npm run build:dev` — Development-mode build
- `npm run preview` — Serves the built app locally

## Tech Stack

- React 18, TypeScript, Vite
- Tailwind CSS, shadcn/ui (Radix UI)
- React Router, TanStack Query
- Vercel Web Analytics
