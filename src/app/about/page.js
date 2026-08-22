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
    "best institute for data science and data analytics course",
    "best data science training institute",
    "Google certified data analytics partner",
    "AI and Data Science Institute",
    "Data Science Career Development",
    "Best Data Science Institute",
    "Best Data Analytics Institute",
    "Data Science Institute with Placement",
    "Data Analytics Institute with Placement",
    "Job-Oriented Data Science Institute",
    "Industry-Focused Data Science Training",
    "Professional Data Analytics Training",
    "Data Science Certification Program",
    "Data Analytics Certification Program",
    "Data Science Training with Internship",
    "Data Analytics Training with Internship",
    "Advanced Data Science Program",
    "Data Analytics Professional Course",
    "Professional Data Science Training",
    "data science and data analytics institute near me",
    "best data science institute near me",
    "best data analytics institute near me",
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
          NIDADS is the <strong>best institute for data science and data analytics course</strong> in Delhi.
          We are a leading <strong>data science and data analytics institute</strong> and a
          <strong> Google certified data analytics partner</strong> committed to
          <strong> Data Science Career Development</strong> for students and working professionals.
        </p>
        <p>
          As the <strong>Best Data Science Institute</strong> and
          <strong> Best Data Analytics Institute</strong> in Delhi, NIDADS offers a
          <strong> Data Science Institute with Placement</strong> and
          <strong> Data Analytics Institute with Placement</strong> guarantee.
          Our <strong>Job-Oriented Data Science Institute</strong> programs are
          <strong> Industry-Focused Data Science Training</strong> designed to make
          you career-ready from day one.
        </p>
        <p>
          We offer a comprehensive <strong>Data Science Certification Program</strong> and
          <strong> Data Analytics Certification Program</strong> with
          <strong> Professional Data Analytics Training</strong> and
          <strong> Professional Data Science Training</strong>. Enroll in our
          <strong> Advanced Data Science Program</strong> or
          <strong> Data Analytics Professional Course</strong> with internship support.
        </p>
        <p>
          Our <strong>Data Science Training with Internship</strong> and
          <strong> Data Analytics Training with Internship</strong> programs give you
          real-world experience. Find the <strong>best data science institute near me</strong> or
          <strong> best data analytics institute near me</strong> — NIDADS is your
          <strong> data science and data analytics institute near me</strong> in
          Greater Kailash, New Delhi.
        </p>
        <p>
          Learn more <strong>about NIDADS</strong> — the
          <strong> best data science training institute</strong> offering
          <strong> AI and Data Science Institute</strong> programs,
          <strong> data science and analytics for working professionals</strong>, and
          expert-led <strong>artificial intelligence and data science</strong> courses
          at our <strong>data science institute in Delhi</strong> and
          <strong> data analytics institute in Delhi</strong>.
        </p>
      </section>
    </main>
  );
}
