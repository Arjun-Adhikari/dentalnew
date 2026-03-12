"use client"
import Image from "next/image";
import { useState } from "react";
export default function page() {
  const [selected, setSelected] = useState<{ id: number; src: string; alt: string } | null>(null);
  const imageData = [
    { id: 1, src: "/ph1.webp", alt: "First pic" },
    { id: 2, src: "/ph2.webp", alt: "Second pic" },
    { id: 3, src: "/ph3.webp", alt: "Third pic" },
    { id: 5, src: "/ph5.webp", alt: "Fifth pic" },
    { id: 6, src: "/ph6.webp", alt: "Sixth pic" },
  ]

  return (

    <div>
      <div>
        <div className="bg-[#2b4859] text-white flex justify-center pt-10 pb-8 mb-6 text-2xl md:text-3xl">
          <h1>Our Gallery</h1>
        </div>
      </div>



      <div className={`flex flex-wrap gap-6 justify-center p-8 transition-all duration-300 ${selected ? "blur-sm scale-95" : ""}`}>
        {imageData.map((image) => (
          <div
            key={image.id}
            onClick={() => setSelected(image)}
            className="group relative overflow-hidden rounded-2xl border-4 border-gray-100 shadow-md cursor-pointer"
          >
            <Image
              loading="eager"
              src={image.src}
              alt={image.alt}
              width={256}
              height={256}
              className="w-64 h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <Image
              src={selected.src}
              alt={selected.alt}
              width={700}
              height={700}
              className="w-[80vw] max-w-2xl h-auto object-cover"
            />
            {/* Close Button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 bg-white/80 hover:bg-white text-black rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold shadow"
            >
              ✕
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
