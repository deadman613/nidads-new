import Image from "next/image";

const formatDate = (value) =>
  new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(new Date(value));

const BlogCard = ({ blog }) => {
  if (!blog) return null;
  const rawCover = blog.coverImg?.trim();
  const isExternalCover = Boolean(rawCover && /^(https?:)?\/\//i.test(rawCover));
  const hasCover = Boolean(rawCover);
  const cover = hasCover ? rawCover : "/placeholder.svg";
  const href = `/blog/${blog.slug}`;

  /*
   * Using plain <a href> instead of Next.js <Link> intentionally.
   *
   * Why: Next.js <Link> uses client-side navigation (React reconciliation).
   * When a browser extension like "Detailed SEO Extension" modifies the DOM
   * on the blog post page, React's fiber references become stale. On back
   * navigation, React's insertBefore call fails because the reference node
   * has been moved by the extension — "not a child of this node" crash.
   *
   * Plain <a href> forces a full page load for blog post navigation.
   * This means the browser's back button also does a full page load (it
   * mirrors the navigation type used to arrive at the page). A fresh DOM
   * load completely sidesteps the extension interference issue.
   */
  return (
    <article className="blog-card">
      <a
        href={href}
        className={`blog-card__image${hasCover ? "" : " blog-card__image--placeholder"}`}
        aria-label={`Read ${blog.title}`}
      >
        <Image
          src={cover}
          alt={blog.title}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 320px, 360px"
          priority={false}
          style={{ objectFit: "cover" }}
          unoptimized={isExternalCover}
        />
        {!hasCover ? <span>No cover image set.</span> : null}
      </a>
      <div className="blog-card__body">
        <div className="blog-card__meta">
          <span>{formatDate(blog.createdAt)}</span>
          <span>&bull;</span>
          <span>{blog.tags?.slice(0, 2).join(" • ") || "General"}</span>
        </div>
        <h3>
          <a href={href}>{blog.title}</a>
        </h3>
        <a href={href} className="blog-card__cta">
          Continue reading →
        </a>
      </div>
    </article>
  );
};

export default BlogCard;
