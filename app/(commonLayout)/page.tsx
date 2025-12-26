import { Suspense } from "react";
import AboutMeSection from "../../components/modules/Home/AboutMeSection";
import BannerSection from "../../components/modules/Home/BannerSection";

import ProjectCardSkeleton from "../../components/modules/Project/ProjectCardSkeleton";
import ProjectCard from "../../components/modules/Project/ProjectCard";
import { IProject } from "../../types";
import { Metadata } from "next";
import SkillSection from "../../components/modules/Home/SkillSection";
import RecentProject from "../../components/modules/Home/RecentProject";
import { getAllProjects } from "../../services/projectServices";

export const metadata: Metadata = {
  title: "Mukit Hossen - Home | FullStack Developer Portfolio",
  description:
    "Welcome to Mukit Hossen's portfolio. Explore projects, blogs, and professional profile built with React, Next.js, and JavaScript.",
};

const HomePage = async () => {
  const { data: projectData } = await getAllProjects();
  return (
    <div className="bg-[#020617]">
      <BannerSection />
      <AboutMeSection />
      <SkillSection />
      <RecentProject />
      <Suspense
        fallback={
          <div className="grid grid-cols-1 lg:grid-cols-2 px-4 md:px-6 lg:px-0 gap-6 max-w-7xl mx-auto pb-16">
            {Array(2)
              .fill(0)
              .map((_, idx) => (
                <ProjectCardSkeleton key={idx} />
              ))}
          </div>
        }
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto px-4 md:px-6 lg:px-0 gap-6 pb-16">
          {projectData?.slice(0, 2).map((project: IProject) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default HomePage;
