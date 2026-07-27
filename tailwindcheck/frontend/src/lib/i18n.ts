export type Language = "en" | "ne";

const translations = {
  en: {
    topBar: {
      clinicTitle: "Dental in Surkhet",
    },

    nav: {
      home: "Home",
      about: "About Us",
      services: "Our Services",
      gallery: "Our Gallery",
      contact: "Contact Us",
    },

    infoBar: {
      openHours: "Open Hours",
      everyday: "Everyday [7AM–7PM]",
      emergency: "Emergency [24/7]",
      makeAppointment: "Make an Appointment",
    },

    teamMembers: {
      sectionTitle: "Our Team Members",
      nmcLabel: "NMC No",
    },

    doctorDesignations: {
      seniorDentalSurgeon: "Senior Dental Surgeon",
      consultantProsthodontist: "Consultant Prosthodontist",
    },

    ourWorks: {
      sectionTitle: "Our Works",
    },

    satisfiedCustomers: {
      sectionTitle: "Our Satisfied Customers",
      satisfiedPatients: "Satisfied Patients",
      yearsExperience: "Years Experience",
      satisfactionRate: "Satisfaction Rate",
    },

    ourLocation: {
      sectionTitle: "Our Location",
    },

    footer: {
      brandName: "Swargadwari Dental Care Home",
      tagline:
        "Providing quality dental care in Surkhet. Your healthy smile is our mission.",
      quickLinksTitle: "Quick Links",
      contactTitle: "Contact & Hours",
      address: "Swargadwari Dental Care Home, Surkhet, Nepal",
      phone: "9843230047,9820030047",
      email: "swargadwaridentalcarehome@gmail.com",
      hoursDetail: "Sun – Sat: 7AM – 7PM",
      emergencyHours: "Emergency: 24/7",
      copyright: "© 2026 Swargadwari Dental Care Home. All rights reserved.",
      developer: "Website Developed by Arjun Adhikari",
      termsPrivacy: "Terms & Privacy",
    },

    services: {
      pageTitle: "Our Services",
      sectionTitle: "Dental Services We Offer",
      items: [
        {
          title: "Orthodontics / Braces",
          desc: "Straighten your teeth with modern braces and aligners for a confident smile.",
        },
        {
          title: "Crowns and Bridge",
          desc: "Restore damaged or missing teeth using custom-fitted crowns and bridges.",
        },
        {
          title: "Endodontics (Root Canal)",
          desc: "Save your natural tooth with precise root canal treatment.",
        },
        {
          title: "Oral & Maxillofacial Surgery",
          desc: "Expert surgical care for teeth, jaw, and facial bone conditions.",
        },
        {
          title: "Pediatric / Kids Dentistry",
          desc: "Gentle and friendly dental care designed especially for children.",
        },
        {
          title: "Gum Treatment",
          desc: "Comprehensive treatment for gum disease and periodontal conditions.",
        },
        {
          title: "Oral Appliances",
          desc: "Custom oral devices for sleep apnea, teeth grinding, and more.",
        },
      ],
    },

    appointment: {
      pageSubtitle: "Select your preferred date and time",
      successMsg: "Appointment requested successfully!",
      errorMsg: "Something went wrong. Try again.",
      namePlaceholder: "Your full name",
      nameLabel: "Full Name",
      contactLabel: "Contact No",
      contactPlaceholder: "10 digit phone number",
      dateLabel: "Preferred Date & Time",
      messageLabel: "Reason for Visit",
      messagePlaceholder: "Describe your dental issue...",
      processing: "Processing...",
      confirmBtn: "Confirm Appointment",
    },
  },

  ne: {
    topBar: {
      clinicTitle: "सुर्खेतमा दन्त चिकित्सा",
    },

    nav: {
      home: "गृहपृष्ठ",
      about: "हाम्रो बारेमा",
      services: "हाम्रा सेवाहरू",
      gallery: "ग्यालेरी",
      contact: "सम्पर्क गर्नुहोस्",
    },

    infoBar: {
      openHours: "खुल्ने समय",
      everyday: "दैनिक [बिहान ७ – साँझ ७]",
      emergency: "आपतकाल [२४/७]",
      makeAppointment: "अपोइन्टमेन्ट लिनुहोस्",
    },

    teamMembers: {
      sectionTitle: "दन्त चिकित्सकहरू",
      nmcLabel: "NMC नम्बर",
    },

    doctorDesignations: {
      seniorDentalSurgeon: "वरिष्ठ दन्त चिकित्सक",
      consultantProsthodontist: "परामर्शदाता प्रोस्थोडोन्टिस्ट",
    },

    ourWorks: {
      sectionTitle: "हाम्रा कामहरू",
    },

    satisfiedCustomers: {
      sectionTitle: "हाम्रा सन्तुष्ट ग्राहकहरू",
      satisfiedPatients: "सन्तुष्ट बिरामीहरू",
      yearsExperience: "वर्षको अनुभव",
      satisfactionRate: "सन्तुष्टि दर",
    },

    ourLocation: {
      sectionTitle: "हाम्रो स्थान",
    },

    footer: {
      brandName: "स्वर्गद्वारी दन्त हेरचाह घर",
      tagline: "सुर्खेतमा गुणस्तरीय दन्त सेवा। स्वस्थ मुस्कान हाम्रो लक्ष्य।",
      quickLinksTitle: "द्रुत लिंकहरू",
      contactTitle: "सम्पर्क र समय",
      address: "स्वर्गद्वारी दन्त हेरचाह घर, सुर्खेत, नेपाल",
      phone: "९८२००३००४७,९८४३२३००४७",
      email: "swargadwaridentalcarehome@gmail.com",
      hoursDetail: "आइतबार – शनिबार: बिहान ७ – साँझ ७",
      emergencyHours: "आपतकाल: २४/७",
      copyright: "© २०२६ स्वर्गद्वारी दन्त हेरचाह घर। सर्वाधिकार सुरक्षित।",
      developer: "वेबसाइट निर्माता: codexnepal",
      termsPrivacy: "नियम र गोपनीयता",
    },

    services: {
      pageTitle: "हाम्रा सेवाहरू",
      sectionTitle: "हाम्रा दन्त सेवाहरू",
      items: [
        {
          title: "अर्थोडोन्टिक्स / ब्रेसेस",
          desc: "आधुनिक ब्रेसेस र एलाइनरले दाँत मिलाउनुहोस् र आत्मविश्वासी मुस्कान पाउनुहोस्।",
        },
        {
          title: "क्राउन र ब्रिज",
          desc: "क्षतिग्रस्त वा हराएका दाँत कस्टम क्राउन र ब्रिजले पुनर्स्थापना गर्नुहोस्।",
        },
        {
          title: "एन्डोडोन्टिक्स (रुट क्यानाल)",
          desc: "सटीक रुट क्यानाल उपचारले आफ्नो प्राकृतिक दाँत बचाउनुहोस्।",
        },
        {
          title: "ओरल र म्याक्सिलोफेसियल सर्जरी",
          desc: "दाँत, जबडा र अनुहारका हड्डीका अवस्थाहरूको निपुण शल्यक्रिया।",
        },
        {
          title: "बाल दन्त चिकित्सा",
          desc: "बच्चाहरूका लागि विशेष रूपमा डिजाइन गरिएको कोमल र मैत्रीपूर्ण दन्त सेवा।",
        },
        {
          title: "गिजाको उपचार",
          desc: "गिजाको रोग र पेरियोडोन्टल अवस्थाहरूको सम्पूर्ण उपचार।",
        },
        {
          title: "ओरल एप्लाइयन्सेस",
          desc: "निद्रा एप्निया, दाँत किटकिटाउनु र अन्य समस्याका लागि कस्टम मुख उपकरणहरू।",
        },
      ],
    },

    appointment: {
      pageTitle: "अपोइन्टमेन्ट बुक गर्नुहोस्",
      pageSubtitle: "आफ्नो मनपर्ने मिति र समय छान्नुहोस्",
      successMsg: "अपोइन्टमेन्ट सफलतापूर्वक अनुरोध गरियो!",
      errorMsg: "केही गलत भयो। पुनः प्रयास गर्नुहोस्।",
      nameLabel: "पूरा नाम",
      namePlaceholder: "तपाईंको पूरा नाम",
      contactLabel: "सम्पर्क नम्बर",
      contactPlaceholder: "१० अंकको फोन नम्बर",
      dateLabel: "मनपर्ने मिति र समय",
      messageLabel: "भ्रमणको कारण",
      messagePlaceholder: "आफ्नो दाँतको समस्या वर्णन गर्नुहोस्...",
      processing: "प्रक्रिया गर्दै...",
      confirmBtn: "अपोइन्टमेन्ट पुष्टि गर्नुहोस्",
    },
  },
} as const;

export default translations;
