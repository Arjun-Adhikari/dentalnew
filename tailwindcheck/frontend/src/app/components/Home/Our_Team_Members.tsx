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
      <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-900 tracking-tight">
        {t.teamMembers.sectionTitle}
      </h2>
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
