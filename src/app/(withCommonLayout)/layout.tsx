import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Affiliation from "@/components/homepage/sections/Affiliation";

const CommonLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Affiliation />
      <Footer />
    </>
  );
};

export default CommonLayout;
