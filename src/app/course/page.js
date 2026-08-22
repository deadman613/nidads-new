
import CourseSection1 from "@/components/CourseSection/CourseSection1";
import CourseSection2 from "@/components/CourseSection/CourseSection2";
import CourseSection3 from "@/components/CourseSection/CourseSection3";
import RecommendedCoursesSection from "@/components/CourseSection/RecommendedCoursesSection";
import WHATYOU from "../../components/homeSections/WhatYouWillLearn";
import ExpertMentors from "../../components/homeSections/ExpertMentors";
import Hero from "../../components/homeSections/Hero9"
import Formend from "../../components/homeSections/formend";
import Hero8 from "../../components/homeSections/Hero8";
import WhyLearnWithNidads from "../../components/homeSections/WhyLearnWithNidads";
import ProjectShowcase from "../../components/homeSections/ProjectShowcase";
import ProjectComparison from "../../components/homeSections/ProjectComparison";
import Gallery from "../../components/homeSections/gallerySection";
import { buildMeta } from "@/lib/seo";
import { courses } from "@/data/courses";

const _courseBaseMeta = buildMeta({
  title: "Data Science and Data Analytics Course | Placement",
  description:
    "Join our Data Science & Data Analytics Course with live training, real projects, certification & 100% placement support. Enroll today!",
  path: "/course",
  keywords: [
    "data science courses",
    "data analytics courses",
    "business analytics",
    "big data analytics",
    "python for data science",
    "artificial intelligence and data science",
    "data science course for beginners",
    "data analytics course for beginners",
    "data science course with placement",
    "data analytics course with placement",
    "online data science course",
    "online data analytics course",
    "data science course with live projects",
    "data science and analytics for working professionals",
    "data science course in Delhi",
    "data analyst course in Delhi",
    "data analytics certification",
    "best data science course near me",
    "best data analytics course near me",
    "NIDADS courses",
    "diploma in data science",
    "machine learning course Delhi",
  ],
});

export const metadata = {
  ..._courseBaseMeta,
  title: {
    absolute: "Data Science & data Analytics Course [NIDADS]",
  },
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
      "name": "Courses",
      "item": "https://www.nidads.com/course"
    }
  ]
};

// ItemList schema — lists all courses for Google Rich Results
const courseListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Data Science & Data Analytics Courses at NIDADS",
  "description": "Browse all Data Science, Data Analytics, AI and Business Analytics courses offered by NIDADS in Delhi with placement support.",
  "url": "https://www.nidads.com/course",
  "numberOfItems": courses.length,
  "itemListElement": courses.map((course, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Course",
      "name": course.title,
      "description": course.description,
      "url": `https://www.nidads.com/course/${course.slug}`,
      "image": `https://www.nidads.com${course.image}`,
      "provider": {
        "@type": "EducationalOrganization",
        "name": "National Institute of Data Analytics & Data Science",
        "alternateName": "NIDADS",
        "url": "https://www.nidads.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Ground Floor, Savitri Cinema Complex, Greater Kailash II",
          "addressLocality": "New Delhi",
          "addressRegion": "DL",
          "postalCode": "110048",
          "addressCountry": "IN"
        }
      },
      "courseMode": course.mode || "Blended",
      "timeRequired": course.duration,
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "Blended",
        "courseWorkload": course.duration,
        "instructor": course.instructor ? {
          "@type": "Person",
          "name": course.instructor.name,
          "jobTitle": course.instructor.title
        } : undefined
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": course.rating || "4.8",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": course.students || "400"
      }
    }
  }))
};

// Standalone Course schema for the flagship program
const flagshipCourseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Data Science & Data Analytics Course",
  "description": "Join NIDADS's comprehensive Data Science & Data Analytics Course with live training, real-world projects, industry certification and 100% placement support. Covers Python, Machine Learning, SQL, Power BI, AI and more.",
  "url": "https://www.nidads.com/course",
  "image": "https://www.nidads.com/Nidads-2.webp",
  "provider": {
    "@type": "EducationalOrganization",
    "name": "National Institute of Data Analytics & Data Science",
    "alternateName": "NIDADS",
    "url": "https://www.nidads.com",
    "logo": "https://www.nidads.com/Nidads-2.webp",
    "telephone": "+919205436796",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ground Floor, Savitri Cinema Complex, Greater Kailash II",
      "addressLocality": "New Delhi",
      "addressRegion": "DL",
      "postalCode": "110048",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.instagram.com/nidads_official/",
      "https://www.linkedin.com/in/national-institute-of-data-analytics-and-data-science-28b709381/"
    ]
  },
  "educationalLevel": "Beginner to Advanced",
  "teaches": [
    "Python for Data Science",
    "Machine Learning",
    "Deep Learning",
    "SQL & NoSQL Databases",
    "Power BI & Tableau",
    "Artificial Intelligence",
    "Data Analytics",
    "Big Data",
    "Business Analytics"
  ],
  "courseMode": "Blended",
  "availableLanguage": "English",
  "inLanguage": "en",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "Blended",
    "courseSchedule": {
      "@type": "Schedule",
      "repeatFrequency": "Monthly",
      "repeatCount": 12
    },
    "location": {
      "@type": "Place",
      "name": "NIDADS — Greater Kailash II",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ground Floor, Savitri Cinema Complex, Greater Kailash II",
        "addressLocality": "New Delhi",
        "postalCode": "110048",
        "addressCountry": "IN"
      }
    }
  },
  "offers": {
    "@type": "Offer",
    "category": "Paid",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "url": "https://www.nidads.com/course"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "1043"
  }
};

export default function CoursePage() {
  return (
    <main style={{ background: "#090d15", paddingTop: 40 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(flagshipCourseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseListSchema) }} />
      <CourseSection1 />
      <CourseSection2 />
      <RecommendedCoursesSection />
      <WHATYOU />
      <ExpertMentors />
      <WhyLearnWithNidads />
      <ProjectComparison />
      <ProjectShowcase />
      <Gallery />
      <Hero />
      <Formend />
      <Hero8 />
      {/* <CourseSection3 /> */}
      {/* <Hero9 /> */}
    </main>
  );
}
