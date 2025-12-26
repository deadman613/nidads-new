import React from "react";
import styles from "./homeSection2.module.css";

const stats = [
  { label: "98% project completion" },
  { label: "Global cohorts in 12 cities" },
  { label: "Mentors from product teams" }
];

const testimonials = [
  {
    name: "Ananya Mehra",
    role: "Product Designer, Berlin",
    badge: "Career switch",
    avatar: "A",
    text: "I walked into NIDADS with imposter syndrome and left with a portfolio that finally felt like me. The mentor critiques were sharp, actionable, and kind.",
    stat: "Hired in 6 weeks",
    pill: "Cohort 2024"
  },
  {
    name: "Ravi Kulkarni",
    role: "Full-Stack Engineer, Bengaluru",
    badge: "Studio sprint",
    avatar: "R",
    text: "The studio sprints forced me to design, code, and pitch under real constraints. It mirrors client work so closely that onboarding at my new role was easy.",
    stat: "3 shipped demos",
    pill: "Advanced Track"
  },
  {
    name: "Sophia Martins",
    role: "Brand Strategist, Lisbon",
    badge: "Research first",
    avatar: "S",
    text: "NIDADS pulled me out of the template trap. We prototyped unusual formats, tested with actual users, and the feedback loop was immediate.",
    stat: "+42% engagement",
    pill: "Brand Lab"
  }
];

export default function TestimonialSection() {
  return (
    <section className={styles.testimonialStrictSection}>
      <div className={styles.testimonialStrictHeader}>
        <div className={styles.testimonialStrictSubtitle}>PEOPLE-FIRST OUTCOMES</div>
        <h2 className={styles.testimonialStrictTitle}>Stories from the NIDADS community</h2>
        <div className={styles.testimonialStrictDesc}>
          Curated notes from learners who tested bold ideas, shipped real work, and grew in public with mentors who tell it straight.
        </div>
        <div className={styles.testimonialStrictStats}>
          {stats.map((s, i) => (
            <span className={styles.testimonialStrictStatPill} key={i}>{s.label}</span>
          ))}
        </div>
      </div>
      <div className={styles.testimonialStrictGrid}>
        {testimonials.map((t, i) => (
          <div className={styles.testimonialStrictCard} key={i}>
            <div className={styles.testimonialStrictCardHeader}>
              <span className={styles.testimonialStrictAvatar}>{t.avatar}</span>
              <div>
                <div className={styles.testimonialStrictName}>{t.name}</div>
                <div className={styles.testimonialStrictRole}>{t.role}</div>
              </div>
            </div>
            <div className={styles.testimonialStrictText}>
              <span className={styles.testimonialStrictQuote}>“</span>{t.text}
            </div>
            <div className={styles.testimonialStrictCardFooter}>
              <span className={styles.testimonialStrictStat}>{t.stat}</span>
              <span className={styles.testimonialStrictPill}>{t.pill}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
