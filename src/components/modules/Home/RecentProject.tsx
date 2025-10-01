const RecentProject = async () => {
  return (
    <section className="relative pt-16 md:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Top Radiant Gradient */}
      <div className="absolute top-0 left-0 w-full h-30 bg-gradient-to-b from-purple-600/20 to-transparent z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Portfolio Showcase Badge */}
        <span className="inline-block bg-purple-500/50 text-white text-xs font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-wider">
          Recent Project
        </span>

        {/* Featured Projects Title */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500 leading-tight">
          Featured Projects
        </h2>

        {/* Underline for Title */}
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 mx-auto mb-10"></div>

        {/* Description */}
        <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-12">
          A collection of my recent work across various technologies and
          domains. Each project represents unique challenges and solutions.
        </p>
      </div>
    </section>
  );
};

export default RecentProject;
