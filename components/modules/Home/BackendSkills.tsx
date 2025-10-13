"use client";

import React, { forwardRef, useRef } from "react";

import Image from "next/image";
import { cn } from "../../../lib/utils";
import { AnimatedBeam } from "../../ui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex items-center justify-center rounded-full border border-gray-700 bg-gradient-to-br from-white/80 to-white/90 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] shadow-gray-200",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function BackendSkills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[250px] lg:h-[300px] w-full items-center justify-center overflow-hidden mx-auto bg-[#020617] px-6"
      ref={containerRef}
    >
      <div className="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
              alt="express.js"
              width={40}
              height={40}
              className="object-cover p-1"
            />
          </Circle>
          <Circle ref={div5Ref}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
              alt="express.js"
              width={40}
              height={40}
              className="object-cover p-1"
            />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
              alt="express.js"
              width={40}
              height={40}
              className="object-cover p-1"
            />
          </Circle>
          <Circle
            ref={div4Ref}
            className="w-20 h-20 flex items-center justify-center bg-[#0B0E18] shadow-sm border border-gray-700 rounded-full"
          >
            <span className="text-gray-100 font-semibold text-lg">Backend</span>
          </Circle>
          <Circle ref={div6Ref}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg"
              alt="express.js"
              width={40}
              height={40}
              className="object-cover p-1"
            />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
              alt="express.js"
              width={40}
              height={40}
              className="object-cover p-1"
            />
          </Circle>
          <Circle ref={div7Ref}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
              alt="express.js"
              width={40}
              height={40}
              className="object-cover p-1"
            />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}
