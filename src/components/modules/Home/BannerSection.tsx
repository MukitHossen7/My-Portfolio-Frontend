"use client";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaEnvelope, FaCode, FaGithub } from "react-icons/fa";
import OrbitSkillsCircle from "./OrbitSkillsCircle";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Dock, DockIcon } from "@/components/ui/dock";

export default function BannerSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center px-6 overflow-hidden bg-[#020617]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl w-full">
        {/* Left Side */}
        <div>
          <div className="mb-4">
            <HoverBorderGradient className="bg-[#1E2234]">
              <span className="inline-block text-white font-bold rounded-full text-base">
                👋 Hey there!
              </span>
            </HoverBorderGradient>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Mukit Hossen
            </span>
          </h1>

          <h2 className="text-xl md:text-3xl font-semibold text-purple-300 mb-4">
            <TypeAnimation
              sequence={[
                "Backend Developer..",
                1500,
                "MERN Stack Developer..",
                1500,
                "Full Stack Developer..",
                1500,
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </h2>
          <p className="text-gray-50 mb-6 text-lg">
            I love learning new technologies and building solutions that make a
            difference. Thanks for visiting my portfolio!{" "}
            <span className="text-yellow-400 font-bold">Happy coding..!</span>
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mb-4">
            <a
              href="#"
              className="px-5 py-2 bg-gray-700 hover:bg-gray-600 rounded-full transition"
            >
              My Resume ⬇
            </a>
            <a
              href="#contact"
              className="px-5 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition"
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons */}

          <div className="relative">
            <Dock iconMagnification={60} iconDistance={100}>
              <DockIcon className="bg-black/10 dark:bg-white/10">
                <FaGithub className="size-full" />
              </DockIcon>
              <DockIcon className="bg-black/10 dark:bg-white/10">
                <FaLinkedin className="size-full" />
              </DockIcon>
              <DockIcon className="bg-black/10 dark:bg-white/10">
                <FaCode className="size-full" />
              </DockIcon>
              <DockIcon className="bg-black/10 dark:bg-white/10">
                <FaEnvelope className="size-full" />
              </DockIcon>
            </Dock>
          </div>
        </div>

        {/* Right Side (Skills Circle with Animation) */}

        <OrbitSkillsCircle />
      </div>
    </section>
  );
}
