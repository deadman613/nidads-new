"use client";
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
            NIDAD delivers industry-aligned Data Science and AI programs focused on
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
            <button className={styles.primaryBtn}>
              Explore Programs
            </button>
            <button className={styles.secondaryBtn}>
              Download Curriculum
            </button>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className={styles.right}>
          <div className={styles.card}>
            <img
              src="Shagun4-removebg-preview (1).png"
              alt="Instructor"
            />

            <div className={styles.cardInfo}>
              <h4>Ms. Shagun</h4>
              <p>Lead Instructor · Data Science</p>
              <span>15+ Years Industry Experience</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
