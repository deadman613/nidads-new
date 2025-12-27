import AboutSection1 from "@/components/AboutSection/AboutSection1";
import AboutSection2 from "@/components/AboutSection/AboutSection2";
import "@/styles/blog.css";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main >
      <AboutSection1 />
      <AboutSection2 />
    </main>
  );
}
