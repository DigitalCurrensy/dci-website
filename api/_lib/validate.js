// Pure validation for the playlist submit form. No I/O, no secrets.
const PLAYLISTS = require("./playlists");

const MAX = { name: 100, artist: 100, email: 254, track: 300, note: 500 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const TRACK_HOSTS = ["open.spotify.com", "spotify.link", "music.apple.com", "soundcloud.com", "youtube.com", "www.youtube.com", "youtu.be", "audiomack.com", "bandcamp.com", "tidal.com", "deezer.com"];

function clean(v, max) {
  return String(v == null ? "" : v).replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, max);
}

function trackOk(url) {
  let u;
  try { u = new URL(url); } catch { return false; }
  if (u.protocol !== "https:") return false;
  const h = u.hostname.toLowerCase();
  return TRACK_HOSTS.some((t) => h === t || h.endsWith("." + t));
}

function validateSubmission(body) {
  const b = body && typeof body === "object" ? body : {};
  const errors = [];
  // Honeypot: real people never fill the hidden "website" field.
  if (clean(b.website, 200) !== "") return { ok: false, spam: true, errors: ["spam"] };
  const data = {
    name: clean(b.name, MAX.name),
    artist: clean(b.artist, MAX.artist),
    email: clean(b.email, MAX.email).toLowerCase(),
    track: clean(b.track, MAX.track),
    playlist: clean(b.playlist, 120),
    note: clean(b.note, MAX.note),
    consent_terms: b.consent_terms === true || b.consent_terms === "on" || b.consent_terms === "true",
    consent_email: b.consent_email === true || b.consent_email === "on" || b.consent_email === "true",
  };
  if (!data.name) errors.push("name");
  if (!data.artist) errors.push("artist");
  if (!EMAIL_RE.test(data.email)) errors.push("email");
  if (!trackOk(data.track)) errors.push("track");
  if (!PLAYLISTS.includes(data.playlist)) errors.push("playlist");
  if (!data.consent_terms) errors.push("consent_terms");
  return errors.length ? { ok: false, errors } : { ok: true, data };
}

module.exports = { validateSubmission, trackOk, PLAYLISTS, TRACK_HOSTS };
