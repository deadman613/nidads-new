import Section1About from "@/components/AboutSection/section1about";
import AboutSection2 from "@/components/AboutSection/AboutSection2";
import AboutSection3 from "@/components/AboutSection/AboutSection3";
import FounderSection from "@/components/AboutSection/FounderSection";
import { buildMeta, buildLocalBusinessSchema } from "@/lib/seo";
import Expert from "../../components/homeSections/ExpertMentors"
import Gallery from "../../components/homeSections/gallerySection"
import MissionSection from "@/components/AboutSection/MissionSection"
import StatsSection from "@/components/AboutSection/StatsSection"
import Form from "../../components/homeSections/formend"
import "@/styles/blog.css";

export const metadata = buildMeta({
  title: "About NIDADS | Top Data Science & Data Analytics Institute in Delhi",
  description:
    "Learn about NIDADS — the best Data Science and Data Analytics institute in Delhi. Offering practical Data Science courses, Data Analytics courses, AI training, Python for Data Science, Business Analytics, and more with 97% placement support in New Delhi.",
  path: "/about",
  keywords: [
    "data science institute in Delhi",
    "data analytics institute in Delhi",
    "best data science course near me",
    "best data analytics course near me",
    "data science and data analytics",
    "python for data science",
    "artificial intelligence and data science",
    "business analytics",
    "data science course with placement",
    "data analytics course with placement",
    "data science and analytics for working professionals",
    "ai in data science",
    "about NIDADS",
    "data science training New Delhi",
    "data analyst course in Delhi",
  ],
});

const localBusinessSchema = buildLocalBusinessSchema();

export default function AboutPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Section1About />
      <AboutSection2 />
      <AboutSection3 />
      <FounderSection />
      <Expert />
      <Gallery />
      <StatsSection />
      <MissionSection />
      <Form />
    </main>
  );
}
