import BlogCard from "@/components/modules/Blogs/BlogCard";
import { getAllBlogs } from "@/services/blogServices";
import { IBlog } from "@/types";

const BlogPage = async () => {
  const { data: blogData } = await getAllBlogs();
  return (
    <div className="bg-[#020617]">
      <div className="py-12 max-w-7xl mx-auto ">
        <h1 className="text-gray-100 text-3xl font-bold mb-8">My Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          {blogData.map((blog: IBlog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
