"use client";

import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { IProject } from "@/types";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }: { project: IProject }) => {
  return (
    <Link className="cursor-pointer" href={`/project/${project.slug}`}>
      <Card className="relative bg-[#020617] shadow-md hover:shadow-xl transition-shadow duration-300">
        {/* Image Section (updated like BlogCard) */}
        <CardHeader className="p-0">
          <div className="relative h-56 w-full overflow-hidden rounded-t-xl">
            <Image
              src={project?.thumbnail || "/placeholder.svg"}
              alt={project?.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </CardHeader>

        {/* Content */}
        <CardContent className="p-4">
          <CardTitle className="text-xl md:text-2xl text-gray-100 font-semibold mb-2">
            {project?.title}
          </CardTitle>
          <CardDescription className="text-gray-300 mb-4">
            {project.description.slice(0, 100)}...
          </CardDescription>

          <div className="mt-4 space-y-2">
            <p className="text-base font-semibold text-gray-300">
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technology
                .map((tag) => tag.split(","))
                .map((tech, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-200"
                  >
                    <AnimatedShinyText>{tech}</AnimatedShinyText>
                  </div>
                ))}
            </div>
          </div>
        </CardContent>

        {/* Footer */}
        <CardFooter className="p-4 flex flex-wrap gap-3">
          {project?.liveUrl && (
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 transition-all duration-300 hover:scale-105"
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                Live
              </a>
            </Button>
          )}
          {project?.frontendRepoUrl && (
            <Button
              asChild
              className="bg-gray-700 hover:bg-gray-800 text-white flex items-center gap-2 transition-all duration-300 hover:scale-105"
            >
              <a
                href={project?.frontendRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                Github
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProjectCard;
