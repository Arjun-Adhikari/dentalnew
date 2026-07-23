"use client";
import { motion } from "framer-motion";
import DoctorCard from "@/app/_components/DoctorCard";
import { useLanguage } from "@/lib/LanguageContext";
import { useEffect, useState } from "react";

export default function Our_Team_Members() {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const doctors = [
    {
      Designation: t.doctorDesignations.seniorDentalSurgeon,
      Dr_Name: "Arun Basnet",
      Degree: "BDS(KU)",
      Nmc_no: 27555,
      DoctorImg: "drarun.webp",
    },
    {
      Designation: t.doctorDesignations.seniorDentalSurgeon,
      Dr_Name: "Suraj Rawat",
      Degree: "BDS(KU)",
      Nmc_no: 28797,
      DoctorImg: "backgroundimg.jpg",
    },
    {
      Designation: t.doctorDesignations.consultantProsthodontist,
      Dr_Name: "Sudip Subedi",
      Degree: "BDS(KU),MDS(T.U)",
      Nmc_no: 17413,
      DoctorImg: "backgroundimg.jpg",
    },
  ];

  const cardVariants = {
    hidden: (i: number) => ({
      opacity: 0,
      x: isMobile ? 0 : [-80, 80, -80][i] ?? 0,
    }),
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: isMobile ? i * 0.1 : [0, 0.4, 1.2][i] ?? i * 0.5,
        duration: isMobile ? 0.35 : 0.8,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <div className="max-w-4xl mx-auto px-6 pt-10 pb-6">
      <div className="flex flex-col items-center gap-3 mb-12">
        <div className="w-16 h-0.5 bg-terracotta rounded-full" />
        <h2 className="font-heading text-xl md:text-3xl font-bold text-center text-gray-900 tracking-tight">
          {t.teamMembers.sectionTitle}
        </h2>
        <p className="text-gray-500 text-sm font-medium">Meet our experienced dental professionals</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {doctors.map((doc, i) => (
          <motion.div
            key={doc.Nmc_no}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            <DoctorCard
              {...doc}
              nmcLabel={t.teamMembers.nmcLabel}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
