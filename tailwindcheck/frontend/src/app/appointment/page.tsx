import type { Metadata } from "next";
import AppointmentContent from "./AppointmentContent";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Schedule your dental appointment online at Swargadwari Dental Care Home in Birendranagar, Surkhet. Choose your preferred date and time for a consultation.",
  openGraph: {
    title: "Book a Dental Appointment – Swargadwari Dental Care Home",
    description:
      "Schedule your dental appointment online in Surkhet. Choose your preferred date and time.",
  },
};

export default function Page() {
  return <AppointmentContent />;
}
