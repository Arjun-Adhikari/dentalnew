"use client";
import { useLanguage } from "@/lib/LanguageContext";
import FadeInView from "@/app/_components/FadeInView";

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <FadeInView className="py-16 px-6 bg-white/50">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-3 mb-10">
          <div className="w-16 h-0.5 bg-terracotta rounded-full" />
          <h2 className="font-heading text-xl md:text-3xl font-bold tracking-tight text-gray-900">
            {t.testimonial.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.testimonial.items.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-warm-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-3"
            >
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed italic">&ldquo;{item.text}&rdquo;</p>
              <p className="text-sm font-bold text-gray-800 mt-auto">&ndash; {item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </FadeInView>
  );
}
