import ContactSection from "@/components/ContactSection/ContactSection";
import { buildMeta } from "@/lib/seo";

export const metadata = buildMeta({
  title: "Contact Us",
  description:
    "Get in touch with NIDADS — National Institute of Data Analytics & Data Science. Speak to our admissions team about courses, scholarships, and career support. Located in Greater Kailash II, New Delhi.",
  path: "/contact-us",
  keywords: ["contact NIDADS", "data science admissions Delhi", "NIDADS enquiry", "AI course enrollment"],
});


export default function ContactPage() {
  return (
    <main >
      <ContactSection />
    </main>
  );
}
