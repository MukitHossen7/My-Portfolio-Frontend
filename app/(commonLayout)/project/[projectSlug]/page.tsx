import ProjectDetailsCard from "../../../../components/modules/Project/ProjectDetailsCard";
import { getProjectById } from "../../../../services/projectServices";
import { IProject } from "../../../../types";

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`);
  const { data: projects } = await res.json();
  return projects.map((project: IProject) => ({
    projectSlug: project.slug,
  }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ projectSlug: string }>;
}) => {
  const { projectSlug } = await params;
  const { data: project } = await getProjectById(projectSlug);
  return {
    title: project.title,
    description: project.description,
  };
};

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ projectSlug: string }>;
}) => {
  const { projectSlug } = await params;
  const { data: project } = await getProjectById(projectSlug);
  return (
    <div className="bg-[#020617]">
      <ProjectDetailsCard project={project} />
    </div>
  );
};

export default ProjectDetailsPage;
