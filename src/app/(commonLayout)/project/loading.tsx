import ProjectCardSkeleton from "@/components/modules/Project/ProjectCardSkeleton";

export default function projectLoading() {
  return (
    <div className="bg-[#020617]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  py-12 max-w-7xl mx-auto ">
        {Array.from({ length: 2 }).map((_, idx) => (
          <ProjectCardSkeleton key={idx} />
        ))}
      </div>
    </div>
  );
}
