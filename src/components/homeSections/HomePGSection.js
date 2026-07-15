"use client";
import styles from "./HomePGSection.module.css";
import PopupButton from "@/components/PopupButton";

export default function HomePGSection() {
  const benefits = [
    "UGC-Approved 2-Year PG Degree",
    "DU SOL or Amity University Online",
    "Advanced Generative AI & LLMs",
    "Senior Industry Mentorship",
    "Research Thesis / Dissertation",
    "Annual Tech Expedition",
    "AI for Social Good Projects",
    "96% Placement Rate",
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT – HIGHLIGHT CARD */}
        <div className={styles.highlightBlock}>
          <div className={styles.badge}>POST GRADUATION PROGRAMS</div>
          <div className={styles.mainCard}>
            <h3 className={styles.programTitle}>
              Post Graduation Programs in <span style={{color:"#38b6ff"}}>Artificial Intelligence</span>
            </h3>
            <p className={styles.subtitle}>
              Advance to Expert Level — Master&apos;s Degree Backed by Advanced AI Training
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.label}>Duration</span>
                <span className={styles.value}>2 Years</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Level</span>
                <span className={styles.value}>Postgraduate</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Placement Rate</span>
                <span className={styles.value}>96%+</span>
              </div>
            </div>

            <PopupButton
              className={styles.ctaButton}
              aria-label="Explore Post Graduation Programs"
            >
              Explore PG Programs
            </PopupButton>
          </div>
        </div>

        {/* RIGHT – BENEFITS */}
        <div className={styles.benefitsBlock}>
          <h3 className={styles.sectionTitle}>PG Program Highlights</h3>
          <ul className={styles.benefitsList}>
            {benefits.map((benefit, index) => (
              <li key={index} className={styles.benefitItem}>
                {benefit}
              </li>
            ))}
          </ul>

          <div className={styles.descriptionBox}>
            <p>
              Our 2-year Post Graduation Program in AI is built for professionals and graduates
              who want to go deeper. Earn a UGC-approved master&apos;s degree from DU SOL or Amity
              Online while mastering Generative AI, LLMs, and Reinforcement Learning. Weekly
              research excursions, an annual AI industry expedition to Bangalore or Hyderabad,
              and a publishable thesis set our PG students apart in every interview room.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
