"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export interface Blog {
  id?: number;
  title: string;
  excerpt: string;
  content: string;
  thumbnail: string;
  isFeatured: boolean;
  tags: string[];
  status: string;
  createdAt: string;
  updateAt: string;
  onDelete?: (id: number) => void;
  onUpdate?: (id: number) => void;
}

interface Props {
  blog: Blog;
}

export default function ManageBlogCard({ blog }: Props) {
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
        <Button
          className="bg-red-700 hover:bg-red-600 text-gray-100"
          onClick={() => blog.onDelete && blog.onDelete(blog.id!)}
        >
          Delete
        </Button>
        <Button
          className="bg-blue-700 hover:bg-blue-600 text-gray-100"
          onClick={() => blog.onUpdate && blog.onUpdate(blog.id!)}
        >
          Update
        </Button>
      </CardFooter>
    </Card>
  );
}
