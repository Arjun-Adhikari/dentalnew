"use client";
import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";

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
    { value: 2000, label: t.satisfiedCustomers.satisfiedPatients, suffix: "+" },
    { value: 2, label: t.satisfiedCustomers.yearsExperience, suffix: "+" },
    { value: 100, label: t.satisfiedCustomers.satisfactionRate, suffix: "%" },
  ];

  return (
    <div className="py-20 px-8 bg-gradient-to-br from-[#000080]/5 to-transparent">
      <div className="font-extrabold text-3xl flex justify-center pb-12 tracking-tight text-gray-900">
        {t.satisfiedCustomers.sectionTitle}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center max-w-4xl mx-auto">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center gap-3 bg-white rounded-2xl shadow-md py-10 px-6 border border-gray-100">
            <span className="text-5xl font-black text-[#000080]">
              <Counter target={stat.value} suffix={stat.suffix} />
            </span>
            <span className="text-base font-semibold text-gray-600">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
