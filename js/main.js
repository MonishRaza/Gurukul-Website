/* ============================================================
   GURUKUL ACADEMY — SITE SCRIPTS
   ------------------------------------------------------------
   Builds the shared header, footer and WhatsApp button on every
   page from js/site-config.js, and renders the gallery, contact
   details and app-download data. You normally don't need to
   edit this file — everything is driven by site-config.js.
   ============================================================ */

(function () {
  "use strict";

  var C = window.SITE_CONFIG || (typeof SITE_CONFIG !== "undefined" ? SITE_CONFIG : null);
  if (!C) {
    // Config missing — leave the static HTML as-is rather than crashing.
    return;
  }

  // Older phone browsers lack NodeList.forEach — provide it so nothing throws.
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

  /* ---------- helpers ---------- */

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function isPlaceholder(v) {
    return !v || String(v).indexOf("TODO") !== -1 || String(v).indexOf("example.com") !== -1;
  }

  function waLink() {
    var num = String(C.whatsapp.number || "").replace(/[^0-9]/g, "");
    return "https://wa.me/" + num + "?text=" + encodeURIComponent(C.whatsapp.message || "");
  }

  function telLink(phone) {
    return "tel:" + String(phone).replace(/[^+0-9]/g, "");
  }

  /* Inline SVG icons (no external icon library needed) */
  var ICON = {
    youtube: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2a3.8 3.8 0 0 1-.9 1.4c-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4a3.8 3.8 0 0 1-1.4-.9 3.8 3.8 0 0 1-.9-1.4c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.8.1-1.1.1-1.5.2-1.8.3-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.1.3-.3.7-.3 1.8-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1.1.2 1.5.3 1.8.2.5.4.8.7 1.1.3.3.6.5 1.1.7.3.1.7.3 1.8.3 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1.1-.1 1.5-.2 1.8-.3.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.1-.3.3-.7.3-1.8.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1.1-.2-1.5-.3-1.8a2 2 0 0 0-.7-1.1 2 2 0 0 0-1.1-.7c-.3-.1-.7-.3-1.8-.3-1.3-.1-1.7-.1-4.8-.1zm0 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 8.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4zm6.4-8.4a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4h-3V12h3V9.4c0-3 1.8-4.7 4.6-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.3l-.5 3.5h-2.8v8.4A12 12 0 0 0 24 12z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.6-2c-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.1c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 0a12 12 0 0 0-10.3 18.2L0 24l5.9-1.6A12 12 0 1 0 12 0zm0 22a10 10 0 0 1-5.1-1.4l-.4-.2-3.5 1 1-3.4-.3-.4A10 10 0 1 1 12 22z"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.3 2.2z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 16 6 10h4V3h4v7h4l-6 6zm-8 2h16v3H4v-3z"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
    camera: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 3 7.2 5H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3.2L15 3H9zm3 5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"/></svg>',
    chevronL: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M15.4 4.6 8 12l7.4 7.4 1.4-1.4L10.8 12l6-6z"/></svg>',
    chevronR: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8.6 4.6 7.2 6l6 6-6 6 1.4 1.4L16 12z"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4 5.7 18.3 4.3 16.9 10.6 12 4.3 5.7 5.7 4.3 12 10.6l4.9-4.9z" transform="translate(0 1)"/></svg>'
  };

  function socialLinksHtml(cls) {
    var items = [];
    if (C.social.youtube) items.push('<a class="' + cls + '" href="' + esc(C.social.youtube) + '" target="_blank" rel="noopener" aria-label="YouTube">' + ICON.youtube + "</a>");
    if (C.social.instagram) items.push('<a class="' + cls + '" href="' + esc(C.social.instagram) + '" target="_blank" rel="noopener" aria-label="Instagram">' + ICON.instagram + "</a>");
    if (C.social.facebook) items.push('<a class="' + cls + '" href="' + esc(C.social.facebook) + '" target="_blank" rel="noopener" aria-label="Facebook">' + ICON.facebook + "</a>");
    return items.join("");
  }

  function hasAnySocial() {
    return !!(C.social.youtube || C.social.instagram || C.social.facebook);
  }

  /* ---------- header ---------- */

  var PAGES = [
    { href: "index.html", label: "Home", id: "home" },
    { href: "about.html", label: "About", id: "about" },
    { href: "gallery.html", label: "Gallery", id: "gallery" },
    { href: "index.html#social", label: "Social Presence", id: "social" },
    { href: "contact.html", label: "Contact", id: "contact" },
    { href: "feedback.html", label: "Feedback", id: "feedback" },
    { href: "https://app.gurukulamarpatan.in", label: "Staff Portal ↗", id: "staff-portal", external: true }
  ];

  function buildHeader() {
    // The brand and menu are baked into each page's HTML, so the menu is
    // visible even if JavaScript never runs. Here we only fill the top
    // contact bar from the site config and highlight the current page.
    var topbar = document.getElementById("topbar");
    if (topbar) {
      topbar.innerHTML =
        '<div class="container topbar-inner">' +
          '<span class="topbar-item">' + ICON.phone + " <a href=\"" + telLink(C.phone) + '">' + esc(C.phone) + "</a></span>" +
          '<span class="topbar-item">' + ICON.mail + " <a href=\"mailto:" + esc(C.email) + '">' + esc(C.email) + "</a></span>" +
          '<span class="topbar-social">' + socialLinksHtml("social-link") + "</span>" +
        "</div>";
    }

    var current = document.body.getAttribute("data-page") || "";
    var onSocial = current === "home" && window.location.hash === "#social";
    var pageByHref = {
      "index.html": "home",
      "about.html": "about",
      "gallery.html": "gallery",
      "index.html#social": "social",
      "contact.html": "contact",
      "feedback.html": "feedback"
    };
    var links = document.querySelectorAll(".site-nav a");
    for (var i = 0; i < links.length; i++) {
      var pid = pageByHref[links[i].getAttribute("href") || ""];
      if (!pid) continue;
      if (pid === "home" && onSocial) continue;
      if (pid === "social" && !onSocial) continue;
      if (pid === current || (pid === "social" && onSocial)) {
        links[i].className = "active";
        links[i].setAttribute("aria-current", "page");
      }
    }

    var host = document.getElementById("site-header");
    if (!host) return;
    var logo = host.querySelector(".brand-logo");
    if (logo) {
      logo.addEventListener("error", function () {
        logo.style.display = "none";
      });
    }
  }

  /* ---------- footer (template style: solid orange, centred) ---------- */

  function buildFooter() {
    var host = document.getElementById("site-footer");
    if (!host) return;
    var year = new Date().getFullYear();

    host.innerHTML =
      '<div class="footer-inner">' +
        '<img class="footer-logo" src="' + esc(C.logo) + '" alt="' + esc(C.shortName) + ' logo" ' +
          'onerror="this.style.display=\'none\'">' +
        '<div class="footer-name">' + esc(C.schoolName) + "</div>" +
        '<p class="footer-tagline">' + esc(C.tagline) + "</p>" +
        '<div class="footer-social">' + socialLinksHtml("social-link") + "</div>" +
        '<p class="footer-contact-line">' + C.addressLines.map(esc).join(", ") + "</p>" +
        '<p class="footer-contact-line">' +
          '<a href="' + telLink(C.phone) + '">' + esc(C.phone) + "</a>" +
          (C.phoneAlt ? ' &nbsp;·&nbsp; <a href="' + telLink(C.phoneAlt) + '">' + esc(C.phoneAlt) + "</a>" : "") +
          ' &nbsp;·&nbsp; <a href="mailto:' + esc(C.email) + '">' + esc(C.email) + "</a>" +
        "</p>" +
        '<p class="footer-contact-line"><a href="' + waLink() + '" target="_blank" rel="noopener">Chat on WhatsApp</a></p>' +
        '<ul class="footer-links">' +
          PAGES.map(function (p) {
            return '<li><a href="' + p.href + '">' + p.label + "</a></li>";
          }).join("") +
        "</ul>" +
        '<p class="footer-bottom">© ' + year + " " + esc(C.schoolName) +
        " · DISE Code: " + esc(C.diseCode) + "</p>" +
      "</div>";
  }

  /* ---------- floating WhatsApp button ---------- */

  function buildWhatsAppButton() {
    var btn = document.createElement("a");
    btn.className = "wa-float";
    btn.href = waLink();
    btn.target = "_blank";
    btn.rel = "noopener";
    btn.setAttribute("aria-label", "Chat with us on WhatsApp");
    btn.innerHTML = ICON.whatsapp + '<span class="wa-tooltip">Chat with us</span>';
    document.body.appendChild(btn);
  }

  /* ============================================================
     PAGE-SPECIFIC RENDERING
     ============================================================ */

  /* ---------- home: announcements + youtube + social wall + testimonials ---------- */

  function renderYouTube() {
    var grid = document.getElementById("yt-videos");
    if (!grid) return;
    var featured = "3Zd9xY23hkg"; // shown as the embedded promo above the grid
    var videos = (C.youtubeVideos || []).filter(function (v) { return v.id !== featured; });
    grid.innerHTML = videos.map(function (v) {
      return '<a class="video-card" href="https://www.youtube.com/watch?v=' + esc(v.id) + '" target="_blank" rel="noopener">' +
        '<span class="video-thumb">' +
          '<img src="https://i.ytimg.com/vi/' + esc(v.id) + '/hqdefault.jpg" alt="' + esc(v.title) + '" loading="lazy">' +
          '<span class="video-play"><span>' + ICON.play + "</span></span>" +
        "</span>" +
        '<span class="video-title">' + esc(v.title) + "</span>" +
        '<span class="video-source">' + ICON.youtube + " Watch on YouTube</span>" +
        "</a>";
    }).join("");
    if (!videos.length) grid.closest(".section").hidden = true;
  }

  function renderSocialWall() {
    var fb = document.getElementById("fb-feed");
    if (fb) {
      if (C.social.facebook) {
        var src = "https://www.facebook.com/plugins/page.php?href=" +
          encodeURIComponent(C.social.facebook) +
          "&tabs=timeline&width=500&height=620&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=";
        fb.innerHTML = '<iframe class="fb-frame" title="Facebook posts — ' + esc(C.shortName) + '" src="' + src +
          '" loading="lazy" allow="encrypted-media" referrerpolicy="strict-origin-when-cross-origin"></iframe>';
      } else {
        fb.innerHTML = '<p class="muted">Add your Facebook page URL in <code>js/site-config.js</code>.</p>';
      }
    }
  }

  function renderTestimonials() {
    var section = document.getElementById("testimonials");
    var grid = document.getElementById("testimonials-grid");
    if (!section || !grid) return;
    var list = C.testimonials || [];
    if (!list.length) { section.hidden = true; return; }
    section.hidden = false;
    grid.innerHTML = list.map(function (t) {
      var initials = (t.name || "?").split(/\s+/).map(function (w) { return w[0]; }).slice(0, 2).join("").toUpperCase();
      var stars = "★".repeat(Math.max(1, Math.min(5, t.rating || 5))) + "☆".repeat(5 - Math.max(1, Math.min(5, t.rating || 5)));
      return '<figure class="testimonial">' +
        '<span class="quote-mark">”</span>' +
        '<div class="stars" aria-label="' + (t.rating || 5) + ' out of 5 stars">' + stars + "</div>" +
        "<p>" + esc(t.text) + "</p>" +
        '<figcaption class="who">' +
          '<span class="avatar">' + esc(initials) + "</span>" +
          "<span><b>" + esc(t.name) + "</b><small>" + esc(t.role || "") + "</small></span>" +
        "</figcaption>" +
        "</figure>";
    }).join("");
  }

  /* ---------- announcements ----------
     Source of truth is a Google Sheet ("Publish to web" CSV, see
     announcementsSheetUrl in site-config.js). The admin posts new rows in the
     sheet; the homepage picks them up without any code change. The two
     built-in C.announcements render instantly and stay as the fallback if the
     sheet can't be fetched. */

  function announcementItemHtml(a) {
    var date = a.date && String(a.date).indexOf("TODO") === -1 ? String(a.date).trim() : "";
    return '<li class="announcement">' +
      (date ? '<span class="announcement-date">' + esc(date) + "</span>" : "") +
      "<p>" + esc(a.text) + "</p></li>";
  }

  // Minimal CSV line parser: handles quoted fields with commas/escaped quotes.
  function parseCsvLine(line) {
    var out = [], cur = "", inQ = false, i, ch;
    for (i = 0; i < line.length; i++) {
      ch = line.charAt(i);
      if (inQ) {
        if (ch === '"') {
          if (line.charAt(i + 1) === '"') { cur += '"'; i++; }
          else inQ = false;
        } else cur += ch;
      } else if (ch === '"') inQ = true;
      else if (ch === ",") { out.push(cur); cur = ""; }
      else cur += ch;
    }
    out.push(cur);
    return out;
  }

  // Find the row containing "Date" and "Text" header cells (any position,
  // any row among the first few), so the admin can insert extra columns or
  // rows at the top of the sheet without breaking it.
  function sheetRowsToAnnouncements(csv) {
    var lines = String(csv).split(/\r\n|\n|\r/).filter(function (l) { return l.trim() !== ""; });
    if (lines.length < 2) return null;
    var head = null, dCol = -1, tCol = -1, start = -1;
    for (var h = 0; h < Math.min(lines.length, 5); h++) {
      var cells = parseCsvLine(lines[h]).map(function (c) { return c.trim().toLowerCase(); });
      dCol = cells.indexOf("date");
      tCol = cells.indexOf("text");
      if (tCol > -1) { head = cells; start = h + 1; break; }
    }
    if (!head) return null;
    var out = [], text, date;
    for (var k = start; k < lines.length && out.length < 8; k++) {
      var row = parseCsvLine(lines[k]);
      text = (row[tCol] || "").trim();
      if (!text) continue;
      date = dCol > -1 ? (row[dCol] || "").trim() : "";
      out.push({ date: date, text: text });
    }
    return out.length ? out : null;
  }

  function renderHome() {
    var list = document.getElementById("announcements-list");
    if (list) {
      // Instant fallback content, then upgrade to the live Google Sheet data.
      list.innerHTML = C.announcements.map(announcementItemHtml).join("");
      if (C.announcementsSheetUrl && typeof XMLHttpRequest !== "undefined") {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", C.announcementsSheetUrl, true);
        xhr.onload = function () {
          var rows = xhr.status === 200 ? sheetRowsToAnnouncements(xhr.responseText) : null;
          if (rows) list.innerHTML = rows.map(announcementItemHtml).join("");
        };
        xhr.send();
      }
    }
    renderYouTube();
    renderSocialWall();
    renderTestimonials();
    var social = document.getElementById("home-social");
    if (social) {
      social.innerHTML = socialLinksHtml("social-btn") ||
        '<p class="muted">Add your YouTube, Instagram and Facebook links in <code>js/site-config.js</code> to show them here.</p>';
    }
  }

  /* ---------- gallery + lightbox ---------- */

  function placeholderDataUri(label) {
    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="420" viewBox="0 0 640 420">' +
      '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="#eef3fa"/><stop offset="1" stop-color="#dbe6f3"/></linearGradient></defs>' +
      '<rect width="640" height="420" fill="url(#g)"/>' +
      '<g fill="#9db4d0" transform="translate(292 158) scale(2.3)">' +
      '<path d="M9 3 7.2 5H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3.2L15 3H9zm3 5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"/></g>' +
      '<text x="320" y="375" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="20" fill="#7d97b8">' +
      esc(label) + "</text></svg>";
    return "data:image/svg+xml," + encodeURIComponent(svg);
  }

  function renderGallery() {
    var tabsHost = document.getElementById("album-tabs");
    var gridHost = document.getElementById("album-grid");
    var titleHost = document.getElementById("album-title");
    if (!tabsHost || !gridHost) return;

    var albums = C.albums || [];
    var current = 0;
    var lightboxPhotos = [];

    tabsHost.innerHTML = albums.map(function (a, i) {
      var count = (a.photos || []).length;
      var meta = count ? count + " photo" + (count > 1 ? "s" : "") : "coming soon";
      return '<button class="album-tab' + (i === 0 ? " active" : "") + '" data-index="' + i + '">' +
        '<span class="album-tab-title">' + esc(a.title) + "</span>" +
        '<span class="album-tab-meta">' + esc(a.year || "") + (meta ? " · " + meta : "") + "</span>" +
        "</button>";
    }).join("");

    function show(i) {
      current = i;
      var album = albums[i];
      lightboxPhotos = (album.photos || []).map(function (f) {
        return { src: album.folder.replace(/\/?$/, "/") + f, name: f };
      });

      tabsHost.querySelectorAll(".album-tab").forEach(function (t, ti) {
        t.classList.toggle("active", ti === i);
      });
      if (titleHost) titleHost.textContent = album.title + (album.year ? " · " + album.year : "");

      if (!lightboxPhotos.length) {
        gridHost.innerHTML =
          '<div class="album-empty">' +
            '<div class="album-empty-tiles">' +
              [0, 1, 2, 3].map(function (n) {
                return '<img src="' + placeholderDataUri(album.title) + '" alt="" loading="lazy">';
              }).join("") +
            "</div>" +
            '<p class="muted">Photos for this album will appear here. Drop images into <code>' +
            esc(album.folder) + "/</code> and list their file names in <code>js/site-config.js</code>.</p>" +
          "</div>";
        return;
      }

      gridHost.innerHTML = lightboxPhotos.map(function (p, pi) {
        return '<figure class="gallery-item" data-index="' + pi + '" tabindex="0" role="button" aria-label="Open photo">' +
          '<img src="' + esc(p.src) + '" alt="' + esc(album.title + " — photo " + (pi + 1)) + '" loading="lazy">' +
          "</figure>";
      }).join("");
    }

    tabsHost.addEventListener("click", function (e) {
      var btn = e.target.closest(".album-tab");
      if (btn) show(parseInt(btn.getAttribute("data-index"), 10));
    });

    gridHost.addEventListener("click", function (e) {
      var item = e.target.closest(".gallery-item");
      if (item) openLightbox(parseInt(item.getAttribute("data-index"), 10));
    });
    gridHost.addEventListener("keydown", function (e) {
      var item = e.target.closest(".gallery-item");
      if (item && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        openLightbox(parseInt(item.getAttribute("data-index"), 10));
      }
    });

    /* ----- lightbox ----- */
    var lb = document.getElementById("lightbox");
    var lbImg = document.getElementById("lightbox-img");
    var lbCaption = document.getElementById("lightbox-caption");
    var lbIndex = 0;

    function openLightbox(index) {
      lbIndex = index;
      updateLightbox();
      lb.classList.add("open");
      document.body.style.overflow = "hidden";
    }
    function closeLightbox() {
      lb.classList.remove("open");
      document.body.style.overflow = "";
    }
    function updateLightbox() {
      var p = lightboxPhotos[lbIndex];
      if (!p) return;
      lbImg.src = p.src;
      lbCaption.textContent = albums[current].title + " — " + (lbIndex + 1) + " / " + lightboxPhotos.length;
    }
    function step(dir) {
      if (!lightboxPhotos.length) return;
      lbIndex = (lbIndex + dir + lightboxPhotos.length) % lightboxPhotos.length;
      updateLightbox();
    }

    document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
    document.getElementById("lightbox-prev").addEventListener("click", function () { step(-1); });
    document.getElementById("lightbox-next").addEventListener("click", function () { step(1); });
    lb.addEventListener("click", function (e) {
      if (e.target === lb) closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    });

    show(0);
  }

  /* ---------- contact page ---------- */

  function renderContact() {
    var el = function (id) { return document.getElementById(id); };

    var addr = el("contact-address");
    if (addr) addr.innerHTML = C.addressLines.map(esc).join("<br>");

    var phones = el("contact-phones");
    if (phones) {
      var nums = [C.phone, C.phoneAlt].filter(function (p) { return p; });
      phones.innerHTML = nums.map(function (p) {
        return '<li><a class="contact-pill" href="' + telLink(p) + '">' + ICON.phone + " " + esc(p) + "</a></li>";
      }).join("");
    }

    var email = el("contact-email");
    if (email) email.innerHTML = '<a class="contact-pill" href="mailto:' + esc(C.email) + '">' + ICON.mail + " " + esc(C.email) + "</a>";

    var dise = el("contact-dise");
    if (dise) dise.textContent = C.diseCode;

    var map = el("contact-map");
    if (map) {
      if (C.mapEmbedUrl && !isPlaceholder(C.mapEmbedUrl)) {
        map.innerHTML = '<iframe title="Map — ' + esc(C.schoolName) + '" src="' + esc(C.mapEmbedUrl) +
          '" width="100%" height="380" style="border:0" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe>';
      } else {
        map.innerHTML = '<div class="map-placeholder">' + ICON.pin +
          '<p>The map will appear here once you paste the Google&nbsp;Maps embed URL into <code>js/site-config.js</code>.</p>' +
          '<p class="muted">Google Maps → search the school → Share → “Embed a map” → copy the <code>src</code> link.</p></div>';
      }
    }

    var dir = el("contact-directions");
    if (dir) {
      dir.href = C.mapDirectionsUrl ||
        "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(C.schoolName + " " + C.addressLines.join(" "));
      dir.target = "_blank";
      dir.rel = "noopener";
    }

    var wa = el("contact-whatsapp");
    if (wa) wa.href = waLink();

    var social = el("contact-social");
    if (social) {
      social.innerHTML = socialLinksHtml("social-btn") ||
        '<p class="muted">Add your social media URLs in <code>js/site-config.js</code>.</p>';
    }
  }

  /* ---------- feedback page ---------- */

  function renderFeedback() {
    var form = document.getElementById("feedback-form");
    var missing = document.getElementById("feedback-setup");
    if (!form) return;

    if (isPlaceholder(C.email)) {
      form.hidden = true;
      if (missing) missing.hidden = false;
      return;
    }

    form.action = "https://formsubmit.co/" + C.email;
    var subject = form.querySelector('input[name="_subject"]');
    if (subject) subject.value = "Website Feedback — " + C.shortName;
  }

  /* ---------- scroll effects ---------- */

  function initScrollEffects() {
    var header = document.getElementById("site-header");
    if (header) {
      var onScroll = function () {
        header.classList.toggle("scrolled", window.scrollY > 8);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  }

  /* ---------- boot ---------- */

  function initHeroPhoto() {
    // Optional: set "heroImage" in site-config.js (e.g. "images/hero.jpg")
    // and the homepage hero becomes a full-bleed photo with a dark overlay,
    // exactly like the template's landing-page look.
    if (!C.heroImage) return;
    var hero = document.querySelector(".hero");
    if (!hero) return;
    hero.style.setProperty("--hero-photo", 'url("' + C.heroImage + '")');
    hero.classList.add("has-photo");
  }

  document.addEventListener("DOMContentLoaded", function () {
    buildHeader();
    buildFooter();
    buildWhatsAppButton();
    initScrollEffects();
    initHeroPhoto();

    var page = document.body.getAttribute("data-page");
    if (page === "home") renderHome();
    if (page === "gallery") renderGallery();
    if (page === "contact") renderContact();
    if (page === "feedback") renderFeedback();
  });
})();