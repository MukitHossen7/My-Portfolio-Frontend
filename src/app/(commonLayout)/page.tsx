import AboutMeSection from "@/components/modules/Home/AboutMeSection";
import BannerSection from "@/components/modules/Home/BannerSection";
import RecentProject from "@/components/modules/Home/RecentProject";
import SkillSection from "@/components/modules/Home/SkillSection";
import ProjectCard from "@/components/modules/Project/ProjectCard";
import { getAllProjects } from "@/services/projectServices";
import { IProject } from "@/types";

const HomePage = async () => {
  const { data: projectData } = await getAllProjects();
  return (
    <div className="bg-[#0B0E18]">
      <BannerSection />
      <AboutMeSection />
      <SkillSection />
      <RecentProject />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto pb-16 md:pb-20">
        {projectData.map((project: IProject) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
