# Playlist pages and email list

## What was already in the repo
- Playlist records live in `const PL` inside `assets/js/main.js`. There are 33 (6 featured + 27 in the grid). Names, genres, Spotify links, and follower counts are unchanged except the label on playlist 30.
- On main, playlist 30 is `ANAIYA SMITH - Playlist Princess`. Open draft PR #3 (feat/playlist-submit-form) renames that label to `PLAYLIST PRINCESS` and adds a track-submission form at `submit.html` plus `/api/playlist-submit` and a GitHub Actions workflow. This branch keeps the rename and the same Spotify URL. It does not copy that track form or that workflow.
- There is no newsletter store on main. Rate cards already go out through Resend (`/api/rate-card`). Resend contact create has no double-opt-in flag, so this list does not join that audience.

## Founder setup
Set this environment variable on the host. Commit the name only, never the value:

- `NEWSLETTER_WEBHOOK_URL` — HTTPS endpoint that receives one JSON POST per signup (`email`, optional `name`, optional `playlist`, `consent: true`, `source`).

Until that variable is an HTTPS URL, `POST /api/newsletter` fails closed and the form says playlist updates are not open yet. If the endpoint's tool supports double opt-in, turn that on there. This server sends the signup once.

No date of birth is collected.
