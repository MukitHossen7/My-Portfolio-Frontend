/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { MdDeleteForever } from "react-icons/md";
import Link from "next/link";
import { toast } from "sonner";
import { IProjectFormData } from "../../../types";
import { deleteProjectServerAction } from "../../../actions/project/projectAction";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Badge } from "../../ui/badge";
import { DeleteAlertDialog } from "../../shared/DeleteAlertDialog";
import { Button } from "../../ui/button";
// import { deleteProjectServerAction } from "@/actions/project/projectAction";

interface Props {
  project: IProjectFormData;
}

export default function ManageProjectCard({ project }: Props) {
  //delete project
  const handleDeleteProject = async (slug: string) => {
    try {
      const result = await deleteProjectServerAction(slug);
      if (result.success) {
        toast.success("Project deleted successfully");
      }
    } catch (error: any) {
      toast.error(`${error?.message} ?? Failed to delete project`);
      console.error(error);
    }
  };
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
      </CardContent>

      {/* Buttons */}
      <CardFooter className="flex justify-end gap-3 mt-4">
        <DeleteAlertDialog
          onConfirm={() => handleDeleteProject(project?.slug as string)}
          triggerButton={
            <button className="flex items-center bg-gray-950 hover:bg-gray-900 border border-gray-800 px-3 py-2 rounded-md">
              <MdDeleteForever className="text-red-600 text-2xl" />
            </button>
          }
          title="Are you absolutely sure?"
          description="This action cannot be undone. It will permanently delete this project"
        />

        <Link href={`/dashboard/manage-project/${project?.slug as string}`}>
          <Button className="bg-gray-200 hover:bg-gray-100 text-gray-800 font-semibold">
            Update
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
