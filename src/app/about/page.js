import AboutSection1 from "@/components/AboutSection/AboutSection1";
import AboutSection2 from "@/components/AboutSection/AboutSection2";
import "@/styles/blog.css";

export const metadata = {
  title: "About",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "National Institute of Data Analytics & Data Science",
  "image": "https://www.nidads.com/Nidads-2.webp",
  "@id": "",
  "url": "https://www.nidads.com/",
  "telephone": "+91 92054 36796",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ground Floor, Savitri Cinema Complex, Block E, Greater Kailash II, Greater Kailash, New Delhi, Delhi 110048",
    "addressLocality": "south delhi",
    "postalCode": "110048",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.54175912472231,
    "longitude": 77.24015808075747
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "08:00",
    "closes": "20:00"
  },
  "sameAs": "https://www.instagram.com/nidads_official//"
};

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
