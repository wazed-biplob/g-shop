import HeroSection from "@/components/homepage/sections/Hero";
import MultipleItems from "@/components/homepage/sections/Hero";
import Affiliation from "@/components/homepage/sections/Affiliation";
import FlashSale from "@/components/homepage/sections/CardSection";
import MostPopularProducts from "@/components/homepage/sections/MostPopularProducts";
import TopCategories from "@/components/homepage/sections/TopCategories";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const CommonLayout = async ({ children }: { children: React.ReactNode }) => {
  const res = await fetch("https://g-shop-server.vercel.app/api/category");
  const data = await res.json();
  return (
    <>
      <Navbar />
      <HeroSection data={data} />
      {children}
      <FlashSale />
      <TopCategories />
      <MostPopularProducts />
      <Affiliation />
      <Footer />
    </>
  );
};

export default CommonLayout;
