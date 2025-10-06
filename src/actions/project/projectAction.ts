"use server";
import { IProjectFormData } from "@/types";
import { revalidateTag } from "next/cache";

export const createProjectServerAction = async (
  projectData: IProjectFormData
) => {
  const payload = {
    ...projectData,
    ownerId: 1,
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    // credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to create project");
  revalidateTag("PROJECT");
  return await res.json();
};
