"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaUserShield, FaCalendarAlt } from "react-icons/fa";
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
        <>
            <div className="sticky top-0 z-40">
                {/* Nav */}
                <nav className="relative bg-warm-50 border-b border-warm-200 px-4 sm:px-10">
                    <div className="max-w-6xl mx-auto flex items-center justify-between h-22">

                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 shrink-0 group">
                            <div className="relative">
                                <Image src="/dentallogo.jpg" alt="Swargadwari Dental" className="rounded-2xl object-cover shadow-md transition-transform duration-300 group-hover:scale-105" width={58} height={58} />
                            </div>
                            <div className="flex flex-col leading-tight sm:leading-snug">
                                <span className="font-heading font-bold text-lg sm:text-2xl tracking-tight text-gray-900">Swargadwari</span>
                                <span className="text-[11px] sm:text-sm text-gray-500 font-medium tracking-wide">Dental Care Home</span>
                            </div>
                        </Link>

                        {/* Desktop links */}
                        <ul className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`px-4 py-2 text-[15px] font-semibold block rounded-lg transition-all duration-200 ${
                                            pathname === link.href
                                                ? "bg-terracotta/10 text-terracotta"
                                                : "text-gray-600 hover:bg-terracotta/5 hover:text-terracotta"
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Right controls */}
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-0.5">
                                <button
                                    onClick={() => setLang("ne")}
                                    title="नेपाली"
                                    aria-label="Switch to Nepali"
                                    className={`px-2.5 py-1.5 text-xs font-bold leading-none tracking-wider transition-colors ${lang === "ne" ? "bg-terracotta/10 ring-inset ring-2 ring-terracotta/30" : "hover:bg-warm-100"}`}
                                >NP</button>
                                <button
                                    onClick={() => setLang("en")}
                                    title="English"
                                    aria-label="Switch to English"
                                    className={`px-2.5 py-1.5 text-xs font-bold leading-none tracking-wider transition-colors ${lang === "en" ? "bg-terracotta/10 ring-inset ring-2 ring-terracotta/30" : "hover:bg-warm-100"}`}
                                >EN</button>
                            </div>

                            <div className="w-px h-6 bg-warm-200 hidden sm:block" />

                            <div className="relative group hidden sm:block">
                                <Link href="/dashboard" className="text-gray-400 hover:text-terracotta transition-colors" aria-label="Account">
                                    <FaUserShield size={21} />
                                </Link>
                                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs font-semibold px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                    Account
                                </span>
                            </div>

                            <button
                                onClick={() => setIsOpen((prev) => !prev)}
                                aria-label="Toggle menu"
                                className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-warm-100 transition-colors"
                            >
                                {isOpen ? <IoCloseOutline size={22} /> : <RxHamburgerMenu size={20} />}
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Info bar */}
                <div className="bg-white border-b border-warm-200 px-4 sm:px-10 py-3 shadow-sm">
                    <div className="max-w-6xl mx-auto flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm font-semibold text-gray-600">
                            <span className="text-gray-800 font-bold">{t.infoBar.openHours}:</span>
                            <span>{t.infoBar.everyday}</span>
                        </div>
                        <Link href="/appointment" className="bg-terracotta hover:bg-terracotta-dark text-white text-xs md:text-sm font-bold px-3 py-1.5 md:px-5 md:py-2.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-1.5 md:gap-2 shrink-0">
                            <FaCalendarAlt size={13} className="md:size-4" />
                            {t.infoBar.makeAppointment}
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile overlay */}
            <div
                className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-50 transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setIsOpen(false)}
            />

            {/* Mobile slide-in panel */}
            <div
                className={`fixed top-0 right-0 h-full w-72 bg-warm-50 shadow-2xl z-50 flex flex-col transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex items-center justify-between p-5 border-b border-warm-200">
                    <span className="font-heading font-bold text-lg text-gray-900">Menu</span>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-warm-100 transition-colors"
                        aria-label="Close menu"
                    >
                        <IoCloseOutline size={22} />
                    </button>
                </div>
                <ul className="flex-1 flex flex-col px-3 py-3 overflow-y-auto">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`flex items-center gap-3 py-3.5 px-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                                    pathname === link.href
                                        ? "text-terracotta bg-terracotta/5"
                                        : "text-gray-700 hover:text-terracotta hover:bg-terracotta/5"
                                }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <li className="mt-auto pt-3 border-t border-warm-200">
                        <Link
                            href="/dashboard"
                            className={`flex items-center gap-3 py-3.5 px-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                                pathname === "/dashboard"
                                    ? "text-terracotta bg-terracotta/5"
                                    : "text-gray-700 hover:text-terracotta hover:bg-terracotta/5"
                            }`}
                        >
                            <FaUserShield size={18} />
                            Account
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
