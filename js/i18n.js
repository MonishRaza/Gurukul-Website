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
    "title.privacy": "गोपनीयता नीति — गुरुकुल-टीम (अमरपाटन)",
    "title.staffApp": "गुरुकुल-टीम ऐप — इंस्टॉल गाइड · गुरुकुल अकादमी",

    /* nav (footer + JS-built menus) */
    "nav.home": "मुख्य पृष्ठ", "nav.about": "हमारे बारे में",
    "nav.gallery": "गैलरी", "nav.social": "सोशल मीडिया",
    "nav.contact": "संपर्क", "nav.feedback": "सुझाव",
    "nav.privacy": "गोपनीयता",
    "nav.staff": "गुरुकुल-टीम ऐप",
    "nav.staffPlain": "गुरुकुल-टीम ऐप",

    /* footer */
    "footer.chatWhatsApp": "WhatsApp पर बात करें",
    "footer.diseLabel": "डाइस कोड:",
    "footer.staffLinks": "स्टाफ के लिए: निर्देशित सैर · संक्षिप्त गाइड",
    "footer.pagesHeading": "पृष्ठ",

    /* developer-services promo strip (the "Ad" above the footer) */
    "promo.adTag": "विज्ञापन",
    "promo.kicker": "एमएम इंडिया एंड ग्लोबल एंटरप्राइजेज",
    "promo.heading": "ऐसी वेबसाइट बनवाना चाहते हैं?",
    "promo.textHtml": "यह वेबसाइट <b>एमएम इंडिया एंड ग्लोबल एंटरप्राइजेज</b> द्वारा विकसित की गई है। हम स्कूलों, व्यापारों, दुकानों और संस्थाओं के लिए व्यावसायिक वेबसाइट व कस्टम ऐप बनाते हैं — आपकी ज़रूरत के अनुसार।",
    "promo.hint": "वेबसाइट · स्कूल ऐप · व्यापार पेज · कस्टम सॉफ़्टवेयर",

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

    /* ---------- privacy ---------- */
    "privacy.metaDesc": "गुरुकुल-टीम (अमरपाटन) ऐप अमरपाटन के गुरुकुल अकादमी के स्टाफ और विद्यार्थियों का डेटा कैसे एकत्र, उपयोग और सुरक्षित करता है।",
    "privacy.hero.title": "गोपनीयता नीति — गुरुकुल-टीम (अमरपाटन)",
    "privacy.hero.sub": "ऐप क्या एकत्र करता है, क्यों एकत्र करता है, और कैसे सुरक्षित रखता है।",
    "privacy.intro": "यह गोपनीयता नीति बताती है कि <strong>गुरुकुल अकादमी उच्चतर माध्यमिक विद्यालय, अमरपाटन</strong> (\"विद्यालय\", \"हम\") <strong>गुरुकुल-टीम (अमरपाटन)</strong> वेब व मोबाइल ऐप (इसके बाद \"ऐप\") का उपयोग करते समय जानकारी कैसे एकत्र, उपयोग और सुरक्षित करता है। TEAM का अर्थ है — शिक्षक एवं कर्मचारी उपस्थिति प्रबंधन। ऐप केवल स्टाफ के लिए एक कार्यबल प्रबंधन उपकरण है — यह कोई सार्वजनिक सामाजिक उत्पाद नहीं है। अभिभावक और विद्यार्थी ऐप में लॉगिन नहीं करते।",
    "privacy.agreeLine": "ऐप का उपयोग करके आप नीचे वर्णित प्रथाओं से सहमत हैं। यदि आप सहमत नहीं हैं, तो कृपया ऐप का उपयोग न करें। प्रश्न यहाँ भेजें:",
    "privacy.h2.scope": "1. यह नीति किस पर लागू होती है",
    "privacy.scope.text": "ऐप का उपयोग इन लोगों द्वारा किया जाता है:",
    "privacy.scope.staff": "<strong>विद्यालय स्टाफ</strong> — शिक्षक, कक्षा शिक्षक, समन्वयक, प्रधानाध्यापक, निदेशक और विद्यालय एडमिन/मालिक। प्रत्येक स्टाफ सदस्य विद्यालय एडमिन द्वारा बनाए गए ईमेल और पासवर्ड से लॉगिन करता है।",
    "privacy.scope.students": "विद्यार्थियों के नाम, कक्षाएँ और हाउस सदस्यता ऐप में कक्षा हाज़िरी लगाने और प्रति-विद्यार्थी हाज़िरी सूचनाएँ उचित स्टाफ Telegram समूहों को भेजने के लिए संग्रहीत हैं। विद्यार्थी-संबंधी डेटा किसी सार्वजनिक लॉगिन से नहीं दिखाया जाता; केवल प्रमाणित स्टाफ ही इसे देख सकता है।",
    "privacy.h2.collected": "2. हम कौन-सी जानकारी एकत्र करते हैं",
    "privacy.h3.account": "क) खाता जानकारी",
    "privacy.collect.account.1": "नाम, ईमेल पता, फ़ोन नंबर (यदि स्टाफ सदस्य ने दिया हो), भूमिका (शिक्षक / समन्वयक / प्रधानाध्यापक / निदेशक / विद्यालय एडमिन), निर्धारित कक्षाएँ व सेक्शन, और स्टाफ सदस्य स्थायी है या अतिथि।",
    "privacy.collect.account.2": "पासवर्ड केवल हमारे पहचान प्रदाता (Firebase Authentication, Google Cloud) द्वारा क्रिप्टोग्राफ़िक हैश के रूप में संग्रहित होते हैं। हम सादे-पाठ वाले पासवर्ड कभी संग्रहित या प्रेषित नहीं करते।",
    "privacy.collect.account.3": "पहले लॉगिन पर एक अस्थायी \"must change password\" ध्वज लगाया जाता है ताकि स्टाफ सदस्य ऐप का उपयोग करने से पहले अपना पासवर्ड स्वयं चुने।",
    "privacy.h3.attendance": "ख) हाज़िरी और छुट्टी के रिकॉर्ड",
    "privacy.collect.att.1": "दैनिक क्लॉक-इन / क्लॉक-आउट टाइमस्टैम्प, कार्य मोड (परिसर में / दूरस्थ / छुट्टी), और स्टाफ सदस्य द्वारा स्वयं-रिपोर्ट किया गया दूरस्थ कारण (जहाँ लागू हो)।",
    "privacy.collect.att.2": "छुट्टी आवेदन (आकस्मिक छुट्टी, चिकित्सा छुट्टी, अर्जित छुट्टी, क्षतिपूर्ति अवकाश, अर्ध-दिवस) और उनकी स्वीकृति स्थिति (लंबित / स्वीकृत / अस्वीकृत), साथ ही अनुमोदक की पहचान व अनुमोदन टाइमस्टैम्प।",
    "privacy.collect.att.3": "उपरोक्त रिकॉर्ड से गणना की गई मासिक हाज़िरी सारांश (कार्य दिवस, रविवार, राजपत्रित छुट्टियाँ, उपस्थित, अनुमत CL, कटौती योग्य LWP, उपस्थिति प्रतिशत)।",
    "privacy.h3.selfie": "ग) पंच फ़ोटो (सेल्फ़ी)",
    "privacy.collect.selfie.1": "जब भी कोई स्टाफ सदस्य हाज़िरी लगाता है (पंच इन या पंच आउट), ऐप <strong>सामने का कैमरा</strong> खोलकर स्टाफ सदस्य की एक फ़ोटो लेता है। यही पंच को सत्यापनीय बनाता है: क्लॉक-इन यह दावा है कि व्यक्ति उपस्थित था, और फ़ोटो यह रिकॉर्ड है कि पंच किसने लगाया।",
    "privacy.collect.selfie.2": "यह एक ही स्थिर तस्वीर है, जो ऐप के डेटाबेस (Google Firebase) में तारीख़, पंच के प्रकार (IN या OUT) और एक डिवाइस पहचानकर्ता के साथ संग्रहित होती है। इसे केवल वे प्रमाणित विद्यालय स्टाफ देख सकते हैं जिन्हें हाज़िरी की समीक्षा की अनुमति है।",
    "privacy.collect.selfie.3": "फ़ोटो लिए जाने के 90 दिन बाद अपने आप हटा दी जाती हैं। ऐप में इसे अधिक समय तक रखने की कोई सुविधा नहीं है, और यह हटाना किसी व्यक्ति द्वारा नहीं, एक निर्धारित कार्य द्वारा होता है।",
    "privacy.collect.selfie.4": "कैमरे का उपयोग केवल पंच के क्षण में होता है। किसी अन्य समय इसे कभी नहीं खोला जाता, और कोई ऑडियो या वीडियो रिकॉर्ड नहीं होता — केवल एक स्थिर तस्वीर।",
    "privacy.collect.selfie.5": "ऐप फ़ोटो से कोई चेहरा-पहचान (facial recognition) नहीं करता और कोई बायोमेट्रिक टेम्पलेट या चेहरे का हस्ताक्षर नहीं बनाता।",
    "privacy.collect.selfie.6": "यदि कैमरा उपलब्ध न हो, या अनुमति न दी जाए, तो भी स्टाफ सदस्य थोड़ी प्रतीक्षा के बाद पंच पूरा कर सकता है। तब रिकॉर्ड में दिखता है कि कोई फ़ोटो नहीं ली गई, और एडमिन को सूचित किया जाता है ताकि यह कमी छिपे नहीं, समीक्षा में आए।",
    "privacy.h3.location": "घ) स्थान डेटा",
    "privacy.collect.loc.1": "ऐप हर बार हाज़िरी लगाते समय डिवाइस का स्थान पढ़ता है, ताकि यह पुष्टि हो सके कि पंच विद्यालय परिसर के भीतर हुआ है (जियोफ़ेंस)।",
    "privacy.collect.loc.2": "जो सामान्य पंच परिसर की पुष्टि कर लेता है, उसमें यह जाँच उसी क्षण की तुलना होती है और <strong>कोई निर्देशांक संग्रहित नहीं होता</strong>। निर्देशांक केवल <strong>फ़्लैग किए गए</strong> पंच के लिए संग्रहित होते हैं — जिसका स्थान परिसर की पुष्टि नहीं कर सका — साथ में परिसर से दूरी और बताई गई सटीकता, ताकि विद्यालय देख सके कि क्या हुआ।",
    "privacy.collect.loc.3": "जब कोई स्टाफ सदस्य <strong>दूरस्थ क्लॉक-इन अनुरोध</strong> भेजता है, तब ऐप डिवाइस के GPS निर्देशांक (अक्षांश, देशांतर), रिपोर्ट की गई सटीकता (मीटर में) और कैप्चर टाइमस्टैम्प लेता है, और उन्हें अनुरोध के साथ विद्यालय की समीक्षा व अनुमोदन के लिए संग्रहित करता है।",
    "privacy.collect.loc.4": "स्थान लगातार और पृष्ठभूमि में कभी नहीं लिया जाता। यह केवल पंच या दूरस्थ क्लॉक-इन अनुरोध के समय पढ़ा जाता है, और जब फ़्लैग किया गया स्थान दर्ज हो रहा हो तो स्टाफ सदस्य को स्क्रीन पर दिखाया जाता है।",
    "privacy.collect.loc.5": "फ़्लैग किए गए पंच के स्थान पंच के 90 दिन बाद अपने आप हटा दिए जाते हैं। दूरस्थ क्लॉक-इन अनुरोध के साथ संग्रहित निर्देशांक उस अनुरोध के साथ, हाज़िरी रिकॉर्ड के हिस्से के रूप में रखे जाते हैं।",
    "privacy.collect.loc.6": "यदि स्टाफ सदस्य स्थान अनुमति अस्वीकार करता है, तब भी दूरस्थ क्लॉक-इन अनुरोध GPS के बिना भेजा जा सकता है — विद्यालय अनुरोध में बस no GPS देखता है और कारण-पाठ के आधार पर निर्णय करता है।",
    "privacy.h3.telegram": "ङ) Telegram द्वारा सूचनाएँ",
    "privacy.collect.tg.1": "पंच और छुट्टी की घटनाएँ (स्टाफ सदस्य का नाम, घटना का प्रकार और उसका समय) ऐप द्वारा आधिकारिक Telegram Bot API के माध्यम से विद्यालय-कॉन्फ़िगर किए गए स्टाफ Telegram समूह में भेजी जाती हैं, ताकि दिन की हाज़िरी स्टाफ कक्ष को तुरंत दिखती रहे।",
    "privacy.collect.tg.2": "जिन स्टाफ सदस्यों ने अपना Telegram खाता जोड़ा है (वैकल्पिक), उन्हें ऐप उसी API के माध्यम से विद्यालय-कॉन्फ़िगर किए गए Telegram समूह में प्रति-विद्यार्थी हाज़िरी सूचनाएँ (उपस्थित / अनुपस्थित / विलंब) भेजता है।",
    "privacy.collect.tg.3": "अभिभावक-हाज़िरी-सूचना सुविधा के लिए, जिन अभिभावकों ने अपना Telegram हैंडल जोड़ा है उन्हें प्रति बच्चे प्रति दिन एक सीधा संदेश मिलता है। हमारी ओर केवल अभिभावक का चैट ID और मेल खाता विद्यार्थी संग्रहीत होता है।",
    "privacy.collect.tg.4": "शुल्क-बही की प्रविष्टियाँ (किसी विद्यार्थी का भुगतान, उसकी राशि और रसीद संख्या) Telegram पर एक <strong>अलग, विद्यालय-कॉन्फ़िगर किए गए लेखा समूह</strong> में भेजी जाती हैं, जो विद्यालय के लेखा स्टाफ को दिखता है। ऐप की वित्तीय सुविधाएँ विद्यालय के प्रशासन और लेखा स्टाफ तक सीमित हैं।",
    "privacy.collect.tg.5": "आपके खाते से Telegram की कोई भी सामग्री कभी नहीं पढ़ी या संग्रहीत की जाती; ऐप केवल संदेश भेजता है और आपकी सहमति वाले एक-तरफ़ा आदेश सुनता है।",
    "privacy.h3.holidays": "च) विद्यालय अवकाश कैलेंडर",
    "privacy.collect.hol.1": "भारत सरकार व मध्य प्रदेश राज्य की राजपत्रित छुट्टियों की सूची, साथ ही विद्यालय-घोषित अवकाश (ग्रीष्म / शीतकालीन), ऐप के डेटाबेस में केवल-पठनीय रूप में संग्रहीत है। इस सूची का उपयोग केवल मासिक हाज़िरी सारांश की गणना के लिए होता है और इसमें कोई व्यक्तिगत डेटा नहीं है।",
    "privacy.h3.analytics": "छ) उपयोग विश्लेषण और डिवाइस पहचानकर्ता",
    "privacy.collect.an.1": "ऐप <strong>Google Analytics 4</strong> का उपयोग यह दर्ज करने के लिए करता है कि कौन-सी स्क्रीन खोली गई, ताकि इंटरफ़ेस बेहतर बनाया जा सके। प्रत्येक रिकॉर्ड में स्टाफ सदस्य का खाता पहचानकर्ता और उसकी भूमिका (शिक्षक / समन्वयक / प्रधानाध्यापक / निदेशक / एडमिन) होती है, और डिवाइस उसके प्रकार से पहचाना जाता है। IP पते संग्रहित करने से पहले अनाम कर दिए जाते हैं। Google की प्रथाएँ <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener\">Google की गोपनीयता नीति</a> में वर्णित हैं।",
    "privacy.collect.dev.1": "ऐप किसी फ़ोन पर पहली बार चलने पर एक यादृच्छिक डिवाइस पहचानकर्ता बनाता है और उसे उसी फ़ोन पर रखता है। इसमें कोई व्यक्तिगत जानकारी नहीं होती और इसका उपयोग केवल एक डिवाइस को दूसरे से अलग पहचानने के लिए होता है — जैसे एक ही खाते का कई फ़ोन से पंच करना, या सहेजी न जा सकी कोई फ़ोटो।",
    "privacy.h2.notCollect": "3. हम क्या एकत्र नहीं करते",
    "privacy.not.1": "हम पंच फ़ोटो से या किसी अन्य चीज़ से बायोमेट्रिक टेम्पलेट नहीं बनाते, और कोई चेहरा-पहचान नहीं करते।",
    "privacy.not.2": "हम संपर्क, माइक्रोफ़ोन या ऑडियो, या स्टाफ सदस्य के डिवाइस से कोई फ़ाइल एकत्र नहीं करते।",
    "privacy.not.3": "हम डिवाइस का स्थान पृष्ठभूमि में या आवागमन-इतिहास के रूप में नहीं पढ़ते और न दर्ज करते हैं; ऐप का स्थान-उपयोग ऊपर बताई गई पंच और दूरस्थ-क्लॉक-इन जाँचों तक सीमित है।",
    "privacy.not.4": "हम विज्ञापन नहीं दिखाते। ऐप में कोई विज्ञापन नेटवर्क और कोई विज्ञापन पहचानकर्ता नहीं है।",
    "privacy.not.5": "हम आपको अन्य वेबसाइटों या ऐप्स पर ट्रैक नहीं करते।",
    "privacy.not.6": "हम किसी भी व्यक्तिगत डेटा को कभी नहीं बेचते।",
    "privacy.h2.use": "4. हम जानकारी का उपयोग कैसे करते हैं",
    "privacy.use.1": "स्टाफ की पहचान प्रमाणित करने और संबंधित विद्यालय के डेटा तक पहुँच अधिकृत करने के लिए।",
    "privacy.use.2": "दैनिक हाज़िरी दर्ज करने, छुट्टी स्वीकृत करने और एडमिन द्वारा प्रधानाध्यापक के साथ साझा किए जाने वाले मासिक रिपोर्ट की गणना के लिए।",
    "privacy.use.3": "Telegram पर एक-तरफ़ा सूचनाएँ भेजने के लिए जिनके लिए स्टाफ सदस्य या अभिभावक ने स्पष्ट रूप से सहमति दी है।",
    "privacy.use.4": "भारतीय श्रम व शिक्षा कानून के तहत कानूनी, लेखांकन और नियामक रिकॉर्ड-कीपिंग दायित्वों को पूरा करने के लिए (उदाहरण के लिए, संबंधित राज्य सरकार की अधिसूचनाओं के अनुसार हाज़िरी व छुट्टी रिकॉर्ड निर्धारित अवधि तक रखना)।",
    "privacy.h2.where": "5. डेटा कहाँ संग्रहीत है और कौन देख सकता है",
    "privacy.where.1": "सभी डेटा <strong>Google Firebase</strong> (Firestore + Cloud Authentication) पर, Google के Mumbai / asia-south1 क्षेत्र में संग्रहीत है। Firebase का संचालन Google LLC द्वारा उनकी मानक डेटा-प्रसंस्करण शर्तों के तहत होता है।",
    "privacy.where.2": "केवल <em>गुरुकुल अकादमी, अमरपाटन</em> के प्रमाणित स्टाफ ही डेटा पढ़ या लिख सकते हैं, और Firestore सुरक्षा नियम हर भूमिका को उसकी आवश्यक डेटा तक सीमित रखते हैं (उदाहरण के लिए, शिक्षक अपनी ही हाज़िरी देखता है; एडमिन सब देखता है)।",
    "privacy.where.3": "हमारी ओर से डेटा संसाधित करने वाली तीसरी-पक्ष सेवा Google LLC है। उनकी गोपनीयता प्रथाएँ <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener\">policies.google.com/privacy</a> पर वर्णित हैं।",
    "privacy.where.4": "Telegram सूचनाओं के लिए, Telegram Bot API केवल एक वितरण चैनल के रूप में उपयोग किया जाता है। Telegram की गोपनीयता प्रथाएँ <a href=\"https://telegram.org/privacy\" target=\"_blank\" rel=\"noopener\">telegram.org/privacy</a> पर वर्णित हैं।",
    "privacy.h2.retention": "6. डेटा प्रतिधारण",
    "privacy.ret.1": "हाज़िरी, छुट्टी और मासिक-रिपोर्ट डेटा भारतीय / मध्य प्रदेश श्रम व शिक्षा रिकॉर्ड-कीपिंग मानकों के अनुसार निर्धारित अवधि तक रखा जाता है, और फिर विद्यालय के विवेक पर संग्रहीत या हटाया जाता है।",
    "privacy.ret.2": "यदि कोई स्टाफ सदस्य विद्यालय छोड़ता है, तो एडमिन उसका खाता अक्षम करता है। उनके हाज़िरी रिकॉर्ड रखे जाते हैं (ये विद्यालय के वेतन रिकॉर्ड का हिस्सा हैं), लेकिन प्रमाणीकरण क्रेडेंशियल अक्षम कर दिए जाते हैं ताकि वे फिर लॉगिन न कर सकें।",
    "privacy.ret.3": "Firebase द्वारा भेजे गए पासवर्ड-रीसेट लिंक सुरक्षा के लिए 1 घंटे में समाप्त हो जाते हैं।",
    "privacy.ret.4": "पंच फ़ोटो और फ़्लैग किए गए पंच के स्थान दर्ज होने के <strong>90 दिन</strong> बाद एक निर्धारित कार्य द्वारा अपने आप हटा दिए जाते हैं — चाहे कोई माँगे या न माँगे। यह वह सबसे छोटी अवधि है जिसमें विद्यालय किसी विवादित पंच की समीक्षा उसी सत्र में कर सकता है।",
    "privacy.h2.rights": "7. आपके अधिकार",
    "privacy.rights.intro": "स्टाफ सदस्य के रूप में आप:",
    "privacy.rights.1": "विद्यालय एडमिन से आपके बारे में रखे व्यक्तिगत डेटा को देखने, सुधारने या हटाने का अनुरोध कर सकते हैं।",
    "privacy.rights.2": "कभी भी अपना Telegram हैंडल डिस्कनेक्ट कर सकते हैं (इससे आपको आगे Telegram सूचनाएँ भेजना बंद हो जाएगा)।",
    "privacy.rights.3": "कभी भी ऐप का उपयोग बंद कर सकते हैं; इससे विद्यालय पर ऐतिहासिक हाज़िरी व छुट्टी रिकॉर्ड लागू कानून के तहत रखने का दायित्व प्रभावित नहीं होता।",
    "privacy.rights.4": "अपना डेटा हटाने का अनुरोध कर सकते हैं। नीचे अनुच्छेद 8 बताता है कि क्या हटाया जा सकता है और क्या नहीं, और अनुरोध कैसे किया जाए।",
    "privacy.rights.contact": "उपरोक्त किसी भी अनुरोध के लिए यहाँ लिखें:",
    "privacy.rights.response": "या नीचे दिए पते पर विद्यालय कार्यालय से संपर्क करें। हम 30 दिनों के भीतर उत्तर देंगे।",
    "privacy.h2.delete": "8. अपना डेटा हटवाना",
    "privacy.delete.intro": "आप ऐप में रखे अपने व्यक्तिगत डेटा को हटाने का अनुरोध कर सकते हैं, और यह भी पूछ सकते हैं कि क्या रखा गया है — बिना कोई कारण बताए। लिखें:",
    "privacy.delete.intro2": "अपने स्टाफ खाते में पंजीकृत ईमेल पते से, विषय Data deletion request के साथ। विद्यालय प्राप्ति की पुष्टि करेगा और 30 दिनों के भीतर कार्रवाई करेगा।",
    "privacy.delete.1": "अनुरोध पर हटाया जाएगा: आपकी पंच फ़ोटो, आपके फ़्लैग किए गए पंचों के स्थान, आपका डिवाइस पहचानकर्ता, और आपके बारे में रखी खाता जानकारी (नाम, ईमेल, फ़ोन नंबर)।",
    "privacy.delete.2": "नहीं हटाया जाएगा, और क्यों: आपकी हाज़िरी और छुट्टी के रिकॉर्ड विद्यालय का वेतन और सांविधिक रिकॉर्ड हैं, और ऐप में उन्हें हटाने की कोई सुविधा नहीं है — भारतीय श्रम व शिक्षा रिकॉर्ड-कीपिंग मानकों के तहत विद्यालय उन्हें रखने के लिए बाध्य है। यदि कोई ऐसा रिकॉर्ड गलत लगे, तो विद्यालय उसकी समीक्षा करेगा और गलत होने पर सुधारेगा।",
    "privacy.delete.3": "यदि आप विद्यालय छोड़ते हैं, तो एडमिन आपका खाता अक्षम कर देगा ताकि उसका उपयोग न हो सके। आपकी पंच फ़ोटो फिर भी अपनी 90-दिन की अवधि पर स्वयं समाप्त हो जाती हैं।",
    "privacy.delete.4": "जो अनुरोध केवल उन रिकॉर्ड से संबंधित हों जिन्हें विद्यालय को रखना ही है, उनका उत्तर लिखित में दिया जाएगा — यह बताते हुए और कारण देते हुए।",
    "privacy.h2.children": "9. बच्चों की गोपनीयता",
    "privacy.children.text": "ऐप का उपयोग बच्चों द्वारा नहीं किया जाता। सिस्टम में बच्चों का केवल वही डेटा है जो हाज़िरी लगाने और स्टाफ या अभिभावक को सूचनाएँ भेजने के लिए आवश्यक है — नाम, कक्षाएँ और हाउस सदस्यता। हम बच्चों से अन्य कोई जानकारी जानबूझकर एकत्र नहीं करते।",
    "privacy.h2.security": "10. सुरक्षा",
    "privacy.sec.1": "सभी नेटवर्क ट्रैफ़िक HTTPS / TLS से एन्क्रिप्ट किया जाता है।",
    "privacy.sec.2": "पासवर्ड केवल क्रिप्टोग्राफ़िक हैश के रूप में संग्रहीत होते हैं; एक-तरफ़ा फ़ंक्शन उलटे नहीं किए जा सकते।",
    "privacy.sec.3": "Firestore सुरक्षा नियम पढ़ने और लिखने को केवल अधिकृत भूमिकाओं तक सीमित रखते हैं।",
    "privacy.sec.4": "सत्यापित ईमेल लिंक के माध्यम से दो-चरणीय खाता पुनर्प्राप्ति समर्थित है।",
    "privacy.sec.5": "सोर्स कोड निजी रिपॉज़िटरी में रखा गया है; उत्पादन पहुँच केवल विद्यालय एडमिन तक सीमित है।",
    "privacy.h2.changes": "11. इस नीति में परिवर्तन",
    "privacy.changes.text": "हम समय-समय पर इस नीति को अद्यतन कर सकते हैं। नीचे अंतिम अद्यतन तिथि नवीनतम परिवर्तन दिखाएगी। महत्वपूर्ण परिवर्तन (उदाहरण के लिए, नई श्रेणी का डेटा) लागू होने से पहले ऐप के अंदर सूचित किए जाएँगे।",
    "privacy.h2.contact": "12. संपर्क",
    "privacy.contact.name": "गुरुकुल अकादमी उच्चतर माध्यमिक विद्यालय",
    "privacy.contact.addr": "सतना रोड, ग्राम गड़ौली, अमरपाटन<br>जिला मैहर, मध्य प्रदेश – 485775<br>भारत",
    "privacy.contact.emailLabel": "ईमेल:",
    "privacy.contact.phoneLabel": "फ़ोन:",
    "privacy.lastUpdated": "अंतिम अद्यतन: 24 सितंबर 2026।",

    /* ---------- announcements ---------- */
    "ann.fallbackNote": "",

    /* ---------- staff demo / guide captions (used if pages are opened) ---------- */
    "demo.play": "चलाएँ", "demo.pause": "रोकें",
    "guide.printHeading": "किस काम के लिए कौन सा पृष्ठ",

    /* ---------- staff-app install page ---------- */
    "staffapp.metaDesc": "गुरुकुल अकादमी के स्टाफ के लिए गुरुकुल-टीम ऐप (TEAM = शिक्षक एवं कर्मचारी उपस्थिति प्रबंधन) को Android फ़ोन पर Chrome से इंस्टॉल करने की चरण-दर-चरण मार्गदर्शिका।",
    "staffapp.hero.est": "★ गुरुकुल अकादमी स्टाफ के लिए",
    "staffapp.hero.title": "गुरुकुल-टीम (अमरपाटन)",
    "staffapp.hero.team": "TEAM का अर्थ — शिक्षक एवं कर्मचारी उपस्थिति प्रबंधन",
    "staffapp.hero.sub": "स्कूल का स्टाफ ऐप। इंस्टॉल करने में तीन मिनट — इसके बाद ऐप आपकी होम स्क्रीन पर किसी अन्य ऐप की तरह बैठा रहेगा।",
    "staffapp.cta.open": "ऐप खोलें",
    "staffapp.steps.heading": "Android पर इंस्टॉल करें (30 सेकंड)",
    "staffapp.step1.title": "अपने फ़ोन पर Chrome खोलें",
    "staffapp.step1.text": "Chrome ब्राउज़र आइकन टैप करें (लाल, पीला, हरा, नीला गोल चिह्न)।",
    "staffapp.step2.title": "ऐप का पता टाइप करें",
    "staffapp.step2.text": "ऊपर एड्रेस बार में ठीक-ठीक टाइप करें: <code>app.gurukulamarpatan.in</code> और Go दबाएँ।",
    "staffapp.step3.title": "तीन बिंदु ⋮ टैप करें (Chrome के ऊपर दाईं ओर)",
    "staffapp.step3.text": "एक मेन्यू नीचे खुलेगा।",
    "staffapp.step4.title": "\"Add to Home screen\" या \"Install app\" टैप करें",
    "staffapp.step4.text": "सही शब्द आपके फ़ोन के मॉडल पर निर्भर करते हैं — दोनों विकल्प एक ही काम करते हैं।",
    "staffapp.step5.title": "\"Add\" टैप करें — हो गया",
    "staffapp.step5.text": "ऐप का आइकन आपकी होम स्क्रीन पर आ जाएगा। कभी भी खोलने के लिए उस पर टैप करें।",
    "staffapp.offline": "<strong>कमज़ोर नेटवर्क:</strong> बिना इंटरनेट लिया गया पंच फ़ोन में सुरक्षित रहता है और नेटवर्क लौटते ही अपने आप सिंक हो जाता है — स्कूल गेट पर नेटवर्क कमज़ोर हो तब काम आता है।",
    "staffapp.punch.heading": "पंच करने पर क्या होता है",
    "staffapp.punch.intro": "पंच अब चार चरणों में होता है — यह पहले से बदल गया है, इसलिए एक बार पढ़ लीजिए:",
    "staffapp.punch.s1": "ऐप में <strong>Punch In</strong> या <strong>Punch Out</strong> दबाइए।",
    "staffapp.punch.s2": "ऐप जाँचता है कि आप स्कूल परिसर के अंदर हैं।",
    "staffapp.punch.s3": "कैमरा खुलेगा — अपनी <strong>फ़ोटो</strong> लीजिए और <strong>✓ Confirm</strong> दबाइए। फ़ोटो ठीक न आई हो तो <strong>Retake</strong>।",
    "staffapp.punch.s4": "बस — आपका इन/आउट दर्ज हो गया।",
    "staffapp.punch.whyHtml": "<strong>फ़ोटो क्यों?</strong> ताकि कोई दूसरे की पंच न लगा सके। फ़ोटो सिर्फ़ उपस्थिति जाँचने के लिए है — <strong>90 दिन बाद अपने आप हट जाती है</strong>, और ऐप चेहरे की पहचान (face recognition) नहीं करता।",
    "staffapp.punch.escapeHtml": "<strong>कैमरा काम न करे तो?</strong> कुछ सेकंड बाद “कैमरा नहीं चल रहा” विकल्प आ जाता है — उससे पंच हो जाएगा, पर रिकॉर्ड में लिखा रहेगा कि फ़ोटो नहीं ली गई, और <strong>स्कूल कार्यालय को सूचना चली जाती है</strong>।",
    "staffapp.punch.permHtml": "<strong>अनुमति:</strong> पहले पंच पर फ़ोन <em>कैमरा</em> और <em>लोकेशन</em> दोनों की अनुमति माँगेगा — दोनों पर <strong>Allow</strong> दबाइए। (लोकेशन सिर्फ़ पंच के समय पढ़ी जाती है, पृष्ठभूमि में कभी नहीं।)",
    "staffapp.login.heading": "पहला लॉगिन",
    "staffapp.login.l1": "अपने नए होम-स्क्रीन आइकन से ऐप खोलें।",
    "staffapp.login.l2": "अपनी भाषा चुनें: <strong>English</strong> या <strong>हिन्दी</strong>।",
    "staffapp.login.l3": "स्कूल एडमिन द्वारा WhatsApp पर भेजा गया <strong>यूज़रनेम</strong> और <strong>पासवर्ड</strong> डालें।",
    "staffapp.login.l4": "आपसे <strong>नया पासवर्ड</strong> सेट करने को कहा जाएगा। कुछ ऐसा चुनें जो आपको याद रहे — रोज़ इस्तेमाल होगा।",
    "staffapp.login.forgot": "पासवर्ड भूल गए? लॉगिन स्क्रीन पर <strong>\"Forgot password\"</strong> टैप करें — आपके रजिस्टर्ड ईमेल पर रीसेट लिंक आएगा।",
    "staffapp.features.heading": "ऐप क्या-क्या कर सकता है",
    "staffapp.feature.punch": "🕒 पंच इन / पंच आउट",
    "staffapp.feature.punchText": "परिसर की जाँच और फ़ोटो के साथ आपका इन/आउट — फ़ोटो 90 दिन बाद अपने आप हट जाती है।",
    "staffapp.feature.schedule": "📅 आज का शेड्यूल",
    "staffapp.feature.scheduleText": "दिन की आपकी पीरियड, एक नज़र में।",
    "staffapp.feature.mine": "📊 मेरी अटेंडेंस",
    "staffapp.feature.mineText": "अपनी इन/आउट और काम के घंटों का पूरा रिकॉर्ड।",
    "staffapp.feature.class": "📝 क्लास अटेंडेंस",
    "staffapp.feature.classText": "कुछ टैप में अपने सेक्शन की हाज़िरी; स्कूल के Telegram ग्रुप में दर्ज हो जाती है।",
    "staffapp.feature.leave": "🏖️ अवकाश हेतु आवेदन",
    "staffapp.feature.leaveText": "AL, CL, ML और कम्प-ऑफ़ — हर आवेदन की स्थिति साथ में।",
    "staffapp.feature.remote": "📍 रिमोट अटेंडेंस",
    "staffapp.feature.remoteText": "परिसर से बाहर से पंच करना पड़े तो कारण के साथ आवेदन; प्राचार्य या कार्यालय स्वीकृति देता है।",
    "staffapp.feature.gatepass": "🚪 गेटपास",
    "staffapp.feature.gatepassText": "विद्यार्थी का गेटपास बनाइए और उसकी कतार देखिए।",
    "staffapp.feature.casual": "🔁 कैज़ुअल प्लानिंग",
    "staffapp.feature.casualText": "किसी पीरियड के लिए स्थानापन्न शिक्षक तय कीजिए।",
    "staffapp.feature.contacts": "☎️ महत्वपूर्ण संपर्क",
    "staffapp.feature.contactsText": "स्कूल की संपर्क सूची, हमेशा साथ।",
    "staffapp.feature.lang": "🌐 हिन्दी + English",
    "staffapp.feature.langText": "रोज़ की अटेंडेंस स्क्रीन हिंदी में; कुछ कार्यालय लेबल अभी अंग्रेज़ी में हैं।",
    "staffapp.office.heading": "कार्यालय और प्रबंधन के लिए",
    "staffapp.office.intro": "ये स्क्रीन स्कूल कार्यालय, प्राचार्य और एडमिन के लॉगिन में खुलती हैं:",
    "staffapp.office.1": "स्टाफ अटेंडेंस रिपोर्ट — इन/आउट, घंटे और लेट, वेतन कार्य के लिए।",
    "staffapp.office.2": "रिपोर्ट और क्लास-वार एक्सपोर्ट।",
    "staffapp.office.3": "स्वीकृति हेतु लंबित — अवकाश, गेटपास और रिमोट अटेंडेंस की माँगें एक जगह।",
    "staffapp.office.4": "पंच फ़ोटो — दिन-वार फ़ोटो देखकर पंच जाँचिए।",
    "staffapp.office.5Html": "शुल्क रिकॉर्ड — नक़द, UPI, बैंक ट्रांसफ़र या चेक से दिया गया शुल्क दर्ज कीजिए और रसीद निकालिए। यह केवल रिकॉर्ड रखने के लिए है: <strong>ऐप पैसा नहीं लेता और कोई पेमेंट गेटवे नहीं है</strong>।",
    "staffapp.trouble.heading": "समस्या निवारण",
    "staffapp.trouble.q1": "\"पुराना वर्शन दिख रहा है\"",
    "staffapp.trouble.a1": "Chrome में: तीन बिंदु ⋮ → Settings → Privacy → Clear browsing data → सिर्फ़ \"Cached images and files\" पर टिक → Clear। फिर ऐप दोबारा खोलें।",
    "staffapp.trouble.q2": "\"GPS काम नहीं कर रहा\"",
    "staffapp.trouble.a2": "हर पंच पर फ़ोन \"Allow location?\" पूछेगा — <strong>Allow</strong> टैप करें। अगर ग़लती से No कह दिया: फ़ोन Settings → Apps → Chrome → Permissions → Location → Allow करें। ऐप कहे कि परिसर की पुष्टि नहीं हो सकी, तो गेट के पास खड़े होकर दोबारा कोशिश कीजिए।",
    "staffapp.trouble.q3": "\"पंच पर कैमरा माँग रहा है\"",
    "staffapp.trouble.a3": "यह पंच की फ़ोटो है — <strong>Allow</strong> दबाइए, अनुमति एक ही बार माँगी जाती है। कैमरा काम न करे तो कुछ सेकंड बाद \"कैमरा नहीं चल रहा\" विकल्प आ जाता है: पंच हो जाएगा, पर स्कूल कार्यालय को बता दिया जाएगा कि फ़ोटो नहीं ली गई।",
    "staffapp.trouble.q4": "\"ऐप खाली है या धीमा है\"",
    "staffapp.trouble.a4": "ऐप बंद करके दोबारा खोलें। फिर भी धीमा रहे तो इंटरनेट कनेक्शन जाँचें (नए टैब में google.com खोलकर देखें)।",
    "staffapp.trouble.q5": "\"पासवर्ड भूल गए\"",
    "staffapp.trouble.a5": "लॉगिन स्क्रीन पर <strong>\"Forgot password\"</strong> टैप करें। कुछ ही मिनटों में आपके रजिस्टर्ड ईमेल पर रीसेट लिंक आ जाएगा।",
    "staffapp.help.heading": "मदद चाहिए?",
    "staffapp.help.text": "स्कूल कार्यालय से संपर्क करें:",
    "staffapp.help.email": "📧 ईमेल: <strong>gurukulamarpatan@gmail.com</strong>",
    "staffapp.help.phone": "📞 फ़ोन: <strong>+91 83197 88245</strong>",
    "staffapp.help.visit": "📍 सीधे मिलें: स्कूल कार्यालय, सतना रोड, गढ़ौली, अमरपाटन",
    "staffapp.help.privacy": "ऐप की गोपनीयता नीति पढ़ें →"
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