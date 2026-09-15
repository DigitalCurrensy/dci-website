# How to use Digital Currensy

Two tracks live in this document:

1. **Artists and labels** — how to use the live platform.
2. **Developers** — how to run and edit this website repo.

---

## Watch first

- Official overview: [youtube.com/watch?v=T4005q3Xi4I](https://www.youtube.com/watch?v=T4005q3Xi4I)
- Channel: [youtube.com/@DigitalCurrensy](https://www.youtube.com/@DigitalCurrensy)
- Site hero video in this repo: [bg.mp4](../bg.mp4)

Open the live site in another tab while you follow the steps: [digitalcurrensy.com](https://www.digitalcurrensy.com).

---

## Artists and labels

### What you need before you apply

- A finished master (WAV or AIFF preferred).
- Cover art that matches the release title.
- Credits: featured artists, writers, producers, and ownership splits that add up to 100%.
- A clean version and an instrumental if you want the song considered for film, TV, sports, or brand work.
- A short note on the release date you want and the platforms that matter to you.

You do **not** pay an upfront distribution fee. If accepted, the live site states an **80 / 20** split (artist 80%, DCI 20%).

### Step 1 — Read the site

1. Go to [digitalcurrensy.com](https://www.digitalcurrensy.com).
2. Use the top nav: About, Pricing, Services, Playlists, Sync.
3. Confirm the offer you want: distribution only, distribution + marketing, playlist review, and/or sync prep.

### Step 2 — Optional tools

- **DCI GPT** on the site: ask about release setup, royalties, playlist readiness, or label services. Treat answers as a starting point, not legal or financial advice.
- **Label IQ AI** at [app.labeliq.ai](https://app.labeliq.ai): generate songs, jingles, videos, or campaign assets. DCI still handles the official release.

### Step 3 — Apply

Open the intake form:

[dci.formberry.io/DigitalCurrensyInc-Questionnaire](https://dci.formberry.io/DigitalCurrensyInc-Questionnaire)

Submit accurate contact info, catalog details, and links to current work. Incomplete metadata slows review.

### Step 4 — Review and setup

If DCI accepts the application they typically:

1. Confirm metadata, ISRC / UPC needs, and artwork.
2. Set payees and splits.
3. Schedule the release to major platforms.
4. Scope any marketing, playlist, or sync work separately.

### Step 5 — After the release is live

- Use reporting for streams and payouts when your dashboard access is enabled.
- Email [info@digitalcurrensy.com](mailto:info@digitalcurrensy.com) to submit a track for playlist consideration.
- Sync review requires clean files, stems, metadata, and rights notes. Submission is not a placement.

### What is not guaranteed

- Playlist placement
- Sync / licensing deals
- Streams, followers, or algorithmic lift
- Acceptance of every application

DCI reviews fit, quality, timing, and available inventory.

---

## Developers — run this website locally

This repository is a **static HTML** site. There is no application database and no Next.js build on the active V2 page.

```bash
git clone https://github.com/DigitalCurrensy/dci-website.git
cd dci-website
npm start
```

Then open [http://localhost:3000](http://localhost:3000).

Equivalent command if you prefer Python:

```bash
python3 -m http.server 3000
```

### What to edit

| Task | File |
| --- | --- |
| Page copy, sections, CTAs | `index.html` |
| Styles | `assets/css/main.css` |
| Client behavior | `assets/js/main.js` |
| Images and playlist art | `assets/images/` |
| Hero motion | `bg.mp4`, `bg.webm`, `assets/video/` |
| SEO text for crawlers / LLMs | `llms.txt`, `robots.txt`, `sitemap.xml` |

Do not treat `_live-site-reference/` as production code. It is a frozen Next.js snapshot of the previous site.

Deploy is Vercel. `vercel.json` publishes the repo root. Dummy `build` scripts exist only so Vercel does not look for a Next.js app.

Full file map: [ARCHITECTURE.md](ARCHITECTURE.md).
