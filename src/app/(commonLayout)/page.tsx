import AboutMeSection from "@/components/modules/Home/AboutMeSection";
import BannerSection from "@/components/modules/Home/BannerSection";
import SkillSection from "@/components/modules/Home/SkillSection";

const HomePage = () => {
  return (
    <div className="bg-[#0B0E18]">
      <BannerSection />
      <AboutMeSection />
      <SkillSection />
    </div>
  );
};

export default HomePage;
