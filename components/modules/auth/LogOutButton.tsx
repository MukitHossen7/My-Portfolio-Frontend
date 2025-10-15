"use client";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { createLogOut } from "../../../actions/auth/logout";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const result = await createLogOut();
    if (result.success) {
      router.push("/"); // Redirect to home
    } else {
      console.error(result.message);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full flex items-center gap-2 text-gray-200 hover:text-gray-100 hover:bg-gray-800 transition-all px-3 py-2 rounded-md border border-gray-700"
    >
      <LogOut className="w-4 h-4" />
      <span>Logout</span>
    </button>
  );
}
