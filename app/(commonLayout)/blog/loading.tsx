import BlogCardSkeleton from "../../../components/modules/Blogs/BlogCardSkeleton";

const blogLoading = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-12 pt-24 max-w-7xl mx-auto px-4 lg:px-0 ">
      {Array.from({ length: 2 }).map((_, idx) => (
        <BlogCardSkeleton key={idx} />
      ))}
    </div>
  );
};

export default blogLoading;
