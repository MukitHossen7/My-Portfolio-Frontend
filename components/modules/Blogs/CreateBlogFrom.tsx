"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { createBlogServerAction } from "../../../actions/blog/blogActions";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Form } from "../../ui/form";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import { Button } from "../../ui/button";
import { Switch } from "../../ui/switch";

// 🧩 Zod Schema
const blogSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters."),
  excerpt: z.string().min(10, "Excerpt must be at least 10 characters."),
  content: z.string().min(20, "Content must be at least 20 characters."),
  thumbnail: z.string().url("Thumbnail must be a valid URL."),
  tags: z.string().min(1, "At least one tag is required."),
  isFeatured: z.boolean(),
  status: z.enum(["PUBLISHED", "ARCHIVED", "DRAFT"]),
});

type BlogFormData = z.infer<typeof blogSchema>;

export default function BlogCreateForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: "",
      excerpt: "",
      content: "",
      thumbnail: "",
      tags: "",
      isFeatured: false,
      status: "PUBLISHED",
    },
  });

  const onSubmit = async (data: BlogFormData) => {
    setLoading(true);
    try {
      const payload = {
        ...data,
        tags: data.tags.split(",").map((tag) => tag.trim()),
      };
      const result = await createBlogServerAction(payload);
      if (result.success) {
        toast.success("Blog created successfully!");
        router.push("/dashboard/manage-blog");
        form.reset();
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to create blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#020617] flex items-center justify-center py-10 px-4 lg:px-10">
      <Card className="w-full max-w-3xl bg-[#020617] border border-gray-800 shadow-md py-6">
        <CardHeader>
          <CardTitle className="text-gray-100 text-xl md:text-2xl text-center font-semibold">
            Create a New Blog
          </CardTitle>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              {/* Title */}
              <div>
                <Label htmlFor="title" className="text-gray-200">
                  Title
                </Label>
                <Input
                  id="title"
                  {...form.register("title")}
                  placeholder="Enter blog title"
                  className="bg-[#020617] border-gray-800 text-gray-100 placeholder-gray-700 mt-2"
                />
                {form.formState.errors.title && (
                  <p className="text-red-500 text-xs mt-1">
                    {form.formState.errors.title.message}
                  </p>
                )}
              </div>

              {/* Excerpt */}
              <div>
                <Label htmlFor="excerpt" className="text-gray-200">
                  Excerpt
                </Label>
                <Textarea
                  id="excerpt"
                  {...form.register("excerpt")}
                  placeholder="Short summary of your blog..."
                  className="bg-[#020617] border-gray-800 text-gray-100 placeholder-gray-700 mt-2"
                />
                {form.formState.errors.excerpt && (
                  <p className="text-red-500 text-xs mt-1">
                    {form.formState.errors.excerpt.message}
                  </p>
                )}
              </div>

              {/* Content */}
              <div>
                <Label htmlFor="content" className="text-gray-200">
                  Content
                </Label>
                <Textarea
                  id="content"
                  {...form.register("content")}
                  rows={6}
                  placeholder="Write your blog content here..."
                  className="bg-[#020617] border-gray-800 text-gray-100 placeholder-gray-700 mt-2"
                />
                {form.formState.errors.content && (
                  <p className="text-red-500 text-xs mt-1">
                    {form.formState.errors.content.message}
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
                  placeholder="https://example.com/image.jpg"
                  className="bg-[#020617] border-gray-800 text-gray-100 placeholder-gray-700 mt-2"
                />
                {form.formState.errors.thumbnail && (
                  <p className="text-red-500 text-xs mt-1">
                    {form.formState.errors.thumbnail.message}
                  </p>
                )}
              </div>

              {/* Tags */}
              <div>
                <Label htmlFor="tags" className="text-gray-200">
                  Tags (comma separated)
                </Label>
                <Input
                  id="tags"
                  {...form.register("tags")}
                  placeholder="Next.js, Tailwind CSS, Portfolio"
                  className="bg-[#020617] border-gray-800 text-gray-100 placeholder-gray-700 mt-2"
                />
                {form.formState.errors.tags && (
                  <p className="text-red-500 text-xs mt-1">
                    {form.formState.errors.tags.message}
                  </p>
                )}
              </div>

              {/* Status + Featured */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-10">
                <div className="flex-1">
                  <Label htmlFor="status" className="text-gray-200">
                    Status
                  </Label>
                  <select
                    id="status"
                    {...form.register("status")}
                    className="bg-[#020617] border border-gray-800 text-gray-100 w-full rounded-md px-2 py-2 mt-2"
                  >
                    <option value="PUBLISHED">Published</option>
                    <option value="ARCHIVED">Archived</option>
                    <option value="DRAFT">Draft</option>
                  </select>
                </div>

                <div className="flex items-center gap-2 mt-4 md:mt-0">
                  <Switch
                    id="isFeatured"
                    className="bg-gray-800"
                    checked={form.watch("isFeatured")}
                    onCheckedChange={(checked) =>
                      form.setValue("isFeatured", checked)
                    }
                  />
                  <Label htmlFor="isFeatured" className="text-gray-200">
                    Featured Blog
                  </Label>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gray-200 hover:bg-gray-100 text-gray-950"
              >
                {loading ? "Creating..." : "Create Blog"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
