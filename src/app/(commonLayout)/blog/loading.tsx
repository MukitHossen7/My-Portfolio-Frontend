import BlogCardSkeleton from "@/components/modules/Blogs/BlogCardSkeleton";

const blogLoading = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  py-12 max-w-7xl mx-auto ">
      {Array.from({ length: 2 }).map((_, idx) => (
        <BlogCardSkeleton key={idx} />
      ))}
    </div>
  );
};

export default blogLoading;
