import { getBaseUrl } from "@/lib/base-url";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import "@/styles/blog.css";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Blog",
  description: "Read the latest articles, guides, and updates from NIDADS.",
};

/* ─────────────────────────────────────────────────── data helpers ── */

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

const fetchCategories = async () => {
  const baseUrl = await getBaseUrl();
  try {
    const res = await fetch(`${baseUrl}/api/blog/categories`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
};

const fetchLatest = async () => {
  const baseUrl = await getBaseUrl();
  try {
    const res = await fetch(`${baseUrl}/api/blog?limit=5`, {
      next: { revalidate: 120 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data || [];
  } catch {
    return [];
  }
};

/* ─────────────────────────────────────────────────────── page ── */

export default async function BlogPage({ searchParams }) {
  const params = (await searchParams) || {};
  const page = Number(params.page) || 1;
  const searchQuery = params.search || "";
  const activeCategory = params.category || "";

  const [data, categories, latest] = await Promise.all([
    fetchBlogs({ ...params, page }),
    fetchCategories(),
    fetchLatest(),
  ]);

  return (
    <div className="blog-page">
      <main id="main-content" className="blog-index" role="main">
        {/* ── Hero ── */}
        <header className="blog-index__hero">
          <div>
            <p className="blog-index__eyebrow">Stories &amp; Updates</p>
            <h1>Blog</h1>
            <p>Explore our latest articles, tips, and industry insights.</p>
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
          {/* Preserve active category filter while searching */}
          {activeCategory && (
            <input type="hidden" name="category" value={activeCategory} />
          )}
          <button type="submit">Search</button>
        </form>

        {/* ── Body: posts grid + sidebar ── */}
        <div className="blog-body">
          {/* ── Posts column ── */}
          <section className="blog-body__posts">
            {/* Active filter chip */}
            {(activeCategory || searchQuery) && (
              <div className="blog-filter-bar">
                {activeCategory && (
                  <span className="blog-filter-chip">
                    Category: <strong>{activeCategory}</strong>
                    <a href="/blog" className="blog-filter-chip__clear" aria-label="Clear filter">
                      ×
                    </a>
                  </span>
                )}
                {searchQuery && (
                  <span className="blog-filter-chip">
                    Search: <strong>{searchQuery}</strong>
                    <a href="/blog" className="blog-filter-chip__clear" aria-label="Clear search">
                      ×
                    </a>
                  </span>
                )}
              </div>
            )}

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
                <p>No posts found. Please check back soon.</p>
                {(activeCategory || searchQuery) && (
                  <a href="/blog" className="blog-empty__reset">View all posts</a>
                )}
              </div>
            )}

            {/* Pagination */}
            {data?.pagination?.totalPages > 1 && (
              <nav className="pagination" aria-label="Pagination">
                {Array.from({ length: data.pagination.totalPages }).map((_, index) => {
                  const pageNumber = index + 1;
                  const isActive = pageNumber === data.pagination.page;
                  const paramsClone = new URLSearchParams(params);
                  paramsClone.set("page", pageNumber.toString());
                  return (
                    <Link
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
                    </Link>
                  );
                })}
              </nav>
            )}
          </section>

          {/* ── Right sidebar ── */}
          <aside className="blog-body__sidebar">
            {/* Category filter card */}
            {categories.length > 0 && (
              <div className="bl-sidebar-card">
                <p className="bl-sidebar-card__label">Browse by Category</p>
                <ul className="bl-category-list">
                  <li>
                    <a
                      href="/blog"
                      className={`bl-category-item${!activeCategory ? " bl-category-item--active" : ""}`}
                    >
                      <span>All Posts</span>
                      <span className="bl-category-count">{data?.pagination?.total ?? ""}</span>
                    </a>
                  </li>
                  {categories.map(({ category, count }) => (
                    <li key={category}>
                      <a
                        href={`/blog?category=${encodeURIComponent(category)}`}
                        className={`bl-category-item${
                          activeCategory === category ? " bl-category-item--active" : ""
                        }`}
                      >
                        <span>{category}</span>
                        <span className="bl-category-count">{count}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Latest posts card */}
            {latest.length > 0 && (
              <div className="bl-sidebar-card">
                <p className="bl-sidebar-card__label">Latest Posts</p>
                <ul className="bl-latest-list">
                  {latest.map((post) => (
                    <li key={post.id}>
                      <a href={`/blog/${post.slug}`} className="bl-latest-item">
                        <span className="bl-latest-item__title">{post.title}</span>
                        {post.category && (
                          <span className="bl-latest-item__cat">{post.category}</span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </main>
    </div>
  );
}
