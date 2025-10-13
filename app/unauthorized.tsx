import Link from "next/link";
import { Button } from "../components/ui/button";

export default function Unauthorized() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-[#020617] px-4">
      <div className="text-center max-w-md p-8 bg-[#020617] border border-gray-700 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-gray-100 mb-4">
          401 - Unauthorized
        </h1>
        <p className="text-gray-300 mb-6">
          You must log in to access this page.
        </p>
        <Link href="/login">
          <Button className="bg-gray-200 hover:bg-gray-100 text-gray-900 w-full">
            Go to Login
          </Button>
        </Link>
      </div>
    </main>
  );
}
