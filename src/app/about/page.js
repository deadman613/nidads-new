import Section1About from "@/components/AboutSection/section1about";
import AboutSection2 from "@/components/AboutSection/AboutSection2";
import AboutSection3 from "@/components/AboutSection/AboutSection3";
import FounderSection from "@/components/AboutSection/FounderSection";
import { buildMeta, buildLocalBusinessSchema } from "@/lib/seo";
import Expert from "../../components/homeSections/ExpertMentors"
import Gallery from "../../components/homeSections/gallerySection"
import MissionSection from "@/components/AboutSection/MissionSection"
import StatsSection from "@/components/AboutSection/StatsSection"
import CertificationsSection from "@/components/AboutSection/CertificationsSection"
import Form from "../../components/homeSections/formend"
import "@/styles/blog.css";

export const metadata = buildMeta({
  title: "About Us | Best Data Science & Analytics Institute in Delhi",
  description:
    "Meet the team behind our Data Science & Data Analytics Course. Learn our mission, mentors, and proven track record of student success worldwide.",
  path: "/about",
  keywords: [
    "about nidads",
    "data science and data analytics institute",
    "Best institute for data science and data analytics course",
    "best data science training institute",
    "Best Data Science Institute",
    "Best Data Analytics Institute",
    "Data Science Institute with Placement",
    "Data Analytics Institute with Placement",
    "Data Science Certification Program",
    "Data Analytics Certification Program",
    "Advanced Data Science Program",
    "best data science institute near me",
    "best data analytics institute near me",
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
      <CertificationsSection />
      <Gallery />
      <StatsSection />
      <MissionSection />
      <Form />
      {/* SEO: visually hidden keyword-rich section for on-page signal */}
      <section
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: 0,
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0,0,0,0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
      >
        <h2>About NIDADS — Best Data Science and Data Analytics Institute</h2>
        <p>
          Learn <strong>about nidads</strong>, a leading
          <strong> data science and data analytics institute</strong> known as the
          <strong> Best institute for data science and data analytics course</strong>
          for learners building strong technical and placement-focused careers.
        </p>
        <p>
          As the <strong>Best Data Science Institute</strong> and
          <strong> Best Data Analytics Institute</strong>, NIDADS is recognized as a
          <strong> best data science training institute</strong> offering a
          <strong> Data Science Institute with Placement</strong> and a
          <strong> Data Analytics Institute with Placement</strong> pathway for
          students who want structured guidance and hiring support.
        </p>
        <p>
          We offer a comprehensive <strong>Data Science Certification Program</strong> and
          <strong> Data Analytics Certification Program</strong> for learners who want
          applied projects, expert mentorship, and recognized credentials. You can also
          enroll in our <strong>Advanced Data Science Program</strong> to deepen your
          machine learning and analytics skills.
        </p>
        <p>
          If you are searching for the <strong>best data science institute near me</strong>
          or the <strong>best data analytics institute near me</strong>, NIDADS presents
          an industry-aligned institute model built around outcomes, mentoring, and
          placement support in Delhi.
        </p>
      </section>
    </main>
  );
}
