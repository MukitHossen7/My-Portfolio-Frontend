import { Metadata } from "next";
import ProjectCreateForm from "../../../../components/modules/Project/CreateProjectFrom";

export const metadata: Metadata = {
  title: "Mukit Hossen - Create Project | Portfolio Dashboard",
  description:
    "Add new projects to Mukit Hossen’s portfolio dashboard. Showcase professional React, Next.js, and full-stack web development projects with detailed descriptions and images.",
};

const CreateProjectPage = () => {
  return (
    <div>
      <ProjectCreateForm />
    </div>
  );
};

export default CreateProjectPage;
