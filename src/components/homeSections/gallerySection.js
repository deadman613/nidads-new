"use client";

import Link from "next/link";
import styles from "./GallerySection.module.css";

const CARDS = [
  { id: 6, label: "Breakout", img: "/center/6.webp" },
  { id: 7, label: "Mentor pod", img: "/center/7.webp" },
  { id: 12, label: "Design studio", img: "/center/IMG_4066.webp" },
  { id: 13, label: "Learning bays", img: "/center/IMG_4067.webp" },
  { id: 14, label: "Workshop zone", img: "/center/IMG_4068.webp" },
  { id: 15, label: "Breakout", img: "/center/IMG_4071.webp" },
  { id: 16, label: "Mentor pod", img: "/center/IMG_4072.webp" },
  { id: 17, label: "Library nook", img: "/center/IMG_4076.webp" },
  { id: 18, label: "Studio hall", img: "/center/IMG_4077.webp" },
];

export default function GallerySection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.left}>
          <span className={styles.eyebrow}>OUR CAMPUS</span>

          <h2 className={styles.heading}>
            Built for <span style={{color:"#38b6ff"}}>making</span> and <br /> <span style={{color:"#38b6ff"}}>mentoring</span>
          </h2>

          <p className={styles.desc}>
            Acoustic-treated studios, breakout zones for quick huddles,
            and dedicated bays for sprints and critiques. Visit to see how
            we learn, build projects, and solve real problems.
          </p>

          <p className={styles.highlight}>
            See how we take you from beginner to job-ready
          </p>

          <div className={styles.tags}>
            <span>Greater Kailash center</span>
            <span>Book a tour any day</span>
            <span>Labs, lounge, library</span>
          </div>

          <div className={styles.actions}>
            <Link href="/contact-us">
              <button className={styles.primary}>Book a Campus Tour</button>
            </Link>
            <Link href="/about">
              <button className={styles.secondary}>See Our Spaces</button>
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.grid}>
            {CARDS.map((card) => (
              <div key={card.id} className={styles.card}>
                <img src={card.img} alt={card.label} width={300} height={180} />
                <span className={styles.label}>{card.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
