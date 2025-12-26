/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Code2, Database, Terminal } from "lucide-react";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPrisma,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiMongoose,
  SiGitlab,
  SiBitbucket,
  SiDocker,
  SiVercel,
  SiPostman,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const skillData = [
  {
    title: "Front-End Development",
    icon: <Code2 className="w-6 h-6 text-cyan-400" />,
    skills: [
      { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
      { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
    ],
  },
  {
    title: "Back-End & Database",
    icon: <Database className="w-6 h-6 text-purple-400" />,
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: "Express", icon: <SiExpress className="text-gray-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "Mongoose", icon: <SiMongoose className="text-[#880000]" /> },
      { name: "Prisma", icon: <SiPrisma className="text-white" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
    ],
  },
  {
    title: "Version Control & Tools",
    icon: <Terminal className="w-6 h-6 text-emerald-400" />,
    skills: [
      { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
      { name: "GitHub", icon: <SiGithub className="text-white" /> },
      { name: "GitLab", icon: <SiGitlab className="text-[#FC6D26]" /> },
      { name: "Bitbucket", icon: <SiBitbucket className="text-[#0052CC]" /> },
      { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
    ],
  },
];

const SkillCard = ({ category, idx, cardsRef }: any) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`
    radial-gradient(
      600px circle at ${mouseX}px ${mouseY}px,
      rgba(34, 211, 238, 0.12),
      transparent 80%
    )
  `;

  return (
    <motion.div
      ref={(el) => {
        if (el) cardsRef.current[idx] = el;
      }}
      onMouseMove={onMouseMove}
      className="group relative bg-slate-900/40 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] border border-slate-800 hover:border-cyan-500/50 transition-colors duration-500 overflow-hidden w-full"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-300"
        style={{ background }}
      />

      <div className="relative z-10">
        <div className="mb-6 flex items-center gap-4">
          <div className="p-3 bg-slate-800/50 rounded-2xl border border-slate-700 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]">
            {category.icon}
          </div>
          <h3 className="text-lg md:text-xl font-bold text-gray-100 tracking-tight">
            {category.title}
          </h3>
        </div>

        <div className="flex flex-wrap gap-2 md:gap-3">
          {category.skills.map((skill: any, sIdx: number) => (
            <motion.div
              key={sIdx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: sIdx * 0.05 }}
              whileHover={{ y: -3, backgroundColor: "rgba(30, 41, 59, 0.8)" }}
              className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-slate-800/40 border border-slate-700/50 rounded-xl cursor-default hover:border-cyan-500/30 transition-all"
            >
              <span className="text-base md:text-lg">{skill.icon}</span>
              <span className="text-xs md:text-sm font-medium text-slate-300 group-hover:text-white">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const SkillsComponent = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const elements = cardsRef.current.filter((el) => el !== null);
    if (elements.length > 0) {
      gsap.fromTo(
        elements,
        { y: 60, opacity: 0, rotationX: -15 },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
          },
        }
      );
    }
  }, []);

  return (
    <div ref={sectionRef as any} className="relative w-full">
      {/* Decorative Glows - Wrapped for safety */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
        {skillData.map((category, idx) => (
          <SkillCard
            key={idx}
            category={category}
            idx={idx}
            cardsRef={cardsRef}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsComponent;
