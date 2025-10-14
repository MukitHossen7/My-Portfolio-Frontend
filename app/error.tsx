"use client";

import { useEffect } from "react";
import { Button } from "../components/ui/button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#020617] px-4">
      <div className="max-w-md text-center rounded-lg border bg-[#020617] border-gray-800  p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-red-600">
          Something went wrong!
        </h2>
        <p className="mt-2 text-sm text-gray-200">
          {error.message || "An unexpected error occurred."}
        </p>

        {error.digest && (
          <p className="mt-1 text-xs text-gray-300">Error ID: {error.digest}</p>
        )}

        <div className="mt-4">
          <Button variant="outline" onClick={() => reset()}>
            Try again
          </Button>
        </div>
      </div>
    </div>
  );
}
