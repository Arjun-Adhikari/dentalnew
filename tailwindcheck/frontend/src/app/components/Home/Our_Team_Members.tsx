"use client";
import DoctorCard from "@/app/_components/DoctorCard";
import { useLanguage } from "@/lib/LanguageContext";

export default function Our_Team_Members() {
  const { t } = useLanguage();

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

  return (
    <div className="max-w-4xl mx-auto px-6 pt-20 pb-6">
      <div className="flex flex-col items-center gap-3 mb-12">
        <div className="w-16 h-0.5 bg-terracotta rounded-full" />
        <h2 className="font-heading text-3xl font-bold text-center text-gray-900 tracking-tight">
          {t.teamMembers.sectionTitle}
        </h2>
        <p className="text-gray-500 text-sm font-medium">Meet our experienced dental professionals</p>
      </div>
      {doctors.map((doc) => (
        <DoctorCard
          key={doc.Nmc_no}
          {...doc}
          nmcLabel={t.teamMembers.nmcLabel}
        />
      ))}
    </div>
  );
}
