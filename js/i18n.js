/* ============================================================
   GURUKUL ACADEMY — LANGUAGE ENGINE (EN / हिंदी)
   ------------------------------------------------------------
   Hindi dictionary + the toggle that switches every page.

   HOW IT WORKS
   - English is the default and lives in the HTML itself, so a page
     is fully readable even if JavaScript never runs (static-first).
   - Hindi lives HERE. Elements marked with data-i18n attributes get
     their text replaced when the visitor picks हिंदी:

       data-i18n="key"          → element's text
       data-i18n-html="key"     → element's inner HTML (dictionary is
                                   author-written, trusted)
       data-i18n-aria="key"     → aria-label attribute
       data-i18n-placeholder="key" → placeholder attribute

   - The choice is remembered in localStorage ("gurukul_lang").
   - JS-rendered sections (nav, footer, gallery, …) listen via
     SITE_LANG.onChange() and repaint with SITE_LANG.t().

   TO ADD OR FIX A TRANSLATION: edit the SITE_I18N.hi entries below.
   ============================================================ */

// NodeList.forEach polyfill for older phones (kept also in main.js)
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

/* ---------- Hindi dictionary ----------
   Namespaced keys. {n} = a number token interpolated by t(). */
var SITE_I18N = {
  hi: {
    /* page titles */
    "title.home": "गुरुकुल अकादमी उच्चतर माध्यमिक विद्यालय — अमरपाटन, मैहर (म.प्र.)",
    "title.about": "हमारे बारे में — गुरुकुल अकादमी, अमरपाटन",
    "title.gallery": "फोटो गैलरी — गुरुकुल अकादमी, अमरपाटन",
    "title.contact": "संपर्क करें — गुरुकुल अकादमी, अमरपाटन",
    "title.feedback": "सुझाव / शिकायत — गुरुकुल अकादमी, अमरपाटन",
    "title.notfound": "पृष्ठ नहीं मिला — गुरुकुल अकादमी",

    /* nav (footer + JS-built menus) */
    "nav.home": "मुख्य पृष्ठ", "nav.about": "हमारे बारे में",
    "nav.gallery": "गैलरी", "nav.social": "सोशल मीडिया",
    "nav.contact": "संपर्क", "nav.feedback": "सुझाव",
    "nav.staff": "स्टाफ पोर्टल ↗",
    "nav.staffPlain": "स्टाफ पोर्टल",

    /* footer */
    "footer.chatWhatsApp": "WhatsApp पर बात करें",
    "footer.diseLabel": "डाइस कोड:",
    "footer.staffLinks": "स्टाफ के लिए: निर्देशित सैर · संक्षिप्त गाइड",
    "footer.pagesHeading": "पृष्ठ",

    /* WhatsApp float */
    "wa.floatAria": "WhatsApp पर हमसे बात करें",
    "wa.tooltip": "हमसे बात करें",

    /* social aria */
    "social.youtube": "यूट्यूब", "social.instagram": "इंस्टाग्राम",
    "social.facebook": "फेसबुक",

    /* ---------- home ---------- */
    "brand.small": "उच्चतर माध्यमिक विद्यालय · स्थापना 2013",
    "home.hero.est": "★ स्थापना 2013 · अमरपाटन, मध्य प्रदेश",
    "home.hero.titleHtml": "गुरुकुल अकादमी <span class=\"accent\">उच्चतर माध्यमिक</span> विद्यालय",
    "home.hero.slogan": "ज्ञान · अनुशासन · चरित्र",
    "home.hero.intro": "सतना रोड, गड़ौली में एक दशक से अधिक समय से युवा मनों का निर्माण।",
    "home.hero.ctaVideos": "विद्यालय के वीडियो देखें",
    "home.hero.ctaContact": "संपर्क / भेंट करें",
    "home.chips.board": "एमपी बोर्ड", "home.chips.class": "नर्सरी से कक्षा 12",
    "home.chips.medium": "अंग्रेज़ी व हिंदी माध्यम", "home.chips.dise": "डाइस कोड 23130101102",
    "home.explore.aria": "विद्यालय की सैर",
    "home.tile.since": "2013 से", "home.tile.sinceSub": "13+ वर्षों की उत्कृष्टता",
    "home.tile.visit": "हमसे मिलें", "home.tile.visitSub": "सतना रोड, गड़ौली, अमरपाटन",
    "home.tile.gallery": "फोटो गैलरी", "home.tile.gallerySub": "वर्षों के क्षण",
    "home.tile.feedback": "सुझाव", "home.tile.feedbackSub": "हमें आपकी बात सुनना है",
    "home.tile.videos": "वीडियो देखें", "home.tile.videosSub": "हमारा यूट्यूब चैनल",
    "home.why.kicker": "परिवार हमें क्यों चुनते हैं",
    "home.why.heading": "क्यों गुरुकुल अकादमी",
    "home.why.intro": "मज़बूत संस्कारों और आधुनिक शिक्षा के साथ युवा मनों को गढ़ने का एक दशक।",
    "home.card1.title": "गुणवत्तापूर्ण शिक्षा",
    "home.card1.text": "समर्पित शिक्षक और सुव्यवस्थित एमपी बोर्ड पाठ्यक्रम, जो विद्यार्थियों को बोर्ड परीक्षा और आगे के जीवन के लिए तैयार करता है।",
    "home.card2.title": "अनुशासन व संस्कार",
    "home.card2.text": "गुरुकुल परंपरा की सच्ची भावना में — पढ़ाई के साथ-साथ आदर, जिम्मेदारी और चरित्र का निर्माण।",
    "home.card3.title": "परिवार जैसा स्नेह",
    "home.card3.text": "अमरपाटन का एक घनिष्ठ विद्यालय परिवार, जहाँ अभिभावक, शिक्षक और विद्यार्थी साथ-साथ बढ़ते हैं।",
    "home.stats.founded": "स्थापना",
    "home.stats.years": "वर्षों की सेवा",
    "home.stats.classes": "कक्षाएँ",
    "home.stats.area": "क्षेत्र के विद्यालयों में",
    "home.videos.kicker": "हमारे YouTube चैनल से",
    "home.videos.heading": "हमारे विद्यालय की झलक",
    "home.videos.desc": "सभाएँ, मार्च पास्ट, मैच और उत्सव — गुरुकुल अकादमी, अमरपाटन के असली क्षण।",
    "home.videos.watch": "YouTube पर देखें",
    "home.videos.subscribe": "YouTube पर सब्सक्राइब करें",
    "home.social.kicker": "सोशल मीडिया",
    "home.social.heading": "हमारी यात्रा से जुड़ें",
    "home.social.sub": "रोज़ के क्षण, कार्यक्रमों की फोटो और अपडेट — सीधे हमारे Facebook और Instagram पेजों से।",
    "home.social.fbPosts": "Facebook — हाल की पोस्ट",
    "home.social.visitFb": "Facebook पेज देखें",
    "home.social.igPosts": "Instagram — @gurukul_amarpatan",
    "home.social.igCard": "फोटो, कार्यक्रम और उत्सव — हर नई पोस्ट देखने के लिए हमें फ़ॉलो करें।",
    "home.social.followIg": "Instagram पर फ़ॉलो करें",
    "home.test.kicker": "अभिभावकों की राय",
    "home.test.heading": "हमारे परिवार क्या कहते हैं",
    "home.test.invite": "क्या आप अभिभावक, विद्यार्थी या पूर्व छात्र हैं? <a href=\"feedback.html\">अपना अनुभव साझा करें</a> — या Google पर समीक्षा दें — और आपकी बात यहाँ दिख सकती है।",
    "home.ann.kicker": "सूचना पट्ट",
    "home.announcements.heading": "सूचनाएँ",
    "home.cta.heading": "आइए, अपने बच्चे के भविष्य के विद्यालय में आएँ",
    "home.cta.sub": "सतना रोड, ग्राम गड़ौली, अमरपाटन — जिला मैहर, मध्य प्रदेश। कॉल करें, WhatsApp करें, या सीधे पधारें।",
    "home.cta.wa": "हेल्पलाइन पर WhatsApp करें",
    "home.cta.map": "नक्शा व संपर्क विवरण",
    "home.muted.configHint": "अपने YouTube, Instagram और Facebook लिंक js/site-config.js में जोड़ें — वे यहाँ दिखेंगे।",
    "home.muted.fbHint": "अपना Facebook पेज लिंक js/site-config.js में जोड़ें।",

    /* ---------- about ---------- */
    "about.hero.title": "हमारे विद्यालय के बारे में",
    "about.hero.sub": "सीखने की एक यात्रा जो 2013 में शुरू हुई — और अब भी बढ़ रही है।",
    "about.story.heading": "हमारी कहानी",
    "about.story.p1": "गुरुकुल अकादमी उच्चतर माध्यमिक विद्यालय की स्थापना <strong>2013</strong> में सतना रोड, ग्राम गड़ौली, अमरपाटन (जिला मैहर, मध्य प्रदेश) में एक सरल दृष्टि के साथ हुई: बच्चों को अनुशासन और संस्कारों पर आधारित शिक्षा देना, साथ ही आधुनिक जगत के लिए पूरी तैयारी कराना।",
    "about.story.p2": "प्रारंभिक बैचों से आज तक, विद्यालय अपने विद्यार्थियों के साथ बढ़ता रहा है — कक्षाएँ, प्रयोगशालाएँ और स्नेहपूर्ण संस्कृति का निर्माण। एक दशक से अधिक समय बाद, हमारे पूर्व छात्र गुरुकुल की भावना को महाविद्यालयों, करियर और समाज में ले जा रहे हैं।",
    "about.mission.heading": "हमारा संकल्प",
    "about.mission.text": "हर विद्यार्थी को आत्मविश्वासी, जिम्मेदार और सक्षम व्यक्ति के रूप में गढ़ना — मज़बूत शिक्षा के साथ नैतिक चरित्र का संगम, ताकि हर बच्चा परिवार, समाज और देश के लिए योगदान देने योग्य बनकर निकले।",
    "about.stats.excellence": "वर्षों की उत्कृष्टता",
    "about.facilities.heading": "सुविधाएँ",
    "about.facilities.sub": "हमारा परिसर हर विद्यार्थी को क्या देता है।",
    "about.fac1.title": "कक्षाएँ",
    "about.fac1.text": "उजली, हवादार कक्षाएँ जो हर मौसम में पढ़ाई को आरामदायक बनाए रखती हैं।",
    "about.fac2.title": "विज्ञान प्रयोगशाला",
    "about.fac2.text": "व्यावहारिक प्रयोग जो उच्चतर माध्यमिक विद्यार्थियों के लिए विज्ञान की अवधारणाओं को जीवंत बनाते हैं।",
    "about.fac3.title": "खेल व गतिविधियाँ",
    "about.fac3.text": "खेल, वार्षिकोत्सव, सांस्कृतिक कार्यक्रम और प्रतियोगिताएँ जो टीमवर्क और आत्मविश्वास बनाती हैं।",
    "about.glance.heading": "एक नज़र में विद्यालय",
    "about.glance.official": "आधिकारिक विवरण",
    "about.label.name": "विद्यालय का नाम:",
    "about.label.est": "स्थापना:",
    "about.label.dise": "डाइस / यूडाइस कोड:",
    "about.label.board": "बोर्ड:",
    "about.label.classes": "कक्षाएँ:",
    "about.label.recognition": "मान्यता:",
    "about.value.board": "मध्य प्रदेश राज्य बोर्ड (एमपी बोर्ड)",
    "about.value.classes": "नर्सरी से कक्षा 12",
    "about.value.recognition": "485775 क्षेत्र के लगभग 64 विद्यालयों में #2 स्थान <span class=\"muted\">(IndiaInfo.net विद्यालय रैंकिंग)</span>",
    "about.glance.staff": "हमारे शिक्षक",
    "about.staff.text": "हमारे शिक्षक गुरुकुल अकादमी की धड़कन हैं — अनुभवी, समर्पित और हर विद्यार्थी की प्रगति में व्यक्तिगत रुचि लेने वाले।",
    "about.staff.note": "यहाँ बाद में विस्तृत स्टाफ अनुभाग जोड़ा जा सकता है — बस कहें।",

    /* ---------- gallery ---------- */
    "gallery.hero.title": "फोटो गैलरी",
    "gallery.hero.sub": "तेरह वर्षों की सभाएँ, वार्षिकोत्सव, प्रयोगशालाएँ, खेल और उत्सव — तस्वीरों में सजा विद्यालय।",
    "gallery.albumsHeading": "फोटो एल्बम",
    "gallery.albumsAria": "फोटो एल्बम",
    "gallery.photoCount": "{n} फोटो",
    "gallery.comingSoon": "जल्द आ रहा है",
    "gallery.openPhoto": "फोटो खोलें",
    "gallery.photoAlt": "फोटो",
    "gallery.emptyTitle": "इस एल्बम की फोटो जल्द आ रही हैं",
    "gallery.shareHtml": "पुरानी स्कूल की फोटो साझा करनी हैं? हमें <a href=\"contact.html\">WhatsApp</a> पर भेजें — हम उन्हें यहाँ जोड़ना चाहेंगे।",
    "gallery.viewerAria": "फोटो व्यूअर",
    "gallery.close": "बंद करें",
    "gallery.prev": "पिछली फोटो",
    "gallery.next": "अगली फोटो",

    /* ---------- contact ---------- */
    "contact.hero.title": "हमसे संपर्क करें",
    "contact.hero.sub": "विद्यालय आएँ, कॉल करें या WhatsApp करें — हम हमेशा उपलब्ध हैं।",
    "contact.addressLabel": "पता",
    "contact.phoneLabel": "फ़ोन",
    "contact.emailLabel": "ईमेल",
    "contact.diseLabel": "डाइस कोड",
    "contact.directions": "Google Maps पर रास्ता देखें",
    "contact.mapHeading": "हम यहाँ हैं",
    "contact.socialHeading": "सोशल मीडिया पर हमें जोड़ें",
    "contact.socialSub": "विद्यालय के कार्यक्रम, सूचनाएँ और फोटो हमारे सोशल पेजों पर देखें।",
    "contact.waHelpline": "(WhatsApp हेल्पलाइन)",
    "contact.muted.mapHint": "js/site-config.js में Google Maps एम्बेड URL डालने पर नक्शा यहाँ दिखेगा।",
    "contact.muted.mapHow": "Google Maps → विद्यालय खोजें → Share → “Embed a map” → src लिंक कॉपी करें।",
    "contact.muted.configHint": "अपने सोशल मीडिया लिंक js/site-config.js में जोड़ें।",

    /* ---------- feedback ---------- */
    "feedback.hero.title": "अपनी बात साझा करें",
    "feedback.hero.sub": "सुझाव, आभार, शिकायत या प्रश्न — हर संदेश सीधे विद्यालय तक पहुँचता है।",
    "feedback.setup.title": "एक बार की सेटअप आवश्यक",
    "feedback.setup.text": "यह फ़ॉर्म संदेश <strong>FormSubmit</strong> (निःशुल्क) के माध्यम से विद्यालय के ईमेल पर भेजता है। इसे चालू करने के लिए:",
    "feedback.setup.step1": "विद्यालय का वास्तविक ईमेल <code>js/site-config.js</code> में डालें (<code>email:</code> पंक्ति)।",
    "feedback.setup.step2": "यह फ़ॉर्म एक बार भेजें — FormSubmit उस पते पर पुष्टि लिंक ईमेल करेगा।",
    "feedback.setup.step3": "लिंक पर क्लिक करें। हो गया — आगे के सभी संदेश विद्यालय के इनबॉक्स में आएँगे।",
    "feedback.setup.note": "पूरी जानकारी <code>README.md</code> में है।",
    "feedback.roleLabel": "मैं हूँ",
    "feedback.roleParent": "अभिभावक / संरक्षक",
    "feedback.roleStudent": "विद्यार्थी",
    "feedback.roleAlumni": "पूर्व छात्र",
    "feedback.roleWellwisher": "शुभचिंतक / आगंतुक",
    "feedback.typeLabel": "विषय है",
    "feedback.typeAppreciation": "सराहना",
    "feedback.typeSuggestion": "सुझाव",
    "feedback.typeComplaint": "शिकायत",
    "feedback.typeAdmission": "प्रवेश संबंधी पूछताछ",
    "feedback.typeQuestion": "प्रश्न",
    "feedback.typeOther": "अन्य कुछ",
    "feedback.nameLabel": "आपका नाम",
    "feedback.phoneLabel": "फ़ोन",
    "feedback.emailLabel": "ईमेल",
    "feedback.optional": "(वैकल्पिक)",
    "feedback.messageLabel": "आपका संदेश",
    "feedback.messagePlaceholder": "अपना सुझाव, प्रश्न या शिकायत यहाँ लिखें…",
    "feedback.submit": "सुझाव भेजें",
    "feedback.note": "आपका संदेश सीधे विद्यालय के ईमेल इनबॉक्स में जाता है। आप हमें <a href=\"contact.html\">WhatsApp</a> पर भी तुरंत संपर्क कर सकते हैं।",
    "feedback.sending": "भेजा जा रहा है…",
    "feedback.privacyNote": "आपकी जानकारी केवल विद्यालय प्रशासन के लिए है — यह वेबसाइट पर कहीं प्रकाशित नहीं होगी।",

    /* ---------- 404 ---------- */
    "notfound.code": "404",
    "notfound.title": "पृष्ठ नहीं मिला",
    "notfound.text": "जो पृष्ठ आप ढूँढ रहे हैं, वह यहाँ नहीं है।",
    "notfound.back": "मुख्य पृष्ठ पर लौटें",

    /* ---------- announcements ---------- */
    "ann.fallbackNote": "",

    /* ---------- staff demo / guide captions (used if pages are opened) ---------- */
    "demo.play": "चलाएँ", "demo.pause": "रोकें",
    "guide.printHeading": "किस काम के लिए कौन सा पृष्ठ"
  }
};

/* ---------- language engine ---------- */
window.SITE_LANG = (function () {
  var KEY = "gurukul_lang";
  var listeners = [];
  var lang = "en";

  function store(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }
  function read() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }

  // URL ?lang=hi wins (handy for screenshots/sharing), then stored choice.
  function initial() {
    try {
      var m = String(window.location.search || "").match(/[?&]lang=(en|hi)\b/);
      if (m) return m[1];
    } catch (e) {}
    var saved = read();
    return saved === "hi" ? "hi" : "en";
  }

  function t(key, fallback, n) {
    var d = window.SITE_I18N && window.SITE_I18N[lang];
    var v = d ? d[key] : null;
    if (v == null || v === "") return fallback;
    if (v.indexOf("{n}") > -1 && arguments.length > 2) {
      v = v.split("{n}").join(String(n));
    }
    return v;
  }

  function apply(root) {
    root = root || document;
    var nodes = root.querySelectorAll("[data-i18n],[data-i18n-html],[data-i18n-aria],[data-i18n-placeholder]");
    nodes.forEach(function (el) {
      var htmlKey = el.getAttribute("data-i18n-html");
      var textKey = el.getAttribute("data-i18n");
      var ariaKey = el.getAttribute("data-i18n-aria");
      var phKey = el.getAttribute("data-i18n-placeholder");
      if (htmlKey) {
        var v = t(htmlKey, "");
        if (v) el.innerHTML = v;
      }
      if (textKey) {
        var tv = t(textKey, el.textContent);
        el.textContent = tv;
      }
      if (ariaKey) {
        var av = t(ariaKey, el.getAttribute("aria-label") || "");
        if (av) el.setAttribute("aria-label", av);
      }
      if (phKey) {
        var pv = t(phKey, el.getAttribute("placeholder") || "");
        if (pv) el.setAttribute("placeholder", pv);
      }
    });
  }

  function reflectToggle() {
    document.querySelectorAll(".lang-switch .lang-btn").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false");
    });
  }

  function set(next, persist) {
    lang = next === "hi" ? "hi" : "en";
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.classList.toggle("lang-hi", lang === "hi");
    document.documentElement.classList.toggle("lang-en", lang === "en");
    if (persist) store(lang);
    apply(document);
    reflectToggle();
    for (var i = 0; i < listeners.length; i++) { try { listeners[i](lang); } catch (e) {} }
  }

  function mount(slot) {
    if (!slot || slot.querySelector(".lang-switch")) return;
    var wrap = document.createElement("div");
    wrap.className = "lang-switch";
    wrap.setAttribute("role", "group");
    wrap.setAttribute("aria-label", "Select language / भाषा");
    wrap.innerHTML =
      '<button type="button" class="lang-btn" data-lang="en" aria-pressed="' + (lang === "en") + '">EN</button>' +
      '<span class="lang-sep" aria-hidden="true">|</span>' +
      '<button type="button" class="lang-btn" data-lang="hi" aria-pressed="' + (lang === "hi") + '">हिंदी</button>';
    wrap.addEventListener("click", function (e) {
      var btn = e.target.closest(".lang-btn");
      if (btn) set(btn.getAttribute("data-lang"), true);
    });
    slot.appendChild(wrap);
    reflectToggle();
  }

  lang = initial();

  return {
    get: function () { return lang; },
    set: set,
    apply: apply,
    mount: mount,
    t: t,
    onChange: function (fn) { listeners.push(fn); if (lang === "hi") { try { fn(lang); } catch (e) {} } }
  };
})();