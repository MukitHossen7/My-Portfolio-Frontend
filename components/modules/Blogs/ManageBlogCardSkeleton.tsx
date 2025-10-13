"use client";
export default function ManageBlogCardSkeleton() {
  return (
    <div className="bg-[#020617] border border-gray-800 shadow-md w-full mx-auto p-6 animate-pulse rounded-md">
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        {/* Thumbnail */}
        <div className="flex-shrink-0 w-full md:w-40 h-28 bg-gray-900 rounded-md" />

        {/* Text content */}
        <div className="flex-1 space-y-2">
          {/* Title */}
          <div className="h-6 bg-gray-800 rounded w-3/4"></div>

          {/* Excerpt */}
          <div className="h-4 bg-gray-800 rounded w-full"></div>
          <div className="h-4 bg-gray-800 rounded w-3/6"></div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-2">
            <div className="h-5 w-12 bg-gray-800 rounded-full"></div>
            <div className="h-5 w-14 bg-gray-800 rounded-full"></div>
            <div className="h-5 w-10 bg-gray-800 rounded-full"></div>
          </div>

          {/* Status & Dates */}
          <div className="flex gap-4 mt-2 text-xs">
            <div className="h-3 w-16 bg-gray-800 rounded"></div>
            <div className="h-3 w-20 bg-gray-800 rounded"></div>
            <div className="h-3 w-20 bg-gray-800 rounded"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mt-4 space-y-2">
        <div className="h-3 bg-gray-800 rounded w-full"></div>
        <div className="h-3 bg-gray-800 rounded w-5/6"></div>
        <div className="h-3 bg-gray-800 rounded w-4/6"></div>
      </div>

      {/* Footer buttons */}
      <div className="flex justify-end gap-3 mt-4">
        <div className="h-8 w-20 bg-gray-800 rounded-md"></div>
        <div className="h-8 w-20 bg-gray-800 rounded-md"></div>
      </div>
    </div>
  );
}
