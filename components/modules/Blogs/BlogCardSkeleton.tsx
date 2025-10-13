"use client";

import { Card, CardContent, CardFooter, CardHeader } from "../../ui/card";
import { Skeleton } from "../../ui/skeleton";

const BlogCardSkeleton = () => {
  return (
    <Card className="bg-[#020617] shadow-md rounded-xl">
      <CardHeader className="p-0 ">
        <Skeleton className="h-56 w-full rounded-t-xl bg-gray-800 shimmer" />
      </CardHeader>

      <CardContent className="p-4">
        <Skeleton className="h-6 w-3/4 mb-3 bg-gray-800 shimmer" />{" "}
        {/* Title */}
        <Skeleton className="h-4 w-full mb-2 bg-gray-800 shimmer" />{" "}
        {/* Excerpt */}
        <Skeleton className="h-4 w-5/6 mb-2 bg-gray-800 shimmer" />
        <Skeleton className="h-4 w-2/3  bg-gray-800 shimmer" />
        <div className="flex flex-wrap gap-2 mt-4">
          <Skeleton className="h-6 w-16 rounded-full bg-gray-800 shimmer" />
          <Skeleton className="h-6 w-20 rounded-full bg-gray-800 shimmer" />
          <Skeleton className="h-6 w-20 rounded-full bg-gray-800 shimmer" />
          <Skeleton className="h-6 w-24 rounded-full bg-gray-800 shimmer" />
        </div>
        {/* Author + Views */}
        <div className="flex items-center justify-between mt-4">
          <div className="space-y-2">
            <Skeleton className="h-4 w-24 bg-gray-800 shimmer" />
            <Skeleton className="h-3 w-16 bg-gray-800 shimmer" />
          </div>
          <Skeleton className="h-4 w-10 bg-gray-800 shimmer" />
        </div>
        {/* Author info */}
      </CardContent>

      <CardFooter className="p-4 flex justify-between items-center">
        <Skeleton className="h-4 w-16 rounded-md bg-gray-800 shimmer" />{" "}
        {/* Button */}
        <Skeleton className="h-4 w-16 rounded-md bg-gray-800 shimmer" />{" "}
        {/* Featured badge */}
      </CardFooter>
    </Card>
  );
};

export default BlogCardSkeleton;
