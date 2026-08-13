import { notFound } from "next/navigation";
import { getCourseBySlug, courses } from "@/data/courses";
import { buildMeta, buildCourseSchema, buildCourseBreadcrumbSchema } from "@/lib/seo";
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
    description: `${course.description} | ${course.duration} Data Science & Analytics program at NIDADS, Delhi. Enroll now for career-focused training with live projects and placement support.`,
    path: `/course/${course.slug}`,
    ogImage: course.image?.startsWith("http") ? course.image : undefined,
    keywords: [
      ...(course.topics || []),
      course.level,
      "data science course in Delhi",
      "data analytics course in Delhi",
      "data science courses",
      "data analytics courses",
      "business analytics",
      "big data analytics",
      "python for data science",
      "artificial intelligence and data science",
      "ai data science",
      "data science course for beginners",
      "data analytics course for beginners",
      "data science course with placement",
      "data analytics course with placement",
      "online data science course",
      "data science course with live projects",
      "data science and analytics for working professionals",
      "data science institute in Delhi",
      "data analytics institute in Delhi",
      "best data science course near me",
      "best data analytics course near me",
      "data analytics certification",
      "NIDADS",
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
  const breadcrumbSchema = buildCourseBreadcrumbSchema(course);

  return (
    <>
      {/* Product structured data for Google rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      {/* BreadcrumbList structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Interactive client component (tabs, enroll popup, etc.) */}
      <CourseDetailClient course={course} />
    </>
  );
}
