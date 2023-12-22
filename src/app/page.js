import BestSelling from "./page-sections/best-selling";
import FeaturedBooks from "./page-sections/featured-books";
import Features from "./page-sections/features-section";
import Hero from "./page-sections/hero-section";

export const metadata = {
  title: "Bookshop - Home",
  description: "Home Page description",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturedBooks />
      <BestSelling />
    </>
  );
}
