"use client";
import Link from "next/link";
import { FaFacebook, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.services, href: "/service" },
    { label: t.nav.gallery, href: "/gallery" },
    { label: t.nav.contact, href: "/contact" },
    { label: t.infoBar.makeAppointment, href: "/appointment" },
  ];

  return (
    <footer className="bg-[#000080] text-white">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-bold">{t.footer.brandName}</h3>
          <p className="text-sm text-blue-200">{t.footer.tagline}</p>
          <div className="flex gap-3">
            <Link href="https://www.facebook.com/swargadwari.dental.care.home/" target="_blank" rel="noopener noreferrer" className="bg-blue-700 hover:bg-blue-600 p-2 rounded-full transition-colors" aria-label="Facebook">
              <FaFacebook size={16} />
            </Link>
            <Link href="https://wa.me/9779843230047" target="_blank" rel="noopener noreferrer" className="bg-green-700 hover:bg-green-600 p-2 rounded-full transition-colors" aria-label="WhatsApp">
              <FaWhatsapp size={16} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold border-b border-blue-400 pb-2">{t.footer.quickLinksTitle}</h3>
          <ul className="flex flex-col gap-1.5 text-sm text-blue-200">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white transition-colors">→ {link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Hours */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold border-b border-blue-400 pb-2">{t.footer.contactTitle}</h3>
          <ul className="flex flex-col gap-2 text-sm text-blue-200">
            <li className="flex gap-2"><FaMapMarkerAlt className="mt-0.5 shrink-0" /><span>{t.footer.address}</span></li>
            <li className="flex gap-2"><FaPhone className="shrink-0 mt-0.5" /><span>{t.footer.phone}</span></li>
            <li className="flex gap-2"><MdEmail className="shrink-0 mt-0.5" /><span>{t.footer.email}</span></li>
            <li className="flex gap-2"><FaClock className="shrink-0 mt-0.5" /><span>{t.footer.hoursDetail}<br />{t.footer.emergencyHours}</span></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-blue-800 px-6 py-3">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-1 text-xs text-blue-400">
          <span>{t.footer.copyright}</span>
          <span>
            Website made by{" "}
            <Link
              href="https://codexnepal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white underline underline-offset-2 transition-colors"
            >
              Codexnepal
            </Link>
          </span>
          <Link className="hover:text-white" href="/terms">{t.footer.termsPrivacy}</Link>
        </div>
      </div>
    </footer>
  );
}
