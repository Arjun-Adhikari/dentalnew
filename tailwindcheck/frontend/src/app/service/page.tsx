import type { Metadata } from "next";
import ServiceContent from "./ServiceContent";

export const metadata: Metadata = {
  title: "Dental Services",
  description:
    "Explore our comprehensive dental services at Swargadwari Dental Care Home: Orthodontics/Braces, Crowns & Bridge, Root Canal Treatment, Oral Surgery, Pediatric Dentistry, Gum Treatment, and Oral Appliances in Surkhet, Nepal.",
  openGraph: {
    title: "Dental Services – Swargadwari Dental Care Home Surkhet",
    description:
      "Expert dental services in Birendranagar, Surkhet: braces, crowns, root canal, oral surgery, pediatric dentistry & more.",
  },
};

export default function Page() {
  return <ServiceContent />;
}
