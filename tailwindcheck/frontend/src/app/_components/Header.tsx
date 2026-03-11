"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaUserShield, FaClock, FaCalendarAlt } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { useLanguage } from "@/lib/LanguageContext";

export default function Header() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const { lang, setLang, t } = useLanguage();

    useEffect(() => { setIsOpen(false); }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    const navLinks = [
        { name: t.nav.home, href: "/" },
        { name: t.nav.services, href: "/service" },
        { name: t.nav.gallery, href: "/gallery" },
        { name: t.nav.contact, href: "/contact" },
    ];

    return (
        <div className="sticky top-0 z-40 shadow-md">
            {/* Nav */}
            <nav className="relative bg-[#ffcf01] px-4 sm:px-10">
                <div className="max-w-6xl mx-auto flex items-center justify-between h-[88px]">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 shrink-0">
                        <Image src="/dentallogo.jpg" alt="Swargadwari Dental" className="rounded-2xl object-cover shadow-md" width={58} height={58} />
                        <div className="hidden sm:flex flex-col leading-snug">
                            <span className="font-extrabold text-xl tracking-tight text-gray-900">Swargadwari</span>
                            <span className="text-base text-gray-700 font-semibold">Dental Care Home</span>
                        </div>
                    </Link>

                    {/* Desktop links */}
                    <ul className="hidden md:flex items-center">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`px-5 py-[30px] text-[17px] font-bold block border-b-[3px] transition-colors ${
                                        pathname === link.href
                                            ? "border-black text-black"
                                            : "border-transparent text-gray-800 hover:text-black"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Right controls */}
                    <div className="flex items-center gap-3">
                        <div className="flex items-center border-2 border-black/25 rounded-full overflow-hidden shadow-sm">
                            <button
                                onClick={() => setLang("ne")}
                                title="नेपाली"
                                aria-label="Switch to Nepali"
                                className={`px-2.5 py-1.5 text-xl leading-none transition-colors ${lang === "ne" ? "bg-black/15 ring-inset ring-2 ring-black/20" : "hover:bg-black/10"}`}
                            >🇳🇵</button>
                            <div className="w-px h-6 bg-black/20" />
                            <button
                                onClick={() => setLang("en")}
                                title="English"
                                aria-label="Switch to English"
                                className={`px-2.5 py-1.5 text-xl leading-none transition-colors ${lang === "en" ? "bg-black/15 ring-inset ring-2 ring-black/20" : "hover:bg-black/10"}`}
                            >🇺🇸</button>
                        </div>

                        <div className="w-px h-6 bg-black/20 hidden sm:block" />

                        <div className="relative group hidden sm:block">
                            <Link href="/dashboard" className="text-gray-800 hover:text-black transition-colors" aria-label="Account">
                                <FaUserShield size={23} />
                            </Link>
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs font-semibold px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                Account
                            </span>
                        </div>

                        <button
                            onClick={() => setIsOpen((prev) => !prev)}
                            aria-label="Toggle menu"
                            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-black/10"
                        >
                            {isOpen ? <IoCloseOutline size={22} /> : <RxHamburgerMenu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`md:hidden absolute top-full left-0 w-full bg-[#ffcf01] border-t border-yellow-500 shadow-lg overflow-hidden z-50 transition-all duration-300 ${
                    isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                }`}>
                    <ul className="flex flex-col px-4 py-2">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`flex items-center gap-2 py-4 text-base font-bold border-b border-black/10 last:border-0 ${
                                        pathname === link.href ? "text-black" : "text-gray-800"
                                    }`}
                                >
                                    {pathname === link.href && <span className="w-1.5 h-1.5 rounded-full bg-black" />}
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li className="flex items-center gap-4 py-3">
                            <Link href="/dashboard" className="ml-auto text-gray-800 flex items-center gap-2 font-semibold text-sm"><FaUserShield size={18} /> Account</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Info bar */}
            <div className="bg-white border-b border-gray-200 px-4 sm:px-10 py-3">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3 text-base font-bold text-gray-700">
                        <FaClock className="text-[#642ab6]" size={17} />
                        <span className="font-extrabold text-gray-800">{t.infoBar.openHours}:</span>
                        <span>{t.infoBar.everyday}</span>
                        <span className="hidden sm:inline text-gray-300">|</span>
                        <span className="hidden sm:inline text-red-500 font-bold">{t.infoBar.emergency}</span>
                    </div>
                    <Link href="/appointment" className="bg-[#642ab6] hover:bg-[#7b35d4] text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors shadow-md flex items-center gap-2">
                        <FaCalendarAlt size={16} />
                        {t.infoBar.makeAppointment}
                    </Link>
                </div>
            </div>
        </div>
    );
}
