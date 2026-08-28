/* ============================================================
   GURUKUL ACADEMY — SITE CONFIG
   ------------------------------------------------------------
   ★ THIS IS THE ONLY FILE YOU NEED TO EDIT TO UPDATE THE SITE.

   Every school-specific detail lives here: contact info, DISE
   code, WhatsApp number, social media links, the app download,
   and the photo albums.

   Values marked "TODO" are placeholders — replace them with
   the real details and the whole website updates automatically
   (header, footer, contact page, WhatsApp button, form, etc.).

   See README.md for step-by-step instructions.
   ============================================================ */

// NOTE: must be var/function-scope-assignable so it lands on window.SITE_CONFIG
// (a top-level `const` does NOT attach to window, which broke all page rendering)
var SITE_CONFIG = {

  /* ---------- School identity ---------- */
  schoolName: "Gurukul Academy Higher Secondary School",
  shortName: "Gurukul Academy",
  tagline: "Knowledge · Discipline · Character",
  foundedYear: 2013,
  logo: "images/logo.png",          // Replace with your own logo (e.g. images/logo.png) and update this path
  heroImage: "",                    // Optional: put a wide school photo at images/hero.jpg and set
                                    // heroImage: "images/hero.jpg" — the homepage hero becomes a
                                    // full-bleed photo with a dark overlay (template landing look)

  /* ---------- Contact details ---------- */
  addressLines: [
    "Gurukul Academy Higher Secondary School",
    "Satna Road, Village Gadauli, Amarpatan",
    "District Maihar, Madhya Pradesh – 485775",
    "India"
  ],
  diseCode: "23130101102",          // DISE / UDISE code printed on the contact page
  phone: "+91 83197 88245",         // Main phone number, shown on the site
  phoneAlt: "+91 74704 18118",      // Helpline / feedback number (WhatsApp only)
  email: "gurukulamarpatan@gmail.com",

  /* ---------- WhatsApp click-to-chat ---------- */
  // Format: country code + number, digits only (no +, spaces or dashes).
  whatsapp: {
    number: "917470418118",         // Helpline / feedback number (WhatsApp only)
    message: "Hello Gurukul Academy Amarpatan, I have a question about the school."
  },

  /* ---------- Social media ---------- */
  social: {
    youtube: "https://www.youtube.com/@gurukulacademy876",
    instagram: "https://www.instagram.com/gurukul_amarpatan/",
    facebook: "https://www.facebook.com/gurukulacademyamarpatan/"
  },

  /* ---------- Map (contact page) ---------- */
  // Google Maps embed — keyless, shows the school's own place card.
  // Built from Google Maps → Share → "Embed a map" (the src link).
  mapEmbedUrl: "https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1sGurukul+Academy+Higher+Secondary+School+Amarpatan",
  // "Get directions" button — opens Google Maps navigation to the school.
  mapDirectionsUrl: "https://www.google.com/maps/place/Gurukul+Academy+Higher+Secondary+School+Amarpatan/@24.3352318,80.9522386,17z",

  /* ---------- YouTube videos (home page) ---------- */
  // Real uploads from the school's channel @gurukulacademy876.
  // Add more with the video's ID from its YouTube link.
  youtubeVideos: [
    { id: "3Zd9xY23hkg", title: "Discover the Spirit of Excellence — Official School Promo Video 2025" },
    { id: "yj4RaZx9_TI", title: "Proud Girls of Gurukul Academy Hr. Sec. School" },
    { id: "5GNxw6k3DI8", title: "Grand March Past — Discipline & Unity in Action" },
    { id: "4FczjYFcD4I", title: "Student Cricket Match" },
    { id: "qY16-bGcoz8", title: "Melodious Tribute on Independence Day" },
    { id: "r885CrRJPIo", title: "Indian Army Act — Tribute Performance" }
  ],

  /* ---------- Testimonials (home page) ---------- */
  // ★ Add REAL feedback from parents/students here (Google reviews,
  //   JustDial or messages you receive). Each entry:
  //   { name: "…", role: "Parent of Class 6 student", text: "…", rating: 5 }
  // The section stays hidden until at least one is added.
  testimonials: [],

  /* ---------- School app ---------- */
  // Removed from the website on the school's request (2026-08).
  // To bring it back, an entry like this can be restored and the
  // app page re-added:
  //   app: { name: "Gurukul Attendance", webAppUrl: "https://gurukul-amarpatan-attendance.web.app/" }

  /* ---------- Photo albums (gallery page) ---------- */
  // How to add an album:
  //   1. Create a folder, e.g.  images/annual-day-2016/
  //   2. Put your photos inside it.
  //   3. Add an entry below. Files not listed yet are fine — an
  //      album with no photos shows placeholder tiles until you
  //      add the file names.
  albums: [
    {
      id: "founding-years",
      title: "The Founding Years",
      year: "2013 – 2015",
      folder: "images/founding-years",
      photos: []                    // e.g. ["assembly.jpg", "first-day.jpg"]
    },
    {
      id: "annual-day",
      title: "Annual Day Celebrations",
      year: "Selected moments",
      folder: "images/annual-day",
      photos: []
    },
    {
      id: "campus-life",
      title: "Campus Life",
      year: "Classes, labs & sports",
      folder: "images/campus-life",
      photos: []
    }
  ],

  /* ---------- Announcements (home page strip) ---------- */
  // Add or edit items freely — they appear on the home page.
  announcements: [
    { date: "TODO", text: "Admissions open for the new academic session. Contact the school office for details." },
    { date: "TODO", text: "Follow the school on Facebook, Instagram and YouTube for the latest photos and videos." }
  ]
};