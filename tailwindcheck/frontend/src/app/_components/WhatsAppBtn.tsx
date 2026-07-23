"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppBtn() {
  return (
    <a
      href="https://wa.me/9779843230047"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-5 py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-colors duration-200 active:scale-95"
      style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 60 }}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={22} />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
