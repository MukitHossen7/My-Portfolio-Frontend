"use server";

import { IBlogFormData } from "@/types";
import { revalidateTag } from "next/cache";

// ---------------- CREATE ----------------
export const createBlogServerAction = async (blogData: IBlogFormData) => {
  const blogPayload = {
    ...blogData,
    authorId: 1,
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${slug}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${slug}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    // credentials: "include",
  });

  if (!res.ok) throw new Error("Failed to delete blog");
  revalidateTag("BLOG");
  return await res.json();
};
