"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { createProjectServerAction } from "../../../actions/project/projectAction";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Form } from "../../ui/form";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import { Button } from "../../ui/button";

// Zod Validation Schema
const projectSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters."),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters."),
  thumbnail: z.string().url("Thumbnail must be a valid image URL."),
  frontendRepoUrl: z
    .string()
    .url("Must be a valid URL.")
    .optional()
    .or(z.literal("")),
  backendRepoUrl: z
    .string()
    .url("Must be a valid URL.")
    .optional()
    .or(z.literal("")),
  liveUrl: z.string().url("Must be a valid URL.").optional().or(z.literal("")),
  features: z.string().min(3, "At least one feature required."),
  technology: z.string().min(3, "At least one technology required."),
});

type ProjectFormData = z.infer<typeof projectSchema>;

export default function ProjectCreateForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      description: "",
      thumbnail: "",
      frontendRepoUrl: "",
      backendRepoUrl: "",
      liveUrl: "",
      features: "",
      technology: "",
    },
  });

  const onSubmit = async (data: ProjectFormData) => {
    setLoading(true);
    try {
      const payload = {
        ...data,
        features: data.features.split(",").map((f) => f.trim()),
        technology: data.technology.split(",").map((t) => t.trim()),
        frontendRepoUrl: data.frontendRepoUrl?.trim() || null,
        backendRepoUrl: data.backendRepoUrl?.trim() || null,
        liveUrl: data.liveUrl?.trim() || null,
      };

      // console.log("🚀 Project Data:", payload);
      const result = await createProjectServerAction(payload);
      if (result.success) {
        toast.success("Project created successfully!");
        router.push("/dashboard/manage-project");
        form.reset();
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to create project!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#020617]  flex items-center justify-center py-10 px-4 lg:px-10">
      <Card className="w-full max-w-3xl bg-[#020617]  border border-gray-800 shadow-md py-6">
        <CardHeader>
          <CardTitle className="text-center text-gray-100 text-xl md:text-2xl font-semibold">
            Create New Project
          </CardTitle>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              {/* Title */}
              <div>
                <Label htmlFor="title" className="text-gray-200">
                  Project Title
                </Label>
                <Input
                  id="title"
                  {...form.register("title")}
                  placeholder="Enter your project title"
                  className="bg-[#020617] border-gray-800 text-gray-100  placeholder-gray-700 mt-2"
                />
                {form.formState.errors.title && (
                  <p className="text-red-500 text-xs mt-1">
                    {form.formState.errors.title.message}
                  </p>
                )}
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description" className="text-gray-200">
                  Description
                </Label>
                <Textarea
                  id="description"
                  {...form.register("description")}
                  rows={5}
                  placeholder="Write your project description..."
                  className="bg-[#020617] border-gray-800 text-gray-100 placeholder-gray-700 mt-2"
                />
                {form.formState.errors.description && (
                  <p className="text-red-500 text-xs mt-1">
                    {form.formState.errors.description.message}
                  </p>
                )}
              </div>

              {/* Thumbnail */}
              <div>
                <Label htmlFor="thumbnail" className="text-gray-200">
                  Thumbnail URL
                </Label>
                <Input
                  id="thumbnail"
                  {...form.register("thumbnail")}
                  placeholder="https://example.com/thumbnail.jpg"
                  className="bg-[#020617] border-gray-800 text-gray-100 placeholder-gray-700 mt-2"
                />
                {form.formState.errors.thumbnail && (
                  <p className="text-red-500 text-xs mt-1">
                    {form.formState.errors.thumbnail.message}
                  </p>
                )}
              </div>

              {/* Repo Links */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="frontendRepoUrl" className="text-gray-200">
                    Frontend Repo URL
                  </Label>
                  <Input
                    id="frontendRepoUrl"
                    {...form.register("frontendRepoUrl")}
                    placeholder="https://github.com/username/frontend"
                    className="bg-[#020617] border-gray-800 text-gray-100 placeholder-gray-700 mt-2"
                  />
                  {form.formState.errors.frontendRepoUrl && (
                    <p className="text-red-500 text-xs mt-1">
                      {form.formState.errors.frontendRepoUrl.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="backendRepoUrl" className="text-gray-200">
                    Backend Repo URL
                  </Label>
                  <Input
                    id="backendRepoUrl"
                    {...form.register("backendRepoUrl")}
                    placeholder="https://github.com/username/backend"
                    className="bg-[#020617] border-gray-800 text-gray-100 placeholder-gray-700 mt-2"
                  />
                  {form.formState.errors.backendRepoUrl && (
                    <p className="text-red-500 text-xs mt-1">
                      {form.formState.errors.backendRepoUrl.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Live URL */}
              <div>
                <Label htmlFor="liveUrl" className="text-gray-200">
                  Live Project URL
                </Label>
                <Input
                  id="liveUrl"
                  {...form.register("liveUrl")}
                  placeholder="https://yourproject.netlify.app"
                  className="bg-[#020617] border-gray-800 text-gray-100 placeholder-gray-700 mt-2"
                />
                {form.formState.errors.liveUrl && (
                  <p className="text-red-500 text-xs mt-1">
                    {form.formState.errors.liveUrl.message}
                  </p>
                )}
              </div>

              {/* Features */}
              <div>
                <Label htmlFor="features" className="text-gray-200">
                  Features (comma separated)
                </Label>
                <Input
                  id="features"
                  {...form.register("features")}
                  placeholder="User login, Dashboard, Admin panel"
                  className="bg-[#020617] border-gray-800 text-gray-100 placeholder-gray-700 mt-2"
                />
                {form.formState.errors.features && (
                  <p className="text-red-500 text-xs mt-1">
                    {form.formState.errors.features.message}
                  </p>
                )}
              </div>

              {/* Technology */}
              <div>
                <Label htmlFor="technology" className="text-gray-200">
                  Technology Used (comma separated)
                </Label>
                <Input
                  id="technology"
                  {...form.register("technology")}
                  placeholder="Next.js, Tailwind CSS, TypeScript, Prisma"
                  className="bg-[#020617] border-gray-800 text-gray-100 placeholder-gray-700 mt-2"
                />
                {form.formState.errors.technology && (
                  <p className="text-red-500 text-xs mt-1">
                    {form.formState.errors.technology.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gray-200 hover:bg-gray-100 text-gray-950 mt-4"
              >
                {loading ? "Creating..." : "Create Project"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
