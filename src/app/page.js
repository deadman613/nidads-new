import CareerPrograms from "@/components/homeSections/CareerPrograms";
import GallerySection from "@/components/homeSections/gallerySection";
import Hero8 from "@/components/homeSections/Hero8";
import Hero9 from "@/components/homeSections/Hero9";
import HomeSection1 from "@/components/homeSections/homeSection1";
import HomeSection2 from "@/components/homeSections/homeSection2";
import NewSection from "@/components/homeSections/placement";
import TechStackMarquee from "@/components/homeSections/TechStackMarquee";

import Videostest from "@/components/homeSections/videostest";
import CourseCardsSection from "@/components/homeSections/CourseCardsSection";


export default function Home() {
  return (
  <>
  <HomeSection1/>
  <TechStackMarquee/>
  <HomeSection2/>
    <NewSection/>
   <CourseCardsSection/>
    <CareerPrograms/>
  <GallerySection/>
  <Videostest/>

  <Hero9/>

 <Hero8/>
  </>
  );
}
