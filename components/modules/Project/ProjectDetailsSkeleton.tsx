"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Skeleton } from "../../ui/skeleton";

export default function ProjectDetailsSkeleton() {
  return (
    <div className="min-h-screen bg-[#020617] py-12 px-4 lg:px-0 max-w-6xl mx-auto space-y-10">
      {/* Banner Skeleton */}
      <div className="relative w-full h-64 md:h-96 lg:h-[400px] rounded-xl overflow-hidden">
        <Skeleton className="h-full w-full bg-gray-800 rounded-xl shimmer" />
      </div>

      {/* Project Overview Skeleton */}
      <Card className="bg-[#020617] py-6 border border-gray-700 shadow-xl rounded-xl">
        <CardHeader>
          <CardTitle className="h-8 w-1/3 bg-gray-800 rounded-md shimmer"></CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 mt-3">
          <Skeleton className="h-4 w-full bg-gray-800 rounded-md shimmer" />
          <Skeleton className="h-4 w-5/6 bg-gray-800 rounded-md shimmer" />
          <Skeleton className="h-4 w-2/3 bg-gray-800 rounded-md shimmer" />
        </CardContent>
      </Card>

      {/* Features Skeleton */}
      <Card className="bg-[#020617] py-6 border border-gray-700 shadow-xl rounded-xl">
        <CardHeader>
          <CardTitle className="h-8 w-1/3 bg-gray-800 rounded-md shimmer"></CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 mt-3">
          <Skeleton className="h-4 w-full bg-gray-800 rounded-md shimmer" />
          <Skeleton className="h-4 w-5/6 bg-gray-800 rounded-md shimmer" />
          <Skeleton className="h-4 w-2/3 bg-gray-800 rounded-md shimmer" />
          <Skeleton className="h-4 w-full bg-gray-800 rounded-md shimmer" />
        </CardContent>
      </Card>

      {/* Technologies Skeleton */}
      <Card className="bg-[#020617] py-6 border border-gray-700 shadow-xl rounded-xl ">
        <CardHeader>
          <CardTitle className="h-8 w-1/3 bg-gray-800 rounded-md shimmer"></CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3 mt-3">
          <Skeleton className="h-6 w-20 rounded-full bg-gray-800 shimmer" />
          <Skeleton className="h-6 w-16 rounded-full bg-gray-800 shimmer" />
          <Skeleton className="h-6 w-24 rounded-full bg-gray-800 shimmer" />
          <Skeleton className="h-6 w-20 rounded-full bg-gray-800 shimmer" />
        </CardContent>
      </Card>

      {/* Links Skeleton */}
      <div className="flex flex-wrap gap-4 mt-6">
        <Skeleton className="h-10 w-32 rounded-md bg-gray-800  shimmer" />
        <Skeleton className="h-10 w-32 rounded-md bg-gray-800  shimmer" />
        <Skeleton className="h-10 w-32 rounded-md bg-gray-800  shimmer" />
      </div>

      {/* Owner Info Skeleton */}
      <Card className="bg-[#020617]  border border-gray-700 shadow-xl rounded-xl flex  gap-4 p-6">
        <div className="flex items-center gap-3">
          <div>
            <Skeleton className="w-16 h-16 rounded-full bg-gray-800 shimmer" />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-32 bg-gray-800 rounded-md shimmer" />
            <Skeleton className="h-3 w-48 bg-gray-800 rounded-md shimmer" />
            <Skeleton className="h-3 w-24 bg-gray-800 rounded-md shimmer" />
          </div>
        </div>
      </Card>
    </div>
  );
}
