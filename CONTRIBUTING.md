# Contributing

This repository ships a static marketing site. Keep changes small, reviewable, and easy to revert.

## Before you edit

1. Read [README.md](README.md) and [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).
2. Read [LIVE_SITE_PRESERVATION_NOTES.md](LIVE_SITE_PRESERVATION_NOTES.md).
3. Confirm whether you are changing the **active V2 page** (`index.html` + `assets/`) or only docs.

## Local check

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) and verify:

- Hero video / gif still loads
- Apply CTA still points at the Formberry questionnaire
- Label IQ AI still points at https://app.labeliq.ai
- Images in `assets/images/approved/` and `assets/images/proof/` still resolve

## Allowed changes

- Copy and layout in `index.html`
- CSS / JS under `assets/`
- Approved media under `assets/images/approved/`
- Documentation under `docs/` and `README.md`

## Do not

- Deploy or rewrite `_live-site-reference/` as the live site
- Delete SEO files (`llms.txt`, `robots.txt`, `sitemap.xml`) without a replacement
- Introduce live ICO, investment, or token-sale claims
- Change production DNS from a drive-by commit
- Commit secrets, dashboard credentials, or unapproved artist assets

## Pull requests

Use a short title and say what a visitor will see after merge.

Example: `fix: restore playlist submit CTA on mobile`.
