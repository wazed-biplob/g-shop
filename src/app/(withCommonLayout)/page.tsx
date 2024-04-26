import HeroSection from "@/components/homepage/sections/Hero";
import TopCategories from "@/components/homepage/sections/TopCategories";
import FlashSale from "@/components/homepage/sections/FlashSaleSection";
import TrendingProducts from "@/components/homepage/sections/TrendingProducts";
import StateSection from "@/components/homepage/sections/StateSection";

const HomePage = async () => {
  const res = await fetch("https://ocean-server.vercel.app/api/fish", {
    cache: "no-store",
  });
  const data = await res.json();
  return (
    <div className="font-sans">
      <HeroSection data={data} />
      <FlashSale />
      <TopCategories />
      <TrendingProducts />
      <StateSection />
    </div>
  );
};

export default HomePage;
