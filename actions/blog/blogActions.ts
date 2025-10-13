"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { IBlogFormData } from "../../types";
import { getAdminData } from "../../helpers/getAdminData";

// ---------------- CREATE ----------------
export const createBlogServerAction = async (blogData: IBlogFormData) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  if (!token) {
    redirect("/login");
  }
  const admin = await getAdminData();
  const blogPayload = {
    ...blogData,
    authorId: admin?.id,
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(blogPayload),
    // credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to create blog");
  revalidateTag("BLOG");
  return await res.json();
};

// ---------------- UPDATE ----------------
export const updateBlogServerAction = async (
  slug: string,
  updateBlogData: IBlogFormData
) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  if (!token) {
    redirect("/login");
  }
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${slug}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updateBlogData),
    // credentials: "include",
  });

  if (!res.ok) throw new Error("Failed to update blog");
  revalidateTag("BLOG");
  return await res.json();
};

// ---------------- DELETE ----------------
export const deleteBlogServerAction = async (slug: string) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;

  if (!token) {
    redirect("/login");
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${slug}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    // credentials: "include",
  });

  if (!res.ok) throw new Error("Failed to delete blog");
  revalidateTag("BLOG");
  return await res.json();
};
