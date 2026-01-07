"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
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

const COLS = 3;
const CARD_HEIGHT = 180;
const GAP = 22;
const MOBILE_BREAKPOINT = 768;

export default function GallerySection() {
  const [order, setOrder] = useState(CARDS);
  const [isMobile, setIsMobile] = useState(false);
  const gridRef = useRef(null);
  const [colWidth, setColWidth] = useState(0);

  /* Detect mobile */
  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* Measure grid only for desktop */
  useLayoutEffect(() => {
    if (isMobile || !gridRef.current) return;

    const update = () => {
      const totalWidth = gridRef.current.clientWidth;
      const totalGap = GAP * (COLS - 1);
      setColWidth((totalWidth - totalGap) / COLS);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [isMobile]);

  /* Shuffle only on desktop */
  useEffect(() => {
    if (isMobile) return;

    const interval = setInterval(() => {
      setOrder((prev) => {
        const arr = [...prev];
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.left}>
          <span className={styles.eyebrow}>OUR CAMPUS</span>

          <h2 className={styles.heading}>
            Built for making and <br /> mentoring
          </h2>

          <p className={styles.desc}>
            Acoustic-treated studios, breakout zones for quick huddles,
            and dedicated bays for sprints and critiques. Visit to see how
            we learn, prototype, and build real products.
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
          <div
            ref={gridRef}
            className={`${styles.grid} ${
              isMobile ? styles.mobileGrid : ""
            }`}
          >
            {order.map((card, index) => {
              if (isMobile) {
                return (
                  <div key={card.id} className={styles.card}>
                    <img src={card.img} alt={card.label} />
                    <span className={styles.label}>{card.label}</span>
                  </div>
                );
              }

              const col = index % COLS;
              const row = Math.floor(index / COLS);
              const x = col * (colWidth + GAP);
              const y = row * (CARD_HEIGHT + GAP);

              return (
                <div
                  key={card.id}
                  className={styles.card}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  <img src={card.img} alt={card.label} />
                  <span className={styles.label}>{card.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
