import { Metadata } from "next";
import Contact from "../../../components/modules/contact/Contact";

export const metadata: Metadata = {
  title: "Mukit Hossen - Contact | Get in Touch",
  description:
    "Get in touch with Mukit Hossen. Contact for freelance work, collaboration, or professional inquiries.",
};

export default function ContactPage() {
  return (
    <div>
      <Contact />
    </div>
  );
}
