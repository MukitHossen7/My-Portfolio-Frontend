"use client";

import { Card, CardContent, CardFooter, CardHeader } from "../../ui/card";
import { Skeleton } from "../../ui/skeleton";

export default function ManageProjectCardSkeleton() {
  return (
    <Card className="bg-[#020617] border border-gray-800 shadow-md w-full mx-auto py-6 rounded-md">
      {/* Thumbnail + Title */}
      <CardHeader className="flex flex-col sm:flex-row gap-4 sm:items-start">
        <div className="relative w-full sm:w-52 h-36 rounded-md overflow-hidden">
          <Skeleton className="w-full h-full bg-gray-800" />
        </div>

        <div className="flex-1 space-y-3">
          <Skeleton className="h-6 w-3/4 bg-gray-800" />
          <Skeleton className="h-4 w-full bg-gray-800" />
          <Skeleton className="h-4 w-5/6 bg-gray-800" />

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mt-3">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-5 w-16 bg-gray-800 rounded-full" />
            ))}
          </div>
        </div>
      </CardHeader>

      {/* Features */}
      <CardContent className="mt-4 space-y-3">
        <Skeleton className="h-5 w-1/3 bg-gray-800" />
        <div className="space-y-2">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-3 w-full bg-gray-800" />
          ))}
        </div>
      </CardContent>

      {/* Links */}
      <CardContent className="mt-3 flex flex-wrap gap-3">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-4 w-24 bg-gray-800 rounded" />
        ))}
      </CardContent>

      {/* Buttons */}
      <CardFooter className="flex justify-end gap-3 mt-4">
        <Skeleton className="h-9 w-20 bg-gray-800 rounded-md" />
        <Skeleton className="h-9 w-20 bg-gray-800 rounded-md" />
      </CardFooter>
    </Card>
  );
}
