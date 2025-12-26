import React from "react";
import styles from "./homeSection2.module.css";

const testimonials = [
  {
    name: "Aarav S.",
    role: "Data Analyst at FinEdge",
    text: "NIDADS gave me the practical skills and confidence to land my first analytics job. The hands-on projects and mentorship were game changers!"
  },
  {
    name: "Priya M.",
    role: "ML Engineer at HealthAI",
    text: "The curriculum is industry-focused and the instructors are top-notch. I went from zero to building real AI models in months."
  },
  {
    name: "Rohan T.",
    role: "Business Intelligence Developer",
    text: "The blend of theory and real-world case studies at NIDADS is unmatched. Highly recommend for anyone serious about data science."
  }
];

export default function TestimonialSection() {
  return (
    <section className={styles.testimonialSection}>
      <h2 className={styles.testimonialHeading}>What Our Learners Say</h2>
      <div className={styles.testimonialGrid}>
        {testimonials.map((t, i) => (
          <div className={styles.testimonialCard} key={i}>
            <p className={styles.testimonialText}>“{t.text}”</p>
            <div className={styles.testimonialMeta}>
              <span className={styles.testimonialName}>{t.name}</span>
              <span className={styles.testimonialRole}>{t.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
