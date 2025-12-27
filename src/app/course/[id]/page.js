"use client";

import React, { useState, use } from "react";
import dynamic from "next/dynamic";
const PopupEnquiryForm = dynamic(() => import("@/components/PopupEnquiryForm.jsx"), { ssr: false });
import Link from "next/link";
import { getCourseById, courses } from "@/data/courses";
import styles from "./courseDetail.module.css";

export default function CourseDetailPage({ params }) {
  const { id } = use(params);
  const course = getCourseById(id);
  const [expandedModule, setExpandedModule] = useState(null);
  const [showEnquiry, setShowEnquiry] = useState(false);

  if (!course) {
    return (
      <div className={styles.notFound}>
        <h1>Course not found</h1>
        <Link href="/course">Back to courses</Link>
      </div>
    );
  }

  const toggleModule = (index) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  // Recommended: all other courses except the current one
  const recommended = courses.filter((c) => c.id !== course.id).slice(0, 4);

  return (
    <>
      {/* MAIN 2-column page */}
      <main className={styles.container}>
        <div className={styles.layout}>
          {/* LEFT COLUMN */}
          <div className={styles.leftColumn}>
            {/* HERO CARD */}
            <section className={styles.heroSection}>
              <div className={styles.heroCard}>
                <div className={styles.heroImageWrap}>
                  {course.level === "certificate" && (
                    <span className={styles.bestsellerBadge}>Bestseller</span>
                  )}
                  <img
                    src={course.image}
                    alt={course.title}
                    className={styles.heroImage}
                  />
                </div>

                <div className={styles.heroBody}>
                  <h1 className={styles.heroTitle}>{course.title}</h1>
                  <p className={styles.heroSubtitle}>{course.description}</p>

                  <div className={styles.heroMetaRow}>
                    <div className={styles.heroMetaItem}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M12 6v6l4 2"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span>{course.duration}</span>
                    </div>

                    <div className={styles.heroMetaItem}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="currentColor"
                        />
                      </svg>
                      <span>
                        {course.rating} ({course.students.toLocaleString()})
                      </span>
                    </div>

                    <div className={styles.heroMetaItem}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <circle
                          cx="12"
                          cy="7"
                          r="4"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                      <span>{course.instructor?.name || "Shagun"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* WHAT YOU'LL LEARN */}
            <section className={styles.section}>
              <div className={styles.sectionBox}>
                <h2 className={styles.sectionTitle}>What you'll learn</h2>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "20px",
                  }}
                >
                  {course.whatYouWillLearn?.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        background: "rgba(6,26,43,0.7)",
                        borderRadius: "12px",
                        padding: "20px",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "14px",
                        boxShadow: "0 2px 8px rgba(30,41,59,0.08)",
                      }}
                    >
                      <span
                        style={{
                          color: "#4ade80",
                          fontSize: "22px",
                          marginTop: "2px",
                        }}
                      >
                        ✔️
                      </span>
                      <span
                        style={{
                          color: "#c7ddff",
                          fontSize: "15px",
                          lineHeight: 1.6,
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* MODULES */}
            <section className={styles.section}>
              <div className={styles.sectionBox}>
                <div className={styles.modulesHeader}>
                  <h2 className={styles.sectionTitle}>Modules by Month</h2>
                  <span className={styles.moduleCount}>
                    {course.curriculum?.length || 12} modules
                  </span>
                </div>

                {course.curriculum && course.curriculum.length > 0 && (
                  <ul className={styles.moduleSummaryList}>
                    {course.curriculum.map((module, idx) => (
                      <li key={idx} className={styles.moduleSummaryChip}>
                        Module {idx + 1}: {module.section}
                      </li>
                    ))}
                  </ul>
                )}

                <div className={styles.modulesList}>
                  {course.curriculum?.map((module, index) => (
                    <div key={index} className={styles.moduleItem}>
                      <button
                        className={styles.moduleHeader}
                        onClick={() => toggleModule(index)}
                      >
                        <div className={styles.moduleInfo}>
                          <h3 className={styles.moduleTitle}>
                            Module {index + 1}: {module.section}
                          </h3>
                          <p className={styles.moduleSubtitle}>
                            Month {index + 1} •{" "}
                            {module.lectures?.length || 0} milestones
                          </p>
                        </div>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          className={`${styles.moduleIcon} ${
                            expandedModule === index
                              ? styles.moduleIconOpen
                              : ""
                          }`}
                        >
                          <path
                            d="M9 5l7 7-7 7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      {expandedModule === index && module.lectures && (
                        <div className={styles.moduleContent}>
                          {module.lectures.map((lecture, lectureIndex) => (
                            <div
                              key={lectureIndex}
                              className={styles.lectureItem}
                            >
                              <div className={styles.lectureIcon}>📄</div>
                              <div className={styles.lectureInfo}>
                                <h4 className={styles.lectureTitle}>
                                  {lecture.title}
                                </h4>
                                <p className={styles.lectureDuration}>
                                  {lecture.duration}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN – FULL CARD */}
          <aside className={styles.courseCard}>
            <img
              src={course.image}
              alt={course.title}
              className={styles.cardImage}
            />
            <div className={styles.cardContent}>
              <div className={styles.cardMeta}>
                <div className={styles.cardMetaItem}>
                  <span className={styles.metaLabel}>Duration</span>
                  <span className={styles.metaValue}>{course.duration}</span>
                </div>
                <div className={styles.cardMetaItem}>
                  <span className={styles.metaLabel}>Rating</span>
                  <span className={styles.metaValue}>
                    <span className={styles.starIcon}>★</span>{" "}
                    {course.rating} ({course.students.toLocaleString()})
                  </span>
                </div>
                <div className={styles.cardMetaItem}>
                  <span className={styles.metaLabel}>Instructor</span>
                  <span className={styles.metaValue}>
                    {course.instructor?.name || "Shagun"}
                  </span>
                </div>
              </div>


              <div className={styles.priceSection}>
                <div className={styles.installmentInfoBox}>
                  <strong>Easy Installment Option:</strong>
                  <div style={{marginTop: 6, color: '#b6c2d6', fontSize: 14}}>
                    Pay your course fee in easy monthly installments. Flexible plans available for all students. Contact us for more details!
                  </div>
                </div>
              </div>

              <button className={styles.enrollButton} onClick={() => setShowEnquiry(true)}>Enroll now</button>
              {showEnquiry && (
                <PopupEnquiryForm 
                  open={showEnquiry} 
                  onClose={() => setShowEnquiry(false)} 
                  selectedCourseId={course.id}
                  lockCourse={true}
                />
              )}

              <div className={styles.includesSection}>
                <h4 className={styles.includesTitle}>
                  This course includes:
                </h4>
                <div className={styles.includesList}>
                  {course.includes && course.includes.length > 0 ? (
                    course.includes.map((item, index) => (
                      <div key={index} className={styles.includesItem}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M5 13l4 4L19 7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>{item}</span>
                      </div>
                    ))
                  ) : (
                    <>
                      <div className={styles.includesItem}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 2v20M2 12h20"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        <span>Lifetime access</span>
                      </div>
                      <div className={styles.includesItem}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        <span>Certificate of completion</span>
                      </div>
                      <div className={styles.includesItem}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        <span>Community support</span>
                      </div>
                      <div className={styles.includesItem}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        <span>Progress tracking</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* FULL-WIDTH: MEET YOUR TRAINERS */}
      <section className={styles.fullWidthSection}>
        <div className={styles.fullWidthInner}>
          <h3 className={styles.trainerSectionTitle}>Meet Your Trainers</h3>
          <div className={styles.trainerCard}>
            <div className={styles.trainerLeft}>
              <div className={styles.trainerBadge}>About the trainer</div>
              <div className={styles.trainerNameRow}>
                <span className={styles.trainerName}>
                  {course.instructor?.name || "Manjeet Singh"}
                </span>
                <div className={styles.trainerSocials}>
                  <button className={styles.socialChip}>in</button>
                  <button className={styles.socialChip}>🔗</button>
                </div>
              </div>
              <p className={styles.trainerBio}>
                Multidisciplinary developer with 4+ years of industry
                experience; has worked on real‑world projects, mentored learners
                and contributed to open source.
              </p>
              <div className={styles.trainerTags}>
                <span className={styles.trainerTag}>Industry projects</span>
                <span className={styles.trainerTag}>Mentorship support</span>
                <span className={styles.trainerTag}>
                  Career‑focused feedback
                </span>
              </div>
            </div>
            <div className={styles.trainerAvatar}>
              <div className={styles.trainerAvatarInner} />
            </div>
          </div>
        </div>
      </section>

      {/* FULL-WIDTH: RECOMMENDED COURSES */}
      <section className={styles.fullWidthSection}>
        <div className={styles.fullWidthInner}>
          <h3 className={styles.recommendedSectionTitle}>
            Recommended courses
          </h3>
          <p className={styles.recommendedSubtitle}>
            Continue your path with related programs tailored for you.
          </p>

          <div className={styles.recommendedGrid}>
            {recommended.map((c) => (
              <Link
                key={c.id}
                href={`/course/${c.id}`}
                className={styles.recoCard}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className={styles.recoImageWrap}>
                  <img
                    src={c.image}
                    alt={c.title}
                    className={styles.recoImage}
                  />
                  {c.level === "certificate" && (
                    <span className={styles.recoBadge}>BESTSELLER</span>
                  )}
                </div>
                <div className={styles.recoBody}>
                  <h4 className={styles.recoTitle}>{c.title}</h4>
                  <p className={styles.recoProvider}>NIDADS Academy</p>
                  <div className={styles.recoMetaRow}>
                    <span>⭐ {c.rating}</span>
                    <span>•</span>
                    <span>{c.students} learners</span>
                  </div>
                  <div className={styles.recoMetaRow}>
                    <span className={styles.recoDurationChip}>{c.duration}</span>
                  </div>
                  <button
                    className={styles.recoViewBtn}
                    style={{ width:'100%', background:'#3b82f6', color:'#fff', border:'none', borderRadius:8, padding:'10px 0', fontWeight:600, fontSize:15, cursor:'pointer', letterSpacing:'0.5px'}}
                    tabIndex={0}
                    aria-label={`View details for ${c.title}`}
                  >
                    View Details
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
