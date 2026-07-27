"use client";
import { useRef } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import FadeInView from "@/app/_components/FadeInView";

const works = [
  { src: "/w1.webp", alt: "Dental clinic work showcase at Swargadwari Dental Care Home Surkhet" },
  { src: "/w2.webp", alt: "Dental treatment showcase at Swargadwari Dental Care Home Birendranagar" },
  { src: "/w3.webp", alt: "Dental procedure showcase at Swargadwari Dental Care Home Nepal" },
  { src: "/w4.webp", alt: "Dental care showcase at Swargadwari Dental Care Home Surkhet" },
  { src: "/w5.webp", alt: "Dental service showcase at Swargadwari Dental Care Home Birendranagar" },
  { src: "/w6.webp", alt: "Dental clinic results showcase at Swargadwari Dental Care Home Surkhet" },
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
        <h2 id="works-heading" className="font-heading text-xl md:text-3xl font-bold tracking-tight text-gray-900">
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
            <div key={i} className="shrink-0 w-[90vw] sm:w-[75vw] md:w-[55vw] lg:w-[40vw] px-3">
              <Image
                src={work.src}
                alt={work.alt}
                width={1100}
                height={650}
                sizes="(max-width: 768px) 100vw, 1100px"
                loading="lazy"
                className="w-full h-64 md:h-96 object-cover rounded-xl"
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </FadeInView>
  );
}