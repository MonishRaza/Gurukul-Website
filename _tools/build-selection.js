// Photo curation pipeline — step 2: build selection.json from the manifest
// Even sampling per event, excluding known-bad (rotated/dark/blur) blocks,
// preferring clean-named originals over Drive "(n)" copies.
const fs = require("fs");
const m = require("./manifest.json");

const EXCLUDE = [
  [49, 58],     // TV frame + rotated portraits
  [310, 316],   // rotated
  [1059, 1064], [1155, 1159], [1176, 1180], [1215, 1220], [1237, 1244],
  [1252, 1256], [1273, 1277], [1305, 1313], [1326, 1330], [1351, 1356],
  [1363, 1368], [1373, 1378], [1392, 1395], // dark / rotated / blur blocks
  [1556, 1575], // stray dates + dark
  [2189, 2194], [2655, 2662], // odd clock entries
];
const excluded = i => EXCLUDE.some(([a, b]) => i >= a && i <= b);
const isDriveCopy = f => / \(\d+\)/.test(f);

// [albumId, [[first,last],...], targetCount]
const PLAN = [
  ["founding-years",       [[0, 48], [320, 377], [640, 694]], 30],
  ["sports-day-2015",      [[59, 309], [378, 639], [695, 991]], 80],
  ["annual-day-2018-19",   [[992, 1381]], 60],
  ["annual-function-2023", [[1387, 1397], [1652, 1769], [1892, 2188]], 70],
  ["republic-day",         [[2475, 2492], [1595, 1595], [1622, 1633]], 15],
  ["farewell-2025",        [[2518, 2595]], 26],
  ["events-achievements",  [[2596, 2631], [2632, 2654], [2662, 2676]], 26],
];

const byIndex = new Map(m.map(x => [x.i, x]));
const selection = [];

for (const [album, ranges, target] of PLAN) {
  const pool = [];
  for (const [a, b] of ranges)
    for (let i = a; i <= b; i++) {
      const x = byIndex.get(i);
      if (x && !excluded(i) && !isDriveCopy(x.file) && x.bytes > 400_000 && x.w >= 1200)
        pool.push(x.i);
    }
  const uniq = [...new Set(pool)];
  const step = uniq.length / target;
  const picked = [];
  for (let k = 0; k < target; k++) {
    const idx = uniq[Math.min(Math.floor(k * step), uniq.length - 1)];
    if (!picked.includes(idx)) picked.push(idx);
  }
  console.log(`${album}: pool ${uniq.length} -> picked ${picked.length}`);
  picked.forEach(i => selection.push({ i, album }));
}

fs.writeFileSync("selection.json", JSON.stringify(selection, null, 1));
console.log(`TOTAL selected: ${selection.length}`);