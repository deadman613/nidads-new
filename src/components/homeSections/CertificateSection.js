"use client";
import { useState, useEffect } from "react";
import styles from "./CertificateSection.module.css";

const certificates = [
  {
    id: 1,
    image: encodeURI("/certificates/Abhishek Rawat - Advanced Data Science.webp"),
    alt: "Abhishek Rawat certificate"
  },
  {
    id: 2,
    image: encodeURI("/certificates/Mohit Kumar - NIDADS New.webp"),
    alt: "Mohit Kumar certificate"
  },
  {
    id: 3,
    image: encodeURI("/certificates/Pallavi Yadav - Advanced Data Science.webp"),
    alt: "Pallavi Yadav certificate"
  },
  {
    id: 4,
    image: encodeURI("/certificates/Priya - Advanced Data Science.webp"),
    alt: "Priya certificate"
  },
  {
    id: 5,
    image: encodeURI("/certificates/Shubham Negi - Advanced Data Science.webp"),
    alt: "Shubham Negi certificate"
  },
  {
    id: 6,
    image: encodeURI("/certificates/_Divyanshu Mishra - Advanced Data Science.webp"),
    alt: "Divyanshu Mishra certificate"
  }
];

export default function CertificateSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Certifications</span>
          <h2><span style={{color:"#38b6ff"}}>Industry-Recognized</span> Certificates</h2>
          <p>
            Earn certificates that validate your skills and open doors to new career opportunities
          </p>
        </div>

        <div className={styles.carousel}>
          <button
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={prevSlide}
            aria-label="Previous certificate"
          >
            ‹
          </button>

          <div className={styles.carouselContainer}>
            <div
              className={styles.carouselTrack}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {certificates.map((cert) => (
                <div key={cert.id} className={styles.certificateCard}>
                  <div className={styles.certificateImage}>
                    <img
                      src={cert.image}
                      alt={cert.alt}
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={nextSlide}
            aria-label="Next certificate"
          >
            ›
          </button>
        </div>

        <div className={styles.indicators}>
          {certificates.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentIndex ? styles.active : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to certificate ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}