"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const works = [
  { src: "/project1.jpg", alt: "project1" },
  { src: "/project2.jpg", alt: "project2" },
  { src: "/project3.jpg", alt: "project3" },
  { src: "/project4.jpg", alt: "project4" },
  { src: "/project5.jpg", alt: "project5" },
];

export default function OurWorks() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);

  const handleMouseEnter = () => {
    emblaApi?.plugins()?.autoplay?.stop();
  };

  const handleMouseLeave = () => {
    emblaApi?.plugins()?.autoplay?.play();
  };

  return (
    <div className="overflow-hidden">
      <div className="flex justify-center text-2xl font-bold pb-10 pt-10">
        Our Works
      </div>
      <div className="embla relative left-29 lg:left-173 md:left-81">
        <div
          className="embla__viewport"
          ref={emblaRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="embla__container">
            {works.map((work, index) => (
              <div className="embla__slide relative h-100" key={index}>
                <Image
                  src={work.src}
                  alt={work.alt}
                  width={200}
                  height={200}
                  className="w-auto h-auto "
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
