# Project Portfolio Web

Bilingual (TH/EN) junior Full Stack portfolio landing page.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before deploy

1. Edit `src/content/site.ts` — name, email, LinkedIn, about, experience
2. Add `public/cv.pdf`
3. Add project screenshots under `public/projects/`
4. Deploy to [Vercel](https://vercel.com) (connect this repo)

## Structure

```
src/
  app/              # pages & layout
  components/       # UI sections
  content/site.ts   # all copy + project data (TH/EN)
  lib/i18n.tsx      # language toggle (localStorage)
public/
  cv.pdf            # your CV (add manually)
```
