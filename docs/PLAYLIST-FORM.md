# Playlist submit form (`/submit.html` → `/api/playlist-submit`)
Hosting: static site on Vercel; the form posts to a Vercel serverless function. No database — each submission is emailed via Resend (free tier) and, only with the optional consent box ticked, added to a Resend audience.

## Founder / ARCHIE setup (nothing here is created by this PR)
1. Vercel project env vars (Production + Preview): `RESEND_API_KEY`, `PLAYLIST_FORM_TO` (inbox), `PLAYLIST_FORM_FROM` (sender on a Resend-verified domain).
2. Optional: create a Resend audience "DCI Playlists" and set `RESEND_AUDIENCE_ID`.
3. Optional spam check: honeypot is built in. Turnstile is supported server-side via `TURNSTILE_SECRET_KEY`, but the page has no widget yet — do NOT set that variable until a follow-up adds the widget + site key, or every submission will fail.
4. Note: Vercel Hobby is for non-commercial use; confirm the plan this project is on.
Until step 1 is done the API returns 503 and the page shows "Submissions open soon".

## Tests
`npm test` (node:test) — validation, honeypot, consent-gated audience add, the 33 playlist names match `assets/js/main.js`.
