import type { Metadata } from "next";
import TermsContent from "./TermsContent";

export const metadata: Metadata = {
  title: "Terms of Service & Privacy Policy",
  description:
    "Terms of Service and Privacy Policy for Swargadwari Dental Care Home, Birendranagar, Surkhet, Nepal.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <TermsContent />;
}
