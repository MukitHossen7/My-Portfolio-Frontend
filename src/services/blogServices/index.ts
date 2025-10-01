export const getAllBlogs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
    next: {
      tags: ["BLOG"],
    },
  });
  const data = await res.json();
  return data;
};
