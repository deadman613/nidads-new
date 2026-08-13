import { buildMeta } from "@/lib/seo";

export const metadata = buildMeta({
  title: "Post Graduation Program in Artificial Intelligence",
  description:
    "Advance from practitioner to expert. A 2-year postgraduate program combining a UGC-approved master's degree with NIDADS' advanced AI curriculum — built for professionals and ambitious graduates.",
  path: "/course/pg-program-in-ai",
  ogImage:
    "https://www.nidads.com/TensorFlow%20(1)/Advanced%20Certification%20in%20Data%20Science%20&%20AI%20(6%20Months).png",
  keywords: [
    "PG program in AI",
    "postgraduate AI program",
    "masters in AI Delhi",
    "UGC approved PG AI",
    "NIDADS PG program",
    "artificial intelligence masters India",
  ],
});

const productSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  name: "Post Graduation Program in Artificial Intelligence",
  image:
    "https://www.nidads.com/TensorFlow%20(1)/Advanced%20Certification%20in%20Data%20Science%20&%20AI%20(6%20Months).png",
  description:
    "Advance from practitioner to expert. A 2-year postgraduate program combining a UGC-approved master's degree with NIDADS' advanced AI curriculum — built for professionals and ambitious graduates.",
  brand: { "@type": "Brand", name: "NIDADS" },
  offers: {
    "@type": "AggregateOffer",
    url: "https://www.nidads.com/course/pg-program-in-ai",
    priceCurrency: "",
    lowPrice: "",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "1043",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.nidads.com/" },
    { "@type": "ListItem", position: 2, name: "Course", item: "https://www.nidads.com/course" },
    { "@type": "ListItem", position: 3, name: "Post Graduation Program in Artificial Intelligence", item: "https://www.nidads.com/course/pg-program-in-ai" },
  ],
};

export default function PgLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
