import Script from "next/script";

export default function SchemaMarkup() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": "https://dentalnew-omega.vercel.app/#dentist",
    name: "Swargadwari Dental Care Home",
    alternateName: "Swargadwari Dental",
    description:
      "Expert dental clinic in Birendranagar, Surkhet offering root canal, braces, crowns, oral surgery, pediatric dentistry, gum treatment, and oral appliances.",
    url: "https://dentalnew-omega.vercel.app",
    telephone: ["+9779843230047", "+9779820030047"],
    email: "swargadwaridentalcarehome@gmail.com",
    image: "https://dentalnew-omega.vercel.app/dentallogo.jpg",
    priceRange: "$$",
    foundingDate: "2019",
    areaServed: ["Surkhet", "Birendranagar", "Nepal"],
    sameAs: [
      "https://www.facebook.com/swargadwari.dental.care.home/",
      "https://wa.me/9779843230047",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Near Maya Nursing Home, Birendranagar",
      addressLocality: "Surkhet",
      addressCountry: "NP",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.5953154,
      longitude: 81.6155984,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "07:00",
        closes: "19:00",
      },
    ],
    medicalSpecialty: "Dentistry",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dental Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Orthodontics / Braces" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Crowns & Bridge" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Root Canal Treatment" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Oral Surgery" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pediatric Dentistry" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gum Treatment" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Oral Appliances" } },
      ],
    },
    knowsAbout: [
      { "@type": "Thing", name: "Root Canal Treatment" },
      { "@type": "Thing", name: "Orthodontics" },
      { "@type": "Thing", name: "Dental Crowns" },
      { "@type": "Thing", name: "Oral Surgery" },
      { "@type": "Thing", name: "Pediatric Dentistry" },
    ],
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    name: "Breadcrumb",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://dentalnew-omega.vercel.app" },
      { "@type": "ListItem", position: 2, name: "About Us", item: "https://dentalnew-omega.vercel.app/about" },
    ],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What dental services does Swargadwari Dental Care Home offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer orthodontics/braces, crowns & bridges, root canal treatment, oral surgery, pediatric dentistry, gum treatment, and oral appliances.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Swargadwari Dental Care Home located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We are located near Maya Nursing Home, Birendranagar, Surkhet, Nepal.",
        },
      },
      {
        "@type": "Question",
        name: "What are the opening hours of the clinic?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We are open every day from 7 AM to 7 PM. Emergency services are available 24/7.",
        },
      },
      {
        "@type": "Question",
        name: "How can I book an appointment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can book an appointment online through our website's appointment form, call us at 9843230047, or message us on WhatsApp at +9779843230047.",
        },
      },
      {
        "@type": "Question",
        name: "Who are the doctors at Swargadwari Dental Care Home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our team includes Dr. Arun Basnet (BDS, KU), Dr. Suraj Rawat (BDS, KU), and Dr. Sudip Subedi (BDS, KU, MDS, TU), all experienced dental professionals.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="schema-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        strategy="beforeInteractive"
      />
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        strategy="beforeInteractive"
      />
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
        strategy="beforeInteractive"
      />
    </>
  );
}
