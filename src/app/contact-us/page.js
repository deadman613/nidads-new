import ContactSection from "@/components/ContactSection/ContactSection";
import { buildMeta } from "@/lib/seo";

export const metadata = buildMeta({
  title: "Contact Us | Enrol in Data Science & Analytics Courses in Delhi",
  description:
    "Contact NIDADS to enrol in the best Data Science, Data Analytics, AI, and Business Analytics courses in Delhi. Speak to our admissions team about Data Science course fees, placement support, and batch schedules. Located in Greater Kailash II, New Delhi.",
  path: "/contact-us",
  keywords: [
    "contact NIDADS",
    "data science admissions Delhi",
    "data analytics course admission",
    "data science course in Delhi enquiry",
    "data analyst course in Delhi admission",
    "best data science course near me contact",
    "data science institute in Delhi contact",
    "NIDADS enquiry",
    "AI course enrollment Delhi",
    "data science course with placement admission",
  ],
});


export default function ContactPage() {
  return (
    <main >
      <ContactSection />
    </main>
  );
}
