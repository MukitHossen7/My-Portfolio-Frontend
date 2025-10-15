"use server";
import { cookies } from "next/headers";

export const createLogin = async (loginData: {
  email: string;
  password: string;
}) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(loginData),
  });

  if (!res?.ok) {
    // console.error('User login failed!', await res.text());
    await res.text();
  }
  const result = await res.json();
  if (result?.success) {
    // console.log('User login successful!', result);
    const cookiesStore = await cookies();
    cookiesStore.set("token", result?.data?.token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      path: "/",
    });
  }

  return result;
};

// import axios from "axios";
// import { cookies } from "next/headers";

// export const createLogin = async (loginData: {
//   email: string;
//   password: string;
// }) => {
//   const res = await axios.post(
//     `${process.env.NEXT_PUBLIC_BASE_API}/auth/login`,
//     loginData,
//     { withCredentials: true }
//   );
//   console.log(res);
//   if (res.status === 200) {
//     const cookiesStore = await cookies();
//     cookiesStore.set("token", res.data.accessToken, {
//       httpOnly: true,
//       secure: true,
//       sameSite: "none",
//       path: "/",
//     });
//   }

//   return res.data;
// };
