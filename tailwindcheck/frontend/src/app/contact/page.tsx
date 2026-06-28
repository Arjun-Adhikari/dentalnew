"use client";
import Link from "next/link";
import { FaFacebook, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function page() {
  return (
    <div>
      <div className="bg-[#2b4859] text-white flex justify-center pt-10 pb-8 mb-6 text-2xl md:text-3xl font-bold">
        Contact Us
      </div>
      <div className="flex justify-center flex-col lg:flex-row items-start gap-8 px-6 pb-12">
        {/* Info card */}
        <div className="w-full lg:w-72 border-2 border-terracotta/30 p-6 flex flex-col gap-6 rounded-2xl bg-white shadow-md shrink-0">

          <div className="flex flex-col gap-1">
            <h1 className="font-heading font-bold text-terracotta flex items-center gap-2"><FaMapMarkerAlt /> Office</h1>
            <p className="text-gray-700 text-sm">Near Maya Nursing Home, Birendranagar, Surkhet</p>
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="font-heading font-bold text-terracotta flex items-center gap-2"><FaEnvelope /> Email</h1>
            <a href="mailto:Swargadwari@gmail.com" className="text-gray-700 text-sm hover:text-terracotta transition-colors">Swargadwari@gmail.com</a>
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="font-heading font-bold text-terracotta flex items-center gap-2"><FaPhone /> Phone</h1>
            <a href="tel:9843230047" className="text-gray-700 text-sm hover:text-terracotta transition-colors">9843230047</a>
            <a href="tel:9820030047" className="text-gray-700 text-sm hover:text-terracotta transition-colors">9820030047</a>
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="font-heading font-bold text-terracotta">Opening Hours</h1>
            <p className="text-gray-700 text-sm">Everyday (7AM – 7PM)</p>
            <p className="text-red-500 text-sm font-medium">Emergency: 24/7</p>
          </div>

          {/* Social links */}
          <div className="flex flex-col gap-2 pt-2 border-t border-warm-200">
            <h1 className="font-heading font-bold text-terracotta text-sm">Follow Us</h1>
            <div className="flex items-center gap-3">
              <Link
                href="https://www.facebook.com/swargadwari.dental.care.home/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                <FaFacebook size={16} /> Facebook
              </Link>
              <Link
                href="https://wa.me/9779843230047"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                <FaWhatsapp size={16} /> WhatsApp
              </Link>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="flex justify-center p-2 w-full">
          <iframe
            className="w-full max-w-sm sm:max-w-lg md:max-w-2xl rounded-2xl shadow-md h-55 md:h-85"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.148704734896!2d81.6155984!3d28.5953154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a28590881b7405%3A0x9db87a65faae4b3e!2sSwargadwari%20dental%20care%20home!5e0!3m2!1sen!2snp!4v1772707491593!5m2!1sen!2snp&z=14"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
