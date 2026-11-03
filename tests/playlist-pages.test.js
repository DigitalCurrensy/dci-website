const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { playlists, wordCount } = require("../api/_lib/playlists");
const { renderPlaylistPage, metaDescription } = require("../api/_lib/playlistPage");

const root = path.join(__dirname, "..");

function decode(s) {
  const amp = "&";
  return String(s)
    .replace(new RegExp(amp + "lt;", "g"), "<")
    .replace(new RegExp(amp + "gt;", "g"), ">")
    .replace(new RegExp(amp + "quot;", "g"), '"')
    .replace(new RegExp(amp + "#39;", "g"), "'")
    .replace(new RegExp(amp + "amp;", "g"), amp);
}

function textOf(html, className) {
  const re = new RegExp(`<p class="${className}"[^>]*>([\\s\\S]*?)</p>`);
  const m = html.match(re);
  assert.ok(m, "missing " + className);
  return decode(m[1]).replace(/\s+/g, " ").trim();
}

function attr(html, re) {
  const m = html.match(re);
  assert.ok(m, String(re));
  return decode(m[1]);
}

function readPl() {
  const js = fs.readFileSync(path.join(root, "assets/js/main.js"), "utf8");
  const line = js.split("\n").find((l) => l.includes("const PL="));
  assert.ok(line, "PL missing from main.js");
  return JSON.parse(line.slice(line.indexOf("{"), line.lastIndexOf("}") + 1));
}

test("stored playlist list is the real 33, including PLAYLIST PRINCESS", () => {
  const pl = readPl();
  const fromJs = [...pl.featured, ...pl.grid];
  assert.equal(fromJs.length, 33);
  assert.equal(playlists.length, 33);
  assert.deepEqual(fromJs.map((p) => p.name), playlists.map((p) => p.name));
  for (let i = 0; i < playlists.length; i++) {
    const a = fromJs[i];
    const b = playlists[i];
    assert.equal(a.genre, b.genre);
    assert.equal(a.foll, b.foll);
    assert.equal(a.link, b.link);
    assert.equal(a.slug, b.slug);
    assert.equal(a.description, b.description);
    if (b.desc) assert.equal(a.desc, b.desc);
  }
  assert.equal(fromJs[29].name, "PLAYLIST PRINCESS");
  assert.equal(fromJs[29].foll, 571);
  assert.ok(fromJs[29].link.includes("5T5mPmAyRp76Rpf0QNOPKW"));
});

test("each playlist page renders its own description", () => {
  const seen = new Set();
  const metas = new Set();
  for (const p of playlists) {
    const file = path.join(root, "playlists", p.slug, "index.html");
    const html = fs.readFileSync(file, "utf8");
    assert.equal(html, renderPlaylistPage(p));
    const desc = textOf(html, "playlist-description");
    assert.equal(desc, p.description);
    const words = wordCount(desc);
    assert.ok(words >= 40 && words <= 80, `${p.name} has ${words} words`);
    assert.equal(seen.has(desc), false, "duplicate description " + p.name);
    seen.add(desc);
    const meta = attr(html, /<meta name="description" content="([^"]*)">/);
    assert.equal(meta, metaDescription(p.description));
    assert.ok(p.description.startsWith(meta));
    assert.equal(metas.has(meta), false);
    metas.add(meta);
    const canonical = attr(html, /<link rel="canonical" href="([^"]*)">/);
    assert.equal(canonical, `https://www.digitalcurrensy.com/playlists/${p.slug}/`);
    const title = attr(html, /<title>([^<]*)<\/title>/);
    assert.ok(title.includes(p.name));
    const marker = attr(html, /data-playlist="([^"]*)"/);
    assert.equal(marker, p.slug);
    for (const other of playlists) {
      if (other.slug === p.slug) continue;
      assert.equal(html.includes(other.description), false, `${p.slug} leaked ${other.slug}`);
    }
    assert.equal(/\$\d|\bprice\b/i.test(html), false);
    assert.equal(/date of birth|birthdate|\bdob\b/i.test(html), false);
  }
});
