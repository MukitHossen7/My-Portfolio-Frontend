import ProjectCardSkeleton from "../../../components/modules/Project/ProjectCardSkeleton";

export default function projectLoading() {
  return (
    <div className="bg-[#020617]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  pb-12 pt-24 max-w-7xl mx-auto px-4 lg:px-0 ">
        {Array.from({ length: 2 }).map((_, idx) => (
          <ProjectCardSkeleton key={idx} />
        ))}
      </div>
    </div>
  );
}
