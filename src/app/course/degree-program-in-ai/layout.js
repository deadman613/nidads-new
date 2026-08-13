import { buildMeta } from "@/lib/seo";

export const metadata = buildMeta({
  title: "Degree Program in Artificial Intelligence",
  description:
    "Earn a UGC-approved university degree while mastering cutting-edge AI skills. Choose from DU SOL or Amity University Online — backed by 300+ hours of NIDADS AI specialization.",
  path: "/course/degree-program-in-ai",
  ogImage: "https://www.nidads.com/TensorFlow%20(1)/Diploma%20in%20Data%20Analytics%20&%20AI%20(12%20Months)%20SQL.png",
  keywords: [
    "degree program in AI",
    "UGC approved AI degree",
    "DU SOL AI",
    "Amity University AI",
    "NIDADS degree",
    "artificial intelligence degree Delhi",
  ],
});

const productSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  name: "Degree Program in Artificial Intelligence",
  image:
    "https://www.nidads.com/TensorFlow%20(1)/Diploma%20in%20Data%20Analytics%20&%20AI%20(12%20Months)%20SQL.png",
  description:
    "Earn a UGC-approved university degree while mastering cutting-edge AI skills. Choose from DU SOL or Amity University Online — backed by 300+ hours of NIDADS AI specialization.",
  brand: { "@type": "Brand", name: "NIDADS" },
  offers: {
    "@type": "AggregateOffer",
    url: "https://www.nidads.com/course/degree-program-in-ai",
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
    { "@type": "ListItem", position: 2, name: "Course", item: "https://www.nidads.com/course/degree-program-in-ai" },
    { "@type": "ListItem", position: 3, name: "Degree Program in Artificial Intelligence", item: "https://www.nidads.com/course/degree-program-in-ai" },
  ],
};

export default function DegreeLayout({ children }) {
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
