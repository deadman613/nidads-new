import { courses } from "@/data/courses";
import styles from "./ProjectComparison.module.css";

const COURSE_CARDS = courses.slice(0, 4).map((course) => ({
  title: course.title,
  subtitle: `${course.duration} • ${course.mode}`,
  description: course.description,
  items: [
    `Level: ${course.level}`,
    `Category: ${course.category.replace("-", " ")}`,
    `Price: ${course.price}`,
    `${course.rating}★ rating • ${course.students}+ students`,
  ],
}));

export default function ProjectComparison() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.themeTag}>Project One Theme</span>
          <h2>Course Comparison</h2>
          <p>
            Compare our flagship course offerings and find the learning path that
            best fits your career goals.
          </p>
        </div>

        <div className={styles.grid}>
          {COURSE_CARDS.map((course) => (
            <article key={course.title} className={styles.card}>
              <div className={styles.cardHead}>
                <h3>{course.title}</h3>
                <p>{course.subtitle}</p>
              </div>
              <p className={styles.cardDescription}>{course.description}</p>
              <ul className={styles.features}>
                {course.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
