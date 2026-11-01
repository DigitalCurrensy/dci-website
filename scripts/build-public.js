// Build step for Vercel: copy the static site into ./public, leaving out server-only code and data.
// api/ (functions + private rate cards), tests/, scripts/ and repo internals are never served.
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "public");
const SKIP = new Set(["api", "tests", "scripts", "public", "node_modules", ".git", ".github", ".vercel", "docs", "_live-site-reference", "_live-seo-backup"]);

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT);
for (const name of fs.readdirSync(ROOT)) {
  if (SKIP.has(name) || name.startsWith(".")) continue;
  fs.cpSync(path.join(ROOT, name), path.join(OUT, name), { recursive: true });
}
console.log("public/ built:", fs.readdirSync(OUT).length, "entries");
