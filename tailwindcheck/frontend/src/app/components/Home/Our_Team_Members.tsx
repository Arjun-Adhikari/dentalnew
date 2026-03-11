import DoctorCard from "@/app/_components/DoctorCard";
export default function Our_Team_Members() {
  return (
    <div>
      <h2 className="flex justify-center text-2xl font-bold pt-20 pb-10">
        Our Team Members
      </h2>
      <DoctorCard
        Dr_Name="Arun Basnet"
        Nmc_no={12345}
        DoctorImg="backgroundimg.jpg"
      />
      <DoctorCard
        Dr_Name="Suraj Rawat"
        Nmc_no={123456}
        DoctorImg="backgroundimg.jpg"
      />
      <DoctorCard
        Dr_Name="Sudip Basnet"
        Nmc_no={123456}
        DoctorImg="backgroundimg.jpg"
      />
    </div>
  );
}
