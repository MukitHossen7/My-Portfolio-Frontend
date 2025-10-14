"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getMe = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    redirect("/login");
  }
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch admin data");
  }

  const data = await res.json();
  return data;
};
