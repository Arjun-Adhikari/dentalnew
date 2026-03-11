"use client";
import { useLanguage } from "@/lib/LanguageContext";
import Link from "next/link";

// Dental-specific SVG icons for each service
const serviceIcons = [
  // Orthodontics / Braces – tooth with wire
  <svg key="braces" viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden>
    <path d="M14 8c-4 0-7 3-7 8 0 8 4 20 8 24 1 2 3 2 4 0 1-2 2-5 3-5s2 3 3 5c1 2 3 2 4 0 4-4 8-16 8-24 0-5-3-8-7-8-2 0-4 1-5 2-1-1-3-2-5-2z" fill="#e0f2fe" stroke="#0369a1" strokeWidth="2"/>
    <rect x="14" y="20" width="20" height="5" rx="2" fill="#0369a1" opacity="0.15"/>
    <line x1="14" y1="22.5" x2="34" y2="22.5" stroke="#0369a1" strokeWidth="1.5"/>
    <rect x="16" y="20" width="4" height="5" rx="1" fill="#0369a1" opacity="0.5"/>
    <rect x="22" y="20" width="4" height="5" rx="1" fill="#0369a1" opacity="0.5"/>
    <rect x="28" y="20" width="4" height="5" rx="1" fill="#0369a1" opacity="0.5"/>
  </svg>,

  // Crowns & Bridge – crown shape
  <svg key="crown" viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden>
    <path d="M8 36 L8 20 L16 28 L24 12 L32 28 L40 20 L40 36 Z" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" strokeLinejoin="round"/>
    <rect x="8" y="34" width="32" height="5" rx="2" fill="#ca8a04" opacity="0.7"/>
    <circle cx="24" cy="14" r="2" fill="#ca8a04"/>
    <circle cx="8" cy="20" r="2" fill="#ca8a04"/>
    <circle cx="40" cy="20" r="2" fill="#ca8a04"/>
  </svg>,

  // Endodontics / Root Canal – tooth with root lines
  <svg key="rootcanal" viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden>
    <path d="M16 8c-3 0-6 2-6 6 0 5 2 10 4 14l2 12 2-6 2 6 2-12c2-4 4-9 4-14 0-4-3-6-6-6z" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2"/>
    <line x1="20" y1="22" x2="18" y2="34" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="2 2"/>
    <line x1="24" y1="22" x2="26" y2="34" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="2 2"/>
    <circle cx="20" cy="16" r="2" fill="#16a34a" opacity="0.5"/>
  </svg>,

  // Oral Surgery – scalpel / surgical cross
  <svg key="surgery" viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden>
    <rect x="21" y="6" width="6" height="36" rx="3" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.5"/>
    <rect x="6" y="21" width="36" height="6" rx="3" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.5"/>
    <circle cx="24" cy="24" r="5" fill="#dc2626" opacity="0.15"/>
    <path d="M30 10 L38 10 L38 18" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>,

  // Pediatric / Kids Dentistry – small tooth with star
  <svg key="kids" viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden>
    <path d="M16 10c-3 0-6 2-6 6 0 6 3 14 5 18 1 2 2 2 3 0l2-5 2 5c1 2 2 2 3 0 2-4 5-12 5-18 0-4-3-6-6-6-1 0-3 1-4 1-1 0-3-1-4-1z" fill="#fdf2fb" stroke="#a21caf" strokeWidth="2"/>
    <path d="M36 8 l1 3 3 0-2.5 2 1 3L36 14.5 33.5 16l1-3L32 11l3 0z" fill="#a21caf" opacity="0.7"/>
  </svg>,

  // Gum Treatment – gum/wave shape
  <svg key="gum" viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden>
    <path d="M6 28 C10 18 14 14 18 14 C22 14 22 22 24 22 C26 22 26 14 30 14 C34 14 38 18 42 28" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <path d="M6 28 C10 18 14 14 18 14 C22 14 22 22 24 22 C26 22 26 14 30 14 C34 14 38 18 42 28 L42 40 Q24 36 6 40 Z" fill="#d1fae5" opacity="0.7"/>
    <path d="M18 14 L18 30 M24 22 L24 32 M30 14 L30 30" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
  </svg>,

  // Oral Appliances / Mouth Guard
  <svg key="appliance" viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden>
    <path d="M8 20 C8 12 14 8 24 8 C34 8 40 12 40 20 L40 26 C40 34 34 38 24 38 C14 38 8 34 8 26 Z" fill="#eff6ff" stroke="#2563eb" strokeWidth="2"/>
    <path d="M8 22 L40 22" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="3 2"/>
    <path d="M14 22 C14 18 18 16 24 16 C30 16 34 18 34 22" stroke="#2563eb" strokeWidth="1.5" fill="none"/>
    <circle cx="16" cy="28" r="2" fill="#2563eb" opacity="0.4"/>
    <circle cx="24" cy="30" r="2" fill="#2563eb" opacity="0.4"/>
    <circle cx="32" cy="28" r="2" fill="#2563eb" opacity="0.4"/>
  </svg>,
];

export default function page() {
  const { t } = useLanguage();

  return (
    <div>
      {/* Page header */}
      <div className="bg-[#2b4859] text-white flex flex-col items-center justify-center py-12 px-4 gap-2">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight">{t.services.pageTitle}</h1>
        <p className="text-blue-200 text-sm md:text-base">{t.infoBar.everyday} &nbsp;|&nbsp; {t.infoBar.emergency}</p>
      </div>

      {/* Services grid */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-10 text-gray-800">
          {t.services.sectionTitle}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col gap-3"
            >
              <div className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                {serviceIcons[i]}
              </div>
              <h3 className="font-bold text-gray-900 text-base md:text-lg leading-snug">{service.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center gap-3 text-center">
          <p className="text-gray-600 text-sm md:text-base">{t.infoBar.openHours}: {t.infoBar.everyday}</p>
          <Link
            href="/appointment"
            className="bg-[#642ab6] hover:bg-[#7b35d4] text-white font-semibold px-8 py-3 rounded-xl transition-colors shadow-md"
          >
            {t.infoBar.makeAppointment}
          </Link>
        </div>
      </div>
    </div>
  );
}
