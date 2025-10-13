"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { IProjectFormData } from "../../types";
import { getAdminData } from "../../helpers/getAdminData";

// ---------------- CREATE ----------------
export const createProjectServerAction = async (
  projectData: IProjectFormData
) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  if (!token) {
    redirect("/login");
  }

  const admin = await getAdminData();

  const payload = {
    ...projectData,
    ownerId: admin?.id,
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
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
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  if (!token) {
    redirect("/login");
  }
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/project/${slug}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  if (!token) {
    redirect("/login");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/project/${slug}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      // credentials: "include",
    }
  );
  if (!res.ok) throw new Error("Failed to delete blog");
  revalidateTag("PROJECT");
  return await res.json();
};
