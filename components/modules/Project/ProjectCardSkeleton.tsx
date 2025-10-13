"use client";

import { Card, CardContent, CardFooter, CardHeader } from "../../ui/card";
import { Skeleton } from "../../ui/skeleton";

export default function ProjectCardSkeleton() {
  return (
    <Card className="relative bg-[#020617] shadow-md rounded-xl">
      {/* Image Skeleton */}
      <CardHeader className="p-0">
        <Skeleton className="h-56 w-full rounded-t-xl bg-gray-800 shimmer" />
      </CardHeader>

      {/* Content */}
      <CardContent className="p-4">
        {/* Title */}
        <Skeleton className="h-6 w-2/3 mb-4 bg-gray-800 shimmer" />

        {/* Description */}
        <div className="space-y-2 mb-4">
          <Skeleton className="h-4 w-full bg-gray-800 shimmer" />
          <Skeleton className="h-4 w-5/6 bg-gray-800 shimmer" />
          <Skeleton className="h-4 w-2/3 bg-gray-800 shimmer" />
        </div>

        {/* Technology section */}
        <div className="mt-4 space-y-3">
          <Skeleton className="h-4 w-32 bg-gray-800 shimmer" />
          <div className="flex flex-wrap gap-2">
            <Skeleton className="h-6 w-16 rounded-full bg-gray-800 shimmer" />
            <Skeleton className="h-6 w-20 rounded-full bg-gray-800 shimmer" />
            <Skeleton className="h-6 w-20 rounded-full bg-gray-800 shimmer" />
            <Skeleton className="h-6 w-24 rounded-full bg-gray-800 shimmer" />
          </div>
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="p-4 flex flex-wrap gap-3">
        <Skeleton className="h-8 w-24 rounded-md bg-gray-800 shimmer" />
        <Skeleton className="h-8 w-24 rounded-md bg-gray-800 shimmer" />
        <Skeleton className="h-8 w-24 rounded-md bg-gray-800 shimmer" />
      </CardFooter>
    </Card>
  );
}
