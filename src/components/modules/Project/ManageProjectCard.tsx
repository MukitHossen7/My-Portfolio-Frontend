"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IProjectFormData } from "@/types";

interface Props {
  project: IProjectFormData;
}

export default function ManageProjectCard({ project }: Props) {
  return (
    <Card className="bg-[#020617] border border-gray-800 shadow-md w-full  mx-auto py-6 rounded-md transition-transform hover:scale-[1.01] duration-200">
      {/* Thumbnail + Title */}
      <CardHeader className="flex flex-col sm:flex-row gap-4 sm:items-start">
        <div className="relative w-full sm:w-52 h-36 rounded-md overflow-hidden">
          <Image
            src={project?.thumbnail}
            alt={project?.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1 text-gray-100">
          <CardTitle className="text-lg md:text-xl font-semibold mb-1">
            {project?.title}
          </CardTitle>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
            {project?.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mt-3">
            {project?.technology.map((tech, index) => (
              <Badge
                key={index}
                className="bg-gray-900 border border-gray-800 text-gray-200 px-2 py-1 text-xs rounded-full"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>

      {/* Features */}
      <CardContent className="mt-4 text-gray-300 space-y-2">
        <p className="font-semibold text-gray-100 mb-1">Key Features:</p>
        <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
          {project?.features?.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </CardContent>

      {/* Links */}
      <CardContent className="mt-3 flex flex-wrap gap-3 text-sm">
        <div>
          {project?.liveUrl && (
            <a
              href={project?.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              🌐 Live Demo
            </a>
          )}
        </div>
        <div>
          {project?.frontendRepoUrl && (
            <a
              href={project?.frontendRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline"
            >
              💻 Frontend Repo
            </a>
          )}
        </div>
        <div>
          {project?.backendRepoUrl && (
            <a
              href={project?.backendRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:underline"
            >
              💻 Backend Repo
            </a>
          )}
        </div>
      </CardContent>

      {/* Buttons */}
      <CardFooter className="flex justify-end gap-3 mt-4">
        <Button className="bg-red-700 hover:bg-red-600 text-gray-100">
          Delete
        </Button>
        <Button className="bg-blue-700 hover:bg-blue-600 text-gray-100">
          Update
        </Button>
      </CardFooter>
    </Card>
  );
}
