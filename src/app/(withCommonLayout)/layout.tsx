import MultipleItems from "@/components/homepage/Hero";
import Affiliation from "@/components/homepage/sections/Affiliation";
import CardSection from "@/components/homepage/sections/CardSection";
import MostPopularProducts from "@/components/homepage/sections/MostPopularProducts";
import TopCategories from "@/components/homepage/sections/TopCategories";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <MultipleItems />
      {children}
      <CardSection />
      <TopCategories />
      <MostPopularProducts />
      <Affiliation />
      <Footer />
    </>
  );
};

export default CommonLayout;
