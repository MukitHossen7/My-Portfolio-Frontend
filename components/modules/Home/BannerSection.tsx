"use client";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaCode, FaGithub, FaAngleDown } from "react-icons/fa";
import OrbitSkillsCircle from "./OrbitSkillsCircle";

import Link from "next/link";
import LightRays from "../../ui/LightRays";
import { HoverBorderGradient } from "../../ui/hover-border-gradient";
import { BorderBeam } from "../../ui/border-beam";
import { Dock, DockIcon } from "../../ui/dock";

export default function BannerSection() {
  return (
    <section className="relative bg-[#020617]  flex items-center justify-center px-4 md:px-6 py-16 lg:py-0 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={1.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.05}
          distortion={0.03}
          className="w-full h-full"
        />
      </div>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-7xl w-full relative z-10">
        {/* Left Side */}
        <div>
          <div className="mb-5">
            <HoverBorderGradient className="bg-[#1E2234]">
              <span className="inline-block text-gray-200 font-bold rounded-full text-base">
                👋 Hey there!
              </span>
            </HoverBorderGradient>
          </div>

          <h1 className="text-2xl text-gray-300 font-semibold leading-tight mb-2">
            I&apos;m <span className="text-gray-300">Mukit Hossen</span>
          </h1>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            <TypeAnimation
              sequence={[
                "Backend Developer",
                1500,
                "MERN Stack Developer",
                1500,
                "Full Stack Developer",
                1500,
                "NextJS Developer",
                1500,
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </h2>
          <p className="text-gray-300 mb-7 text-lg">
            I love learning new technologies and building solutions that make a
            difference. Thanks for visiting my portfolio!{" "}
            <span className="text-yellow-400 font-bold">Happy coding..!</span>
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mb-4">
            <Link href="/contact">
              <button className="px-5 py-2 bg-gray-100 text-gray-950 rounded-md font-medium cursor-pointer">
                Contact Me
              </button>
            </Link>
            <a
              href="https://drive.google.com/file/d/1upfFc1i_jPsqbfivzTQjUAAAwYGF7uRE/view?usp=sharing"
              download="https://drive.google.com/file/d/1upfFc1i_jPsqbfivzTQjUAAAwYGF7uRE/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-2 px-6 py-2 font-medium text-gray-100 bg-[#020617] rounded-lg transition-colors duration-300 overflow-hidden border border-gray-700 cursor-pointer"
            >
              <FaAngleDown className="text-lg" />
              <span>Resume</span>

              {/* Border Beam Animation */}
              <BorderBeam
                size={40}
                initialOffset={20}
                className="from-transparent via-cyan-400 to-transparent"
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 20,
                }}
              />
            </a>
          </div>

          {/* Social Icons */}

          <div className="relative text-gray-200">
            <Dock iconMagnification={60} iconDistance={100}>
              <DockIcon className="">
                <a
                  href="https://github.com/MukitHossen7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="size-full text-2xl" />
                </a>
              </DockIcon>
              <DockIcon className="">
                <a
                  href="www.linkedin.com/in/mukithossen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="size-full text-2xl" />
                </a>
              </DockIcon>
              <DockIcon className="bg-black/10 dark:bg-white/10">
                <FaCode className="size-full text-2xl" />
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
