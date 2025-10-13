const BlogDetailsSkeleton = () => {
  return (
    <div className="bg-[#020617] min-h-screen py-12 px-4 lg:px-0">
      <div className="max-w-6xl mx-auto ">
        {/* Hero Image Skeleton */}
        <div className="relative w-full h-96 rounded-md overflow-hidden shadow mb-6 bg-gray-800 shimmer" />

        {/* Title Skeleton */}
        <div className="h-8 w-2/3 bg-gray-800 rounded shimmer" />
        <div className="my-6 space-y-3">
          <div className="h-5 w-full bg-gray-800 rounded shimmer" />
          <div className="h-5 w-2/3 bg-gray-800 rounded shimmer" />
          <div className="h-5 w-1/3 bg-gray-800 rounded shimmer" />
        </div>

        {/* Author & Meta Info Skeleton */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-gray-700 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-800 shimmer" />
            <div>
              <div className="h-4 w-32 bg-gray-800 rounded mb-2 shimmer" />
              <div className="h-3 w-40 bg-gray-800 rounded shimmer" />
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <div className="h-4 w-16 bg-gray-800 rounded shimmer" />
            <div className="h-4 w-20 bg-gray-800 rounded shimmer" />
          </div>
        </div>

        {/* Tags Skeleton */}
        <div className="flex gap-3 mb-8">
          <div className="h-6 w-16 bg-gray-800 rounded-full shimmer" />
          <div className="h-6 w-20 bg-gray-800 rounded-full shimmer" />
          <div className="h-6 w-14 bg-gray-800 rounded-full shimmer" />
        </div>

        {/* Blog Content Skeleton */}
        <div className="space-y-3">
          <div className="h-4 w-full bg-gray-800 rounded shimmer" />
          <div className="h-4 w-5/6 bg-gray-800 rounded shimmer" />
          <div className="h-4 w-4/6 bg-gray-800 rounded shimmer" />
          <div className="h-4 w-3/4 bg-gray-800 rounded shimmer" />
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsSkeleton;
