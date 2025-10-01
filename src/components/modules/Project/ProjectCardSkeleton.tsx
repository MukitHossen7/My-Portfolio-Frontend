"use client";

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectCardSkeleton() {
  return (
    <div className="bg-[#020617]">
      <Card className="relative shadow-none py-6 bg-[#020617]">
        <CardHeader>
          {/* Image Skeleton */}
          <Skeleton className="h-[250px] w-full rounded-md" />
        </CardHeader>

        <CardContent>
          {/* Title */}
          <Skeleton className="h-6 w-2/3 mb-3" />

          {/* Description */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-2/3" />
          </div>

          {/* Technology section */}
          <div className="mt-6 space-y-3">
            <Skeleton className="h-4 w-32" />
            <div className="flex flex-wrap gap-2">
              <Skeleton className="h-6 w-10 rounded-full" />
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-20 rounded-full" />
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex space-x-4 mt-6">
          <Skeleton className="h-8 w-20 rounded-md" />
          <Skeleton className="h-8 w-20 rounded-md" />
          <Skeleton className="h-8 w-20 rounded-md" />
        </CardFooter>
      </Card>
    </div>
  );
}
