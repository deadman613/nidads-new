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
import CourseComparison from "@/components/homeSections/CourseComparison";
import PostGraduationProgram from "@/components/homeSections/PostGraduationProgram";


export default function Home() {
  return (
  <>
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
<CourseComparison/>
  <PostGraduationProgram/>
  <GallerySection/>
  <Videostest/>

  <Hero9/>

 <Hero8/>
  </>
  );
}
