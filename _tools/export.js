// Photo curation pipeline — step 3: export selected photos to the website
// Usage: node export.js selection.json
// selection.json: [{ i: <manifest index>, album: "<album-id>" }, ...]
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const ROOT = "D:/Projects/Gurukul Website/my-content/2-photos";
const SITE_IMAGES = "D:/Projects/Gurukul Website/images";
const MANIFEST = JSON.parse(fs.readFileSync("D:/Projects/Gurukul Website/_tools/manifest.json", "utf8"));
const MAX_W = 1600;
const TARGET = 300 * 1024; // aim <= ~300 KB per photo

async function exportOne(sel, counters) {
  const m = MANIFEST.find(x => x.i === sel.i);
  if (!m) throw new Error("bad index " + sel.i);
  const album = counters[sel.album] = (counters[sel.album] || 0) + 1;
  const base = `${sel.album}-${String(album).padStart(3, "0")}`;
  const src = path.join(ROOT, m.file);
  const outDir = path.join(SITE_IMAGES, sel.album);
  fs.mkdirSync(outDir, { recursive: true });
  const outFile = path.join(outDir, base + ".jpg");

  // Binary-search quality to land near (but under) the target size
  let lo = 55, hi = 85, buf = null, q = 80;
  for (let t = 0; t < 4; t++) {
    q = Math.round((lo + hi) / 2);
    buf = await sharp(src)
      .rotate() // honour EXIF orientation
      .resize({ width: MAX_W, height: MAX_W, fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: q, mozjpeg: true })
      .withMetadata({ exif: {} }) // strip ALL metadata incl. GPS
      .toBuffer();
    if (buf.length > TARGET) hi = q; else lo = q;
  }
  fs.writeFileSync(outFile, buf);
  return { file: `${sel.album}/${base}.jpg`, bytes: buf.length, from: m.file, q };
}

async function main() {
  const selection = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
  const counters = {};
  const results = [];
  for (const sel of selection) {
    try {
      const r = await exportOne(sel, counters);
      results.push(r);
      if (results.length % 25 === 0) console.log(`exported ${results.length}/${selection.length}`);
    } catch (e) { console.log(`FAIL ${sel.i}: ${e.message}`); }
  }
  const total = results.reduce((a, r) => a + r.bytes, 0);
  fs.writeFileSync("D:/Projects/Gurukul Website/_tools/export-results.json", JSON.stringify(results, null, 1));
  console.log(`DONE: ${results.length} photos, ${(total / 1048576).toFixed(1)} MB total`);
  // Per-album file lists for the config
  const byAlbum = {};
  results.forEach(r => { const [al, f] = r.file.split("/"); (byAlbum[al] = byAlbum[al] || []).push(f); });
  for (const al of Object.keys(byAlbum).sort()) console.log(`  ${al}: ${byAlbum[al].length} photos`);
}
main().catch(e => { console.error(e); process.exit(1); });