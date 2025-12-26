"use client";
import { Card, CardContent, CardHeader } from "../../ui/card";
import { Skeleton } from "../../ui/skeleton";

export default function ProjectCardSkeleton() {
  return (
    <Card className="bg-[#0f172a]/40 border-slate-800 shadow-md rounded-3xl overflow-hidden h-full flex flex-col">
      <CardHeader className="p-0">
        <Skeleton className="h-56 w-full bg-slate-800/50 rounded-none animate-pulse" />
      </CardHeader>

      <CardContent className="p-6 flex-grow flex flex-col">
        {/* Title Skeleton */}
        <Skeleton className="h-7 w-3/4 mb-4 bg-slate-800 animate-pulse rounded-md" />

        {/* Description Skeleton (Two lines matching line-clamp-2) */}
        <div className="space-y-2 mb-8">
          <Skeleton className="h-4 w-full bg-slate-800/60 animate-pulse rounded-md" />
          <Skeleton className="h-4 w-5/6 bg-slate-800/60 animate-pulse rounded-md" />
        </div>

        {/* Technology Tags Skeleton (Matching flex-wrap gap-2) */}
        <div className="flex flex-wrap gap-2 mt-auto">
          <Skeleton className="h-6 w-16 bg-slate-800 animate-pulse rounded-md" />
          <Skeleton className="h-6 w-20 bg-slate-800 animate-pulse rounded-md" />
          <Skeleton className="h-6 w-14 bg-slate-800 animate-pulse rounded-md" />
          <Skeleton className="h-6 w-18 bg-slate-800 animate-pulse rounded-md" />
        </div>
      </CardContent>
    </Card>
  );
}
