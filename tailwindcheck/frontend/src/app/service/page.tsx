"use client";
import { useLanguage } from "@/lib/LanguageContext";
import Link from "next/link";
import { FaTeeth, FaGem, FaTooth, FaSyringe, FaSmile, FaTeethOpen, FaShieldAlt } from "react-icons/fa";
import FadeInView from "@/app/_components/FadeInView";

export default function page() {
  const { t } = useLanguage();

  return (
    <FadeInView>
      {/* Page header */}
      <div className="bg-[#2b4859] text-white flex flex-col items-center justify-center py-12 px-4 gap-2 mb-6">
        <h1 className="font-heading text-2xl md:text-4xl font-bold tracking-tight">{t.services.pageTitle}</h1>
      </div>

      {/* Services grid */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-10 text-gray-800">
          {t.services.sectionTitle}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, i) => {
            const icons = [FaTeeth, FaGem, FaTooth, FaSyringe, FaSmile, FaTeethOpen, FaShieldAlt];
            const Icon = icons[i] || FaTooth;
            return (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col gap-3"
              >
                <div className="w-14 h-14 rounded-xl bg-terracotta/5 border border-terracotta/10 flex items-center justify-center">
                  <Icon className="text-terracotta" size={24} />
                </div>
                <h3 className="font-bold text-gray-900 text-base md:text-lg leading-snug">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center gap-3 text-center">
          <p className="text-gray-600 text-sm md:text-base">{t.infoBar.openHours}: {t.infoBar.everyday}</p>
          <Link
            href="/appointment"
            className="bg-terracotta hover:bg-terracotta-dark text-white font-semibold px-8 py-3 rounded-xl transition-colors shadow-md"
          >
            {t.infoBar.makeAppointment}
          </Link>
        </div>
      </div>
    </FadeInView>
  );
}
