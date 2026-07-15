"use client";
import styles from "./PostGraduationProgram.module.css";
import PopupButton from "@/components/PopupButton";

export default function DegreePrograms() {
  const benefits = [
    "UGC-Approved 3-Year Degree",
    "DU SOL or Amity University Online",
    "300+ Hours of AI Specialization",
    "Industry Expert Faculty",
    "Weekly Learning Trips",
    "Annual Business Expedition",
    "Social Impact Projects",
    "94% Placement Rate",
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT – HIGHLIGHT CARD */}
        <div className={styles.highlightBlock}>
          <div className={styles.badge}>DEGREE PROGRAMS</div>
          <div className={styles.mainCard}>
            <h3 className={styles.programTitle}>
              Degree Programs in <span style={{color:"#38b6ff"}}>Artificial Intelligence</span>
            </h3>
            <p className={styles.subtitle}>
              Earn a UGC-Approved University Degree Backed by Expert AI Training
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.label}>Duration</span>
                <span className={styles.value}>3 Years</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Level</span>
                <span className={styles.value}>Undergraduate</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Placement Rate</span>
                <span className={styles.value}>94%+</span>
              </div>
            </div>

            <PopupButton
              className={styles.ctaButton}
              aria-label="Explore Degree Programs"
            >
              Explore Degree Programs
            </PopupButton>
          </div>
        </div>

        {/* RIGHT – BENEFITS */}
        <div className={styles.benefitsBlock}>
          <h3 className={styles.sectionTitle}>Program Highlights</h3>
          <ul className={styles.benefitsList}>
            {benefits.map((benefit, index) => (
              <li key={index} className={styles.benefitItem}>
                {benefit}
              </li>
            ))}
          </ul>

          <div className={styles.descriptionBox}>
            <p>
              Our 3-year Degree Program in Artificial Intelligence combines a government-recognised
              university degree from DU SOL or Amity Online with 300+ hours of exclusive NIDADS AI
              specialization. Weekly learning trips, annual out-of-station business expeditions,
              social impact projects, and vibrant student clubs make this a complete college
              experience — not just a course.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
