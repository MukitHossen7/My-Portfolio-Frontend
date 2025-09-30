"use client";

import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import {
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiDocker,
} from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { SiPrisma } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiRedux } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { FaAws } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

const OrbitSkillsCircle = () => {
  return (
    <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden">
      <h3 className="absolute text-xl font-bold text-cyan-400">SKILLS</h3>

      {/* Outer Circle */}
      <OrbitingCircles iconSize={40} radius={160} speed={0.8}>
        <DiJavascript1 className="text-yellow-400 text-3xl" />
        <SiReact className="text-blue-400 text-3xl" />
        <SiNextdotjs className="text-gray-100 text-3xl" />
        <SiExpress className="text-green-400 text-3xl" />
        <SiMongodb className="text-green-500 text-3xl" />
        <SiDocker className="text-blue-300 text-3xl" />
      </OrbitingCircles>

      {/* Inner Circle */}
      <OrbitingCircles iconSize={30} radius={100} speed={1.2} reverse>
        <SiPrisma className="text-orange-500 text-2xl" />
        <SiTypescript className="text-blue-500 text-2xl" />
        <BiLogoPostgresql className="text-blue-600 text-2xl" />
        <SiRedux className="text-purple-600 text-2xl" />
        <FaAws className="text-yellow-500 text-2xl" />
        <GrGraphQl className="text-pink-400 text-2xl" />
        <FaNodeJs className="text-green-500 text-2xl" />
      </OrbitingCircles>
    </div>
  );
};

export default OrbitSkillsCircle;
