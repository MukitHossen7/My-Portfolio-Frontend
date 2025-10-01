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
import { Lens } from "@/components/ui/lens";
import { IProject } from "@/types";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }: { project: IProject }) => {
  return (
    <div>
      <Card className="relative shadow-none py-6">
        <CardHeader>
          <Lens
            zoomFactor={2}
            lensSize={150}
            isStatic={false}
            ariaLabel="Zoom Area"
          >
            <Image
              src={project?.thumbnail || "/placeholder.svg"}
              alt={project?.title}
              width={500}
              height={500}
              className="w-full object-cover"
            />
          </Lens>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-2xl">{project?.title}</CardTitle>
          <CardDescription>
            {project.description.slice(0, 100)} ....
          </CardDescription>
          <div className="mt-4 space-y-2">
            <p className="text-sm font-semibold text-muted-foreground">
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technology
                .map((tag) => tag.split(","))
                .map((tech, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium"
                  >
                    <AnimatedShinyText>{tech}</AnimatedShinyText>
                  </div>
                ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="space-x-4">
          {project?.liveUrl && (
            <Button
              asChild
              className="group/btn relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/btn:rotate-12" />
                <span>Live</span>
              </a>
            </Button>
          )}
          {project?.frontendRepoUrl && (
            <Button
              asChild
              className="group/btn relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              <a
                href={project?.frontendRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/btn:rotate-12" />
                <span>Github</span>
              </a>
            </Button>
          )}
          <Link href={`/project/${project.slug}`}>
            <Button className="group/btn relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-md">
              <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/btn:rotate-12" />
              <span>Details</span>
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
