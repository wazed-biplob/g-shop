import MultipleItems from "@/components/homepage/Hero";
import CardSection from "@/components/homepage/sections/CardSection";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <MultipleItems />
      {children}
      <CardSection />
      <Footer />
    </>
  );
};

export default CommonLayout;
