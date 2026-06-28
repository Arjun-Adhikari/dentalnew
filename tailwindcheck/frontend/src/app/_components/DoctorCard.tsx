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
    <div className="bg-white border border-warm-200 shadow-lg rounded-3xl p-8 mb-8 flex flex-col sm:flex-row items-center gap-8 hover:shadow-xl transition-shadow duration-300">
      {/* Photo */}
      <div className="shrink-0">
        <Image
          src={`/${DoctorImg}`}
          alt={Dr_Name}
          width={180}
          height={180}
          className="rounded-2xl object-cover w-[180px] h-[180px] shadow-md"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-3 text-center sm:text-left">
        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
          {Designation}
        </span>
        {/* Name */}
        <h2 className="font-heading text-3xl font-bold text-gray-900 leading-tight tracking-tight">
          Dr. {Dr_Name}
        </h2>
        {/* Degree */}
        <span className="text-base font-medium text-gray-500">{Degree}</span>
        {/* NMC */}
        <span className="text-sm font-semibold text-gray-400 mt-1">
          {nmcLabel}: <span className="text-gray-600 font-bold">{Nmc_no}</span>
        </span>
      </div>
    </div>
  );
}
