import { notFound } from "next/navigation";
import { getCourseBySlug, courses } from "@/data/courses";
import { buildMeta, buildCourseSchema } from "@/lib/seo";
import CourseDetailClient from "./CourseDetailClient";

/**
 * Pre-generate all course pages at build time for maximum SEO performance.
 * When a new course is added to courses.js it gets its own static page on next deploy.
 */
export async function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

/**
 * Per-course server-side metadata — title, description, OG image, canonical URL.
 * Google can now read proper titles/descriptions for every course page.
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return { title: "Course Not Found" };
  }

  return buildMeta({
    title: course.title,
    description: `${course.description} | ${course.duration} program at NIDADS. Enroll now for career-focused Data Science & AI training.`,
    path: `/course/${course.slug}`,
    ogImage: course.image?.startsWith("http") ? course.image : undefined,
    keywords: [
      ...(course.topics || []),
      course.level,
      "data science course",
      "AI training",
      "NIDADS",
      "Delhi",
    ],
  });
}

export default async function CourseDetailPage({ params }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const courseSchema = buildCourseSchema(course);

  return (
    <>
      {/* Course structured data for Google rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      {/* Interactive client component (tabs, enroll popup, etc.) */}
      <CourseDetailClient course={course} />
    </>
  );
}
