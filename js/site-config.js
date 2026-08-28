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
      photos: [
        "founding-years-001.jpg",
        "founding-years-003.jpg",
        "founding-years-004.jpg",
        "founding-years-005.jpg",
        "founding-years-006.jpg",
        "founding-years-007.jpg",
        "founding-years-008.jpg",
        "founding-years-009.jpg",
        "founding-years-010.jpg",
        "founding-years-012.jpg",
        "founding-years-013.jpg",
        "founding-years-014.jpg",
        "founding-years-015.jpg",
        "founding-years-017.jpg",
        "founding-years-018.jpg",
        "founding-years-019.jpg",
        "founding-years-021.jpg",
        "founding-years-022.jpg",
        "founding-years-023.jpg",
        "founding-years-024.jpg",
        "founding-years-025.jpg",
        "founding-years-027.jpg",
        "founding-years-028.jpg",
        "founding-years-029.jpg",
        "founding-years-030.jpg"
      ]
    },
    {
      id: "sports-day-2015",
      title: "Grand Sports Day",
      year: "2015",
      folder: "images/sports-day-2015",
      photos: [
        "sports-day-2015-001.jpg",
        "sports-day-2015-002.jpg",
        "sports-day-2015-003.jpg",
        "sports-day-2015-004.jpg",
        "sports-day-2015-006.jpg",
        "sports-day-2015-007.jpg",
        "sports-day-2015-008.jpg",
        "sports-day-2015-009.jpg",
        "sports-day-2015-010.jpg",
        "sports-day-2015-011.jpg",
        "sports-day-2015-012.jpg",
        "sports-day-2015-014.jpg",
        "sports-day-2015-015.jpg",
        "sports-day-2015-016.jpg",
        "sports-day-2015-017.jpg",
        "sports-day-2015-018.jpg",
        "sports-day-2015-019.jpg",
        "sports-day-2015-021.jpg",
        "sports-day-2015-022.jpg",
        "sports-day-2015-023.jpg",
        "sports-day-2015-024.jpg",
        "sports-day-2015-025.jpg",
        "sports-day-2015-026.jpg",
        "sports-day-2015-027.jpg",
        "sports-day-2015-028.jpg",
        "sports-day-2015-030.jpg",
        "sports-day-2015-031.jpg",
        "sports-day-2015-032.jpg",
        "sports-day-2015-033.jpg",
        "sports-day-2015-034.jpg",
        "sports-day-2015-035.jpg",
        "sports-day-2015-036.jpg",
        "sports-day-2015-038.jpg",
        "sports-day-2015-039.jpg",
        "sports-day-2015-040.jpg",
        "sports-day-2015-041.jpg",
        "sports-day-2015-042.jpg",
        "sports-day-2015-044.jpg",
        "sports-day-2015-045.jpg",
        "sports-day-2015-046.jpg",
        "sports-day-2015-047.jpg",
        "sports-day-2015-048.jpg",
        "sports-day-2015-049.jpg",
        "sports-day-2015-050.jpg",
        "sports-day-2015-052.jpg",
        "sports-day-2015-053.jpg",
        "sports-day-2015-054.jpg",
        "sports-day-2015-055.jpg",
        "sports-day-2015-058.jpg",
        "sports-day-2015-059.jpg",
        "sports-day-2015-060.jpg",
        "sports-day-2015-061.jpg",
        "sports-day-2015-062.jpg",
        "sports-day-2015-063.jpg",
        "sports-day-2015-064.jpg",
        "sports-day-2015-065.jpg",
        "sports-day-2015-066.jpg",
        "sports-day-2015-067.jpg",
        "sports-day-2015-069.jpg",
        "sports-day-2015-070.jpg",
        "sports-day-2015-071.jpg",
        "sports-day-2015-073.jpg",
        "sports-day-2015-074.jpg",
        "sports-day-2015-075.jpg",
        "sports-day-2015-076.jpg",
        "sports-day-2015-077.jpg",
        "sports-day-2015-078.jpg",
        "sports-day-2015-079.jpg"
      ]
    },
    {
      id: "annual-day-2018-19",
      title: "Annual Day Celebrations",
      year: "2018 – 19",
      folder: "images/annual-day-2018-19",
      photos: [
        "annual-day-2018-19-001.jpg",
        "annual-day-2018-19-002.jpg",
        "annual-day-2018-19-005.jpg",
        "annual-day-2018-19-006.jpg",
        "annual-day-2018-19-007.jpg",
        "annual-day-2018-19-008.jpg",
        "annual-day-2018-19-009.jpg",
        "annual-day-2018-19-011.jpg",
        "annual-day-2018-19-012.jpg",
        "annual-day-2018-19-013.jpg",
        "annual-day-2018-19-014.jpg",
        "annual-day-2018-19-015.jpg",
        "annual-day-2018-19-018.jpg",
        "annual-day-2018-19-019.jpg",
        "annual-day-2018-19-020.jpg",
        "annual-day-2018-19-021.jpg",
        "annual-day-2018-19-026.jpg",
        "annual-day-2018-19-027.jpg",
        "annual-day-2018-19-028.jpg",
        "annual-day-2018-19-029.jpg",
        "annual-day-2018-19-030.jpg",
        "annual-day-2018-19-031.jpg",
        "annual-day-2018-19-034.jpg",
        "annual-day-2018-19-035.jpg",
        "annual-day-2018-19-036.jpg",
        "annual-day-2018-19-037.jpg",
        "annual-day-2018-19-038.jpg",
        "annual-day-2018-19-039.jpg",
        "annual-day-2018-19-040.jpg",
        "annual-day-2018-19-042.jpg",
        "annual-day-2018-19-043.jpg",
        "annual-day-2018-19-045.jpg",
        "annual-day-2018-19-046.jpg",
        "annual-day-2018-19-047.jpg",
        "annual-day-2018-19-049.jpg",
        "annual-day-2018-19-050.jpg",
        "annual-day-2018-19-051.jpg",
        "annual-day-2018-19-053.jpg",
        "annual-day-2018-19-054.jpg",
        "annual-day-2018-19-056.jpg",
        "annual-day-2018-19-057.jpg",
        "annual-day-2018-19-059.jpg",
        "annual-day-2018-19-060.jpg"
      ]
    },
    {
      id: "annual-function-2023",
      title: "Annual Functions",
      year: "2014 – 2023",
      folder: "images/annual-function-2023",
      photos: [
        "annual-function-2023-001.jpg",
        "annual-function-2023-002.jpg",
        "annual-function-2023-003.jpg",
        "annual-function-2023-004.jpg",
        "annual-function-2023-005.jpg",
        "annual-function-2023-006.jpg",
        "annual-function-2023-007.jpg",
        "annual-function-2023-008.jpg",
        "annual-function-2023-009.jpg",
        "annual-function-2023-010.jpg",
        "annual-function-2023-011.jpg",
        "annual-function-2023-012.jpg",
        "annual-function-2023-013.jpg",
        "annual-function-2023-014.jpg",
        "annual-function-2023-015.jpg",
        "annual-function-2023-016.jpg",
        "annual-function-2023-017.jpg",
        "annual-function-2023-018.jpg",
        "annual-function-2023-019.jpg",
        "annual-function-2023-020.jpg",
        "annual-function-2023-021.jpg",
        "annual-function-2023-022.jpg",
        "annual-function-2023-023.jpg",
        "annual-function-2023-024.jpg",
        "annual-function-2023-025.jpg",
        "annual-function-2023-026.jpg",
        "annual-function-2023-027.jpg",
        "annual-function-2023-028.jpg",
        "annual-function-2023-029.jpg",
        "annual-function-2023-030.jpg",
        "annual-function-2023-033.jpg",
        "annual-function-2023-034.jpg",
        "annual-function-2023-036.jpg",
        "annual-function-2023-037.jpg",
        "annual-function-2023-038.jpg",
        "annual-function-2023-039.jpg",
        "annual-function-2023-040.jpg",
        "annual-function-2023-041.jpg",
        "annual-function-2023-042.jpg",
        "annual-function-2023-043.jpg",
        "annual-function-2023-048.jpg",
        "annual-function-2023-049.jpg",
        "annual-function-2023-055.jpg",
        "annual-function-2023-056.jpg",
        "annual-function-2023-059.jpg",
        "annual-function-2023-060.jpg",
        "annual-function-2023-061.jpg",
        "annual-function-2023-062.jpg",
        "annual-function-2023-063.jpg",
        "annual-function-2023-064.jpg",
        "annual-function-2023-065.jpg"
      ]
    },
    {
      id: "republic-day",
      title: "Patriotic Performances",
      year: "Annual Function 2014",
      folder: "images/republic-day",
      photos: [
        "republic-day-001.jpg",
        "republic-day-002.jpg",
        "republic-day-003.jpg",
        "republic-day-004.jpg",
        "republic-day-005.jpg",
        "republic-day-006.jpg",
        "republic-day-007.jpg",
        "republic-day-008.jpg",
        "republic-day-009.jpg",
        "republic-day-015.jpg"
      ]
    },
    {
      id: "farewell-2025",
      title: "Farewell Ceremony",
      year: "2025",
      folder: "images/farewell-2025",
      photos: [
        "farewell-2025-001.jpg",
        "farewell-2025-002.jpg",
        "farewell-2025-003.jpg",
        "farewell-2025-004.jpg",
        "farewell-2025-005.jpg",
        "farewell-2025-006.jpg",
        "farewell-2025-007.jpg",
        "farewell-2025-008.jpg",
        "farewell-2025-009.jpg",
        "farewell-2025-010.jpg",
        "farewell-2025-011.jpg",
        "farewell-2025-012.jpg",
        "farewell-2025-013.jpg",
        "farewell-2025-014.jpg",
        "farewell-2025-015.jpg",
        "farewell-2025-016.jpg",
        "farewell-2025-017.jpg",
        "farewell-2025-018.jpg",
        "farewell-2025-019.jpg",
        "farewell-2025-020.jpg",
        "farewell-2025-021.jpg",
        "farewell-2025-022.jpg",
        "farewell-2025-023.jpg",
        "farewell-2025-024.jpg",
        "farewell-2025-025.jpg",
        "farewell-2025-026.jpg"
      ]
    },
    {
      id: "events-achievements",
      title: "Events & Achievements",
      year: "Across the years",
      folder: "images/events-achievements",
      photos: [
        "events-achievements-004.jpg",
        "events-achievements-006.jpg",
        "events-achievements-007.jpg",
        "events-achievements-008.jpg",
        "events-achievements-009.jpg",
        "events-achievements-010.jpg",
        "events-achievements-012.jpg",
        "events-achievements-013.jpg",
        "events-achievements-014.jpg",
        "events-achievements-015.jpg",
        "events-achievements-016.jpg",
        "events-achievements-017.jpg",
        "events-achievements-018.jpg",
        "events-achievements-019.jpg",
        "events-achievements-022.jpg",
        "events-achievements-023.jpg",
        "events-achievements-024.jpg",
        "events-achievements-025.jpg"
      ]
    }
  ],

  /* ---------- Announcements (home page strip) ---------- */
  // Add or edit items freely — they appear on the home page.
  announcements: [
    { date: "TODO", text: "Admissions open for the new academic session. Contact the school office for details." },
    { date: "TODO", text: "Follow the school on Facebook, Instagram and YouTube for the latest photos and videos." }
  ]
};