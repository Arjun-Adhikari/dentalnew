// "use client";
// import { useState, useEffect } from "react";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import { FaFacebook, FaWhatsapp, FaUserShield } from "react-icons/fa";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { IoCloseOutline } from "react-icons/io5";

// export default function Header() {
//     const pathname = usePathname();
//     const [isOpen, setIsOpen] = useState(false);

//     useEffect(() => { setIsOpen(false); }, [pathname]);

//     useEffect(() => {
//         document.body.style.overflow = isOpen ? "hidden" : "";
//         return () => { document.body.style.overflow = ""; };
//     }, [isOpen]);

//     const navLinks = [
//         { name: "Home", href: "/" },
//         { name: "Our Services", href: "/service" },
//         { name: "Our Gallery", href: "/gallery" },
//         { name: "Contact Us", href: "/contact" },
//     ];

//     return (
//         <div className="pb-4">
//             <header className="flex justify-evenly flex-wrap text-md bg-white text-black p-3">
//                 <div>Dental in Surkhet</div>
//                 <ul className="flex justify-evenly gap-10">
//                     <li className="text-blue-600 hover:text-blue-800 transition-colors cursor-pointer">
//                         <Link href="https://www.facebook.com/swargadwari.dental.care.home/" target="_blank" rel="noopener noreferrer">
//                             <FaFacebook size={30} />
//                         </Link>
//                     </li>
//                     <li className="text-green-600 hover:text-green-800 transition-colors cursor-pointer">
//                         <Link href="" target="_blank" rel="noopener noreferrer">
//                             <FaWhatsapp size={30} />
//                         </Link>
//                     </li>
//                 </ul>
//             </header>

//             <nav className="relative bg-[#ffcf01] px-6 py-2">
//                 <div className="flex items-center justify-between md:justify-evenly w-full">

//                     <div className="flex items-center gap-3">
//                         <Image src="/dentallogo.jpg" alt="Logo" className="rounded-4xl" width={40} height={40} />
//                         <Link href="/"><FaUserShield size={30} /></Link>
//                     </div>

//                     <ul className="hidden md:flex items-center gap-8 lg:gap-16 font-medium">
//                         {navLinks.map((link) => (
//                             <li key={link.href}>
//                                 <Link
//                                     href={link.href}
//                                     className={`transition-all hover:underline ${pathname === link.href ? "font-bold text-black" : "text-gray-800"
//                                         }`}
//                                 >
//                                     {link.name}
//                                 </Link>
//                             </li>
//                         ))}
//                     </ul>

//                     <button
//                         onClick={() => setIsOpen((prev) => !prev)}
//                         aria-label="Toggle menu"
//                         className="md:hidden flex items-center justify-center w-10 h-10 text-gray-800"
//                     >
//                         {isOpen ? <IoCloseOutline size={28} /> : <RxHamburgerMenu size={24} />}
//                     </button>

//                 </div>

//                 <div
//                     className={`md:hidden absolute top-full left-0 w-full bg-[#ffcf01] border-t border-yellow-500 shadow-md transition-all duration-300 ease-in-out overflow-hidden z-50 ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
//                         }`}
//                 >
//                     <ul className="flex flex-col px-4 py-2">
//                         {navLinks.map((link) => (
//                             <li key={link.href}>
//                                 <Link
//                                     href={link.href}
//                                     className={`flex items-center gap-2 py-3 text-base font-medium border-b border-yellow-400 last:border-0 transition-colors ${pathname === link.href ? "font-bold text-black" : "text-gray-800 hover:text-black"
//                                         }`}
//                                 >
//                                     {pathname === link.href && (
//                                         <span className="w-1.5 h-1.5 rounded-full bg-black inline-block" />
//                                     )}
//                                     {link.name}
//                                 </Link>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </nav>

//             <div className="flex justify-evenly pt-2 pb-2">
//                 <div className="flex flex-col">
//                     Open Hours
//                     <span className="text-sm font-extralight">Everyday [7AM-7PM]</span>
//                     <span className="text-sm font-extralight">Emergency [24/7]</span>
//                 </div>
//                 <Link href="/appointment" className="bg-[#642ab6] flex px-4 items-center text-white rounded-sm">
//                     Make an appointment
//                 </Link>
//             </div>
//         </div>
//     );
// }