// Photo curation pipeline — step 1: scan + contact sheets
// Usage: node scan.js
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const ROOT = "D:/Projects/Gurukul Website/my-content/2-photos";
const OUT = "D:/Projects/Gurukul Website/_tools/sheets";
const MANIFEST = "D:/Projects/Gurukul Website/_tools/manifest.json";

const COLS = 15, THUMB_W = 170, THUMB_H = 128, LABEL_H = 22;
const ROWS = 15, PER_SHEET = COLS * ROWS; // 225 per sheet

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === "_duplicates-excluded" || e.name === "node_modules") continue;
      walk(p, out);
    } else if (/\.(jpe?g|png|webp|heic)$/i.test(e.name)) {
      out.push(p);
    }
  }
  return out;
}

function exifDate(buf) {
  if (!buf) return null;
  const s = buf.toString("latin1");
  const m = s.match(/(\d{4}):(\d{2}):(\d{2})[ ](\d{2}):(\d{2}):(\d{2})/);
  return m ? `${m[1]}-${m[2]}-${m[3]}` : null;
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const files = walk(ROOT).sort();
  console.log(`Found ${files.length} photos`);
  const manifest = [];
  let idx = 0;

  for (const f of files) {
    try {
      const meta = await sharp(f).metadata();
      let date = null, w = meta.width, h = meta.height;
      if (meta.exif) date = exifDate(meta.exif);
      manifest.push({
        i: idx++,
        file: path.relative(ROOT, f).replace(/\\/g, "/"),
        bytes: fs.statSync(f).size,
        w, h, date
      });
      if (idx % 200 === 0) console.log(`  scanned ${idx}/${files.length}`);
    } catch (e) {
      console.log(`  SKIP unreadable: ${f} (${e.message})`);
    }
  }
  fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 1));
  console.log(`Manifest written: ${manifest.length} entries`);

  // Contact sheets
  for (let s = 0; s * PER_SHEET < manifest.length; s++) {
    const batch = manifest.slice(s * PER_SHEET, (s + 1) * PER_SHEET);
    const sheetW = COLS * THUMB_W;
    const sheetH = ROWS * (THUMB_H + LABEL_H);
    const composites = [];

    await Promise.all(batch.map(async (m) => {
      const pos = batch.indexOf(m);
      const cx = (pos % COLS) * THUMB_W;
      const cy = Math.floor(pos / COLS) * (THUMB_H + LABEL_H);
      try {
        const thumb = await sharp(path.join(ROOT, m.file))
          .resize(THUMB_W, THUMB_H, { fit: "cover" })
          .jpeg({ quality: 70 })
          .toBuffer();
        composites.push({ input: thumb, left: cx, top: cy + LABEL_H });
        const svg = Buffer.from(
          `<svg width="${THUMB_W}" height="${LABEL_H}"><rect width="100%" height="100%" fill="#111"/><text x="4" y="16" font-size="14" font-family="monospace" fill="#ff9933">${m.i}</text><text x="50" y="16" font-size="11" font-family="monospace" fill="#8cf">${m.date || "?"}</text></svg>`);
        composites.push({ input: svg, left: cx, top: cy });
      } catch (e) { /* skip bad thumb */ }
    }));

    await sharp({
      create: { width: sheetW, height: sheetH, channels: 3, background: "#222" }
    }).composite(composites).jpeg({ quality: 80 }).toFile(path.join(OUT, `sheet-${String(s).padStart(2, "0")}.jpg`));
    console.log(`sheet-${String(s).padStart(2, "0")}.jpg  [${batch[0].i}–${batch[batch.length - 1].i}]`);
  }
  console.log("DONE");
}
main().catch(e => { console.error(e); process.exit(1); });