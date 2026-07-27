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

    about: {
      pageTitle: "About Us",
      sectionTitle: "About Swargadwari Dental Care Home",
      para1: "Swargadwari Dental Care Home is a trusted dental clinic located in Birendranagar, Surkhet, Nepal. We are committed to providing high-quality, affordable dental care to our community.",
      para2: "Our team of experienced dental professionals, led by Dr. Arun Basnet, Dr. Suraj Rawat, and Dr. Sudip Subedi, offers a comprehensive range of dental services including orthodontics, crowns & bridges, root canal treatment, oral surgery, pediatric dentistry, gum treatment, and oral appliances.",
      para3: "We believe in patient-centered care — taking the time to understand your concerns, explaining treatment options clearly, and ensuring your comfort throughout every visit.",
      modernEquipment: "Modern Equipment",
      expertTeam: "Expert Team",
      cleanSafe: "Clean & Safe",
      certificationsTitle: "Certifications",
      cert1Title: "Nepal Medical Council Registered",
      cert1Desc: "All our doctors are registered with the Nepal Medical Council (NMC) with valid practicing licenses.",
      cert2Title: "Nepal Dental Association",
      cert2Desc: "We are proud members of the Nepal Dental Association, upholding professional standards.",
      cert3Title: "Licensed Dental Clinic",
      cert3Desc: "Fully licensed and inspected by relevant health authorities in Surkhet, Nepal.",
      awardsTitle: "Awards & Recognition",
      award1Title: "Best Dental Clinic in Surkhet",
      award1Year: "2024",
      award1Desc: "Recognized by local health authorities for outstanding dental care and patient satisfaction.",
      award2Title: "Community Health Excellence",
      award2Year: "2023",
      award2Desc: "Awarded for our contribution to community dental health awareness programs in Surkhet.",
      award3Title: "Patient Choice Award",
      award3Year: "2023",
      award3Desc: "Voted by patients for exceptional care and compassionate service in Birendranagar.",
      clinicPhotosTitle: "Clinic Photos",
      galleryLink: "Visit our Gallery for more photos.",
      virtualTourTitle: "Virtual Tour",
      virtualTourDesc: "Take a virtual look inside Swargadwari Dental Care Home. Explore our modern facility and see where we provide our dental services.",
      virtualTourCaption: "Walkthrough of Swargadwari Dental Care Home facility",
    },

    testimonial: {
      title: "What Our Patients Say",
      items: [
        { name: "Sita K.C.", text: "I had a root canal done here and the team was incredibly gentle. The clinic is very clean and the staff are welcoming. Highly recommend!" },
        { name: "Ram Bahadur Thapa", text: "Best dental clinic in Surkhet. My whole family comes here for checkups. Dr. Arun is very skilled and explains everything clearly." },
        { name: "Gita Sharma", text: "My son was really scared of dentists but the pediatric care here changed his mind. Now he actually looks forward to his visits!" },
        { name: "Krishna Dhakal", text: "Got my braces fitted here last year. The progress has been amazing. Professional team and affordable prices. Thank you Swargadwari!" },
        { name: "Maya Devi Poudel", text: "I came in with severe tooth pain and they saw me immediately even without an appointment. Quick, painless treatment. Truly grateful." },
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

    about: {
      pageTitle: "हाम्रो बारेमा",
      sectionTitle: "स्वर्गद्वारी दन्त हेरचाह घरको बारेमा",
      para1: "स्वर्गद्वारी दन्त हेरचाह घर बिरेन्द्रनगर, सुर्खेत, नेपालमा अवस्थित एक विश्वसनीय दन्त क्लिनिक हो। हामी हाम्रो समुदायलाई उच्च गुणस्तरीय, किफायती दन्त सेवा प्रदान गर्न प्रतिबद्ध छौं।",
      para2: "हाम्रो अनुभवी दन्त चिकित्सकहरूको टोली, डा. अरुण बस्नेत, डा. सुरज रावत, र डा. सुदिप सुवेदीको नेतृत्वमा, अर्थोडोन्टिक्स, क्राउन र ब्रिज, रुट क्यानाल उपचार, ओरल सर्जरी, बाल दन्त चिकित्सा, गिजाको उपचार, र ओरल एप्लाइयन्सेस सहित विस्तृत दन्त सेवाहरू प्रदान गर्दछ।",
      para3: "हामी बिरामी-केन्द्रित हेरचाहमा विश्वास गर्छौं — तपाईंको चिन्ता बुझ्न समय लिने, उपचार विकल्पहरू स्पष्ट रूपमा व्याख्या गर्ने, र हरेक भ्रमणमा तपाईंको आराम सुनिश्चित गर्ने।",
      modernEquipment: "आधुनिक उपकरण",
      expertTeam: "विज्ञ टोली",
      cleanSafe: "सफा र सुरक्षित",
      certificationsTitle: "प्रमाणपत्रहरू",
      cert1Title: "नेपाल मेडिकल काउन्सिल दर्ता",
      cert1Desc: "हाम्रा सबै चिकित्सकहरू नेपाल मेडिकल काउन्सिल (NMC) मा दर्ता भएका छन् र वैध अभ्यास इजाजतपत्र छ।",
      cert2Title: "नेपाल दन्त संघ",
      cert2Desc: "हामी नेपाल दन्त संघको गर्विलो सदस्य हौं, पेशेवर मापदण्डहरू कायम राख्दै।",
      cert3Title: "इजाजतपत्र प्राप्त दन्त क्लिनिक",
      cert3Desc: "सुर्खेत, नेपालमा सम्बन्धित स्वास्थ्य अधिकारीहरूद्वारा पूर्ण रूपमा इजाजतपत्र प्राप्त र निरीक्षण गरिएको।",
      awardsTitle: "पुरस्कार र मान्यता",
      award1Title: "सुर्खेतमा उत्कृष्ट दन्त क्लिनिक",
      award1Year: "२०२४",
      award1Desc: "स्थानीय स्वास्थ्य अधिकारीहरूद्वारा उत्कृष्ट दन्त हेरचाह र बिरामी सन्तुष्टिको लागि मान्यता प्राप्त।",
      award2Title: "सामुदायिक स्वास्थ्य उत्कृष्टता",
      award2Year: "२०२३",
      award2Desc: "सुर्खेतमा सामुदायिक दन्त स्वास्थ्य जागरूकता कार्यक्रमहरूमा योगदानको लागि पुरस्कृत।",
      award3Title: "बिरामी छनौट पुरस्कार",
      award3Year: "२०२३",
      award3Desc: "बिरेन्द्रनगरमा उत्कृष्ट हेरचाह र दयालु सेवाको लागि बिरामीहरूद्वारा मतदान गरिएको।",
      clinicPhotosTitle: "क्लिनिक तस्बिरहरू",
      galleryLink: "थप तस्बिरहरूको लागि हाम्रो ग्यालेरी भ्रमण गर्नुहोस्।",
      virtualTourTitle: "भर्चुअल भ्रमण",
      virtualTourDesc: "स्वर्गद्वारी दन्त हेरचाह घर भित्रको भर्चुअल झलक हेर्नुहोस्। हाम्रो आधुनिक सुविधा अन्वेषण गर्नुहोस्।",
      virtualTourCaption: "स्वर्गद्वारी दन्त हेरचाह घर सुविधाको भ्रमण",
    },

    testimonial: {
      title: "हाम्रा बिरामीहरू के भन्छन्",
      items: [
        { name: "सीता के.सी.", text: "मैले यहाँ रुट क्यानाल गराएँ र टोली अत्यन्तै कोमल थियो। क्लिनिक धेरै सफा छ र कर्मचारी स्वागतशील छन्। अत्यधिक सिफारिस गर्छु!" },
        { name: "राम बहादुर थापा", text: "सुर्खेतको उत्कृष्ट दन्त क्लिनिक। मेरो पूरै परिवार जाँचको लागि यहाँ आउँछ। डा. अरुण धेरै सीपी हुन् र सबै कुरा स्पष्ट रूपमा व्याख्या गर्छन्।" },
        { name: "गीता शर्मा", text: "मेरो छोरा दन्त चिकित्सकसँग धेरै डराउँथ्यो तर यहाँको बाल हेरचाहले उसको मन परिवर्तन गर्यो। अब ऊ आफ्नो भ्रमणको लागि उत्सुक हुन्छ!" },
        { name: "कृष्ण ढकाल", text: "गत वर्ष यहाँ मेरो ब्रेसेस फिट गराएँ। प्रगति अचम्मको छ। पेशेवर टोली र किफायती मूल्य। स्वर्गद्वारीलाई धन्यवाद!" },
        { name: "माया देवी पौडेल", text: "गम्भीर दाँत दुखाइ लिएर आएँ र उनीहरूले मलाई अपोइन्टमेन्ट बिना पनि तुरुन्तै देखे। छिटो, पीडारहित उपचार। साँच्चै आभारी छु।" },
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
