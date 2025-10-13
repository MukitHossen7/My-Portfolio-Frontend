import ManageBlogCardSkeleton from "../../../../components/modules/Blogs/ManageBlogCardSkeleton";

const ManageBlogLoading = () => {
  return (
    <div className="grid grid-cols-1 gap-6 py-10 px-4 lg:px-10">
      {Array.from({ length: 4 }).map((_, idx) => (
        <ManageBlogCardSkeleton key={idx} />
      ))}
    </div>
  );
};

export default ManageBlogLoading;
