import AboutSection1 from "@/components/AboutSection/AboutSection1";
import AboutSection2 from "@/components/AboutSection/AboutSection2";
import { buildMeta, buildLocalBusinessSchema } from "@/lib/seo";
import "@/styles/blog.css";

export const metadata = buildMeta({
  title: "About Us",
  description:
    "Learn about NIDADS — National Institute of Data Analytics & Data Science. Based in New Delhi, we offer career-focused programs in Data Science, Data Analytics, and AI with real mentors and real outcomes.",
  path: "/about",
  keywords: ["about NIDADS", "data science institute Delhi", "AI training institute", "NIDADS about"],
});

const localBusinessSchema = buildLocalBusinessSchema();

export default function AboutPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <AboutSection1 />
      <AboutSection2 />
    </main>
  );
}
