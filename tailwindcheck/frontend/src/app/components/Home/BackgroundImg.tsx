import Image from "next/image";
import backgroundimg from "../../../../public/backgroundimg.jpg";
export default function BackgroundImg() {
  return (
    <section className="">
      <Image
        src={backgroundimg}
        alt="Dental background image"
        width={1920}
        height={1080}
        priority
        className="w-full h-auto object-cover"
      />
    </section>
  );
}
