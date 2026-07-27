import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css"
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import WhatsAppBtn from "./_components/WhatsAppBtn";
import SchemaMarkup from "./_components/SchemaMarkup";
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
  title: {
    default: "Swargadwari Dental Care Home – Best Dental Clinic in Surkhet, Nepal",
    template: "%s | Swargadwari Dental Care Home",
  },
  description:
    "Swargadwari Dental Care Home in Birendranagar, Surkhet offers expert dental services: root canal, braces, crowns, oral surgery, pediatric dentistry & more. Book your appointment today.",
  keywords: [
    "dental clinic Surkhet",
    "dentist in Birendranagar",
    "Swargadwari Dental Care Home",
    "root canal Surkhet",
    "braces Nepal",
    "dental crowns Surkhet",
    "oral surgery Nepal",
    "pediatric dentist Surkhet",
    "dental appointment Nepal",
    "best dentist in Surkhet",
    "tooth clinic Birendranagar",
    "dental care Nepal",
  ],
  applicationName: "Swargadwari Dental Care Home",
  authors: [{ name: "Codexnepal", url: "https://codexnepal.com" }],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  creator: "Swargadwari Dental Care Home",
  publisher: "Swargadwari Dental Care Home",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://dentalnew-omega.vercel.app",
    languages: {
      en: "https://dentalnew-omega.vercel.app/en",
      ne: "https://dentalnew-omega.vercel.app/ne",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ne_NP",
    siteName: "Swargadwari Dental Care Home",
    title: "Swargadwari Dental Care Home – Best Dental Clinic in Surkhet, Nepal",
    description:
      "Expert dental care in Birendranagar, Surkhet. Root canal, braces, crowns, oral surgery & more. Book your appointment online.",
    url: "https://dentalnew-omega.vercel.app",
    images: [
      {
        url: "/dentallogo.jpg",
        width: 800,
        height: 800,
        alt: "Swargadwari Dental Care Home logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Swargadwari Dental Care Home – Best Dental Clinic in Surkhet",
    description:
      "Expert dental care in Birendranagar, Surkhet. Root canal, braces, crowns, oral surgery & more.",
    images: ["/dentallogo.jpg"],
  },
  category: "healthcare",
  classification: "Dental Clinic",
  metadataBase: new URL("https://dentalnew-omega.vercel.app"),
  icons: {
    icon: "/dentallogo.jpg",
    apple: "/dentallogo.jpg",
  },
  appleWebApp: {
    title: "Swargadwari Dental",
    statusBarStyle: "default",
  },
  verification: {
    google: "google-site-verification-code",
  },
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
          <SchemaMarkup />
          <Header />
          {children}
          <Footer />
          <WhatsAppBtn />
        </LanguageProvider>
      </body>
    </html>
  );
}
