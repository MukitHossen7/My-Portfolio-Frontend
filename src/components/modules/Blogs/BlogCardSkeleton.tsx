import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const BlogCardSkeleton = () => {
  return (
    <Card className="bg-[#020617] shadow-md rounded-xl animate-pulse">
      <CardHeader className="p-0">
        <Skeleton className="h-56 w-full rounded-t-xl" />
      </CardHeader>

      <CardContent className="p-4">
        <Skeleton className="h-6 w-3/4 mb-2" /> {/* Title */}
        <Skeleton className="h-4 w-full mb-1" /> {/* Excerpt */}
        <Skeleton className="h-4 w-5/6 mb-1" />
        <Skeleton className="h-4 w-2/3 mb-3" />
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-24 rounded-full" />
        </div>
        <Skeleton className="h-4 w-32 mt-3" /> {/* Author info */}
      </CardContent>

      <CardFooter className="p-4 flex justify-between items-center">
        <Skeleton className="h-8 w-28 rounded-md" /> {/* Button */}
        <Skeleton className="h-6 w-16 rounded-md" /> {/* Featured badge */}
      </CardFooter>
    </Card>
  );
};

export default BlogCardSkeleton;
