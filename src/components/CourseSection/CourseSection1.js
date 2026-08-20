"use client";
import Link from "next/link";
import styles from "./CourseSection1.module.css";

export default function CourseSection1() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <span className={styles.eyebrow}>DATA SCIENCE & AI</span>

          <h1 className={styles.heading}>
            Build Skills That
            <span> Companies Actually Hire For</span>
          </h1>

          {/* <p className={styles.description}>
            NIDADS delivers industry-aligned Data Science and AI programs focused on
            real projects, real tools, and real hiring outcomes — not just theory.
          </p> */}

          <div className={styles.metrics}>
            <div>
              <strong>10K+</strong>
              <span>Learners Trained</span>
            </div>
            <div>
              <strong>95%</strong>
              <span>Placement Rate</span>
            </div>
            <div>
              <strong>50+</strong>
              <span>Hiring Partners</span>
            </div>
          </div>

          <div className={styles.actions}>
            <Link href="#course-programs">
              <button className={styles.primaryBtn}>
                Explore Programs
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className={styles.right}>
          <img
            src="/teem photos.webp"
            alt="Instructor"
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
          />
        </div>

      </div>
    </section>
  );
}
