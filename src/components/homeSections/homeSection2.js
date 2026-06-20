import React from "react";
import Link from "next/link";
import styles from "./homeSection2.module.css";
// background image instead of animated cubes

export default function HomeSection2() {
  return (
    <section className={styles.container}>
      <div className={styles.leftImagePlaceholder}>
        <img
          src="/teem photos.png"
          alt="Python programming"
          className={styles.leftImage}
          width={480}
          height={480}
        />
      </div>

      <div className={styles.rightContent}>
        <h1 className={styles.heading}>
          <span style={{ color: "white" }}>Empowering</span>
          <br />
          <span style={{color:"#38b6ff"}}>Data Science</span> Careers
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
          <Link href="/contact-us">
            <button className={styles.exploreBtn}>
              Book My Free Counseling Call
            </button>
          </Link>
          <Link href="/course#course-programs">
            <button className={styles.careerBtn}>
              Help Me Choose the Right Course
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
