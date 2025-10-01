"use client";

import { BorderBeam } from "@/components/ui/border-beam";
import { BackendSkills } from "./BackendSkills";
import { FrontendSkills } from "./FrontendSkills";
import { Card } from "@/components/ui/card";

const SkillSection = () => {
  return (
    <section className="py-16 md:py-20 text-white bg-[#020617]">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-bold  text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 uppercase">
            Expertise
          </span>
        </h2>
        <p className="text-gray-300 text-xl  text-center mt-4">
          Turning Ideas into Impact with These Skills.
        </p>
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div>
            <Card className="relative w-full overflow-hidden">
              <BackendSkills />
              <BorderBeam
                duration={6}
                size={400}
                className="from-transparent via-red-500 to-transparent"
              />
              <BorderBeam
                duration={6}
                delay={3}
                size={400}
                borderWidth={2}
                className="from-transparent via-blue-500 to-transparent"
              />
            </Card>
          </div>
          <div>
            <Card className="relative w-full overflow-hidden">
              <FrontendSkills />
              <BorderBeam
                duration={6}
                size={400}
                className="from-transparent via-red-500 to-transparent"
              />
              <BorderBeam
                duration={6}
                delay={3}
                size={400}
                borderWidth={2}
                className="from-transparent via-blue-500 to-transparent"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
