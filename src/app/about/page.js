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
  title: "About Us | Data Science & Analytics Institute",
  description:
    "Meet the team behind our Data Science & Data Analytics Course. Learn our mission, mentors, and proven track record of student success worldwide.",
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

const breadcrumbSchema = {
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home Page",
      "item": "https://www.nidads.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "About Page",
      "item": "https://www.nidads.com/about"
    }
  ]
};

const collegeOrUniversitySchema = {
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  "name": "National institute of data analytics and data science",
  "alternateName": "nidads",
  "url": "https://www.nidads.com/",
  "logo": "https://www.nidads.com/Nidads-2.webp",
  "sameAs": [
    "https://www.instagram.com/nidads_official/",
    "https://in.linkedin.com/in/national-institute-of-data-analytics-and-data-science-28b709381"
  ]
};

const productSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "National institute of data analytics and data science",
  "image": "https://www.nidads.com/Nidads-2.webp",
  "description": "Learn Data Analytics, Data Science, Artificial Intelligence, and Machine Learning through practical projects, expert guidance, and career-focused training in New Delhi.",
  "brand": {
    "@type": "Brand",
    "name": "nidads"
  },
  "sku": "About",
  "offers": {
    "@type": "AggregateOffer",
    "url": "",
    "priceCurrency": "",
    "lowPrice": ""
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "1032"
  }
};

export default function AboutPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collegeOrUniversitySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
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
