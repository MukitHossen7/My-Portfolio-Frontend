export default function Loading() {
  return (
    <div className="p-8">
      <div className="w-full h-96 bg-gray-800 animate-pulse rounded-md mb-6"></div>
      <div className="h-8 w-2/3 bg-gray-700 animate-pulse rounded mb-4"></div>
      <div className="h-4 w-full bg-gray-700 animate-pulse rounded mb-2"></div>
      <div className="h-4 w-5/6 bg-gray-700 animate-pulse rounded"></div>
    </div>
  );
}
