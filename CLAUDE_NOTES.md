# Oh KAY Writers — Portfolio Site — Claude Session Notes

## Last Session: 2026-06-08
## Status: Initial build complete, builds clean (14 pages + sitemap). Not yet committed/deployed.

## What this is
Kay's professional writing/copywriting portfolio. SEPARATE from the gaming brand.
- **Repo**: Kayray1o1/ohkaywriters (GitHub) → local at `C:\Users\kayra\Documents\GitHub\ohkaywriters`
- **Deploy target**: Netlify account = **kayraysmith** (NOT kayraygaming — that's the gaming site)
- **Primary CTA**: Upwork profile → https://www.upwork.com/freelancers/~01416937ace65f7989
- **Stack**: Astro 6 + @astrojs/sitemap, content collections (glob loader)

## Design decisions (from Kay, 2026-06-08)
- Positioning: **equal split** — professional (copywriting) + creative (fiction)
- Visual style: **clean & editorial** — cream paper, ink text, Fraunces serif headings, terracotta accent (#9c4a32). Deliberately NOT the dark horror gaming look.
- Samples: **full pieces as web pages** (each sample = its own readable page, good for SEO)

## Structure
- `src/pages/index.astro` — home (hero, two-halves, featured 4, CTA bands)
- `src/pages/portfolio/index.astro` — all samples grouped Professional / Creative (#professional / #creative anchors)
- `src/pages/portfolio/[...slug].astro` — individual sample pages
- `src/pages/about.astro` — bio + "what I write" + CTA. **Has a `KAY —` comment to personalize bio.**
- `src/content/writing/*.md` — 11 samples (frontmatter: title, description, section, category, byline, excerpt, featured, order)
- `src/components/` — Header, Footer, SampleCard
- `src/styles/global.css` — design tokens

## The 11 samples (light-edited from PDFs in `Documents\Writing Portfolio\`)
Professional: usa-handmade-leather-bags, foraging, the-need-to-be-right, perfectionism-career,
how-coffee-changed-my-life, i-want-to-make-a-game, two-hours-to-move-a-car
Creative: as-the-petal-falls, shackled-love, wholesome-beach-romance, once-upon-a-highway
Featured on home (featured: true): leather bags, the-need-to-be-right, coffee, wholesome-beach-romance

## Commands
- Dev: `cd C:\Users\kayra\Documents\GitHub\ohkaywriters && npm run dev` → http://localhost:4321
- Build: `npm run build`
- ⚠️ Windows file-lock: if build fails with "Access is denied" on node_modules/.vite,
  run `rm -rf node_modules/.vite .astro dist` then rebuild (OneDrive/Defender briefly locks temp files).

## About page — DONE (2026-06-08)
- Bio now uses Kay's real Upwork bio (coffee hook, 5 yrs exp, Urban Writers + Anystories, lead-or-follow), edited per her copywriting rules.
- Services grid = her 6 real services (SEO articles, blog posts, non-fiction ghostwriting, fiction ghostwriting, interviews-into-content, copywriting).

## Next Steps
1. Kay to review the site in browser (localhost:4322 if gaming site is running, else 4321)
2. Custom domain = **ohkaywriting.co.za** (already in astro.config.mjs `site` + robots.txt). co.za = likely registered via a SA registrar (e.g. domains.co.za / Afrihost) — point DNS to Netlify at deploy.
3. Commit + push → connect repo on **kayraysmith** Netlify account → add custom domain ohkaywriting.co.za in Netlify → set registrar DNS (A @ → 75.2.60.5, CNAME www → <site>.netlify.app) → SSL auto-issues
4. Optional: real headshot on About, og:image for social sharing

## Known Issues
- `site` URL is placeholder (ohkaywriters.netlify.app) — update when custom domain is finalized
