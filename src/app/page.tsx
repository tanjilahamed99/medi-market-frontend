import Banner from "@/components/shared/Banner";
import CommonProducts from "@/pages/home/CommonProducts";
import Contact from "@/pages/home/Contact";
import FeaturedProducts from "@/pages/home/FeaturedProducts";
import HomeMap from "@/pages/home/HomeMap";
import NewsLatter from "@/pages/home/NewsLatter";
import TopSellingProducts from "@/pages/home/TopSellingProducts";
import Welcome from "@/pages/home/Welcome";

export default function Home() {
  return (
    <main>
      <Banner />
      <CommonProducts />
      <FeaturedProducts />
      <Welcome />
      <TopSellingProducts />
      <NewsLatter />
      <Contact />
      <HomeMap />
    </main>
  );
}
