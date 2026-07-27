"use client";
import Link from "next/link";
import { FaFacebook, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.services, href: "/service" },
    { label: t.nav.gallery, href: "/gallery" },
    { label: t.nav.contact, href: "/contact" },
    { label: t.infoBar.makeAppointment, href: "/appointment" },
  ];

  return (
    <footer className="relative">
      {/* Decorative wave separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden h-8 -translate-y-full">
        <svg viewBox="0 0 1440 32" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,32 C360,0 720,0 1080,32 L1440,32 L1440,0 L0,0 Z" fill="#2b4859" />
        </svg>
      </div>

      <div className="bg-[#2b4859] text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="w-12 h-0.5 bg-terracotta rounded-full" />
            <h3 className="font-heading text-xl font-bold">{t.footer.brandName}</h3>
            <p className="text-sm text-teal-100/80 leading-relaxed">{t.footer.tagline}</p>
            <div className="flex gap-3 pt-1">
              <Link href="https://www.facebook.com/swargadwari.dental.care.home/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-terracotta p-2.5 rounded-full transition-all duration-200 hover:scale-110" aria-label="Facebook">
                <FaFacebook size={15} />
              </Link>
              <Link href="https://wa.me/9779843230047" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-terracotta p-2.5 rounded-full transition-all duration-200 hover:scale-110" aria-label="WhatsApp">
                <FaWhatsapp size={15} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <div className="w-12 h-0.5 bg-terracotta rounded-full" />
            <h3 className="font-heading text-lg font-semibold">{t.footer.quickLinksTitle}</h3>
            <ul className="flex flex-col gap-2 text-sm text-teal-100/80">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta/60 group-hover:bg-terracotta transition-colors shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="flex flex-col gap-4">
            <div className="w-12 h-0.5 bg-terracotta rounded-full" />
            <h3 className="font-heading text-lg font-semibold">{t.footer.contactTitle}</h3>
            <ul className="flex flex-col gap-3 text-sm text-teal-100/80">
              <li className="flex gap-2.5"><FaMapMarkerAlt className="mt-0.5 shrink-0 text-terracotta" size={14} /><span>{t.footer.address}</span></li>
              <li className="flex gap-2.5"><FaPhone className="shrink-0 mt-0.5 text-terracotta" size={14} /><span>{t.footer.phone}</span></li>
              <li className="flex gap-2.5"><MdEmail className="shrink-0 mt-0.5 text-terracotta" size={14} /><span>{t.footer.email}</span></li>
              <li className="flex gap-2.5"><FaClock className="shrink-0 mt-0.5 text-terracotta" size={14} /><span>{t.footer.hoursDetail}<br />{t.footer.emergencyHours}</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 px-6 py-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-teal-100/60">
            <span>{t.footer.copyright}</span>
            <span className="flex items-center gap-1">
              Website made by{" "}
              <Link
                href="https://codexnepal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-terracotta hover:text-white underline underline-offset-2 transition-colors"
              >
                Codexnepal
              </Link>
            </span>
            <Link className="hover:text-white transition-colors" href="/terms">{t.footer.termsPrivacy}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
