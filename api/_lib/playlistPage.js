"use strict";

const { playlists } = require("./playlists");

const SITE = "https://www.digitalcurrensy.com";

function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&" + "amp;")
    .replace(/</g, "&" + "lt;")
    .replace(/>/g, "&" + "gt;")
    .replace(/"/g, "&" + "quot;")
    .replace(/'/g, "&" + "#39;");
}

function metaDescription(text) {
  const clean = String(text).replace(/\s+/g, " ").trim();
  if (clean.length <= 155) return clean;
  const cut = clean.slice(0, 155);
  const i = cut.lastIndexOf(" ");
  return (i > 80 ? cut.slice(0, i) : cut).trim();
}

function renderNewsletterForm(list, selectedName) {
  const options = ['<option value="">No preference</option>']
    .concat(list.map((p) => {
      const sel = p.name === selectedName ? " selected" : "";
      return `<option value="${esc(p.name)}"${sel}>${esc(p.name)}</option>`;
    }))
    .join("");
  return `<section class="list-wrap" id="playlist-list">
<style>
.list-wrap{max-width:640px;margin:36px auto 0}
.playlist-list h2{font-family:var(--disp,Georgia,serif);font-weight:400;font-size:clamp(26px,3vw,40px);margin:0 0 8px}
.playlist-list .lead{color:var(--silver,#9A9A9B);margin:0 0 8px;line-height:1.5}
.playlist-list label{display:block;margin:14px 0 6px;font-size:14px}
.playlist-list input[type=email],.playlist-list input[type=text],.playlist-list select{width:100%;min-height:44px;padding:10px 12px;border-radius:12px;border:1px solid var(--gun,#333);background:transparent;color:inherit;font:inherit}
.playlist-list .chk{display:flex;gap:10px;align-items:flex-start;font-weight:400;line-height:1.45}
.playlist-list .chk input{margin-top:4px}
.playlist-list .hp{position:absolute;left:-10000px;width:1px;height:1px;overflow:hidden}
.playlist-list button{margin-top:18px;min-height:44px;padding:0 22px;border-radius:999px;border:1px solid var(--green-lite,#1f9c6a);background:var(--green,#0F6B45);color:#fff;font-weight:600;cursor:pointer}
.playlist-list .msg{min-height:1.4em;color:var(--silver,#9A9A9B)}
.playlist-list a{color:var(--green-lite,#1f9c6a)}
</style>
<form class="playlist-list" method="post" action="/api/newsletter" novalidate>
<h2>Playlist updates</h2>
<p class="lead">Occasional notes when a DCI playlist changes. No spam. Unsubscribe any time.</p>
<label for="nl-email">Email</label>
<input id="nl-email" name="email" type="email" required maxlength="254" autocomplete="email" inputmode="email">
<label for="nl-name">Name (optional)</label>
<input id="nl-name" name="name" type="text" maxlength="100" autocomplete="name">
<label for="nl-playlist">Favorite playlist (optional)</label>
<select id="nl-playlist" name="playlist">${options}</select>
<div class="hp" aria-hidden="true"><label for="nl-website">Website</label><input id="nl-website" name="website" type="text" tabindex="-1" autocomplete="off"></div>
<label class="chk"><input type="checkbox" name="consent" value="yes" required> <span>Yes, email me occasional playlist updates from Digital Currensy. I can unsubscribe any time. <a href="/privacy">Privacy policy</a></span></label>
<button type="submit">Join the list</button>
<p class="msg" data-list-msg role="status"></p>
</form>
</section>
<script src="/assets/js/playlist-list.js" defer></script>`;
}

function pageShell({ title, description, canonical, jsonLd, body }) {
  const meta = metaDescription(description);
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)}</title>
<meta name="description" content="${esc(meta)}">
<link rel="canonical" href="${esc(canonical)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(meta)}">
<meta property="og:url" content="${esc(canonical)}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Digital Currensy Inc.">
<meta property="og:image" content="${SITE}/dci-logo.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(meta)}">
<meta name="twitter:image" content="${SITE}/dci-logo.png">
<link rel="stylesheet" href="/assets/css/main.css">
<link rel="icon" type="image/png" href="/dci-logo.png">
<script type="application/ld+json">${jsonLd}</script>
<style>
.plpage{padding:clamp(32px,6vw,80px) 0 64px;color:var(--whi);max-width:760px}
.plpage h1{font-family:var(--disp);font-weight:400;font-size:clamp(36px,5vw,64px);line-height:1.05;margin:8px 0 12px}
.plpage .genre{font-family:var(--mono);font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--green-lite)}
.playlist-description{font-size:18px;line-height:1.6;color:var(--light);margin:18px 0}
.plpage .links{display:flex;flex-wrap:wrap;gap:12px;margin-top:8px}
.plpage .links a{display:inline-flex;align-items:center;min-height:44px;padding:0 18px;border-radius:999px;text-decoration:none}
.top{display:flex;justify-content:space-between;align-items:center;padding-block:20px}
.top a{color:var(--silver);font-size:13px;text-decoration:none;margin-left:16px}
</style>
</head>
<body>
<header class="wrap top"><a href="/" style="margin:0"><img src="/dci-logo.png" alt="Digital Currensy Inc." width="40" height="40"></a><nav><a href="/">Home</a><a href="/playlists/">Playlists</a><a href="/privacy">Privacy</a></nav></header>
<main class="wrap plpage">
${body}
</main>
<footer class="wrap" style="padding-block:40px;color:var(--silver);font-size:14px">© 2026 Digital Currensy Inc. · <a href="/privacy" style="color:var(--silver)">Privacy policy</a></footer>
</body>
</html>
`;
}

function renderPlaylistPage(p, list = playlists) {
  const canonical = `${SITE}/playlists/${p.slug}/`;
  const title = `${p.name} — DCI Playlist`;
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "MusicPlaylist",
    name: p.name,
    description: p.description,
    genre: p.genre,
    url: canonical,
    sameAs: p.link,
  });
  const body = `<p class="genre">${esc(p.genre)}</p>
<h1>${esc(p.name)}</h1>
<p class="playlist-description" data-playlist="${esc(p.slug)}">${esc(p.description)}</p>
<p class="links"><a class="btn-green" href="${esc(p.link)}" target="_blank" rel="noopener">Listen on Spotify</a><a class="btn-g" href="/playlists/">All playlists</a></p>
<p style="color:var(--mid);font-size:13px;line-height:1.5;margin-top:18px">Listening does not guarantee placement, streams, or saves. DCI reviews music for fit when artists send it in.</p>
${renderNewsletterForm(list, p.name)}`;
  return pageShell({ title, description: p.description, canonical, jsonLd, body });
}

function renderPlaylistIndex(list = playlists) {
  const canonical = `${SITE}/playlists/`;
  const description = "Digital Currensy in-house playlists: mood, who each one is for, and the tracks that fit. Thirty-three curated shelves across rap, pop, country, electronic, and more.";
  const items = list.map((p) => `<li><a href="/playlists/${esc(p.slug)}/">${esc(p.name)}</a> <span style="color:var(--mid)">· ${esc(p.genre)}</span></li>`).join("");
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "DCI Playlists",
    description,
    url: canonical,
  });
  const body = `<p class="genre">In-house network</p>
<h1>Playlists</h1>
<p class="playlist-description">Each playlist has its own page: the mood, who it is for, and what kind of tracks fit. Nothing here is a placement promise.</p>
<ul style="line-height:1.7;padding-left:18px">${items}</ul>
${renderNewsletterForm(list, "")}`;
  return pageShell({ title: "Playlists — Digital Currensy Inc.", description, canonical, jsonLd, body });
}

module.exports = { esc, metaDescription, renderNewsletterForm, renderPlaylistPage, renderPlaylistIndex, SITE };
