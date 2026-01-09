
// import "@/styles/blog.css";

import CourseSection1 from "@/components/CourseSection/CourseSection1";
import CourseSection2 from "@/components/CourseSection/CourseSection2";
import CourseSection3 from "@/components/CourseSection/CourseSection3";

export const metadata = {
  title: "Course",
};

export default function CoursePage() {
  return (
    <main style={{ background: '#090d15' }}>
      <CourseSection1 />
      <CourseSection2 />
      {/* <CourseSection3 /> */}
      {/* <Hero9 /> */}
    </main>
  );
}
