import ManageProjectCard from "@/components/modules/Project/ManageProjectCard";
import { getAllProjects } from "@/services/projectServices";
import { IProjectFormData } from "@/types";

const ManageProjectPage = async () => {
  const { data: projects } = await getAllProjects();
  return (
    <div className="py-10">
      <div className="grid grid-cols-1 gap-6">
        {projects?.map((project: IProjectFormData) => (
          <ManageProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ManageProjectPage;
