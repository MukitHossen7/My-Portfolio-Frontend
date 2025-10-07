"use server";
import { IProjectFormData } from "@/types";
import { revalidateTag } from "next/cache";

// ---------------- CREATE ----------------
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

// ---------------- UPDATE ----------------
export const updateProjectServerAction = async (
  slug: string,
  updateProjectData: IProjectFormData
) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/project/${slug}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateProjectData),
      // credentials: "include",
    }
  );

  if (!res.ok) throw new Error("Failed to update project");
  revalidateTag("PROJECT");
  return await res.json();
};

// ---------------- DELETE ----------------
export const deleteProjectServerAction = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/project/${slug}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      // credentials: "include",
    }
  );
  if (!res.ok) throw new Error("Failed to delete blog");
  revalidateTag("PROJECT");
  return await res.json();
};
