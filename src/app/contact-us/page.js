import ContactSection from "@/components/ContactSection/ContactSection";
import { buildMeta } from "@/lib/seo";

export const metadata = buildMeta({
  title: "Contact Our Data Science & Data Analytics Training Experts",
  description:
    "Have questions about our Data Science and Data Analytics Course? Contact our admissions team for a free demo, fees, batch timings & enrollment help.",
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
      "name": "Contact Us Page",
      "item": "https://www.nidads.com/contact-us"
    }
  ]
};

const personSchema = {
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": "Nidads",
  "url": "https://www.nidads.com/contact-us",
  "image": "https://www.nidads.com/Nidads-2.webp",
  "sameAs": [
    "https://www.instagram.com/nidads_official/",
    "https://in.linkedin.com/in/national-institute-of-data-analytics-and-data-science-28b709381"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Data analytics and data science"
  }
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Nidads",
  "image": "https://www.nidads.com/Nidads-2.webp",
  "@id": "https://maps.app.goo.gl/jKRJLQA2zwRaeJMu9",
  "url": "",
  "telephone": "919205436796",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Savitri Cinema, Space time building, Greater Kailash II",
    "addressLocality": "New Delhi",
    "postalCode": "110048",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.5415141,
    "longitude": 77.240201
  },
  "sameAs": [
    "https://www.instagram.com/nidads_official/",
    "https://in.linkedin.com/in/national-institute-of-data-analytics-and-data-science-28b709381"
  ]
};

export default function ContactPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collegeOrUniversitySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />
      <ContactSection />
    </main>
  );
}
