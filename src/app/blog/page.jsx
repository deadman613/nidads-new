import { getBaseUrl } from "@/lib/base-url";
import BlogCard from "@/components/BlogCard";
import BlogThemeToggle from "@/components/BlogThemeToggle";
import "@/styles/blog.css";

/* ─── Cache for 60 s — avoids a DB hit on every single request ─── */
export const revalidate = 60;

export const metadata = {
  title: "Blog",
  description: "Read the latest articles, guides, and updates from NIDADS.",
};

/* ─── hardcoded category list ─────────────────────────────────── */
const CATEGORIES = [
  { label: "Data Science", value: "Data Science" },
  { label: "Data Analytics", value: "Data Analytics" },
];

/* ─── data fetch — select only the columns BlogCard actually needs ─ */
const fetchBlogs = async (searchParams) => {
  const baseUrl = await getBaseUrl();
  /* Only pass params that the API actually uses so cache keys stay narrow */
  const qs = new URLSearchParams();
  if (searchParams.page)     qs.set("page",     searchParams.page);
  if (searchParams.search)   qs.set("search",   searchParams.search);
  if (searchParams.category) qs.set("category", searchParams.category);
  qs.set("limit", "12");          /* 12 cards fills 3-col grid neatly   */

  const sep = qs.toString() ? "?" : "";
  const res = await fetch(`${baseUrl}/api/blog${sep}${qs.toString()}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok)
    return { data: [], pagination: { page: 1, totalPages: 1, limit: 12, total: 0 } };
  return res.json();
};

/* ─────────────────────────────────────────────── page ── */

export default async function BlogPage({ searchParams }) {
  const params = (await searchParams) || {};
  const page          = Number(params.page) || 1;
  const searchQuery   = params.search || "";
  const activeCategory = params.category || "";

  const data = await fetchBlogs({ ...params, page });

  return (
    <div className="blog-page">
      <main id="main-content" className="blog-index blog-index--simple" role="main">

        {/* ── Compact header ── */}
        <header className="blog-simple-header">
          <BlogThemeToggle />
          <div className="blog-simple-header__text">
            <p className="blog-index__eyebrow">
              <span className="blog-index__eyebrow-dot" />
              Stories &amp; Updates
            </p>
            <h1>
              Insights that move <span className="blog-index__hero-accent">data forward</span>
            </h1>
            <p className="blog-simple-header__sub">
              Explore our latest articles, tips, and industry insights on data science and analytics.
            </p>
            <div className="blog-index__hero-tags">
              <span className="blog-index__hero-tag">📊 Data Science</span>
              <span className="blog-index__hero-tag">📈 Analytics</span>
              <span className="blog-index__hero-tag">💡 Guides</span>
            </div>
          </div>

          {/* ── Search + category pills in one bar ── */}
          <div className="blog-simple-controls">
            <form
              className="blog-simple-search"
              action="/blog"
              method="GET"
              role="search"
              aria-label="Blog search"
            >
              {activeCategory && (
                <input type="hidden" name="category" value={activeCategory} />
              )}
              <input
                type="search"
                name="search"
                placeholder="Search articles…"
                defaultValue={searchQuery}
                aria-label="Search blog posts"
              />
              <button type="submit">Search</button>
            </form>

            <nav className="blog-cat-bar" aria-label="Filter by category">
              <a
                href="/blog"
                className={`blog-cat-pill${!activeCategory ? " blog-cat-pill--active" : ""}`}
              >
                All
              </a>
              {CATEGORIES.map(({ label, value }) => (
                <a
                  key={value}
                  href={`/blog?category=${encodeURIComponent(value)}${searchQuery ? `&search=${encodeURIComponent(searchQuery)}` : ""}`}
                  className={`blog-cat-pill${activeCategory === value ? " blog-cat-pill--active" : ""}`}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Active filter chip */}
          {activeCategory && (
            <div className="blog-filter-bar">
              <span className="blog-filter-chip">
                Category: <strong>{activeCategory}</strong>
                <a href="/blog" className="blog-filter-chip__clear" aria-label="Clear filter">×</a>
              </span>
            </div>
          )}
        </header>

        {/* ── 3-column grid — all posts ── */}
        {data?.data?.length ? (
          <div className="blog-grid blog-grid--three-col">
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
