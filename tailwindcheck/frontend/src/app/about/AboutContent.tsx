"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import FadeInView from "@/app/_components/FadeInView";
import { FaAward, FaCertificate, FaStar, FaTooth, FaUserMd, FaClinicMedical } from "react-icons/fa";

export default function AboutContent() {
  const { t } = useLanguage();

  return (
    <FadeInView>
      <main>
        <div className="bg-[#2b4859] text-white flex flex-col items-center justify-center py-12 px-4 gap-2 mb-6">
          <h1 className="font-heading text-2xl md:text-4xl font-bold tracking-tight">{t.about.pageTitle}</h1>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-8 space-y-16">

          {/* About Us */}
          <section>
            <div className="flex flex-col items-center gap-3 mb-8">
              <div className="w-16 h-0.5 bg-terracotta rounded-full" />
              <h2 className="font-heading text-xl md:text-3xl font-bold tracking-tight text-gray-900">{t.about.sectionTitle}</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col gap-4">
                <p className="text-gray-600 leading-relaxed">{t.about.para1}</p>
                <p className="text-gray-600 leading-relaxed">{t.about.para2}</p>
                <p className="text-gray-600 leading-relaxed">{t.about.para3}</p>
                <div className="flex items-center gap-4 pt-2 flex-wrap">
                  <div className="flex items-center gap-2 text-terracotta">
                    <FaTooth size={20} />
                    <span className="text-sm font-semibold text-gray-700">{t.about.modernEquipment}</span>
                  </div>
                  <div className="flex items-center gap-2 text-terracotta">
                    <FaUserMd size={20} />
                    <span className="text-sm font-semibold text-gray-700">{t.about.expertTeam}</span>
                  </div>
                  <div className="flex items-center gap-2 text-terracotta">
                    <FaClinicMedical size={20} />
                    <span className="text-sm font-semibold text-gray-700">{t.about.cleanSafe}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <div className="flex flex-col items-center gap-3 mb-8">
              <div className="w-16 h-0.5 bg-terracotta rounded-full" />
              <h2 className="font-heading text-xl md:text-3xl font-bold tracking-tight text-gray-900">{t.about.certificationsTitle}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: t.about.cert1Title, desc: t.about.cert1Desc, icon: FaCertificate },
                { title: t.about.cert2Title, desc: t.about.cert2Desc, icon: FaCertificate },
                { title: t.about.cert3Title, desc: t.about.cert3Desc, icon: FaCertificate },
              ].map((cert, i) => {
                const Icon = cert.icon;
                return (
                  <div key={i} className="bg-white border border-warm-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-xl bg-terracotta/5 border border-terracotta/10 flex items-center justify-center">
                      <Icon className="text-terracotta" size={24} />
                    </div>
                    <h3 className="font-heading font-bold text-gray-900">{cert.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{cert.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Awards */}
          <section>
            <div className="flex flex-col items-center gap-3 mb-8">
              <div className="w-16 h-0.5 bg-terracotta rounded-full" />
              <h2 className="font-heading text-xl md:text-3xl font-bold tracking-tight text-gray-900">{t.about.awardsTitle}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: t.about.award1Title, year: t.about.award1Year, desc: t.about.award1Desc, icon: FaAward },
                { title: t.about.award2Title, year: t.about.award2Year, desc: t.about.award2Desc, icon: FaStar },
                { title: t.about.award3Title, year: t.about.award3Year, desc: t.about.award3Desc, icon: FaAward },
              ].map((award, i) => {
                const Icon = award.icon;
                return (
                  <div key={i} className="bg-white border border-warm-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center">
                        <Icon className="text-amber-500" size={24} />
                      </div>
                      <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">{award.year}</span>
                    </div>
                    <h3 className="font-heading font-bold text-gray-900">{award.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{award.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Clinic Photos */}
          <section>
            <div className="flex flex-col items-center gap-3 mb-8">
              <div className="w-16 h-0.5 bg-terracotta rounded-full" />
              <h2 className="font-heading text-xl md:text-3xl font-bold tracking-tight text-gray-900">{t.about.clinicPhotosTitle}</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { src: "/ph1.webp", alt: "Swargadwari Dental Care Home clinic exterior in Birendranagar Surkhet" },
                { src: "/ph2.webp", alt: "Dental treatment room at Swargadwari Dental Care Home Surkhet" },
                { src: "/ph3.webp", alt: "Dental equipment and chair at Swargadwari Dental Care Home" },
                { src: "/ph6.webp", alt: "Dental examination room at Swargadwari Dental Care Home Birendranagar" },
              ].map((photo, i) => (
                <div key={i} className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={400}
                    height={300}
                    className="w-full h-44 md:h-52 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-400 mt-4">
              <Link href="/gallery" className="text-terracotta hover:underline font-semibold">{t.about.galleryLink}</Link>
            </p>
          </section>

          {/* Virtual Tour */}
          <section className="pb-8">
            <div className="flex flex-col items-center gap-3 mb-8">
              <div className="w-16 h-0.5 bg-terracotta rounded-full" />
              <h2 className="font-heading text-xl md:text-3xl font-bold tracking-tight text-gray-900">{t.about.virtualTourTitle}</h2>
            </div>
            <div className="flex flex-col items-center gap-4">
              <p className="text-gray-600 text-center max-w-2xl">{t.about.virtualTourDesc}</p>
              <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-2xl">
                <video
                  src="/first.mp4"
                  controls
                  poster="/dentallogo.jpg"
                  className="w-full h-64 md:h-80 object-cover"
                >
                  Your browser does not support the video tag. Visit our clinic in Birendranagar, Surkhet for a personal tour.
                </video>
              </div>
              <p className="text-xs text-gray-400">{t.about.virtualTourCaption}</p>
            </div>
          </section>

        </div>
      </main>
    </FadeInView>
  );
}
