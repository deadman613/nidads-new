import Link from "next/link";
import { courses } from "@/data/courses";
import styles from "./RecommendedCoursesSection.module.css";

const recommendedCourses = [...courses]
  .sort((left, right) => {
    if (right.rating !== left.rating) {
      return right.rating - left.rating;
    }

    return right.students - left.students;
  })
  .slice(0, 4);

export default function RecommendedCoursesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>RECOMMEND COURSES</span>
          <h2 className={styles.title}>Recommended courses</h2>
          <p className={styles.subtitle}>
            Explore four high-demand programs picked from our most popular AI
            and data science tracks.
          </p>
        </div>

        <div className={styles.grid}>
          {recommendedCourses.map((course) => (
            <Link
              key={course.id}
              href={`/course/${course.slug}`}
              className={styles.card}
            >
              <div className={styles.imageWrap}>
                <img src={course.image} alt={course.title} className={styles.image} />
                <span className={styles.badge}>{course.level}</span>
              </div>

              <div className={styles.body}>
                <div className={styles.metaRow}>
                  <span>⭐ {course.rating}</span>
                  <span>{course.students.toLocaleString()} learners</span>
                </div>

                <h3 className={styles.cardTitle}>{course.title}</h3>
                <p className={styles.description}>{course.description}</p>

                <div className={styles.footer}>
                  <span className={styles.duration}>{course.duration}</span>
                  <span className={styles.cta}>View details</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}