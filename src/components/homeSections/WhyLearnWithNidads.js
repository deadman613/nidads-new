"use client";

import styles from "./WhyLearnWithNidads.module.css";

const features = [
  {
    title: "Data Science Course with Live Projects",
    description: "Build real-world Data Science and AI applications — the same way top companies use data to make decisions.",
  },
  {
    title: "Python for Data Science & Analytics",
    description: "Master Python programming for Data Science: Pandas, NumPy, Matplotlib, and Scikit-learn from scratch.",
  },
  {
    title: "Business Analytics & Big Data",
    description: "Learn Business Analytics and Big Data Analytics with Power BI, SQL, Tableau, and real business datasets.",
  },
  {
    title: "Data Science Course for Beginners",
    description: "Structured learning paths for beginners and working professionals — no prior coding experience required.",
  },
  {
    title: "Data Analytics Certification",
    description: "Earn an industry-recognised Data Analytics Certification backed by real projects, mentorship, and placement support.",
  },
  {
    title: "Data Science & Analytics for Working Professionals",
    description: "Flexible online and offline batches designed for working professionals looking to upskill in AI in Data Science.",
  },
  {
    title: "Artificial Intelligence & Data Science",
    description: "Understand AI in Data Science — NLP, deep learning, model building, and AI-driven analytics for real industry use cases.",
  },
  {
    title: "Data Science Course with Placement",
    description: "Dedicated placement cell with mock interviews, resume reviews, and company connections for Data Science and Analytics roles.",
  },
  {
    title: "Best Data Science Institute in Delhi",
    description: "NIDADS is rated among the best data science and data analytics institutes in Delhi — near you, with online options too.",
  },
];

export default function WhyLearnWithNidads() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Why Learn <span style={{color:"#38b6ff"}}>Data Science &amp; Analytics</span> with <span style={{color:"#38b6ff"}}>NIDADS</span></h2>
          <p className={styles.subtitle}>
            Delhi&apos;s Top Data Science &amp; Data Analytics Course — Online &amp; Offline
          </p>
          <p className={styles.description}>
            Join the best data science institute in Delhi for practical, career-ready training in Data Science, Data Analytics, Python, Business Analytics, Big Data, and AI — with placement support and live projects.
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
