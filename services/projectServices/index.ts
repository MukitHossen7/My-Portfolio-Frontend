export const getAllProjects = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
    next: {
      tags: ["PROJECT"],
    },
  });

  const data = await res.json();
  return data;
};

export const getProjectById = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/project/${slug}`
  );
  const data = await res.json();
  return data;
};
