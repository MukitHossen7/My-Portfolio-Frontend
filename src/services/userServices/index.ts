export const getMe = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/users/me`, {
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch admin data");
  }

  const data = await res.json();
  return data;
};
