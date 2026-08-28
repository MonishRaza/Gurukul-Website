# Gurukul Academy Website — Development Knowledge Base

The complete, concise reference for how this website is built, how to change it,
and every decision made so far. Last updated: **2026-08-28 (v6 + photo pipeline)**.

---

## 1. What this is

| | |
|---|---|
| **School** | Gurukul Academy Higher Secondary School, Satna Road, Gadauli, Amarpatan, District Maihar, MP – 485775. Founded 2013. |
| **Live site** | https://monishraza.github.io/Gurukul-Website/ |
| **Repo** | https://github.com/MonishRaza/Gurukul-Website (public, `main` branch) |
| **Hosting** | GitHub Pages — Settings → Pages → Deploy from branch: `main` / `(root)`. Free, HTTPS, always-on. |
| **Stack** | Plain HTML + CSS + JS. **No frameworks, no build step, no npm, no CDN dependencies.** Works offline from a double-click of `index.html`. |
| **Zero cost** | Hosting free. Feedback form via FormSubmit (free). Maps embed keyless. |

## 2. Architecture — the one rule to remember

**`js/site-config.js` is the single edit point.** All school data (name, address,
phones, email, DISE 23130101102, WhatsApp, social links, map URLs, YouTube video
IDs, photo albums, announcements) lives in one `var SITE_CONFIG = {...}` object.
`js/main.js` reads it and renders everything dynamic.

Pages are **static-first**: nav, hero, contact details, the Google Maps `<iframe>`,
the feedback form `action`, and social buttons are baked directly into each page's
HTML. JS only *enhances*. If scripts fail or a visitor has a stale cached copy,
the critical content still shows. Never move critical content back into JS.

## 3. File map

```
index.html        Home — hero, explore strip, highlights, stats band, YouTube,
                  social wall, announcements, dark CTA
about.html        Story since 2013, mission, facilities, MP Board info
gallery.html      Album tabs + lightbox (rendered from config albums)
contact.html      STATIC address/phones/email/DISE + baked Google Maps iframe
feedback.html     FormSubmit form (action baked statically)
404.html          GitHub Pages not-found page
css/style.css     All styling. Design tokens at :root. Bumped ?v=N everywhere.
js/site-config.js ★ ALL school data — the only file for content edits
js/main.js        All behaviour: header/footer build, renderers, scroll effects.
                  ES5-style IIFE, defensive guard on missing config.
images/logo.png   256×256 circular school badge (from my-content\1-logo)
my-content\       USER'S DROP-BOX (never published; not referenced by the site)
  1-logo\           source logo
  2-photos\         2,679 unique JPGs, 17 GB (raw, full-res, staged for curation)
                    _duplicates-excluded\  ← 43 exact dupes moved here (verified 0 remain)
  3-app\            unused (app removed from site)
  4-documents\      unused so far
DEVELOPMENT.md    ← this file
README.md         User-facing guide (editing, FormSubmit activation, gallery how-to)
```

## 4. Key techniques (learned the hard way — do not regress)

### 4.1 `var`, not `const`, at the top of site-config.js
A top-level `const` does **not** attach to `window`. `main.js` reads
`window.SITE_CONFIG`, so `const SITE_CONFIG` silently killed every page's JS
rendering (v6 bug — footer, contact details, video grid were all blank).
Config uses `var SITE_CONFIG`, and `main.js` guards:
`var C = window.SITE_CONFIG || …; if (!C) return;`

### 4.2 The `[hidden]` CSS guard
Author styles like `display:flex` override the UA's `[hidden]{display:none}`.
That's how a "GA" monogram resurrected itself under the header logo.
`css/style.css` has a global:
```css
[hidden] { display: none !important; }
```
Never remove it. (The monogram spans/CSS were also fully removed in v6.)

### 4.3 Keyless Google Maps embed that actually frames
Classic `maps.google.com/...&output=embed` → 404 + `X-Frame-Options: SAMEORIGIN`.
The redirect target IS frameable:
```
https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1sGurukul+Academy+Higher+Secondary+School+Amarpatan
```
(200 OK, no XFO, resolves the school's place card.) Stored in config as
`mapEmbedUrl`; baked into `contact.html`'s `#contact-map` iframe and mirrored
in JS `renderContact`. Loading top-level in a browser prints "must be used in
an iframe" — expected. Headless screenshots show only a spinner (lazy-load +
headless artifact) — not a real failure.

### 4.4 Cache busting
Every page references assets with `?v=N` (`css/style.css?v=6`). Bump `v` on
every deploy that changes CSS/JS/config — school-area connections cache hard.

### 4.5 Headless verification (this Windows machine)
```powershell
& "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless=new `
  --disable-gpu --screenshot=$env:TEMP\shot.png --window-size=1280,2400 `
  --hide-scrollbars "http://localhost:8931/page.html"
```
Local preview server: `node static server` on port **8931** serving the repo
root (restart if dead; EADDRINUSE means it's already running — use it).
PNG pixel inspection / circle-crop / resize via PowerShell `System.Drawing`.

### 4.6 Git identity & push (this machine)
```bash
git -c user.name="MonishRaza" -c user.email="gurukulamarpatan@gmail.com" commit -m "…"
GIT_TERMINAL_PROMPT=0 GCM_INTERACTIVE=Never git push
```
The push prints "fatal: Cannot prompt…" noise from the credential helper —
harmless; check for `main -> main` to confirm success.
Commit messages end with `Co-Authored-By: Claude <noreply@anthropic.com>`.

### 4.7 Verifying deploys
GitHub Pages redeploys in ~1–3 min. Poll the live URLs for markers, e.g.:
```bash
curl -s "https://monishraza.github.io/Gurukul-Website/css/style.css?v=6" | grep -c "india-green"
curl -s "https://monishraza.github.io/Gurukul-Website/contact.html" | grep -c "23130101102"
```

### 4.8 Photo pipeline (v7) — `_tools\` (Node + sharp)
Raw archive: `my-content\2-photos\` = 2,679 unique JPGs / 17 GB (43 byte-level
duplicates already moved to `_duplicates-excluded\`; 2 corrupt files skipped).
The pipeline turns that into the published gallery:

1. **scan.js** — walks 2-photos, writes `manifest.json` (index, path, bytes,
   dimensions, EXIF date) and 12 contact sheets to `_tools\sheets\`.
2. **build-selection.js** — even sampling per album from the manifest,
   excluding known-bad index blocks and Drive `(n)` copies → `selection.json`.
3. **export.js** — sharp per photo: `.rotate()` (EXIF orientation), resize to
   max 1600px inside, JPEG quality binary-searched (55–85) to ≤300 KB,
   `.withMetadata({exif:{}})` **strips all metadata incl. GPS** (privacy).
   Output `images\<album>\<album>-NNN.jpg` + `export-results.json`.
4. **Visual QA** — review QA contact sheets, delete duds from
   `images\<album>\`, regenerate `albums.json` (kept-file lists) and paste
   into `albums` in `js/site-config.js`.

Result (v7): **241 photos / 64.8 MB** in 7 albums — founding-years (25),
sports-day-2015 (68), annual-day-2018-19 (43), annual-function-2023 (51,
mixed 2014–2023 so titled "Annual Functions"), republic-day (10, actually a
patriotic act at the **2014** annual function — titled "Patriotic
Performances"), farewell-2025 (26), events-achievements (18).
Budget approved by user: 100 MB — do not exceed it. Raw photos never go to
the repo (§9); full archive stays on Google Drive.

## 5. Design system — Indian tricolour (v6)

Blurred gradient washes, **never hard stripes**. Tokens in `css/style.css`:

| Token | Value | Use |
|---|---|---|
| `--saffron` / `--saffron-deep` / `--saffron-soft` | `#ff9933` / `#e07b00` / `#fff3e4` | accents, buttons, stat numbers |
| `--india-green` / `--green-deep` / `--green-soft` | `#138808` / `#0d6804` / `#eaf6e8` | WhatsApp, washes, tile glows |
| `--chakra` / `--chakra-deep` / `--chakra-soft` | `#06038d` / `#04025c` / `#ececf8` | hero, bands, footer, headings |

Signature treatments: hero = chakra-navy base + blurred saffron (top-left),
green (bottom-right), white (centre) radial glows; header bottom edge =
`border-image: linear-gradient(90deg, saffron, white, green) 1`; cards = 4px
tricolour gradient top border; section rules = 96px tricolour pill. Legacy
aliases (`--orange`, `--charcoal`…) map onto the new tokens so older rules keep
working. Logo: white border + saffron ring glow on the hero.

## 6. Deployment workflow (standard loop)

1. Edit (usually `js/site-config.js` or a page's HTML).
2. Bump `?v=N` in all pages if CSS/JS changed.
3. `node --check js/site-config.js js/main.js` (syntax gate).
4. Screenshot-verify locally on port 8931 (§4.5).
5. Commit (§4.6), push, poll live markers (§4.7).
6. User hard-refreshes (Ctrl+F5) to bypass cache.

## 7. History

| Ver | What |
|---|---|
| v1–v3 | Initial build: 7 pages, config-driven static site, deployed to GitHub Pages |
| v4 | Adopted Mary Ng'ang'a's MIT Restaurant-Website-Template design (full-bleed hero, tile strip, bordered photo boxes), rebuilt dependency-free |
| v5 | Google Maps embed (keyless technique §4.3), real logo implemented (circle-crop + real alpha — source PNG had baked checkerboard), school app removed on school's request (app.html, APK, monogram deleted; config comment keeps restore path) |
| v6 | §4.1 JS-crash fix; GA monogram removed + `[hidden]` guard; contact page & feedback form made static-first; Indian tricolour theme; all pages `?v=6` |
| 2026-08-28 | Photo drop received: 2,722 files / 18 GB → dedupe analysis (md5 content-level): **43 exact duplicates excluded** → 2,679 unique JPGs / 17 GB, re-verified zero duplicates |
| v7 | **Real photo gallery live**: 241 curated photos / 64.8 MB across 7 albums (pipeline §4.8); favicon switched from 🎓 emoji to `images/logo.png`; all pages `?v=7` |

## 8. Known pending items

- [x] **FormSubmit activation** — DONE (2026-08-28): user submitted the test +
      clicked Activate in the email to gurukulamarpatan@gmail.com. The form
      now delivers to the school inbox.
- [ ] Announcement dates still `"TODO"` in site-config.js.
- [ ] Optional hero photo (`heroImage` in config — wide school photo).
- [ ] Testimonials: section auto-hides until REAL entries added (never
      fabricate — no public reviews exist).
- [ ] Custom domain — **purchased 2026-08-28**, pending registrant
      verification (confirmation email within ~30–40 min of registration).
      Once verified: set the domain in repo Settings → Pages (or add a
      `CNAME` file), add the registrar's DNS records (A records for the
      apex → 185.199.108–111.153, CNAME for `www` →
      `monishraza.github.io`), then enable Enforce HTTPS. README documents
      the DNS steps.

## 9. Do-nots

- Don't use `const` for `SITE_CONFIG`; don't remove the `[hidden]` guard.
- Don't move contact/map/form data out of static HTML back into JS.
- Don't reference `my-content\` from the site (it's a staging box, not published).
- Don't push multi-hundred-MB raw photos into the repo.
- Don't invent testimonials, dates, or facts — placeholders stay visibly TODO.