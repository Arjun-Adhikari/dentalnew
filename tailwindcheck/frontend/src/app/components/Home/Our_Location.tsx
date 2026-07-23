"use client";
import { useLanguage } from "@/lib/LanguageContext";
import FadeInView from "@/app/_components/FadeInView";

export default function Our_Location() {
  const { t } = useLanguage();
  return (
    <FadeInView className="flex justify-center p-2 pb-10">
      <div className="flex flex-col gap-10">
        <h1 className="font-heading text-xl md:text-3xl font-bold tracking-tight flex justify-center">
          {t.ourLocation.sectionTitle}
        </h1>
        <iframe
          className="w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl h-[220px] md:h-[450px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.148704734896!2d81.6155984!3d28.5953154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a28590881b7405%3A0x9db87a65faae4b3e!2sSwargadwari%20dental%20care%20home!5e0!3m2!1sen!2snp!4v1772707491593!5m2!1sen!2snp"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </FadeInView>
  );
}
