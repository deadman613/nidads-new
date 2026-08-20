"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { courses } from "@/data/courses";
import styles from "./CoursesSection.module.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function CoursesSection() {
  const swiperRef = useRef(null);
  const displayedCourses = courses.slice(0, 6);

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* HEADER ROW */}
        <div className={styles.headerRow}>
          <div>
            <h2 className={styles.title}>Our <span>Courses</span></h2>
            <p className={styles.subtitle}>
              Career-focused programs designed to make you industry-ready.
            </p>
          </div>

          {/* ARROWS */}
          <div className={styles.arrows}>
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className={styles.arrowBtn}
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className={styles.arrowBtn}
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={3}
          spaceBetween={32}
          slidesPerGroup={1}
          breakpoints={{
            0: { slidesPerView: 1.1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className={styles.slider}
        >
          {displayedCourses.map((course) => (
            <SwiperSlide key={course.id}>
              <article className={styles.card}>
                <div className={styles.imageWrap}>
                  <Image src={course.image} alt={course.title} width={400} height={240} loading="lazy" sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" quality={75} />
                </div>

                <div className={styles.content}>
                  <h3 className={styles.courseTitle}>{course.title}</h3>

                  <p className={styles.instructor}>
                    {course.instructor?.name || "NIDADS Faculty"}
                  </p>

                  <div className={styles.meta}>
                    <span>{course.duration}</span>
                    <span>•</span>
                    <span>{course.mode}</span>
                  </div>

                  <div className={styles.rating}>
                    {"★".repeat(Math.floor(course.rating))}
                    <span className={styles.ratingValue}>
                      {course.rating}
                    </span>
                  </div>

                  {/* BOTTOM FIXED */}
                  <div className={styles.priceRow}>
                    <Link
                      href={`/course/${course.slug}`}
                      className={styles.cta}
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
