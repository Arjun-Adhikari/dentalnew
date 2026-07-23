"use client";
import { useRef } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import FadeInView from "@/app/_components/FadeInView";

const works = [
  { src: "/project1.jpg", alt: "project1" },
  { src: "/project2.jpg", alt: "project2" },
  { src: "/project3.jpg", alt: "project3" },
  { src: "/project5.jpg", alt: "project5" },
];

export default function OurWorks() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const paused = useRef(false);

  useAnimationFrame((_, delta) => {
    if (paused.current) return;
    const el = ref.current;
    if (!el) return;
    const half = el.scrollWidth / 2;
    let current = x.get();
    if (current === 0) current = -half;
    current += delta * 0.1;
    if (current >= 0) current -= half;
    x.set(current);
  });

  const pause = () => { paused.current = true; };
  const resume = () => { paused.current = false; };

  return (
    <FadeInView className="py-6 bg-white/50 overflow-hidden">
      <div className="flex flex-col items-center gap-3 pb-8 pt-10">
        <div className="w-16 h-0.5 bg-terracotta rounded-full" />
        <h2 className="font-heading text-xl md:text-3xl font-bold tracking-tight text-gray-900">
          {t.ourWorks.sectionTitle}
        </h2>
      </div>
      <motion.div
        className="rounded-2xl overflow-hidden shadow-lg mx-4 select-none"
        initial={{ y: 0 }}
        whileInView={{
          y: [0, -30, 30, -15, 0],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onMouseDown={pause}
        onMouseUp={resume}
        onMouseLeave={resume}
        onTouchStart={pause}
        onTouchEnd={resume}
      >
        <motion.div ref={ref} style={{ x }} className="flex">
          {[...works, ...works].map((work, i) => (
            <div key={i} className="shrink-0 w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[30vw] px-2">
              <Image
                src={work.src}
                alt={work.alt}
                width={900}
                height={500}
                sizes="(max-width: 768px) 100vw, 900px"
                loading="eager"
                className="w-full h-50 md:h-72 object-cover rounded-xl"
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </FadeInView>
  );
}