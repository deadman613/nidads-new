import styles from "./aboutSection1.module.css";
import Image from "next/image";
import Link from "next/link";

// Replace this file in public/uploads with the new hero photograph.
const heroImage = "/about/aboutsec.jpeg";

export default function Section1About() {
  return (
    <section className={styles.wrapper} aria-labelledby="about-hero-title">
      <Image
        src={heroImage}
        alt="Students learning data science and artificial intelligence at NIDADS"
        className={styles.backgroundImage}
        fill
        priority
      />
      <div className={styles.content}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            National Institute of Data Analytics &amp; Data Science
          </p>
          <h1 id="about-hero-title" className={styles.heading}>
            Shape Your
            <br />
            Future With Data
          </h1>
          <p className={styles.description}>
            Learn Data Analytics, Data Science, Artificial Intelligence, and
            Machine Learning through practical projects, expert guidance, and
            career-focused training in New Delhi.
          </p>
          <Link className={styles.cta} href="/course">
            Explore Our Courses <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
      <div className={styles.slideControl} aria-hidden="true">
        <span className={styles.arrow}>&lsaquo;</span>
        <span className={styles.slideNumber}>01</span>
        <span className={styles.slideLine} />
        <span className={styles.slideNumber}>01</span>
        <span className={styles.arrow}>&rsaquo;</span>
      </div>
    </section>
  );
}