"use client";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IBlog } from "../../../types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";

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
          <CardTitle className="text-xl md:text-2xl text-gray-100 font-semibold mb-2">
            {blog?.title}
          </CardTitle>
          <CardDescription className="text-gray-300 mb-4">
            {blog?.excerpt.slice(0, 70)} ...
          </CardDescription>

          <div className="flex flex-wrap gap-2 mb-5">
            {blog?.tags?.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1  text-gray-200 text-xs rounded-full border border-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="text-gray-400 text-sm flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <p>
                By{" "}
                <span className="font-semibold text-gray-100">
                  {blog?.author?.name}
                </span>{" "}
              </p>
              <p className="text-xs">
                {new Date(blog.createdAt).toLocaleDateString()}
              </p>
            </div>

            <p className="text-gray-200 font-semibold flex items-center gap-1">
              <Eye className="text-sm" />
              {blog?.views}
            </p>
          </div>
        </CardContent>

        <CardFooter className="p-4 flex justify-between items-center">
          <p className="text-gray-300 hover:text-gray-100 text-sm hover:underline">
            Read More
          </p>

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
