import { Metadata } from "next";
import ManageBlogCard, {
  Blog,
} from "../../../../components/modules/Blogs/ManageBlogCard";
import { getAllBlogs } from "../../../../services/blogServices";

export const metadata: Metadata = {
  title: "Mukit Hossen - Manage Blog | Portfolio Dashboard",
  description:
    "Manage, edit, or delete existing blogs from Mukit Hossen’s portfolio dashboard. Keep your web development content organized and up-to-date.",
};

const ManageBlogPage = async () => {
  const { data: blogs } = await getAllBlogs();
  return (
    <div className="py-10 px-4 lg:px-10">
      <div className="grid grid-cols-1 gap-6">
        {blogs?.map((blog: Blog) => (
          <ManageBlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default ManageBlogPage;
