import Banner from "@/components/shared/Banner";
import CommonProducts from "@/pages/home/CommonProducts";
import Contact from "@/pages/home/Contact";
import HomeMap from "@/pages/home/HomeMap";
import NewsLatter from "@/pages/home/NewsLatter";

export default function Home() {
  return (
    <main>
      <Banner />
      <CommonProducts />
      <NewsLatter />
      <Contact />
      <HomeMap />
    </main>
  );
}
