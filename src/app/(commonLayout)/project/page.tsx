import ProjectCard from "@/components/modules/Project/ProjectCard";

import { getAllProjects } from "@/services/projectServices";
import { IProject } from "@/types";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | All Projects",
  description:
    "Browse my portfolio projects built with React.js, Next.js, Node.js, Express.js, MongoDB, Mongoose, Prisma, PostgreSQL, TailwindCSS, JavaScript, TypeScript, and Redux. Showcasing clean UI, strong functionality, and modern web development.",
};

const ProjectPage = async () => {
  const { data: projectData } = await getAllProjects();
  return (
    <div className="bg-[#020617]">
      <div className="py-12 max-w-7xl mx-auto px-4 lg:px-0">
        <h1 className="text-gray-100 text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-center">
          All Projects
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
          {projectData.map((project: IProject) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
