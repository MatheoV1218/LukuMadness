# LukuMadness USA — website

Marketing site for LukuMadness, a Greek café in White Plains, NY. React 19 + Vite + React Router, deployed on Vercel.

## Scripts

```bash
npm run dev      # local dev server (client-rendered)
npm run build    # typecheck → client build → server build → prerender
npm run preview  # serve dist/ (note: doesn't mimic Vercel's clean URLs)
npm run lint
```

## How the build works

Every route is **prerendered to static HTML** at build time so search engines and link previews
(iMessage, Facebook, etc.) get real content and per-page meta tags; React then hydrates it.

1. `vite build` — client bundle into `dist/`
2. `vite build --ssr src/entry-server.tsx` — server renderer into `dist-ssr/`
3. `scripts/prerender.mjs` — writes `dist/index.html`, `menu.html`, `story.html`, `app.html`,
   `delete-account.html`, `404.html` and `sitemap.xml`

`vercel.json` uses `cleanUrls`, so `/menu` serves `menu.html`, and unknown paths get `404.html` with a real 404 status.

## Where things live

| What | File |
| --- | --- |
| Address, phone, hours, social + ordering links | `src/data/site.ts` |
| Menu items, prices, photos | `src/data/menuData.ts` |
| Page titles, descriptions, share images, structured data | `src/seo/meta.ts` |
| Design tokens (colors, fonts, spacing) | `src/styles/global.css` |
| Share images (1200×630) | `public/og/` |

**Adding a route:** add it in `src/App.tsx` *and* add its meta to `PAGES` in `src/seo/meta.ts`
(that's what the prerenderer and sitemap iterate over).

**Adding a menu photo:** drop an optimized `.webp` (≈1200px wide) in `src/assets/img/`, import it at the
top of `menuData.ts` and set `image:` on the item. Items without a photo render as a clean text row.
