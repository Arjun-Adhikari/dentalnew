import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css"
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import WhatsAppBtn from "./_components/WhatsAppBtn";
import { LanguageProvider } from "@/lib/LanguageContext";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Swargadwari Dental Care Home",
  description: "Dental Clinic in Surkhet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
          <WhatsAppBtn />
        </LanguageProvider>
      </body>
    </html>
  );
}
