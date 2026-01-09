import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { getBaseUrl } from "@/lib/base-url";
import "@/styles/blog.css";

const fetchBlogs = async (searchParams) => {
  const baseUrl = await getBaseUrl();
  const queryString = new URLSearchParams(searchParams).toString();
  const separator = queryString ? "?" : "";
  const res = await fetch(`${baseUrl}/api/blog${separator}${queryString}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return res.json();
};

export const metadata = {
  title: "Blog",
  description: "Latest posts across every site using this shared template.",
};

export default async function BlogPage({ searchParams }) {
  const params = (await searchParams) || {};
  const resolvedParams = { ...params };
  const page = Number(resolvedParams.page) || 1;
  const searchQuery = resolvedParams.search || "";

  let data;
  try {
    data = await fetchBlogs({ ...resolvedParams, page });
  } catch (error) {
    console.error(error);
    data = { data: [], pagination: { page: 1, totalPages: 1, limit: 0, total: 0 } };
  }

  return (
    <div className="blog-page">
      <main id="main-content" className="blog-index" role="main">
        {/* Header */}
        <header className="blog-index__hero">
          <div>
            <p className="blog-index__eyebrow">Stories & Updates</p>
            <h1>Blog</h1>
            <p>
              Search by title, keywords, or tags. Everything is backed by Prisma and PostgreSQL.
            </p>
          </div>
        </header>

        {/* Search Form */}
        <form className="blog-search" action="/blog" method="GET" role="search" aria-label="Blog search">
          <input
            type="search"
            name="search"
            placeholder="Search title, content, or tags..."
            defaultValue={searchQuery}
            aria-label="Search blog posts"
          />
          <button type="submit">Search</button>
        </form>

        {/* Blog Grid */}
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p>No posts yet. Head to the admin area to create one.</p>
          </div>
        )}

        {/* Pagination */}
        {data?.pagination?.totalPages > 1 && (
          <nav className="pagination" aria-label="Pagination">
            {Array.from({ length: data.pagination.totalPages }).map((_, index) => {
              const pageNumber = index + 1;
              const isActive = pageNumber === data.pagination.page;
              const paramsClone = new URLSearchParams(resolvedParams);
              paramsClone.set("page", pageNumber.toString());

              return (
                <Link
                  key={pageNumber}
                  href={`/blog?${paramsClone.toString()}`}
                  aria-current={isActive ? "page" : undefined}
                  className={isActive ? "pagination__link pagination__link--active" : "pagination__link"}
                >
                  {pageNumber}
                </Link>
              );
            })}
          </nav>
        )}
      </main>
    </div>
  );
}
