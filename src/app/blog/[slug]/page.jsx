import Image from "next/image";
import { notFound } from "next/navigation";
import { getBaseUrl } from "@/lib/base-url";
import BlogBackGuard from "@/components/BlogBackGuard";
import "@/styles/blog.css";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const fetchBlog = async (slug) => {
  const baseUrl = await getBaseUrl();
  try {
    const res = await fetch(`${baseUrl}/api/blog/${slug}`, { cache: "no-store" });

    if (res.status === 404) {
      return null;
    }

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error(`fetchBlog failed: ${res.status} ${res.statusText}`, body);
      return null;
    }

    return res.json();
  } catch (error) {
    console.error("fetchBlog request failed", error);
    return null;
  }
};

const fetchRelated = async (slug) => {
  const baseUrl = await getBaseUrl();
  const res = await fetch(`${baseUrl}/api/blog?relatedTo=${slug}&limit=4`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) return { data: [] };
  return res.json();
};

export async function generateMetadata(props) {
  const params = await props?.params;
  const slug = params?.slug;
  const blog = slug ? await fetchBlog(slug) : null;

  if (!blog) {
    return {
      title: "Post Not Found",
    };
  }

  const baseUrl = await getBaseUrl();
  
  // Use metaTitle if available, otherwise use title
  const metaTitle = blog.metaTitle?.trim() || blog.title;
  
  // Use metaDescription if available, otherwise extract from content
  const metaDescription = blog.metaDescription?.trim() || 
    blog.content.replace(/<[^>]+>/g, " ").trim().slice(0, 160);
  
  // Use ogImage if available, otherwise use coverImg
  const imageUrl = blog.ogImage?.trim() || blog.coverImg?.trim();
  const isExternalImage = Boolean(imageUrl && /^(https?:)?\/\//i.test(imageUrl));
  const ogImage = imageUrl
    ? isExternalImage
      ? imageUrl
      : new URL(imageUrl, baseUrl).toString()
    : undefined;
  
  const canonical = new URL(`/blog/${blog.slug}`, baseUrl).toString();
  
  // Generate image alt text
  const imageAlt = `Cover image for ${blog.title}`;

  const resolvedKeywords = Array.isArray(blog.keywords) && blog.keywords.length ? blog.keywords : blog.tags || [];

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      images: ogImage ? [
        {
          url: ogImage,
          alt: imageAlt,
        }
      ] : undefined,
      type: "article",
      url: canonical,
      siteName: "NIDADS",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: ogImage ? [
        {
          url: ogImage,
          alt: imageAlt,
        }
      ] : undefined,
    },
    keywords: resolvedKeywords,
    alternates: { canonical },
  };
}

export default async function BlogDetails(props) {
  const params = await props?.params;
  const slug = params?.slug;
  const blog = slug ? await fetchBlog(slug) : null;

  if (!blog) {
    notFound();
  }

  const related = await fetchRelated(slug);
  const cover = blog.coverImg?.trim();
  const isExternalCover = Boolean(cover && /^(https?:)?\/\//i.test(cover));
  const hasCover = Boolean(cover);
  const imageSrc = hasCover ? cover : "/placeholder.svg";
  const isPlaceholder = !hasCover;

  const baseUrl = await getBaseUrl();
  const canonical = `${baseUrl}/blog/${blog.slug}`;

  const schemas = [];
  if (Array.isArray(blog.schemas)) {
    for (const schema of blog.schemas) {
      if (schema && typeof schema === "object") schemas.push(schema);
    }
  }
  if (blog.schema && typeof blog.schema === "object") schemas.push(blog.schema);
  if (blog.faqSchema && typeof blog.faqSchema === "object") schemas.push(blog.faqSchema);

  const fallbackJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    url: canonical,
    datePublished: blog.createdAt,
    dateModified: blog.updatedAt ?? blog.createdAt,
    author: {
      "@type": "Person",
      name: "Editorial Team",
    },
    publisher: {
      "@type": "Organization",
      name: "NIDADS",
    },
    image: hasCover
      ? isExternalCover
        ? imageSrc
        : new URL(imageSrc, baseUrl).toString()
      : undefined,
    description: blog.content.replace(/<[^>]+>/g, " ").slice(0, 160),
  };

  return (
    <main id="main-content" className="blog-detail" role="main">
      {/* Intercepts browser back/forward to force hard reload instead of
          React DOM reconciliation — prevents insertBefore crash from
          SEO browser extensions modifying the DOM */}
      <BlogBackGuard />
      <div className="blog-detail__layout">
        {/* ── Main article column ── */}
        <article className="blog-detail__main" aria-labelledby="blog-title">
          <header>
            <p className="eyebrow">{new Date(blog.createdAt).toLocaleDateString()}</p>
            {blog.category ? (
              <span className="blog-category-chip">{blog.category}</span>
            ) : null}
            <h1 id="blog-title">{blog.title}</h1>
            {blog.tags?.length ? <p className="tags">{blog.tags.join(" / ")}</p> : null}
          </header>

          <div className={`cover${isPlaceholder ? " cover--placeholder" : ""}`}>
            <Image
              src={imageSrc}
              alt={blog.title}
              fill
              sizes="(max-width: 900px) 100vw, 780px"
              priority
              style={{ objectFit: "cover" }}
              unoptimized={isExternalCover}
            />
            {isPlaceholder ? <span className="cover__hint">Upload a cover image from the admin panel.</span> : null}
          </div>

          <div className="content" dangerouslySetInnerHTML={{ __html: blog.content }} />
        </article>

        {/* ── Sidebar column ── */}
        <aside className="blog-detail__sidebar">
          {/* Category card */}
          {blog.category ? (
            <div className="sidebar-card sidebar-category">
              <p className="sidebar-card__label">Category</p>
              <a
                href={`/blog?category=${encodeURIComponent(blog.category)}`}
                className="sidebar-category__chip"
              >
                {blog.category}
              </a>
              <p className="sidebar-card__hint">Browse all posts in this category</p>
            </div>
          ) : null}

          {/* Recommended posts */}
          {related?.data?.length ? (
            <div className="sidebar-card sidebar-recommended">
              <p className="sidebar-card__label">Recommended Posts</p>
              <ul className="sidebar-recommended__list">
                {related.data.map((item) => {
                  const rawCover = item.coverImg?.trim();
                  const hasImg = Boolean(rawCover);
                  const isExt = Boolean(rawCover && /^(https?:)?\/\//i.test(rawCover));
                  return (
                    <li key={item.id}>
                      <a href={`/blog/${item.slug}`} className="sidebar-recommended__item">
                        <div className="sidebar-recommended__thumb">
                          <Image
                            src={hasImg ? rawCover : "/placeholder.svg"}
                            alt={item.title}
                            fill
                            sizes="72px"
                            style={{ objectFit: "cover" }}
                            unoptimized={isExt}
                          />
                        </div>
                        <div className="sidebar-recommended__info">
                          <span className="sidebar-recommended__title">{item.title}</span>
                          {item.category ? (
                            <span className="sidebar-recommended__cat">{item.category}</span>
                          ) : item.tags?.length ? (
                            <span className="sidebar-recommended__cat">{item.tags[0]}</span>
                          ) : null}
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}

          {/* Tags card */}
          {blog.tags?.length ? (
            <div className="sidebar-card sidebar-tags">
              <p className="sidebar-card__label">Tags</p>
              <div className="sidebar-tags__list">
                {blog.tags.map((tag) => (
                  <a
                    key={tag}
                    href={`/blog?tag=${encodeURIComponent(tag)}`}
                    className="sidebar-tag"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </aside>
      </div>

      {/* JSON-LD structured data — placed at end so SEO browser extensions
          that move <script type="application/ld+json"> tags don't break
          React's DOM reconciliation on back-navigation */}
      {schemas.length
        ? schemas.map((schema, index) => (
            <script
              key={index}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
          ))
        : (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(fallbackJsonLd) }}
          />
        )}
    </main>
  );
}
