"use client";

import { BorderBeam } from "../../ui/border-beam";
import { Card } from "../../ui/card";
import { BackendSkills } from "./BackendSkills";
import { FrontendSkills } from "./FrontendSkills";

const SkillSection = () => {
  return (
    <section className="py-16  bg-[#020617]">
      <div className="container mx-auto px-4 md:px-6 lg:px-0 max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-100">
          Expertise
        </h2>
        <div className="flex justify-center mt-2">
          <div className="flex flex-col items-start justify-end gap-1">
            <div className="w-24 h-[3px] bg-cyan-500 rounded-full mx-1"></div>
            <div className="w-16 h-[3px] bg-purple-500 rounded-full mx-2"></div>
          </div>
        </div>

        <p className="text-gray-300 text-xl text-center mt-4 ">
          Turning Ideas into Impact with These Skills.
        </p>
        <div className="grid md:grid-cols-2 gap-5 lg:gap-10 mt-10">
          <div>
            <Card className="relative w-full overflow-hidden">
              <BackendSkills />
              <BorderBeam
                duration={6}
                size={400}
                className="from-transparent via-purple-500 to-transparent"
              />
              <BorderBeam
                duration={6}
                delay={3}
                size={400}
                borderWidth={2}
                className="from-transparent via-cyan-500 to-transparent"
              />
            </Card>
          </div>
          <div>
            <Card className="relative w-full overflow-hidden">
              <FrontendSkills />
              <BorderBeam
                duration={6}
                size={400}
                className="from-transparent via-cyan-500 to-transparent"
              />
              <BorderBeam
                duration={6}
                delay={3}
                size={400}
                borderWidth={2}
                className="from-transparent via-purple-500 to-transparent"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
