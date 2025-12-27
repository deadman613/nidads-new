"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./CourseSection3.module.css";

const slides = [
  {
    id: 1,
    title: "Generative AI",
    students: "1.7M+",
    image: "/uploads/handrobo.png",
  },
  {
    id: 2,
    title: "IT Certifications",
    students: "14M+",
    image: "/images/placeholder-2.jpg",
  },
  {
    id: 3,
    title: "Data Science",
    students: "8.1M+",
    image: "/images/placeholder-3.jpg",
  },
  {
    id: 4,
    title: "Machine Learning",
    students: "9.1M+",
    image: "/images/placeholder-4.jpg",
  },
  {
    id: 5,
    title: "Large Language Models",
    students: "210K+",
    image: "/images/placeholder-5.jpg",
  },
];

const ITEMS_PER_PAGE = 3;

export default function CourseSection3() {
  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = Math.ceil(slides.length / ITEMS_PER_PAGE);
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const visibleSlides = slides.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + pageCount) % pageCount);
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % pageCount);
  };

  const handleDotClick = (index) => {
    setCurrentPage(index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left text column */}
        <div className={styles.textColumn}>
          <h2 className={styles.heading}>Learn essential career and life skills</h2>
          <p className={styles.subheading}>
            Build in-demand skills fast and move your career forward in a changing
            job market with expert-led learning paths.
          </p>
        </div>

        {/* Right slider column */}
        <div className={styles.sliderColumn}>
          <div className={styles.cardsRow}>
            {visibleSlides.map((item) => (
              <article key={item.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={styles.image}
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />

                  {/* Floating white card over image */}
                  <div className={styles.floatingCard}>
                    <div className={styles.metaRow}>
                      <div className={styles.metaBadge}>
                        <span className={styles.metaIcon}>👥</span>
                        <span className={styles.metaText}>{item.students}+</span>
                      </div>
                    </div>

                    <div className={styles.floatingBottomRow}>
                      <h3 className={styles.cardTitle}>{item.title}</h3>

                      <button className={styles.arrowButton} aria-label="Open path">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M6 3l5 5-5 5"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Slider controls */}
          <div className={styles.controlsRow}>
            <button
              type="button"
              className={styles.navCircle}
              onClick={handlePrev}
              aria-label="Previous slide"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <polyline
                  points="15 18 9 12 15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className={styles.dots}>
              {Array.from({ length: pageCount }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`${styles.dot} ${
                    index === currentPage ? styles.activeDot : ""
                  }`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              className={styles.navCircle}
              onClick={handleNext}
              aria-label="Next slide"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <polyline
                  points="9 18 15 12 9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
