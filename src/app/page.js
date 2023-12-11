import BestSelling from "./pageSections/bestSelling";
import FeaturedBooks from "./pageSections/featuredBooks";
import Features from "./pageSections/featuresSection";
import Hero from "./pageSections/heroSection";

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
