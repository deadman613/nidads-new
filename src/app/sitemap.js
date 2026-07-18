import { courses } from "@/data/courses";
import { STATIC_ROUTES } from "@/lib/site-routes";

/**
 * Next.js App Router sitemap.
 * Auto-generates /sitemap.xml from:
 *   - STATIC_ROUTES  (src/lib/site-routes.js) — add new pages there
 *   - courses        (src/data/courses.js)     — add new courses there
 *   - blog posts     — fetched live from the DB
 */
export default async function sitemap() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    process.env.NEXT_PUBLIC_APP_URL ||
    "https://www.nidads.com";

  // ── 1. Static pages ────────────────────────────────────────────────────────
  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFreq || "weekly",
    priority: route.priority ?? 0.8,
  }));

  // ── 2. Course detail pages (from courses data) ─────────────────────────────
  const courseEntries = courses.map((course) => ({
    url: `${baseUrl}/course/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // ── 3. Blog posts (live from DB) ───────────────────────────────────────────
  let blogEntries = [];
  try {
    const { default: prisma } = await import("@/lib/prisma");
    const blogs = await prisma.blog.findMany({
      select: { slug: true, updatedAt: true },
      orderBy: { createdAt: "desc" },
    });
    blogEntries = blogs.map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: blog.updatedAt || new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    }));
  } catch {
    // DB unavailable at build time — blog entries omitted from XML
  }

  return [...staticEntries, ...courseEntries, ...blogEntries];
}