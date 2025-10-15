import { Metadata } from "next";
import ManageProjectCard from "../../../../components/modules/Project/ManageProjectCard";
import { getAllProjects } from "../../../../services/projectServices";
import { IProjectFormData } from "../../../../types";

export const metadata: Metadata = {
  title: "Mukit Hossen - Manage Project | Portfolio Dashboard",
  description:
    "Manage and update existing portfolio projects from Mukit Hossen’s dashboard. Keep your React and Next.js projects organized and up-to-date.",
};

const ManageProjectPage = async () => {
  const { data: projects } = await getAllProjects();
  return (
    <div className="py-10 px-4 lg:px-10">
      <div className="grid grid-cols-1 gap-6">
        {projects?.map((project: IProjectFormData) => (
          <ManageProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ManageProjectPage;
