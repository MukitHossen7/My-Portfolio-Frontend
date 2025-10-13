"use client";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { IProject } from "../../../types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { AnimatedShinyText } from "../../ui/animated-shiny-text";
import { Button } from "../../ui/button";
import { BorderBeam } from "../../ui/border-beam";

const ProjectCard = ({ project }: { project: IProject }) => {
  return (
    <Card className="relative bg-[#020617] shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Image Section (updated like BlogCard) */}
      <CardHeader className="p-0">
        <div className="relative h-56 w-full overflow-hidden rounded-t-lg">
          <Image
            src={project?.thumbnail || "/placeholder.svg"}
            alt={project?.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
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
          <p className="text-base font-semibold text-gray-300">Technologies</p>
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
          <button className=" bg-gray-100 text-gray-800 hover:bg-gray-100 gap-2 px-5 py-1 rounded-md font-medium transition-all duration-300 hover:scale-105">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ExternalLink className="h-4 w-4" />
              Live
            </a>
          </button>
        )}
        {project?.frontendRepoUrl && (
          <Button
            asChild
            className="bg-gray-900 border border-gray-600 hover:bg-gray-800 text-gray-100 flex items-center gap-2 transition-all duration-300 hover:scale-105"
          >
            <a
              href={project?.frontendRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-4 w-4" />
              Github
            </a>
          </Button>
        )}

        <Link className="cursor-pointer" href={`/project/${project.slug}`}>
          <button className="relative flex items-center gap-2 px-3 py-1 font-medium text-gray-300 bg-[#020617] rounded-lg transition-colors duration-300 overflow-hidden border border-gray-700 cursor-pointer">
            <AiOutlineArrowRight className="h-4 w-4 font-bold" />
            Details
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
          </button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
