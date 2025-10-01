export const getAllProjects = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
    next: {
      tags: ["PROJECT"],
    },
  });

  const data = await res.json();
  return data;
};
