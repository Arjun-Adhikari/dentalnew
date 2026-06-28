import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppBtn() {
  return (
    <Link
      href="https://wa.me/9779843230047"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 animate-pulse"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={20} />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </Link>
  );
}
