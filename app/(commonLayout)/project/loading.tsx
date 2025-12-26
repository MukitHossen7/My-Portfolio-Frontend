import ProjectCardSkeleton from "../../../components/modules/Project/ProjectCardSkeleton";

export default function projectLoading() {
  return (
    <div className="bg-[#020617]">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-12 pt-24 max-w-7xl mx-auto px-4 lg:px-0 ">
        {Array.from({ length: 3 }).map((_, idx) => (
          <ProjectCardSkeleton key={idx} />
        ))}
      </div>
    </div>
  );
}
