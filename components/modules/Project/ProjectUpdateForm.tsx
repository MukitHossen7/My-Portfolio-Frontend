"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { toast } from "sonner";
import { updateProjectServerAction } from "../../../actions/project/projectAction";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import { Button } from "../../ui/button";

interface Project {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  frontendRepoUrl: string;
  backendRepoUrl: string;
  liveUrl: string;
  features: string[];
  technology: string[];
}

export default function ProjectUpdateForm({ project }: { project: Project }) {
  const [formData, setFormData] = useState({
    ...project,
    features: project.features.join(", "),
    technology: project.technology.join(", "),
  });

  const router = useRouter();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const updateData = {
      title: formData.title,
      description: formData.description,
      thumbnail: formData.thumbnail,
      frontendRepoUrl: formData.frontendRepoUrl?.trim() || null,
      backendRepoUrl: formData.backendRepoUrl?.trim() || null,
      liveUrl: formData.liveUrl?.trim() || null,
      features: formData.features.split(",").map((f) => f.trim()),
      technology: formData.technology.split(",").map((t) => t.trim()),
    };

    try {
      const result = await updateProjectServerAction(project.slug, updateData);
      if (result.success) {
        toast.success("Project updated successfully!");
        router.back();
      }
    } catch (err) {
      toast.error("Failed to update project");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 w-full">
      {/* Title */}
      <div>
        <Label className="text-gray-200">Title</Label>
        <Input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="bg-[#020617] border-gray-800 text-gray-100 placeholder-gray-700 mt-2"
        />
      </div>

      {/* Description */}
      <div>
        <Label className="text-gray-200">Description</Label>
        <Textarea
          name="description"
          rows={4}
          value={formData.description}
          onChange={handleChange}
          className="bg-[#020617] border-gray-800 text-gray-100 placeholder-gray-700 mt-2"
        />
      </div>

      {/* Thumbnail */}
      <div>
        <Label className="text-gray-200">Thumbnail URL</Label>
        <Input
          type="text"
          name="thumbnail"
          value={formData.thumbnail}
          onChange={handleChange}
          className="bg-[#020617] border-gray-800 text-gray-100 placeholder-gray-700 mt-2"
        />
      </div>

      {/* Repositories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label className="text-gray-200">Frontend Repo URL</Label>
          <Input
            type="text"
            name="frontendRepoUrl"
            value={formData.frontendRepoUrl}
            onChange={handleChange}
            className="bg-[#020617] border-gray-800 text-gray-100 placeholder-gray-700 mt-2"
          />
        </div>
        <div>
          <Label className="text-gray-200">Backend Repo URL</Label>
          <Input
            type="text"
            name="backendRepoUrl"
            value={formData.backendRepoUrl}
            onChange={handleChange}
            className="bg-[#020617] border-gray-800 text-gray-100 placeholder-gray-700 mt-2"
          />
        </div>
      </div>

      {/* Live URL */}
      <div>
        <Label className="text-gray-200">Live URL</Label>
        <Input
          type="text"
          name="liveUrl"
          value={formData.liveUrl}
          onChange={handleChange}
          className="bg-[#020617] border-gray-800 text-gray-100 placeholder-gray-700 mt-2"
        />
      </div>

      {/* Features */}
      <div>
        <Label className="text-gray-200">Features (comma separated)</Label>
        <Input
          type="text"
          name="features"
          value={formData.features}
          onChange={handleChange}
          className="bg-[#020617] border-gray-800 text-gray-100 placeholder-gray-700 mt-2"
        />
      </div>

      {/* Technology */}
      <div>
        <Label className="text-gray-200">Technologies (comma separated)</Label>
        <Input
          type="text"
          name="technology"
          value={formData.technology}
          onChange={handleChange}
          className="bg-[#020617] border-gray-800 text-gray-100 placeholder-gray-700 mt-2"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-3 flex justify-end">
        <Button
          type="submit"
          className="bg-gray-200 hover:bg-gray-100 text-gray-950 font-semibold"
        >
          Update Project
        </Button>
      </div>
    </form>
  );
}
