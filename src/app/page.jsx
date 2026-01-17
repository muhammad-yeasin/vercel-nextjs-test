import Hero from "@/components/pages/Home/Hero";
import Deals from "@/components/pages/Home/Deals";
import Image from "next/image";
import Categories from "@/components/pages/Home/Categories";
import FeaturedProducts from "@/components/pages/Home/FeaturedProducts";
import TrendingNow from "@/components/pages/Home/TrendingNow";
import Benefits from "@/components/pages/Home/Benefits";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <TrendingNow />
      <Benefits />
      <Deals />
    </main>
  );
}
