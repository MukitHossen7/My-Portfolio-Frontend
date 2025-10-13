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

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Portfolio Showcase Badge */}
        <span className="inline-block bg-cyan-400/60 text-gray-100 text-xs font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-wider">
          Recent Project
        </span>

        {/* Featured Projects Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-gray-100">
          Featured Projects
        </h2>

        {/* Underline for Title */}
        <div className="flex justify-center mb-7">
          <div className="flex flex-col items-start justify-end gap-1">
            <div className="w-24 h-[3px] bg-cyan-500 rounded-full mx-8"></div>
            <div className="w-16 h-[3px] bg-purple-500 rounded-full mx-12"></div>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
          A collection of my recent work across various technologies and
          domains. Each project represents unique challenges and solutions.
        </p>
      </div>
    </section>
  );
};

export default RecentProject;
