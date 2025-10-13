"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { IProject } from "../../../types";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { AnimatedShinyText } from "../../ui/animated-shiny-text";
import { Button } from "../../ui/button";

const ProjectDetailsCard = ({ project }: { project: IProject }) => {
  return (
    <div className="min-h-screen bg-[#020617] py-12 px-4 lg:px-0 max-w-6xl mx-auto">
      {/* Banner */}
      <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
        <Image
          src={project?.thumbnail}
          alt={project?.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-100 drop-shadow-lg">
            {project?.title}
          </h1>
        </div>
      </div>

      {/* Description */}
      <div className="mt-10 space-y-6">
        <Card className="bg-[#020617] border border-gray-700 shadow-xl py-6">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-100">
              Project Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-3">
            <p className="text-gray-300 leading-relaxed">
              {project?.description}
            </p>
          </CardContent>
        </Card>

        {/* Features */}
        <Card className="bg-[#020617] border border-gray-700 shadow-xl py-6">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-100">Features</CardTitle>
          </CardHeader>
          <CardContent className="mt-3">
            <ul className="space-y-3 list-disc list-inside text-gray-300">
              {project?.features.map((feature, idx) => (
                <li key={idx} className="leading-relaxed">
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Technologies */}
        <Card className="bg-[#020617] border border-gray-700 shadow-xl py-6">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-100">
              Technologies
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2 mt-3">
            {project?.technology.map((tech, idx) => (
              <div
                key={idx}
                className="px-3 py-1 rounded-full border border-gray-700 bg-gray-900 text-sm"
              >
                <AnimatedShinyText>{tech}</AnimatedShinyText>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Links */}
        <div className="flex flex-wrap gap-4 mt-6">
          {project?.liveUrl && (
            <Button
              asChild
              className="bg-gray-100 hover:bg-gray-50 text-gray-800 flex items-center gap-2"
            >
              <a
                href={project?.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
          {project?.frontendRepoUrl && (
            <Button
              asChild
              className="bg-gray-900 hover:bg-gray-800 text-gray-200 border border-gray-600 flex items-center gap-2"
            >
              <a
                href={project?.frontendRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="h-4 w-4" />
                Frontend Repo
              </a>
            </Button>
          )}
          {project?.backendRepoUrl && (
            <Button
              asChild
              className="bg-gray-900 hover:bg-gray-800 text-gray-200 border border-gray-600 flex items-center gap-2"
            >
              <a
                href={project?.backendRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="h-4 w-4" />
                Backend Repo
              </a>
            </Button>
          )}
        </div>

        {/* Owner Info */}
        <div className="border border-gray-700 shadow-2xl rounded-xl mt-8 flex items-center gap-3 p-6 hover:scale-[1.01] transition-transform duration-300">
          <div className="w-16 h-16 rounded-full flex items-center bg-gray-700 justify-center text-gray-100 font-bold text-xl">
            {project?.owner?.name[0]}
          </div>{" "}
          ``
          <div className="flex flex-col gap-1">
            <p className="text-gray-100 font-semibold">
              {project?.owner?.name}
            </p>
            <p className="text-gray-300 text-sm">{project?.owner?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsCard;
