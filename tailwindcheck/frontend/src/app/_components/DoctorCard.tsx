import Image from "next/image";

export default function DoctorCard({
  Designation,
  Dr_Name,
  Degree,
  Nmc_no,
  DoctorImg,
  nmcLabel = "NMC No",
}: {
  Designation: string;
  Dr_Name: string;
  Degree: string;
  Nmc_no: number;
  DoctorImg: string;
  nmcLabel?: string;
}) {
  return (
    <div className="bg-white border border-warm-200 shadow-lg rounded-2xl p-5 md:p-6 flex flex-col items-center gap-4 hover:shadow-xl transition-shadow duration-300 h-full">
      {/* Photo */}
      <div className="shrink-0">
        <Image
          src={`/${DoctorImg}`}
          alt={Dr_Name}
          width={140}
          height={140}
          className="rounded-2xl object-cover w-[120px] h-[120px] md:w-[140px] md:h-[140px] shadow-md"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1.5 md:gap-2 text-center">
        <span className="text-[11px] md:text-xs font-semibold text-gray-500 uppercase tracking-wider">
          {Designation}
        </span>
        {/* Name */}
        <h2 className="font-heading text-lg md:text-xl font-bold text-gray-900 leading-tight tracking-tight">
          Dr. {Dr_Name}
        </h2>
        {/* Degree */}
        <span className="text-sm md:text-base font-medium text-gray-500">{Degree}</span>
        {/* NMC */}
        <span className="text-xs md:text-sm font-semibold text-gray-400">
          {nmcLabel}: <span className="text-gray-600 font-bold">{Nmc_no}</span>
        </span>
      </div>
    </div>
  );
}
