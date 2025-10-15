import { Metadata } from "next";
import BlogCreateForm from "../../../../components/modules/Blogs/CreateBlogFrom";

export const metadata: Metadata = {
  title: "Mukit Hossen - Create Blog | Portfolio Dashboard",
  description:
    "Create and publish new blogs on Mukit Hossen’s professional portfolio dashboard. Share insights, tutorials, and web development experiences with the world.",
};

const CreateBlogPage = () => {
  return (
    <div>
      <BlogCreateForm />
    </div>
  );
};

export default CreateBlogPage;
