import DoctorCard from "@/app/_components/DoctorCard";
export default function Our_Team_Members() {
  return (
    <div>
      <h2 className="flex justify-center text-2xl  font-bold pt-20 pb-10">
        Our Team Members
      </h2>
      <DoctorCard
        Designation="Senior dental surgeon(वरिष्ठ दन्त चिकित्सक)"
        Dr_Name="Arun Basnet" //danta chickesak
        Degree="BDS(KU)"
        Nmc_no={27555}
        DoctorImg="drarun.webp"
      />
      <DoctorCard
        Designation="Senior dental surgeon(वरिष्ठ दन्त चिकित्सक)"
        Dr_Name="Suraj Rawat"
        Degree="BDS(KU)"
        Nmc_no={28797}
        DoctorImg="backgroundimg.jpg"
      />
      <DoctorCard
        Designation="Consultant Prosthodontist(परामर्शदाता प्रोस्थोडोन्टिस्ट)"
        Dr_Name="Sudip Subedi" //Consentant protodentics // kritim daat rakhne
        Degree="BDS(KU),MDS(T.U)"
        Nmc_no={17413}
        DoctorImg="backgroundimg.jpg"
      />
    </div>
  );
}
