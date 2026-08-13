import Section1About from "@/components/AboutSection/section1about";
import AboutSection2 from "@/components/AboutSection/AboutSection2";
import AboutSection3 from "@/components/AboutSection/AboutSection3";
import FounderSection from "@/components/AboutSection/FounderSection";
import { buildMeta, buildLocalBusinessSchema } from "@/lib/seo";
import Expert from "../../components/homeSections/ExpertMentors"
import Gallery from "../../components/homeSections/gallerySection"
import MissionSection from "@/components/AboutSection/MissionSection"
import "@/styles/blog.css";

export const metadata = buildMeta({
  title: "About NIDADS | Data Science and AI Institute in New Delhi",
  description:
    "Discover NIDADS, a career-focused data science and AI institute in New Delhi offering practical programs in Data Analytics, Data Science, Artificial Intelligence, and Machine Learning.",
  path: "/about",
  keywords: ["about NIDADS", "data science institute New Delhi", "AI training institute Delhi", "data analytics courses", "NIDADS about"],
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
      <MissionSection />
    </main>
  );
}
