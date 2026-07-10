import { getBaseUrl } from "@/lib/base-url";
import BlogCard from "@/components/BlogCard";
import "@/styles/blog.css";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Blog",
  description: "Read the latest articles, guides, and updates from NIDADS.",
};

/* ─────────────────────────────────────── data helpers ── */

const fetchBlogs = async (searchParams) => {
  const baseUrl = await getBaseUrl();
  const queryString = new URLSearchParams(searchParams).toString();
  const sep = queryString ? "?" : "";
  const res = await fetch(`${baseUrl}/api/blog${sep}${queryString}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok)
    return { data: [], pagination: { page: 1, totalPages: 1, limit: 0, total: 0 } };
  return res.json();
};

/* ─── hardcoded category list shown as filter pills ─────── */
const CATEGORIES = [
  { label: "Data Science", value: "Data Science" },
  { label: "Data Analytics", value: "Data Analytics" },
];

/* ─────────────────────────────────────────── page ── */

export default async function BlogPage({ searchParams }) {
  const params = (await searchParams) || {};
  const page = Number(params.page) || 1;
  const searchQuery = params.search || "";
  const activeCategory = params.category || "";

  const data = await fetchBlogs({ ...params, page });

  return (
    <div className="blog-page">
      <main id="main-content" className="blog-index" role="main">


        {/* ── Hero ── */}
        <header className="blog-index__hero">
          <div className="blog-index__hero-glow" aria-hidden="true" />
          <div className="blog-index__hero-content">
            <p className="blog-index__eyebrow">
              <span className="blog-index__eyebrow-dot" />
              Stories &amp; Updates
            </p>
            <h1>
              Insights that move <span className="blog-index__hero-accent">data forward</span>
            </h1>
            <p>Explore our latest articles, tips, and industry insights on data science and analytics.</p>

            <div className="blog-index__hero-tags">
              <span className="blog-index__hero-tag">📊 Data Science</span>
              <span className="blog-index__hero-tag">📈 Analytics</span>
              <span className="blog-index__hero-tag">💡 Guides</span>
            </div>
          </div>
        </header>

        {/* ── Search ── */}
        <form
          className="blog-search"
          action="/blog"
          method="GET"
          role="search"
          aria-label="Blog search"
        >
          <input
            type="search"
            name="search"
            placeholder="Search title, content, or tags..."
            defaultValue={searchQuery}
            aria-label="Search blog posts"
          />
          <button type="submit">Search</button>
        </form>

        {/* ── Category filter pills ── */}
        <div className="blog-cat-bar" role="navigation" aria-label="Filter by category">
          <a
            href="/blog"
            className={`blog-cat-pill${!activeCategory ? " blog-cat-pill--active" : ""}`}
          >
            All
          </a>
          {CATEGORIES.map(({ label, value }) => (
            <a
              key={value}
              href={`/blog?category=${encodeURIComponent(value)}`}
              className={`blog-cat-pill${activeCategory === value ? " blog-cat-pill--active" : ""}`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Active filter label */}
        {activeCategory && (
          <div className="blog-filter-bar">
            <span className="blog-filter-chip">
              Category: <strong>{activeCategory}</strong>
              <a href="/blog" className="blog-filter-chip__clear" aria-label="Clear filter">×</a>
            </span>
          </div>
        )}

        {/* ── Blog grid ── */}
        {data?.data?.length ? (
          <div className="blog-grid">
            {data.data.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="blog-empty">
            <div className="blog-empty__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <p>No posts found.</p>
            {activeCategory && (
              <a href="/blog" className="blog-empty__reset">View all posts</a>
            )}
          </div>
        )}

        {/* ── Pagination ── */}
        {data?.pagination?.totalPages > 1 && (
          <nav className="pagination" aria-label="Pagination">
            {Array.from({ length: data.pagination.totalPages }).map((_, index) => {
              const pageNumber = index + 1;
              const isActive = pageNumber === data.pagination.page;
              const paramsClone = new URLSearchParams(params);
              paramsClone.set("page", pageNumber.toString());
              return (
                <a
                  key={pageNumber}
                  href={`/blog?${paramsClone.toString()}`}
                  aria-current={isActive ? "page" : undefined}
                  className={
                    isActive
                      ? "pagination__link pagination__link--active"
                      : "pagination__link"
                  }
                >
                  {pageNumber}
                </a>
              );
            })}
          </nav>
        )}

      </main>
    </div>
  );
}
