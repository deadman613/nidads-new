"use client";

import styles from "./WhatYouWillLearn.module.css";

const courses = [
  {
    number: "1",
    title: "Data Analysis & Visualization",
    description: "Master data analysis and data analytics — transform raw data into insights using Power BI, Tableau, and Excel dashboards.",
    icon: "",
    tools: ["Excel", "Power BI", "Tableau"],
  },
  {
    number: "2",
    title: "Python for Data Science",
    description: "Learn Python programming for Data Science from scratch — data wrangling, automation, and building real-world data science projects.",
    icon: "",
    tools: ["Pandas", "NumPy", "Matplotlib"],
  },
  {
    number: "3",
    title: "Machine Learning & AI in Data Science",
    description: "Build predictive models using Machine Learning and AI — core skills for every Data Science and Business Analytics role.",
    icon: "",
    tools: ["Regression", "Classification", "Clustering"],
  },
  {
    number: "4",
    title: "Artificial Intelligence & Data Science",
    description: "Apply AI in Data Science — build intelligent systems, NLP pipelines, and AI-driven analytics using modern tools.",
    icon: "",
    tools: ["NLP", "AI Tools", "Deep Learning"],
  },
  {
    number: "5",
    title: "SQL & Big Data Analytics",
    description: "Extract, manage, and analyse data from databases using SQL — a must-have skill for Data Analysts and Data Scientists.",
    icon: "",
    tools: ["Queries", "Joins", "Big Data"],
  },
  {
    number: "6",
    title: "Business Analytics & Live Projects",
    description: "Work on real business analytics case studies and live data science projects to build a portfolio that gets you hired in Delhi.",
    icon: "",
    tools: ["Live Projects", "Portfolio Building"],
  },
];

export default function WhatYouWillLearn() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            What You <span style={{ color: "#38b6ff" }}>Learn</span> in Our Data Science &amp; Analytics Courses
          </h2>
          <p className={styles.subtitle}>
            From Python for Data Science to Business Analytics, Big Data, and AI — master every skill needed for a Data Science or Data Analytics career in Delhi.
          </p>
        </div>

        <div className={styles.carousel}>
          <div className={styles.track}>
            {[...courses, ...courses].map((course, idx) => (
              <div
                key={`${course.number}-${idx}`}
                className={styles.card}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.number}>{course.number}</span>
                  <span className={styles.badge}>What you learn</span>
                </div>

                <h3 className={styles.cardTitle}>{course.title}</h3>
                <p className={styles.cardDescription}>{course.description}</p>

                <div className={styles.toolsSection}>
                  <span className={styles.toolsLabel}>Tools &amp; Concepts</span>
                  <div className={styles.toolsList}>
                    {course.tools.map((tool, i) => (
                      <span key={i} className={styles.toolTag}>{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}