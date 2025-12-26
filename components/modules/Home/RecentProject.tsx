const RecentProject = async () => {
  return (
    <section className="relative pt-14 px-4 md:px-6 lg:px-0 overflow-hidden bg-[#020617]">
      {/* Top Radiant Gradient */}
      <div
        className="absolute top-0 left-0 w-full h-20 
    bg-gradient-to-b 
    from-cyan-500/10 
    to-[#020617] 
    z-0"
      ></div>

      <div className="relative z-10 text-center">
        {/* Featured Projects Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-gray-100">
          Featured Projects
        </h2>

        {/* Underline for Title */}
        <div className="flex justify-center mb-10">
          <div className="flex flex-col items-start justify-end gap-1">
            <div className="w-24 h-[3px] bg-cyan-500 rounded-full mx-8"></div>
            <div className="w-16 h-[3px] bg-purple-500 rounded-full mx-12"></div>
          </div>
        </div>

        {/* Description */}
      </div>
    </section>
  );
};

export default RecentProject;
