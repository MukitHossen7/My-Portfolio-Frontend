import ProjectCard from "@/components/modules/Project/ProjectCard";
import ProjectCardSkeleton from "@/components/modules/Project/ProjectCardSkeleton";
import { getAllProjects } from "@/services/projectServices";
import { IProject } from "@/types";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Portfolio | All Projects",
  description:
    "Browse my portfolio projects built with React.js, Next.js, Node.js, Express.js, MongoDB, Mongoose, Prisma, PostgreSQL, TailwindCSS, JavaScript, TypeScript, and Redux. Showcasing clean UI, strong functionality, and modern web development.",
};

const ProjectPage = async () => {
  const { data: projectData } = await getAllProjects();
  return (
    <div className="bg-[#020617]">
      <div className="py-12 max-w-7xl mx-auto ">
        <h1 className="text-gray-100">This is project Page</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
          <Suspense
            fallback={Array.from({ length: 4 }).map((_, idx) => (
              <ProjectCardSkeleton key={idx} />
            ))}
          >
            {projectData.map((project: IProject) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
