"use server";

import { IBlogFormData } from "@/types";
import { revalidateTag } from "next/cache";

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
