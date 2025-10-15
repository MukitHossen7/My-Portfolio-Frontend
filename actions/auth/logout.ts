"use server";

import { cookies } from "next/headers";

export const createLogOut = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });

    if (!res?.ok) {
      const errorText = await res.text();
      throw new Error(errorText || "Logout failed");
    }

    const result = await res.json();
    if (result?.success) {
      const cookiesStore = await cookies();
      cookiesStore.delete("token");
    }

    return result;
  } catch (error) {
    console.error("Logout failed:", error);
    return { success: false, message: "Logout failed" };
  }
};
