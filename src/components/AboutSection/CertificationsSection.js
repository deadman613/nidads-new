"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./CertificationsSection.module.css";

const certs = [
  {
    id: "c1",
    src: "/about/certificates.jpg",
    alt: "NIDADS Industry-Recognised Certificate — Data Science & AI",
    label: "Data Science & AI Certification",
    desc: "Industry-recognised credential awarded upon successful completion of our flagship Data Science & AI programme.",
  },
  {
    id: "c2",
    src: "/about/certificates2.jpg",
    alt: "NIDADS Industry-Recognised Certificate — Data Analytics",
    label: "Data Analytics Certification",
    desc: "Validates mastery in Business Analytics, Power BI, SQL, and AI-driven data workflows sought by top recruiters.",
  },
];

export default function CertificationsSection() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.visible);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className={styles.section} aria-labelledby="certs-heading">
      {/* Background orbs */}
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.pill}>Credentials</span>
          <h2 id="certs-heading" className={styles.heading}>
            Industry-Recognised{" "}
            <span className={styles.grad}>Certifications</span>
          </h2>
          <p className={styles.subtitle}>
            Every NIDADS graduate receives a credential that is recognised by
            500+ hiring companies across India and abroad — proof that your
            skills meet real market standards.
          </p>
        </div>

        {/* Certificate cards */}
        <div className={styles.grid}>
          {certs.map((cert, i) => (
            <div key={cert.id} className={styles.card} style={{ "--i": i }}>
              <div className={styles.glowBorder} aria-hidden="true" />

              <div className={styles.imgWrap}>
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  width={560}
                  height={396}
                  className={styles.img}
                  loading="lazy"
                  sizes="(max-width:768px) 90vw, 560px"
                  quality={85}
                />
                <div className={styles.shine} aria-hidden="true" />
              </div>

              <div className={styles.info}>
                <div className={styles.badge}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                  Verified Certificate
                </div>
                <h3 className={styles.label}>{cert.label}</h3>
                <p className={styles.desc}>{cert.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust row */}
        <div className={styles.trustRow}>
          {[
            { icon: "🏆", text: "500+ Hiring Partners" },
            { icon: "✅", text: "Government Recognised" },
            { icon: "🌐", text: "Valid Across India" },
            { icon: "⚡", text: "Issued Within 7 Days" },
          ].map((item) => (
            <div key={item.text} className={styles.trustItem}>
              <span className={styles.trustIcon}>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
