"use client";

import styles from "./WhatYouWillLearn.module.css";
import { useRef, useEffect, useState } from "react";

const courses = [
  {
    number: "1",
    title: "Data Analysis & Visualization",
    description: "Analyze raw data and transform it into meaningful insights using charts, dashboards, and reports.",
    icon: "",
    tools: ["Excel", "Power BI", "Tableau"],
  },
  {
    number: "2",
    title: "Python for Data Science",
    description: "Learn Python from scratch and use it for data analysis, automation, and building real-world projects.",
    icon: "",
    tools: ["Pandas", "NumPy", "Matplotlib"],
  },
  {
    number: "3",
    title: "Machine Learning",
    description: "Build predictive models using machine learning algorithms to solve real business problems.",
    icon: "",
    tools: ["Regression", "Classification", "Clustering"],
  },
  {
    number: "4",
    title: "Artificial Intelligence (AI)",
    description: "Understand AI concepts and build intelligent systems using real datasets and modern tools.",
    icon: "",
    tools: ["NLP", "AI Tools", "Automation"],
  },
  {
    number: "5",
    title: "SQL & Data Management",
    description: "Learn how to extract, manage, and manipulate data from databases using SQL.",
    icon: "",
    tools: ["Queries", "Joins", "Data Handling"],
  },
  {
    number: "6",
    title: "Business & Real-World Case Studies",
    description: "Work on real-world projects and case studies to gain practical industry experience.",
    icon: "",
    tools: ["Live Projects", "Portfolio Building"],
  },
];

export default function WhatYouWillLearn() {
  const carouselRef = useRef(null);
  const [isAutoScroll, setIsAutoScroll] = useState(true);

  useEffect(() => {
    if (!isAutoScroll) return;

    const interval = setInterval(() => {
      if (carouselRef.current) {
        const container = carouselRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = 0;
        } else {
          container.scrollBy({
            left: 310,
            behavior: "smooth",
          });
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isAutoScroll]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>What will You <span style={{color:"#38b6ff"}}>Learn</span></h2>
          <p className={styles.subtitle}>
            Master the in-demand skills to become a Data Science & Analytics with AI professional.
          </p>
        </div>

        <div className={styles.carousel} ref={carouselRef}>
          {[...courses, ...courses].map((course, idx) => (
            <div key={`${course.number}-${idx}`} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.number}>{course.number}</span>
                <span className={styles.badge}>What you learn</span>
              </div>
              
              <h3 className={styles.cardTitle}>{course.title}</h3>
              <p className={styles.cardDescription}>{course.description}</p>
              
              <div className={styles.toolsSection}>
                <span className={styles.toolsLabel}>Tools & Concepts</span>
                <div className={styles.toolsList}>
                  {course.tools.map((tool, idx) => (
                    <span key={idx} className={styles.toolTag}>{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
