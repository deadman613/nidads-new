"use client";
import { useState, useEffect } from "react";
import styles from "./CertificateSection.module.css";

const certificates = [
  {
    id: 1,
    title: "Data Science & AI Diploma",
    image: "/certificates/diploma-data-science.png",
    description: "Comprehensive 12-month program covering Python, ML, Deep Learning, and AI applications"
  },
  {
    id: 2,
    title: "Data Analytics & AI Diploma",
    image: "/certificates/diploma-data-analytics.png",
    description: "12-month intensive program focused on analytics, BI tools, and business intelligence"
  },
  {
    id: 3,
    title: "Advanced Data Science Certification",
    image: "/certificates/advanced-data-science.png",
    description: "6-month advanced certification for ML deployment and statistical modeling"
  },
  {
    id: 4,
    title: "Advanced Data Analytics Certification",
    image: "/certificates/advanced-data-analytics.png",
    description: "6-month program for advanced analytics, ML applications, and BI strategy"
  },
  {
    id: 5,
    title: "Data Analytics & AI Certification",
    image: "/certificates/certification-data-analytics.png",
    description: "4-month certification covering essential analytics and AI fundamentals"
  },
  {
    id: 6,
    title: "Data Analytics for Professionals",
    image: "/certificates/professional-data-analytics.png",
    description: "4-month program designed for working professionals in analytics roles"
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
                      alt={cert.title}
                      onError={(e) => {
                        e.target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                  <div className={styles.certificateInfo}>
                    <h3>{cert.title}</h3>
                    <p>{cert.description}</p>
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