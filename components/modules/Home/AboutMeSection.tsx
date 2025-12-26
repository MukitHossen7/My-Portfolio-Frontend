"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Code2, Cpu, Globe } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AboutMeSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-item", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen py-16 bg-[#020617] flex items-center justify-center overflow-hidden"
    >
      {/* Subtle Background Grid - Cyan Tint */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#164e63_1px,transparent_1px),linear-gradient(to_bottom,#164e63_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT: IMAGE SECTION (With Subtle Blur to Clear Effect) */}
          <div
            ref={imageRef}
            className="reveal-item relative flex justify-center lg:justify-start"
          >
            <div className="relative group">
              {/* Background Glow Frame - Cyan Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-[2.5rem] opacity-20 group-hover:opacity-40 blur-xl transition duration-700"></div>

              <div className="relative w-72 h-80 md:w-[450px] md:h-[500px] rounded-2xl border border-slate-800 bg-slate-900/40 p-1.5 overflow-hidden shadow-2xl">
                <Image
                  src="https://i.ibb.co/Kx8bLWBY/174138051.jpg"
                  alt="Mukit Hossen"
                  fill
                  className="object-cover rounded-[1.8rem] transition-all duration-700 
                             blur-[2px] grayscale-[40%] opacity-80 
                             group-hover:blur-none group-hover:grayscale-0 group-hover:opacity-100"
                  priority
                />
              </div>
            </div>
          </div>

          {/* RIGHT: CONTENT SECTION (Professional Structure) */}
          <div ref={textRef} className="space-y-8">
            <div className="reveal-item">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight uppercase">
                <span className="text-gray-100">About</span>{" "}
                <span className="bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">
                  Me
                </span>
              </h2>
            </div>

            <div className="reveal-item space-y-5 text-slate-300">
              <h3 className="text-xl md:text-2xl font-medium text-gray-100 leading-snug">
                Engineering{" "}
                <span className="text-cyan-400">High-Performance</span> Scalable{" "}
                <br />
                System & Engineered Solutions.
              </h3>

              <p className="text-base md:text-lg leading-relaxed">
                Hi! I&apos;m{" "}
                <span className="text-cyan-400 font-semibold">
                  Mukit Hossen
                </span>
                , a passionate Full-Stack Developer specializing in building
                robust web solutions. I build scalable systems on{" "}
                <span className="text-gray-100 font-bold">
                  SQL, MongoDB, and Next.js
                </span>
                , focusing primarily on clean architecture to deliver
                enterprise-grade software.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                My journey in tech started with a deep curiosity for
                problem-solving. I thrive on creating seamless, robust
                applications that solve real-world complexities with{" "}
                <span className="text-gray-100 font-bold italic underline decoration-cyan-500 underline-offset-4">
                  optimal performance
                </span>
                .
              </p>
            </div>

            {/* QUOTE BLOCK - Cyan Accent */}
            <div className="reveal-item border-l-4 border-cyan-500 pl-6 py-2 bg-cyan-500/5 rounded-r-xl">
              <p className="italic text-slate-400 text-sm md:text-base">
                &quot;I believe growth comes from both challenges and
                experience. I enjoy turning complex ideas into meaningful
                digital solutions.&quot;
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-6 h-px bg-slate-700"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Mukit Hossen, Developer
                </span>
              </div>
            </div>

            {/* TAGS/BADGES - Cyan Style */}
            <div className="reveal-item flex flex-wrap gap-3 pt-4">
              {[
                { label: "Full-Stack Development", icon: <Globe size={14} /> },
                { label: "Clean Code", icon: <Code2 size={14} /> },
                { label: "Problem Solver", icon: <Cpu size={14} /> },
              ].map((tag, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 bg-cyan-500/5 border border-cyan-500/20 rounded-full text-cyan-400 text-xs md:text-sm font-semibold hover:bg-cyan-500/10 transition-colors cursor-default"
                >
                  {tag.icon}
                  {tag.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
