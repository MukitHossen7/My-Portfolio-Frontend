"use server";
import { cookies } from "next/headers";

export const getMe = async () => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) return null;

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/users/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      credentials: "include",
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch user:", res.statusText);
      return null;
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error in getMe:", error);
    return null;
  }
};
