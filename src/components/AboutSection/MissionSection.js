"use client";
import { useEffect, useRef } from "react";
import styles from "./MissionSection.module.css";

const values = [
  {
    id: "career-ready",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    title: "Career-Ready Outcomes",
    body: "Every course is built around employability, promotion-readiness, and long-term professional independence.",
  },
  {
    id: "accessible",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
    title: "Accessible Learning",
    body: "Opportunity should not be limited by academic background, city, or financial position.",
  },
  {
    id: "measured",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Measured by Student Growth",
    body: "We judge success by employment, earnings, and career progress within six months of training completion.",
  },
];

export default function MissionSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.visible);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.wrapper} aria-labelledby="mission-heading">
      {/* decorative orbs */}
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />

      <div className={styles.inner}>

        {/* ── LEFT: mission text ── */}
        <div className={styles.left}>
          <span className={styles.pill}>Mission &amp; Values</span>

          <h2 id="mission-heading" className={styles.heading}>Our Mission</h2>

          <p className={styles.body}>
            NIDADS exists to close the gap between what India&apos;s education system teaches
            and what India&apos;s job market actually requires. We believe that every student —
            regardless of their academic background, city, or financial position — deserves
            access to practical, current, career-ready training that leads directly to employment.
          </p>
          <p className={styles.body}>
            Our courses are designed with one outcome in mind: your first job, your first
            promotion, and your long-term career independence.
          </p>
          <p className={styles.body}>
            We measure our success not by enrolment numbers, but by the number of students
            who are employed, earning, and growing in their careers within 6 months of
            completing their training.
          </p>
        </div>

        {/* ── RIGHT: value cards ── */}
        <div className={styles.right}>
          {values.map((v, i) => (
            <div
              key={v.id}
              className={styles.card}
              style={{ "--delay": `${0.1 + i * 0.12}s` }}
            >
              <div className={styles.cardTop}>
                <div className={styles.iconWrap} aria-hidden="true">
                  {v.icon}
                </div>
              </div>
              <h3 className={styles.cardTitle}>{v.title}</h3>
              <p className={styles.cardBody}>{v.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
