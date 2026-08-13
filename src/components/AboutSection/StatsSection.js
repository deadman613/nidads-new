"use client";
import { useEffect, useRef } from "react";
import styles from "./StatsSection.module.css";

const stats = [
  {
    id: "s1",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    value: "25,000+",
    label: "Students Trained",
    desc: "Learners upskilled across India.",
  },
  {
    id: "s2",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    value: "16+",
    label: "Years in Operation",
    desc: "Trusted since 2009.",
  },
  {
    id: "s3",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    value: "97%",
    label: "Placement Rate",
    desc: "Outcome-led training with career support.",
  },
  {
    id: "s4",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    value: "4.9 / 5",
    label: "Google Rating",
    desc: "Backed by 1,043+ reviews.",
  },
  {
    id: "s5",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    value: "250+",
    label: "Recruiting Partners",
    desc: "Hiring connections across Delhi NCR and beyond.",
  },
  {
    id: "s6",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    value: "18+",
    label: "Courses Offered",
    desc: "Across digital, AI, data, and web domains.",
  },
  {
    id: "s7",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
    value: "10+",
    label: "Industry Certifications Per Student",
    desc: "Recognised credentials from leading platforms.",
  },
  {
    id: "s8",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    value: "₹10.05 LPA",
    label: "Highest Starting CTC",
    desc: "Achieved by expert-track graduates.",
  },
  {
    id: "s9",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/>
      </svg>
    ),
    value: "15",
    label: "Max Batch Size",
    desc: "Students per cohort for direct mentor attention.",
  },
  {
    id: "s10",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    value: "Offline + Online",
    label: "Training Modes",
    desc: "Delhi campus learning with online access.",
  },
];

export default function StatsSection() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add(styles.visible); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className={styles.wrapper} aria-labelledby="stats-heading">
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.pill}>Numbers That Speak</span>
          <h2 id="stats-heading" className={styles.heading}>
            Our Results <span className={styles.grad}>in Numbers</span>
          </h2>
          <p className={styles.subtitle}>
            A clear snapshot of the outcomes, scale, and standards that define NIDADS&apos;s Data Science &amp; Analytics training ecosystem.
          </p>
        </div>

        <div className={styles.grid}>
          {stats.map((s, i) => (
            <div
              key={s.id}
              className={styles.card}
              style={{ "--i": i }}
            >
              <div className={styles.glowBorder} aria-hidden="true" />
              <div className={styles.iconBox}>{s.icon}</div>
              <div className={styles.value}>{s.value}</div>
              <div className={styles.label}>{s.label}</div>
              <p className={styles.desc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
