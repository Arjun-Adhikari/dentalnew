export default function DoctorCard({
  Dr_Name,
  Nmc_no,
  DoctorImg,
}: {
  Dr_Name: string;
  Nmc_no: number;
  DoctorImg: string;
}) {
  return (
    <div className="bg-[#7df9ff] font-medium text-xl p-6 rounded mb-10">
      <h1 className="flex justify-center text-[#000080]">
        Senior Dental Surgeon
      </h1>
      <div className="flex justify-evenly">
        <div className="flex flex-col">
          <span>Dr {Dr_Name}</span>
          <span>Nmc no: {Nmc_no}</span>
        </div>
        <img src={DoctorImg} alt={Dr_Name} width={200} height={200} />
      </div>
    </div>
  );
}
