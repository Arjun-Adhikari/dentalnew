"use client";
import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 2000, label: "Projects Completed" },
  { value: 2, label: "Years Experience" },
  { value: 100, label: "Satisfaction Rate %" },
];

function Counter({ target }: { target: number }) {
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
  return <div ref={ref}>{count}+</div>;
}

export default function OurSatisfiedCustomers() {
  return (
    <div className="py-16 px-8">
      <div className="font-bold text-2xl flex justify-center pb-10">
        Our Satisfied Customers
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <span className="text-4xl font-bold text-blue-600">
              <Counter target={stat.value} />
            </span>
            <span className="text-gray-600">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
