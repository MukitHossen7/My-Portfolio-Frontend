import BlogCard from "@/components/modules/Blogs/BlogCard";
import { getAllBlogs } from "@/services/blogServices";
import { IBlog } from "@/types";

const BlogPage = async () => {
  const { data: blogData } = await getAllBlogs();
  return (
    <div className="bg-[#020617]">
      <div className="py-12 max-w-7xl mx-auto px-4 lg:px-0">
        <h1 className="text-gray-100 text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-center">
          My Blogs
        </h1>
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
