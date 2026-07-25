
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

export const metadata = buildMeta({
  title: "Courses",
  description:
    "Explore NIDADS's industry-focused Data Science, Data Analytics, and AI courses. Choose from Diploma, Advanced Certification, and Certificate programs with placement support.",
  path: "/course",
  keywords: [
    "data science course Delhi",
    "AI course India",
    "data analytics course",
    "NIDADS courses",
    "diploma in data science",
    "machine learning course Delhi",
  ],
});


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
