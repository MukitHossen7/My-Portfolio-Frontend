"use client";
import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ExternalLink, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { IProject } from "../../../types";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ project }: { project: IProject }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // --- GSAP Entrance Animation ---
  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 90%",
          },
        }
      );
    }
  }, []);

  // --- 3D Tilt Logic (Framer Motion) ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const technologies = project.technology.flatMap((t) => t.split(","));

  return (
    // Perspective wrapper for 3D effect
    <div style={{ perspective: "1000px" }} className="h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className="group relative h-full w-full rounded-3xl bg-[#0f172a]/50 border border-slate-800 transition-all duration-500 hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.1)] overflow-hidden"
      >
        <div
          style={{ transform: "translateZ(60px)" }}
          className="flex flex-col h-full"
        >
          {/* Image Section (Clean) */}
          <div className="relative h-56 w-full overflow-hidden">
            <Image
              src={project?.thumbnail || "/placeholder.svg"}
              alt={project?.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Content Section */}
          <div className="p-6 flex-grow">
            <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-cyan-400 transition-colors">
              {project?.title}
            </h3>
            <p className="text-sm text-gray-400 line-clamp-2 mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.slice(0, 4).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-[10px] font-medium bg-slate-800/80 text-cyan-300 border border-slate-700 rounded-md"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons Container (Hidden by default, slides up on hover) */}
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#020617] via-[#020617]/95 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex items-center justify-center gap-3 z-20">
            {project?.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 bg-white text-gray-800 text-sm font-bold rounded-xl hover:bg-cyan-400 transition-all duration-300 hover:scale-105"
              >
                <ExternalLink size={16} /> Live
              </a>
            )}

            {project?.frontendRepoUrl && (
              <a
                href={project.frontendRepoUrl}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white text-sm font-bold rounded-xl hover:bg-slate-700  border border-slate-600 transition-all duration-300 hover:scale-105"
              >
                <FaGithub size={16} /> Code
              </a>
            )}

            <Link
              href={`/project/${project.slug}`}
              className="flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white text-sm font-bold rounded-xl hover:bg-cyan-500  transition-all duration-300 hover:scale-105"
            >
              <Eye size={16} /> Details
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
