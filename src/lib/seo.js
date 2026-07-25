/**
 * Shared SEO metadata builder.
 * Import and use this in any page to generate consistent, rich metadata.
 *
 * Usage:
 *   export const metadata = buildMeta({
 *     title: "About Us",
 *     description: "Learn about NIDADS...",
 *     path: "/about",
 *   });
 */

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  process.env.NEXT_PUBLIC_APP_URL ||
  "https://www.nidads.com";

const DEFAULT_OG_IMAGE = `${BASE_URL}/Nidads-2.webp`;
const SITE_NAME = "NIDADS";

/**
 * @param {Object} opts
 * @param {string}  opts.title         – Page title (without " | NIDADS" — template adds it)
 * @param {string}  opts.description   – Meta description (120–160 chars)
 * @param {string}  opts.path          – Canonical path e.g. "/about"
 * @param {string}  [opts.ogImage]     – Full URL to OG image (defaults to logo)
 * @param {string}  [opts.ogType]      – "website" | "article" (default: "website")
 * @param {string[]} [opts.keywords]   – Array of keywords
 * @param {boolean} [opts.noIndex]     – Set true to noindex (e.g. admin pages)
 */
export function buildMeta({
  title,
  description,
  path,
  ogImage,
  ogType = "website",
  keywords = [],
  noIndex = false,
}) {
  const canonical = `${BASE_URL}${path}`;
  const image = ogImage || DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    ...(keywords.length ? { keywords } : {}),
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: ogType,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} — ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [image],
    },
    ...(noIndex
      ? { robots: { index: false, follow: false } }
      : {}),
  };
}

/**
 * Build Course JSON-LD structured data for Google rich results.
 * @param {Object} course  – course object from courses.js
 * @param {string} baseUrl – site base URL
 */
export function buildCourseSchema(course, baseUrl = BASE_URL) {
  const courseUrl = `${baseUrl}/course/${course.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.fullDescription || course.description,
    url: courseUrl,
    provider: {
      "@type": "EducationalOrganization",
      name: "National Institute of Data Analytics & Data Science (NIDADS)",
      url: baseUrl,
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Ground Floor, Savitri Cinema Complex, Block E, Greater Kailash II",
        addressLocality: "New Delhi",
        addressRegion: "Delhi",
        postalCode: "110048",
        addressCountry: "IN",
      },
    },
    educationalLevel: course.level,
    timeRequired: course.duration,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: course.mode || "blended",
      courseWorkload: course.duration,
    },
    ...(course.image
      ? { image: course.image.startsWith("http") ? course.image : `${baseUrl}${course.image}` }
      : {}),
    ...(course.rating
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: course.rating,
            bestRating: "5",
            worstRating: "1",
            ratingCount: course.students || 10,
          },
        }
      : {}),
    offers: {
      "@type": "Offer",
      price: (course.price || "").replace(/[^0-9]/g, "") || "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: courseUrl,
    },
    teaches: course.topics || [],
    inLanguage: "en-IN",
  };
}

/**
 * Build LocalBusiness JSON-LD (reused across pages).
 */
export function buildLocalBusinessSchema(baseUrl = BASE_URL) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "National Institute of Data Analytics & Data Science",
    alternateName: "NIDADS",
    image: `${baseUrl}/Nidads-2.webp`,
    url: baseUrl,
    telephone: "+919205436796",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Ground Floor, Savitri Cinema Complex, Block E, Greater Kailash II, Greater Kailash, New Delhi, Delhi 110048",
      addressLocality: "New Delhi",
      addressRegion: "DL",
      postalCode: "110048",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.54175912472231,
      longitude: 77.24015808075747,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
    sameAs: [
      "https://www.instagram.com/nidads_official/",
      "https://www.linkedin.com/in/national-institute-of-data-analytics-and-data-science-28b709381/",
    ],
  };
}
