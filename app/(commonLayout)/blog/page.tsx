import { Metadata } from "next";
import BlogCard from "../../../components/modules/Blogs/BlogCard";
import { getAllBlogs } from "../../../services/blogServices";
import { IBlog } from "../../../types";

export const metadata: Metadata = {
  title: "Mukit Hossen - Blog | Web Development Articles",
  description:
    "Read Mukit Hossen's blogs on web development, React, Next.js, JavaScript tips, and professional insights.",
};

const BlogPage = async () => {
  const { data: blogData } = await getAllBlogs();
  return (
    <div className="bg-[#020617]">
      <div className="py-12 max-w-7xl mx-auto px-4 lg:px-0">
        <h1 className="text-2xl md:text-3xl font-semibold text-center text-gray-100 mb-2">
          My Blogs
        </h1>
        <div className="flex justify-center mb-8">
          <div className="flex flex-col gap-1">
            <div className="w-24 h-[3px] bg-cyan-500 rounded-full ml-8"></div>
            <div className="w-16 h-[3px] bg-purple-500 rounded-full ml-16"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {blogData.map((blog: IBlog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
