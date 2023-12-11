import BestSelling from "./components/best-selling";
import FeaturedBooks from "./components/featured-books";
import Features from "./components/features";
import Footer from "./components/footer";
import Hero from "./components/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturedBooks />
      <BestSelling />
      <Footer />
    </>
  );
}
