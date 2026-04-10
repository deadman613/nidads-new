"use client";

import styles from "./WhyLearnWithNidads.module.css";

const features = [
  {
    title: "Hands-On AI Projects",
    description: "Build real-world AI applications with cutting-edge tools and frameworks.",
  },
  {
    title: "Machine Learning Mastery",
    description: "Master algorithms, models, and techniques for predictive analytics.",
  },
  {
    title: "Data Science Tools",
    description: "Learn industry-standard tools like Python, TensorFlow, and Pandas.",
  },
  {
    title: "Real-World Case Studies",
    description: "Work on actual data scenarios from various industries and domains.",
  },
  {
    title: "Structured Learning Paths",
    description: "Follow curated curricula with milestones and skill assessments.",
  },
  {
    title: "1:1 Expert Mentorship",
    description: "Personal guidance from experienced AI researchers and practitioners.",
  },
  {
    title: "Ethical AI Practices",
    description: "Understand responsible AI development, bias mitigation, and ethics.",
  },
  {
    title: "AI Innovation Mindset",
    description: "Cultivate the creativity and problem-solving skills for AI innovation.",
  },
  {
    title: "Industry-Focused Learning",
    description: "Learn how leading tech companies and researchers apply AI in practice.",
  },
];

export default function WhyLearnWithNidads() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Why Learn with NIDADS</h2>
          <p className={styles.subtitle}>
            Cutting-Edge AI and Data Science Education
          </p>
          <p className={styles.description}>
            Get trained with industry-standard AI tools, real datasets, and expert mentorship to become a professional data scientist.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.card}>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
