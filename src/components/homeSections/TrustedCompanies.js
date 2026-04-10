"use client";

import styles from "./TrustedCompanies.module.css";
import { useRef, useEffect, useState } from "react";

const companies = [
  { name: "American Express", logo: "/logo/1.png" },
  { name: "Club Mahindra", logo: "/logo/2.png" },
  { name: "Fractal", logo: "/logo/3.png" },
  { name: "Infosys", logo: "/logo/4.png" },
  { name: "Intel", logo: "/logo/5.png" },
  { name: "L&T Financial Services", logo: "/logo/6.png" },
  { name: "AB InBev", logo: "/logo/7.png" },
  { name: "WNS", logo: "/logo/8.png" },
  { name: "TVS", logo: "/logo/adobe.png" },
  { name: "TVS Credit", logo: "/logo/amazon.jpg" },
  { name: "Sevilla FC", logo: "/logo/apple.png" },
  { name: "SAP", logo: "/logo/meta.png" },
];

export default function TrustedCompanies() {
  const carouselRef = useRef(null);
  const [isAutoScroll, setIsAutoScroll] = useState(true);

  useEffect(() => {
    if (!isAutoScroll) return;

    const interval = setInterval(() => {
      if (carouselRef.current) {
        const container = carouselRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = 0;
        } else {
          container.scrollBy({
            left: 124,
            behavior: "smooth",
          });
        }
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [isAutoScroll]);

  return (
    <section className={styles.section}>
      <div className={styles.panel}>
        <div className={styles.header}>
          <span className={styles.label}>Trusted by leading brands</span>
          <h2 className={styles.title}>Trusted by 500+ enterprises</h2>
          <p className={styles.description}>
            Over 500+ enterprises trust us for building their next-generation AI teams.
            Partner with us to drive your growth and innovation.
          </p>
        </div>

        <div className={styles.carouselWrapper}>
          <div className={styles.carousel} ref={carouselRef}>
            {[...companies, ...companies].map((company, idx) => (
              <div key={`${company.name}-${idx}`} className={styles.card}>
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className={styles.logo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
