import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Visit Swargadwari Dental Care Home near Maya Nursing Home, Birendranagar, Surkhet. Call 9843230047 or email swargadwaridentalcarehome@gmail.com for appointments.",
  openGraph: {
    title: "Contact Us – Swargadwari Dental Care Home Surkhet",
    description:
      "Get in touch with Swargadwari Dental Care Home in Birendranagar, Surkhet. Call, WhatsApp, or visit us.",
  },
};

export default function Page() {
  return <ContactContent />;
}
