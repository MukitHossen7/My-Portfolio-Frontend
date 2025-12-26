"use client";

import SkillsComponent from "./SkillsComponent";

const SkillSection = () => {
  return (
    <section className="pt-16 pb-16 bg-[#020617] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 xl:px-0">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-100 uppercase tracking-wider">
          Skills / TechStack
        </h2>
        <div className="flex justify-center mt-2 mb-12">
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="w-24 h-[3px] bg-cyan-500 rounded-full"></div>
            <div className="w-16 h-[3px] bg-purple-500 rounded-full opacity-70"></div>
          </div>
        </div>

        <div className="relative">
          <SkillsComponent />
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
