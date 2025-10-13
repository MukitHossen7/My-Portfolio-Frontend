"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { toast } from "sonner";
import { updateBlogServerAction } from "../../../actions/blog/blogActions";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Checkbox } from "../../ui/checkbox";
import { Button } from "../../ui/button";

interface Blog {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  thumbnail: string;
  isFeatured: boolean;
  status: string;
  tags: string[];
}

export default function BlogUpdateForm({ blog }: { blog: Blog }) {
  const [formData, setFormData] = useState(blog);
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      tags: e.target.value.split(",").map((tag) => tag.trim()),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const updateData = {
      title: formData.title,
      excerpt: formData.excerpt,
      content: formData.content,
      thumbnail: formData.thumbnail,
      isFeatured: formData.isFeatured,
      tags: formData.tags,
      status: formData.status,
    };
    try {
      const result = await updateBlogServerAction(formData.slug, updateData);
      if (result.success) {
        toast.success("Blog updated successfully!");
        router.back();
      }
    } catch (err) {
      toast.error("Failed to update blog");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 w-full">
      {/* Title */}
      <div className="space-y-1">
        <Label htmlFor="title" className="text-gray-200">
          Title
        </Label>
        <Input
          id="title"
          name="title"
          className="bg-[#020617] border-gray-800 text-gray-100 placeholder-gray-700 mt-2"
          value={formData.title}
          onChange={handleChange}
          placeholder="Blog Title"
        />
      </div>

      {/* Excerpt */}
      <div className="space-y-1">
        <Label htmlFor="excerpt" className="text-gray-200">
          Excerpt
        </Label>
        <Textarea
          id="excerpt"
          name="excerpt"
          className="bg-[#020617] border-gray-800 text-gray-100 placeholder-gray-700 mt-2"
          value={formData.excerpt}
          onChange={handleChange}
          rows={2}
          placeholder="Short excerpt of blog"
        />
      </div>

      {/* Content */}
      <div className="space-y-1">
        <Label htmlFor="content" className="text-gray-200">
          Content
        </Label>
        <Textarea
          id="content"
          name="content"
          className="bg-[#020617] border-gray-800 text-gray-100 placeholder-gray-700 mt-2"
          value={formData.content}
          onChange={handleChange}
          rows={5}
          placeholder="Blog content"
        />
      </div>

      {/* Thumbnail */}
      <div className="space-y-1">
        <Label htmlFor="thumbnail" className="text-gray-200">
          Thumbnail URL
        </Label>
        <Input
          id="thumbnail"
          name="thumbnail"
          className="bg-[#020617] border-gray-800 text-gray-100 placeholder-gray-700 mt-2"
          value={formData.thumbnail}
          onChange={handleChange}
          placeholder="Image URL"
        />
      </div>

      {/* Tags */}
      <div className="space-y-1">
        <Label htmlFor="tags" className="text-gray-200">
          Tags (comma separated)
        </Label>
        <Input
          id="tags"
          name="tags"
          className="bg-[#020617] border-gray-800 text-gray-100 placeholder-gray-700 mt-2"
          value={formData.tags.join(", ")}
          onChange={handleTagsChange}
          placeholder="Next.js, Tailwind, SEO"
        />
      </div>

      {/* Status */}
      <div className="space-y-1">
        <Label htmlFor="status" className="text-gray-200">
          Status
        </Label>
        <Select
          value={formData.status}
          onValueChange={(value) => setFormData({ ...formData, status: value })}
        >
          <SelectTrigger className="bg-[#020617] border-gray-800 text-gray-100 placeholder-gray-700 mt-2 w-full">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent className="bg-[#020617] text-gray-200 border border-gray-800">
            <SelectItem value="DRAFT">DRAFT</SelectItem>
            <SelectItem value="PUBLISHED">PUBLISHED</SelectItem>
            <SelectItem value="ARCHIVED">ARCHIVED</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Featured */}
      <div className="flex items-center gap-2">
        <Checkbox
          checked={formData.isFeatured}
          className="bg-[#020617] border-gray-300 text-gray-100"
          onCheckedChange={(checked) =>
            setFormData({ ...formData, isFeatured: !!checked })
          }
        />
        <Label className="text-gray-200">Featured Blog</Label>
      </div>

      {/* Submit */}
      <div className="flex justify-end pt-3">
        <Button
          type="submit"
          className="bg-gray-200 hover:bg-gray-100 text-gray-950 font-semibold"
        >
          Update Blog
        </Button>
      </div>
    </form>
  );
}
