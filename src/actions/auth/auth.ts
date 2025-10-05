"use server";

import { FieldValues } from "react-hook-form";

export const createLogin = async (loginData: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
    credentials: "include",
  });

  if (!res.ok) {
    console.error("Login failed");
  }
  return await res.json();
};
