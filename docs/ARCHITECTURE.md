# Architecture — dci-website

## Purpose

`dci-website` is the public marketing site for Digital Currensy Inc.

It is a static site, not a backend service. Intake, royalties, and Label IQ AI run on other systems.

```text
Artist / visitor
    |
    v
index.html  (this repo, Vercel)
    |
    +--> Apply form     https://dci.formberry.io/DigitalCurrensyInc-Questionnaire
    +--> Label IQ AI    https://app.labeliq.ai
    +--> Email          info@digitalcurrensy.com
```

## Runtime

| Layer | Choice |
| --- | --- |
| Page | Single `index.html` |
| Assets | `assets/css`, `assets/js`, `assets/images`, `assets/gifs`, `assets/video` |
| Host | Vercel |
| Build | None — `package.json` prints a no-op so Vercel does not run Next.js |
| Output | Repo root (`vercel.json` `outputDirectory`: `.`) |
| Database | None in this repo |

## Surfaces

| Name | URL | Source |
| --- | --- | --- |
| Production | https://www.digitalcurrensy.com | Live public site |
| Repo preview | https://dci-website-two.vercel.app | This GitHub repo on Vercel |
| Apply | Formberry questionnaire | External |
| Label IQ AI | https://app.labeliq.ai | Separate product |

## Repository map

```text
.
├── index.html                 Active V2 page
├── formatted.html             Formatted copy of the page
├── index.backup-before-final-fix.html
├── dci-logo.png
├── bg.mp4 / bg.webm           Hero video
├── whitepaper.pdf             Historical brand document only
├── vercel.json                Static deploy config
├── package.json               No-op build + local static server
├── robots.txt / sitemap.xml / llms.txt
├── assets/
│   ├── css/main.css
│   ├── js/main.js
│   ├── gifs/
│   ├── images/approved/        Playlist and press art cleared for use
│   ├── images/proof/           Site screenshots and press captures
│   └── video/
├── _live-site-reference/     READ-ONLY Next.js archive
├── _live-seo-backup/         READ-ONLY SEO snapshot
└── docs/                     Human documentation
```

## What is not in this repo

- Artist accounts and royalty ledgers
- The Formberry application workflow
- Label IQ AI generation pipeline
- Production DNS / domain cutover automation

Those systems are documented only as outbound links from the marketing site.

## Deploy

1. Push to `main`.
2. Vercel runs `npm run vercel-build` (echo only).
3. Vercel publishes the repository root.
4. Preview: https://dci-website-two.vercel.app

Do not point `digitalcurrensy.com` at a new project without a URL-preservation plan. Critical paths from the older Next.js site are listed in `LIVE_SITE_PRESERVATION_NOTES.md`.

## Content rules

- `whitepaper.pdf` is historical context. It is not a live token sale.
- `_live-site-reference/` is reference material. Do not deploy it as the current site.
- Keep Distribute, DCI GPT, Label IQ AI, and Login CTAs unless product explicitly retires them.
