"use client";

import { Eye } from "lucide-react";
import Image from "next/image";
import { IBlog } from "../../../types";

const BlogDetailsCard = ({ blog }: { blog: IBlog }) => {
  return (
    <div className="bg-[#020617] min-h-screen py-12 px-4 lg:px-0">
      <div className="max-w-6xl mx-auto">
        {/* Hero Image */}
        <div className="relative w-full h-96 rounded-md overflow-hidden shadow mb-6">
          <Image
            src={blog?.thumbnail}
            alt={blog?.title}
            fill
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
          />
          {blog?.isFeatured && (
            <span className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full font-medium text-sm shadow-md">
              Featured
            </span>
          )}
        </div>

        {/* Title & Excerpt */}
        <h1 className="text-2xl md:text-4xl text-gray-100 font-bold mb-4 leading-tight">
          {blog?.title}
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-8">{blog?.excerpt}</p>

        {/* Author & Meta Info */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-gray-700 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-white font-semibold text-lg">
              {blog?.author?.name.charAt(0)}
            </div>
            <div>
              <p className="text-gray-100 font-medium">{blog?.author?.name}</p>
              <p className="text-gray-400 text-sm">{blog?.author?.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1 text-gray-100 font-medium">
              <Eye className="w-4 h-4" />
              <span>{blog?.views}</span>
            </div>
            <span
              className={`px-2 py-1 rounded-full font-medium ${
                blog?.status === "PUBLISHED"
                  ? "text-yellow-500"
                  : "text-gray-200"
              }`}
            >
              {blog?.status}
            </span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-8">
          {blog?.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-gray-200 text-sm rounded-full border border-gray-700 hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Blog Content */}
        <article className="prose prose-invert max-w-none text-gray-200 mb-12 leading-relaxed">
          {blog?.content?.split("\n")?.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </article>
      </div>
    </div>
  );
};

export default BlogDetailsCard;
