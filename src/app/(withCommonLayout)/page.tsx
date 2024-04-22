import HeroSection from "@/components/homepage/sections/Hero";
import MostPopularProducts from "@/components/homepage/sections/MostPopularProducts";
import TopCategories from "@/components/homepage/sections/TopCategories";
import FlashSale from "@/components/homepage/sections/FlashSaleSection";
import TrendingProducts from "@/components/homepage/sections/TrendingProducts";
const HomePage = async () => {
  const res = await fetch(
    "https://oceans-bounty-server.vercel.app/api/category"
  );
  const data = await res.json();
  return (
    <>
      <HeroSection data={data} />
      <FlashSale />
      <TrendingProducts />
      <TopCategories />
      <MostPopularProducts />
    </>
  );
};

export default HomePage;
