import HeroSection from "@/components/homepage/sections/Hero";
import MostPopularProducts from "@/components/homepage/sections/MostPopularProducts";

import TopCategories from "@/components/homepage/sections/TopCategories";
import FlashSale from "@/components/homepage/sections/FlashSaleSection";
export default async function Home() {
  const res = await fetch("https://g-shop-server.vercel.app/api/category");
  const data = await res.json();
  return (
    <>
      <HeroSection data={data} />
      <FlashSale />
      <TopCategories />
      <MostPopularProducts />
    </>
  );
}
