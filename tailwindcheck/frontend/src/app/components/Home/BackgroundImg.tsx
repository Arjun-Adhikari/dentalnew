import Image from "next/image";

export default function BackgroundImg() {
  return (
    <section className="">
      <Image
        src="/backgroundimg.jpg"
        alt="Dental background image"
        width={1920}
        height={800}
        priority
        className="w-full h-auto object-cover"
      />
    </section>
  );
}
