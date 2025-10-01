"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { IProject } from "@/types";
import { Calendar, ExternalLink, Github, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProjectDetailsCard = ({ project }: { project: IProject }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950/20 dark:to-background py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Badge
              variant="secondary"
              className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
            >
              {project?.owner?.role}
            </Badge>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatDate(project?.createdAt)}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            {project?.title}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8 leading-relaxed">
            {project?.description}
          </p>

          <div className="flex items-center gap-3 mb-8">
            <User className="w-5 h-5 text-muted-foreground" />
            <div>
              <p className="font-medium text-foreground">
                {project?.owner?.name}
              </p>
              <p className="text-sm text-muted-foreground">
                {project?.owner?.name}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              <Link
                href={project?.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live Demo
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link
                href={project?.frontendRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                Frontend Repo
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link
                href={project?.backendRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                Backend Repo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Project Thumbnail */}
      <section className="max-w-6xl mx-auto px-4 -mt-8">
        <Card className="overflow-hidden shadow-2xl">
          <div className="relative w-full aspect-video">
            <Image
              src={project?.thumbnail || "/placeholder.svg"}
              alt={project?.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </Card>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Key Features
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {project?.features?.map((feature, index) => {
            const [title, ...descParts] = feature.split(":");
            const description = descParts.join(":").trim();

            return (
              <Card
                key={index}
                className="border-2 hover:border-emerald-500 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-700 dark:text-emerald-400 font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">
                        {title}
                      </h3>
                      {description && (
                        <p className="text-muted-foreground leading-relaxed">
                          {description}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 bg-muted/30 rounded-2xl mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
          Technology Stack
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {project?.technology.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="px-6 py-3 text-base font-medium bg-card hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors cursor-default"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      {/* Project Info Section */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Project Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Project ID</p>
                <p className="font-medium text-foreground">{project?.id}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Slug</p>
                <p className="font-medium text-foreground break-all">
                  {project?.slug}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Created At</p>
                <p className="font-medium text-foreground">
                  {formatDate(project?.createdAt)}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  Last Updated
                </p>
                <p className="font-medium text-foreground">
                  {formatDate(project?.updatedAt)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default ProjectDetailsCard;
