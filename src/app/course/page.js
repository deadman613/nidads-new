
import CourseSection1 from "@/components/CourseSection/CourseSection1";
import CourseSection2 from "@/components/CourseSection/CourseSection2";
import CourseSection3 from "@/components/CourseSection/CourseSection3";
import RecommendedCoursesSection from "@/components/CourseSection/RecommendedCoursesSection";
import WHATYOU from "../../components/homeSections/WhatYouWillLearn";
import ExpertMentors from "../../components/homeSections/ExpertMentors";
import Hero from "../../components/homeSections/Hero9"
import  Formend from "../../components/homeSections/formend";
import Hero8 from "../../components/homeSections/Hero8";
import WhyLearnWithNidads from "../../components/homeSections/WhyLearnWithNidads";
import ProjectShowcase from "../../components/homeSections/ProjectShowcase";
import ProjectComparison from "../../components/homeSections/ProjectComparison";
import Gallery from "../../components/homeSections/gallerySection";
import { buildMeta } from "@/lib/seo";

const _courseBaseMeta = buildMeta({
  title: "Data Science & data Analytics Course [NIDADS]",
  description:
    "Explore NIDADS's industry-focused Data Science, Data Analytics, Business Analytics, Python, AI, and Machine Learning courses in Delhi. Choose from Diploma, Advanced Certification, and Certificate programs — all with placement support and live projects.",
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


export default function CoursePage() {
  return (
    <main style={{ background: "#090d15", paddingTop: 40 }}>
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
