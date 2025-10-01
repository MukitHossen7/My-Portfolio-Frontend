import { getBlogBySlug } from "@/services/blogServices";
import { IBlog } from "@/types";

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`);
  const { data: blogs } = await res.json();
  return blogs.map((blog: IBlog) => ({
    blogSlug: String(blog.slug),
  }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ blogSlug: string }>;
}) => {
  const { blogSlug } = await params;
  const { data: blog } = await getBlogBySlug(blogSlug);
  return {
    title: blog?.title,
    description: blog?.content,
  };
};

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogSlug: string }>;
}) => {
  const { blogSlug } = await params;
  const { data: blogData } = await getBlogBySlug(blogSlug);
  console.log(blogData);
  return (
    <div>
      <h2>This is Blog Details Page</h2>
    </div>
  );
};

export default BlogDetailsPage;
