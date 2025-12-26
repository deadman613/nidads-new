import React from "react";
import styles from "./homeSection2.module.css";
import CubesBackground from "@/components/reactBits/CubesBackground";

export default function HomeSection2() {
  return (
    <section className={styles.container}>
      <div className={styles.leftImagePlaceholder}>
        <CubesBackground />
      </div>

      <div className={styles.rightContent}>
        <h1 className={styles.heading}>
          <span style={{color:"white"}}>Empowering</span> Data Science Careers
        </h1>

        <h2 className={styles.subheading} style={{textAlign:"justify"
        }}>
          From foundational statistics to advanced AI, NIDADS offers hands-on
          programs in Data Science, Machine Learning, Data Analytics, and AI
          Engineering. We nurture talent and transform aspiring analysts into
          industry leaders.
        </h2>

        <ul className={styles.featureList}>
          <li>Why 25,000+ Learners Chose Us</li>
        </ul>

        <div className={styles.courseActions}>
          <button className={styles.exploreBtn}>
            Book My Free Counseling Call
          </button>
          <button className={styles.careerBtn}>
            Help Me Choose the Right Course
          </button>
        </div>
      </div>
    </section>
  );
}
