"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";

const works = [
  { src: "/project1.jpg", alt: "project1" },
  { src: "/project2.jpg", alt: "project2" },
  { src: "/project3.jpg", alt: "project3" },
  { src: "/project5.jpg", alt: "project5" },
];

export default function OurWorks() {
  const { t } = useLanguage();

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (!emblaApi) return;

    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [emblaApi]);

  return (
    <div className="py-6">
      <div className="flex justify-center text-3xl font-extrabold pb-8 pt-10 tracking-tight text-gray-900">
        {t.ourWorks.sectionTitle}
      </div>
      <div className="embla overflow-hidden">

        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {works.map((work, index) => (
              <div className="embla__slide flex items-center justify-center" key={index}>
                <Image
                  src={work.src}
                  alt={work.alt}
                  width={900}
                  height={500}
                  sizes="(max-width: 768px) 100vw, 900px"
                  loading="eager"
                  className="w-full max-h-115 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}