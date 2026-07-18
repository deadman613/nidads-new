import Link from "next/link";
import { courses } from "@/data/courses";
import { STATIC_ROUTES } from "@/lib/site-routes";
import styles from "./sitemap-page.module.css";

export const revalidate = 300;

export const metadata = {
  title: "Sitemap",
  description:
    "Complete sitemap of NIDADS — browse all pages, courses, and blog articles.",
  alternates: { canonical: "https://www.nidads.com/sitemap-page" },
};

/* ── Fetch live blog posts ─────────────────────────────────────────── */
async function fetchBlogs() {
  try {
    const { default: prisma } = await import("@/lib/prisma");
    const blogs = await prisma.blog.findMany({
      select: { id: true, title: true, slug: true, category: true, createdAt: true },
      orderBy: { createdAt: "desc" },
    });
    return blogs;
  } catch {
    return [];
  }
}

/* ── Group static routes by section ───────────────────────────────── */
function groupBySection(routes) {
  return routes.reduce((acc, route) => {
    const section = route.section || "Other";
    if (!acc[section]) acc[section] = [];
    acc[section].push(route);
    return acc;
  }, {});
}

/* ── Page component ────────────────────────────────────────────────── */
export default async function SitemapPage() {
  const blogs = await fetchBlogs();
  const grouped = groupBySection(STATIC_ROUTES);

  return (
    <div className={styles.page}>
      {/* ── Hero ── */}
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>🗺️ Site Navigation</span>
          <h1 className={styles.heroTitle}>
            Complete <span className={styles.accent}>Sitemap</span>
          </h1>
          <p className={styles.heroSub}>
            Find every page, course, and article on NIDADS in one place.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <strong>{STATIC_ROUTES.length}</strong>
              <span>Pages</span>
            </div>
            <div className={styles.stat}>
              <strong>{courses.length}</strong>
              <span>Courses</span>
            </div>
            <div className={styles.stat}>
              <strong>{blogs.length}</strong>
              <span>Articles</span>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>

        {/* ── Static Pages (auto-grouped by section) ── */}
        {Object.entries(grouped).map(([section, routes]) => (
          <section key={section} className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{section}</h2>
              <span className={styles.badge}>{routes.length} pages</span>
            </div>
            <div className={styles.grid}>
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className={styles.card}
                >
                  <span className={styles.cardIcon}>{route.icon || "📄"}</span>
                  <div className={styles.cardBody}>
                    <span className={styles.cardLabel}>{route.label}</span>
                    <span className={styles.cardPath}>{route.path}</span>
                  </div>
                  <svg
                    className={styles.cardArrow}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {/* ── Courses ── */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Courses</h2>
            <span className={styles.badge}>{courses.length} programs</span>
          </div>
          <div className={styles.grid}>
            {courses.map((course) => (
              <Link
                key={course.id}
                href={`/course/${course.slug}`}
                className={styles.card}
              >
                <span className={styles.cardIcon}>
                  {course.level === "diploma"
                    ? "🎓"
                    : course.level === "advanced"
                    ? "🚀"
                    : "📜"}
                </span>
                <div className={styles.cardBody}>
                  <span className={styles.cardLabel}>{course.title}</span>
                  <span className={styles.cardMeta}>
                    <span className={styles.levelPill}>{course.level}</span>
                    &nbsp;·&nbsp;{course.duration}
                  </span>
                </div>
                <svg
                  className={styles.cardArrow}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Blog Articles ── */}
        {blogs.length > 0 && (
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Blog Articles</h2>
              <span className={styles.badge}>{blogs.length} articles</span>
            </div>
            <div className={styles.grid}>
              {blogs.map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blog/${blog.slug}`}
                  className={styles.card}
                >
                  <span className={styles.cardIcon}>✍️</span>
                  <div className={styles.cardBody}>
                    <span className={styles.cardLabel}>{blog.title}</span>
                    <span className={styles.cardMeta}>
                      {blog.category && (
                        <span className={styles.levelPill}>{blog.category}</span>
                      )}
                      &nbsp;·&nbsp;
                      {new Date(blog.createdAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <svg
                    className={styles.cardArrow}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── XML Sitemap link ── */}
        <div className={styles.xmlBanner}>
          <span>🤖 Looking for the machine-readable sitemap?</span>
          <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className={styles.xmlLink}>
            View sitemap.xml →
          </a>
        </div>

      </main>
    </div>
  );
}
