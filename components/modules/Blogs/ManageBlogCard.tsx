/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Image from "next/image";

import { MdDeleteForever } from "react-icons/md";

import { toast } from "sonner";

import Link from "next/link";
import { deleteBlogServerAction } from "../../../actions/blog/blogActions";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Label } from "../../ui/label";
import { DeleteAlertDialog } from "../../shared/DeleteAlertDialog";
import { Button } from "../../ui/button";
export interface Blog {
  id?: number;
  slug?: string;
  title: string;
  excerpt: string;
  content: string;
  thumbnail: string;
  isFeatured: boolean;
  tags: string[];
  status: string;
  createdAt: string;
  updateAt: string;
}

interface Props {
  blog: Blog;
}

export default function ManageBlogCard({ blog }: Props) {
  const handleDeleteBlog = async (slug: string) => {
    try {
      const result = await deleteBlogServerAction(slug);
      if (result.success) {
        toast.success("Blog deleted successfully");
      }
    } catch (error: any) {
      toast.error(`${error?.message}`);
      console.error(error);
    }
  };

  return (
    <Card className="bg-[#020617] border border-gray-800 shadow-md w-full  mx-auto py-6">
      <CardHeader className="flex flex-col md:flex-row md:items-start gap-4">
        <div className="flex-shrink-0 w-full md:w-40 h-28 relative rounded-md overflow-hidden">
          <Image
            src={blog?.thumbnail}
            alt={blog?.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 text-gray-100">
          <CardTitle className="text-lg md:text-xl font-semibold">
            {blog?.title}{" "}
            {blog?.isFeatured && (
              <span className="text-yellow-400 ml-2">★ Featured</span>
            )}
          </CardTitle>
          <p className="text-gray-400 mt-1 line-clamp-3">{blog.excerpt}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {blog.tags.map((tag, index) => (
              <Label
                key={index}
                className="bg-gray-900 border border-gray-800 text-gray-200 px-2 py-1 rounded-full text-xs"
              >
                {tag}
              </Label>
            ))}
          </div>
          <div className="flex gap-4 text-gray-400 mt-2 text-xs">
            <span className="font-semibold text-gray-200">
              Status: {blog.status}
            </span>
            <span>
              Created: {new Date(blog.createdAt).toLocaleDateString()}
            </span>
            <span>Updated: {new Date(blog.updateAt).toLocaleDateString()}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="mt-4 text-gray-300">
        <p className="line-clamp-5">{blog.content}</p>
      </CardContent>

      <CardFooter className="flex justify-end gap-3 mt-2">
        <DeleteAlertDialog
          onConfirm={() => handleDeleteBlog(blog?.slug as string)}
          triggerButton={
            <button className="flex items-center bg-gray-950 hover:bg-gray-900 border border-gray-800 px-3 py-2 rounded-md">
              <MdDeleteForever className="text-red-600 text-2xl" />
            </button>
          }
          title="Are you absolutely sure?"
          description="This action cannot be undone. It will permanently delete this blog post."
        />

        <Link href={`/dashboard/manage-blog/${blog?.slug as string}`}>
          <Button className="bg-gray-200 hover:bg-gray-100 text-gray-800 font-semibold">
            Update
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
