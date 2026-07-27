import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Swargadwari Dental Care Home in Birendranagar, Surkhet. Our certifications, awards, clinic photos, and virtual tour. Expert dental care with years of experience.",
  openGraph: {
    title: "About Us – Swargadwari Dental Care Home Surkhet",
    description:
      "Discover our clinic's certifications, awards, and take a virtual tour of Swargadwari Dental Care Home in Birendranagar, Surkhet.",
  },
};

export default function Page() {
  return <AboutContent />;
}
