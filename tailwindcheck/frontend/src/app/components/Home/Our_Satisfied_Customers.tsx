"use client";
import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import FadeInView from "@/app/_components/FadeInView";

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          const increment = target / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);

          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return <div ref={ref}>{count}{suffix}</div>;
}

export default function OurSatisfiedCustomers() {
  const { t } = useLanguage();

  const stats = [
    { value: 5000, label: t.satisfiedCustomers.satisfiedPatients, suffix: "+" },
    { value: 5, label: t.satisfiedCustomers.yearsExperience, suffix: "+" },
    { value: 100, label: t.satisfiedCustomers.satisfactionRate, suffix: "%" },
  ];

  return (
    <FadeInView className="py-20 px-8">
      <div className="flex flex-col items-center gap-3 pb-12">
        <div className="w-16 h-0.5 bg-terracotta rounded-full" />
        <h2 className="font-heading text-xl md:text-3xl font-bold tracking-tight text-gray-900">
          {t.satisfiedCustomers.sectionTitle}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-7 text-center max-w-4xl mx-auto">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center gap-1 md:gap-3 bg-white rounded-2xl shadow-md py-4 md:py-9 px-3 md:px-5 border border-warm-200 hover:shadow-lg transition-shadow duration-300">
            <span className="text-2xl md:text-4xl font-black text-terracotta">
              <Counter target={stat.value} suffix={stat.suffix} />
            </span>
            <span className="text-[11px] md:text-sm font-semibold text-gray-500 uppercase tracking-wide">{stat.label}</span>
          </div>
        ))}
      </div>
    </FadeInView>
  );
}
