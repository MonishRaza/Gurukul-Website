# Gurukul Academy Higher Secondary School — Website

A fast, free, zero-maintenance static website. No monthly hosting cost —
it runs on **GitHub Pages** (or Netlify / Cloudflare Pages, also free).

> **Design credit:** the visual design (full-bleed hero with centred logo,
> image-tile strip, bordered photo boxes, orange accent and footer) is
> adapted from the MIT-licensed
> [Restaurant-Website-Template](https://github.com/marynganga/Restaurant-Website-Template)
> by Mary Ng'ang'a. Rebuilt dependency-free (no Bootstrap/jQuery) for speed.

---

## ★ Editing the site — the one file to know

**`js/site-config.js`** holds *everything*: school name, address, phone,
email, DISE code, WhatsApp number, social links, map, announcements,
photo albums and the app download. Open it in any text editor (even
Notepad), change the values marked `TODO`, save — the whole website
updates. You never need to touch the HTML pages for these details.

---

## Checklist — real content to add

All of these go into `js/site-config.js` unless noted:

- [ ] **School email** — also switches the Feedback form on (see below)
- [ ] **Phone number(s)** and **WhatsApp number** (international format, digits only — e.g. `919876543210`)
- [ ] **Full address** (`addressLines`) and **Google Maps embed URL** (`mapEmbedUrl`)
- [ ] **DISE code**
- [ ] **Social links** — YouTube, Instagram, Facebook
- [ ] **School logo** — save as `images/logo.png` (or replace `images/logo.svg`) and update the `logo:` path
- [ ] **Photos** — see "Adding photos to the gallery" below
- [ ] Optional: edit the placeholder text in `about.html` (Our Story, Mission, Facilities, Board) with the school's real story

## Activating the feedback form (one-time, ~2 minutes)

The form on `feedback.html` uses **FormSubmit** — free, no account needed.

1. Set the school's real email in `js/site-config.js`.
2. Open the website, go to the Feedback page, submit a test message.
3. FormSubmit sends a **confirmation email** to the school's inbox — click **Activate** in it.
4. From then on, every form submission arrives as a normal email.

To test privately first, you can activate with your own email, then later
change the email in `site-config.js` and re-activate once with the school's.

## Adding photos to the gallery

1. Create a folder inside `images/` for the album, e.g. `images/annual-day-2023/`
2. Copy the photos into it (JPG/PNG). Use simple file names without spaces if possible.
3. Open `js/site-config.js`, find `albums:` and add an entry:

```js
{
  id: "annual-day-2023",
  title: "Annual Day 2023",
  year: "2023",
  folder: "images/annual-day-2023",
  photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"]
}
```

The gallery, album tabs and lightbox update automatically. Photos are
lazy-loaded, so even large albums stay fast. Until you add photos, the
album shows placeholder tiles — visitors never see a broken page.

## The school app

The app ("Gurukul Attendance") is a **web app** at
https://gurukul-amarpatan-attendance.web.app/ — it is linked from the
"Our App" page and is always the latest version. No files to maintain.

If an APK version is ever wanted: copy the `.apk` into `downloads/`,
then in `js/site-config.js` set `apkPath: "downloads/<file-name>.apk"`.
The APK section on the app page appears automatically.

## Running the site on your computer

Just double-click `index.html` — it works in any browser.
For a proper local server (optional): run `python -m http.server 8000`
in this folder, then open http://localhost:8000

## Publishing on GitHub Pages

Repository: **https://github.com/MonishRaza/Gurukul-Website**

1. In the repository: **Settings → Pages → Source: "Deploy from a branch" → main / (root) → Save**.
2. In a minute or two the site is live at:
   `https://monishraza.github.io/Gurukul-Website/`
3. Update from the command line with:
   `git add -A && git commit -m "update" && git push`

**Custom domain (~₹800–900/year):** buy a domain (e.g. `gurukulacademy.in`),
then in Settings → Pages → Custom domain, enter it and add the DNS records
GitHub shows you. The site itself stays free.

## Keeping it safe

- Announcements (`site-config.js`) and staff text (`about.html`) can be edited anytime.
- Keep a backup of the folder before big changes (or rely on GitHub's history).
- WhatsApp button only works once the real number is in `site-config.js`.

---

*Site built with plain HTML/CSS/JS — no frameworks, no build step, no dependencies.*