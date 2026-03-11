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
    <div className="bg-white border border-gray-100 shadow-lg rounded-3xl p-8 mb-8 flex flex-col sm:flex-row items-center gap-8">
      {/* Photo */}
      <div className="shrink-0">
        <Image
          src={`/${DoctorImg}`}
          alt={Dr_Name}
          width={180}
          height={180}
          className="rounded-2xl object-cover w-[180px] h-[180px] ring-4 ring-[#642ab6]/20 shadow-md"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-3 text-center sm:text-left">
        {/* Designation badge */}
        <span className="inline-flex items-center self-center sm:self-start gap-1.5 bg-[#642ab6]/10 text-[#642ab6] text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full border border-[#642ab6]/20">
          {Designation}
        </span>
        {/* Name */}
        <h2 className="text-3xl font-black text-gray-900 leading-tight tracking-tight">
          Dr. {Dr_Name}
        </h2>
        {/* Degree */}
        <span className="text-lg font-semibold text-gray-500">{Degree}</span>
        {/* NMC */}
        <span className="inline-flex items-center self-center sm:self-start gap-2 text-sm font-semibold text-gray-400 bg-gray-50 border border-gray-200 px-3 py-1 rounded-lg mt-1">
          <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
          {nmcLabel}: <span className="text-gray-600 font-bold">{Nmc_no}</span>
        </span>
      </div>
    </div>
  );
}
