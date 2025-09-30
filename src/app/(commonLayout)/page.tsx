import AboutMeSection from "@/components/modules/Home/AboutMeSection";
import BannerSection from "@/components/modules/Home/BannerSection";

const HomePage = () => {
  return (
    <div className="bg-[#0B0E18]">
      <BannerSection />
      <AboutMeSection />
    </div>
  );
};

export default HomePage;
