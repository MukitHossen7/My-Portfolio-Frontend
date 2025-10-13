import { Metadata } from "next";
import { getAllProjects } from "../../../services/projectServices";
import { IProject } from "../../../types";
import ProjectCard from "../../../components/modules/Project/ProjectCard";

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
        <h1 className="text-2xl md:text-3xl font-semibold text-center text-gray-100 mb-2">
          All Projects
        </h1>
        <div className="flex justify-center mb-8">
          <div className="flex flex-col gap-1">
            <div className="w-24 h-[3px] bg-cyan-500 rounded-full ml-10"></div>
            <div className="w-16 h-[3px] bg-purple-500 rounded-full ml-16"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projectData.map((project: IProject) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
