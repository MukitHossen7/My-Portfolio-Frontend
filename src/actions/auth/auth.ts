"use server";

import { FieldValues } from "react-hook-form";
import { cookies } from "next/headers";

export const createLogin = async (loginData: FieldValues) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  if (!token) throw new Error("No token found");

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(loginData),
    // credentials: "include",
  });

  if (!res.ok) {
    console.error("Login failed");
  }
  return await res.json();
};
