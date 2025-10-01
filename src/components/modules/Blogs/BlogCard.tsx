"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IBlog } from "@/types";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }: { blog: IBlog }) => {
  return (
    <Link className="cursor-pointer" href={`/blog/${blog?.slug}`}>
      <Card className="bg-[#020617] shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl">
        <CardHeader className="p-0">
          <div className="relative h-56 w-full overflow-hidden rounded-t-xl">
            <Image
              src={blog?.thumbnail}
              alt={blog?.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </CardHeader>

        <CardContent className="p-4">
          <CardTitle className="text-xl md:text-2xl text-white font-semibold mb-2">
            {blog?.title}
          </CardTitle>
          <CardDescription className="text-gray-300 mb-3">
            {blog?.excerpt}
          </CardDescription>

          <div className="flex flex-wrap gap-2 mb-3">
            {blog?.tags?.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-gray-800 text-gray-200 text-xs rounded-full border border-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-gray-400 text-xs">
            By{" "}
            <span className="font-medium text-white">{blog.author.name}</span> •{" "}
            {new Date(blog.createdAt).toLocaleDateString()} • {blog?.views}{" "}
            views
          </p>
        </CardContent>

        <CardFooter className="p-4 flex justify-between items-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2">
            <ExternalLink className="h-4 w-4" /> Read More
          </Button>

          {blog.isFeatured && (
            <span className="text-yellow-400 font-semibold text-sm">
              Featured
            </span>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BlogCard;
