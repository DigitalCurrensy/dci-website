import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { execFileSync } from "node:child_process";

const root = path.resolve(".");

const pngTargets = [
  ["public/assets/images/hero/dci-dashboard-preview.png", 1280, 820, 1],
  ["public/assets/images/labeliq/labeliq-platform-preview.png", 1280, 820, 13],
  ["public/assets/images/labeliq/creator-token-dashboard.jpg", 1100, 760, 15],
];

const jpgTargets = [
  ["public/assets/images/hero/dci-hero-artist.jpg", 1400, 900, 2],
  ["public/assets/images/about/studio-session.jpg", 1200, 900, 3],
  ["public/assets/images/about/artist-team.jpg", 1000, 1200, 4],
  ["public/assets/images/about/distribution-dashboard.jpg", 1200, 820, 5],
  ["public/assets/images/services/distribution.jpg", 1100, 760, 6],
  ["public/assets/images/services/royalties.jpg", 1100, 760, 7],
  ["public/assets/images/services/playlists.jpg", 1100, 760, 8],
  ["public/assets/images/services/sync.jpg", 1100, 760, 9],
  ["public/assets/images/services/label-services.jpg", 1100, 760, 10],
  ["public/assets/images/services/video-content.jpg", 1100, 760, 11],
  ["public/assets/images/playlists/next-wave.jpg", 900, 900, 12],
  ["public/assets/images/playlists/heat-check.jpg", 900, 900, 16],
  ["public/assets/images/playlists/the-come-up.jpg", 900, 900, 17],
  ["public/assets/images/playlists/late-nights.jpg", 900, 900, 18],
  ["public/assets/images/playlists/global-motion.jpg", 900, 900, 19],
  ["public/assets/images/playlists/rap-selects.jpg", 900, 900, 20],
  ["public/assets/images/labeliq/ai-song-generator.jpg", 900, 900, 21],
  ["public/assets/images/labeliq/ai-video-generator.jpg", 900, 900, 22],
  ["public/assets/images/video/official-video-placeholder.jpg", 1200, 760, 23],
  ["public/assets/images/video/short-form-video-placeholder.jpg", 1200, 420, 24],
  ["public/assets/images/video/ai-music-video-placeholder.jpg", 1200, 760, 25],
];

const videoTargets = [
  "public/assets/videos/hero/dci-hero-loop.mp4",
  "public/assets/videos/labeliq/labeliq-demo.mp4",
  "public/assets/videos/video-content/showreel-placeholder.mp4",
];

function crcTable() {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n += 1) {
    let c = n;
    for (let k = 0; k < 8; k += 1) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[n] = c >>> 0;
  }
  return table;
}

const table = crcTable();

function crc32(buffer) {
  let c = 0xffffffff;
  for (let i = 0; i < buffer.length; i += 1) {
    c = table[(c ^ buffer[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuffer = Buffer.from(type);
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])), 0);
  return Buffer.concat([length, typeBuffer, data, crc]);
}

function makePng(width, height, seed) {
  const raw = Buffer.alloc((width * 4 + 1) * height);
  for (let y = 0; y < height; y += 1) {
    const row = y * (width * 4 + 1);
    raw[row] = 0;
    for (let x = 0; x < width; x += 1) {
      const i = row + 1 + x * 4;
      const nx = x / Math.max(width - 1, 1);
      const ny = y / Math.max(height - 1, 1);
      const diagonal = (nx * 0.62 + ny * 0.42) * 160;
      const shine = Math.max(0, 1 - Math.abs(nx - 0.22 - (seed % 5) * 0.06) * 4) * 88;
      const groove = Math.sin((nx * 12 + ny * 9 + seed) * Math.PI) * 16;
      const vignette = (Math.abs(nx - 0.5) + Math.abs(ny - 0.5)) * 95;
      let value = 18 + diagonal + shine + groove - vignette;

      const waveY = 0.5 + Math.sin(nx * Math.PI * (3 + (seed % 4)) + seed) * 0.1;
      const line = Math.abs(ny - waveY);
      if (line < 0.012) value += 95 * (1 - line / 0.012);

      const vertical = Math.abs((x + seed * 17) % Math.max(48, Math.floor(width / 12)) - 2);
      if (vertical < 1.3 && ny > 0.12 && ny < 0.88) value += 28;

      if (seed % 3 === 0) {
        const circle = Math.abs(Math.hypot(nx - 0.5, ny - 0.48) - 0.25);
        if (circle < 0.012) value += 90 * (1 - circle / 0.012);
      }

      const clamped = Math.max(0, Math.min(245, value));
      raw[i] = clamped;
      raw[i + 1] = clamped;
      raw[i + 2] = Math.max(0, Math.min(255, clamped + 3));
      raw[i + 3] = 255;
    }
  }

  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;
  const idat = zlib.deflateSync(raw, { level: 9 });
  return Buffer.concat([
    signature,
    chunk("IHDR", ihdr),
    chunk("IDAT", idat),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

function writePng(relativePath, width, height, seed) {
  const target = path.join(root, relativePath);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, makePng(width, height, seed));
}

function writeJpeg(relativePath, width, height, seed) {
  const target = path.join(root, relativePath);
  const tmp = path.join(root, "work", `${path.basename(relativePath)}.png`);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(tmp, makePng(width, height, seed));
  execFileSync("/usr/bin/sips", ["-s", "format", "jpeg", tmp, "--out", target], {
    stdio: "ignore",
  });
  fs.unlinkSync(tmp);
}

for (const [target, width, height, seed] of pngTargets) {
  writePng(target, width, height, seed);
}

for (const [target, width, height, seed] of jpgTargets) {
  writeJpeg(target, width, height, seed);
}

for (const target of videoTargets) {
  const absolute = path.join(root, target);
  fs.mkdirSync(path.dirname(absolute), { recursive: true });
  fs.writeFileSync(
    absolute,
    Buffer.from("DCI video placeholder. Replace with a production MP4 loop.")
  );
}

console.log(`Generated ${pngTargets.length + jpgTargets.length} image assets and ${videoTargets.length} video placeholders.`);
