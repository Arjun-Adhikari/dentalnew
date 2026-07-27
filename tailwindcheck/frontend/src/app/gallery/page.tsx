import type { Metadata } from "next";
import GalleryContent from "./GalleryContent";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse photos of Swargadwari Dental Care Home clinic in Birendranagar, Surkhet. See our modern dental facility, equipment, and team.",
  openGraph: {
    title: "Gallery – Swargadwari Dental Care Home Surkhet",
    description: "Photos of our dental clinic in Birendranagar, Surkhet, Nepal.",
  },
};

export default function Page() {
  return <GalleryContent />;
}
