import CareerPrograms from "@/components/homeSections/CareerPrograms";
import GallerySection from "@/components/homeSections/gallerySection";
import Hero8 from "@/components/homeSections/Hero8";
import Hero9 from "@/components/homeSections/Hero9";
import HomeSection1 from "@/components/homeSections/homeSection1";
import HomeSection2 from "@/components/homeSections/homeSection2";
import TrustedCompanies from "@/components/homeSections/TrustedCompanies";
import WhyLearnWithNidads from "@/components/homeSections/WhyLearnWithNidads";
import ExpertMentors from "@/components/homeSections/ExpertMentors";
import WhatYouWillLearn from "@/components/homeSections/WhatYouWillLearn";
import NewSection from "@/components/homeSections/placement";
import TechStackMarquee from "@/components/homeSections/TechStackMarquee";

import Videostest from "@/components/homeSections/videostest";
import CourseCardsSection from "@/components/homeSections/CourseCardsSection";
import ProjectComparison from "@/components/homeSections/ProjectComparison";
import PostGraduationProgram from "@/components/homeSections/PostGraduationProgram";
import CertificateSection from "@/components/homeSections/CertificateSection";
import FormEnd from "@/components/homeSections/formend.jsx";


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

export default function Home() {
  return (
  <>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
  />
  <HomeSection1/>
  <HomeSection2/>
  <TrustedCompanies/>
  <WhyLearnWithNidads/>
  <ExpertMentors />
  <WhatYouWillLearn/>
  <TechStackMarquee/>
  <CourseCardsSection/>
    <NewSection/>

    <CareerPrograms/>
    <ProjectComparison/>
    <CertificateSection/>
  <PostGraduationProgram/>
  <GallerySection/>
  <Videostest/>

  <Hero9/>
<FormEnd/>
 <Hero8/>
  </>
  );
}
