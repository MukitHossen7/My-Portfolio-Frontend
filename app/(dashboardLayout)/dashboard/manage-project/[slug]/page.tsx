import ProjectUpdateForm from "../../../../../components/modules/Project/ProjectUpdateForm";
import { getProjectById } from "../../../../../services/projectServices";

const ProjectUpdatePage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const { data: project } = await getProjectById(slug);
  return (
    <div className="bg-[#020617] min-h-screen flex justify-center items-start py-10 px-4 lg:px-10">
      <div className="w-full max-w-3xl border border-gray-800 rounded-md shadow-md p-6">
        <h1 className="text-gray-100 text-xl md:text-2xl text-center font-semibold mb-4">
          Update Project
        </h1>
        <ProjectUpdateForm project={project} />
      </div>
    </div>
  );
};

export default ProjectUpdatePage;
