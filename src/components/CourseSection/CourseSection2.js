"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import styles from "./CourseSection2.module.css";
import { courses } from "@/data/courses";

export default function CourseSection2() {
  const [search, setSearch] = useState("");
  const [levels, setLevels] = useState([]);
  const [durations, setDurations] = useState([]);
  const [activeTab, setActiveTab] = useState("popular");
  const [showAll, setShowAll] = useState(false);

  const durationOptions = useMemo(() => {
    return [...new Set(courses.map((course) => course.duration))].sort(
      (a, b) => parseInt(a, 10) - parseInt(b, 10)
    );
  }, []);

  const toggle = (value, setter) => {
    setter(prev =>
      prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
    );
  };

  const filteredCourses = useMemo(() => {
    let data = [...courses];

    if (search) {
      data = data.filter(c =>
        c.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (levels.length) {
      data = data.filter(c => levels.includes(c.level));
    }

    if (durations.length) {
      data = data.filter(c => durations.includes(c.duration));
    }

    if (activeTab !== "popular") {
      data = data.filter(c => c.level === activeTab);
    }

    return data;
  }, [search, levels, durations, activeTab]);

  return (
    <section id="course-programs" className={styles.section}>

      {/* ===== SECTION HEADER ===== */}
      <div className={styles.sectionHeader}>
        <span className={styles.eyebrow}>COURSE CATALOG</span>
        <h2 className={styles.title}>
          Industry-Focused <span>AI & Data Science Programs</span>
        </h2>
        <p className={styles.subtitle}>
          Choose from carefully designed programs focused on real tools,
          real projects, and real hiring outcomes.
        </p>
      </div>

      <div className={styles.layout}>

        {/* ===== SIDEBAR ===== */}
       {/* ===== LEFT FILTER SIDEBAR ===== */}
<aside className={styles.sidebar}>

  <div className={styles.filterBlock}>
    <h4 className={styles.filterTitle}>Search</h4>
    <input
      type="text"
      placeholder="Search courses"
      className={styles.searchInput}
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>

  <div className={styles.filterBlock}>
    <h4 className={styles.filterTitle}>Category</h4>

    {["diploma", "advanced", "certificate"].map(level => (
      <label key={level} className={styles.toggleRow}>
        <span className={styles.toggleLabelText}>
          {level.charAt(0).toUpperCase() + level.slice(1)}
        </span>
        <input
          type="checkbox"
          checked={levels.includes(level)}
          onChange={() => toggle(level, setLevels)}
        />
        <span className={styles.toggleSwitch}></span>
      </label>
    ))}
  </div>

  <div className={styles.filterBlock}>
    <h4 className={styles.filterTitle}>Duration</h4>

    {durationOptions.map(d => (
      <label key={d} className={styles.toggleRow}>
        <span className={styles.toggleLabelText}>{d}</span>
        <input
          type="checkbox"
          checked={durations.includes(d)}
          onChange={() => toggle(d, setDurations)}
        />
        <span className={styles.toggleSwitch}></span>
      </label>
    ))}
  </div>

  <label className={`${styles.toggleRow} ${styles.sortToggle}`}>
    <span className={styles.toggleLabelText}>Newest first</span>
    <input type="checkbox" />
    <span className={styles.toggleSwitch}></span>
  </label>

  <button className={styles.clearBtn}>
    Clear filters
  </button>

</aside>


        {/* ===== MAIN ===== */}
        <main className={styles.main}>

          {/* Tabs */}
          <div className={styles.tabs}>
            {["popular", "diploma", "advanced", "certificate"].map(tab => (
              <button
                key={tab}
                className={activeTab === tab ? styles.activeTab : ""}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className={styles.grid}>
            {(showAll ? filteredCourses : filteredCourses.slice(0, 6)).map(course => (
              <div
                key={course.id}
                className={styles.courseCard}
              >
                {/* Image */}
                <div className={styles.cardImage}>
                  <img src={course.image} alt={course.title} />

                  {course.level === "diploma" && (
                    <span className={styles.bestseller}>BESTSELLER</span>
                  )}

                  <div className={styles.techIcons}>
                    <span>AI</span>
                    <span>Data</span>
                  </div>
                </div>

                {/* Content */}
                <div className={styles.cardBody}>
                  <h3>{course.title}</h3>
                  <p className={styles.provider}>NIDADS Academy</p>

                  <div className={styles.metaRow}>
                    <span className={styles.rating}>★ {course.rating}</span>
                    <span className={styles.students}>
                      ({course.students.toLocaleString()})
                    </span>
                    <span className={styles.duration}>{course.duration}</span>
                  </div>

                  {/* ── Dual action buttons ── */}
                  <div className={styles.btnRow}>
                    {/* Read More → course detail page */}
                    <Link
                      href={`/course/${course.slug}`}
                      className={styles.readMoreBtn}
                    >
                      Read More
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>

                    {/* Enroll Now → opens enquiry popup */}
                    <button
                      className={styles.enrollBtn}
                      type="button"
                      onClick={() => window.dispatchEvent(new Event("openEnquiryPopup"))}
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length > 4 && (
            <div className={styles.showMoreWrapper}>
              <button onClick={() => setShowAll(p => !p)}>
                {showAll ? "Show Less" : "Show All Courses"}
              </button>
            </div>
          )}

        </main>
      </div>
    </section>
  );
}
