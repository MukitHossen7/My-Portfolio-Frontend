import { jwtVerify } from "jose";
import { cookies } from "next/headers";

export const getAdminData = async () => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    if (!token) return null;

    const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (error) {
    console.error("Failed to verify token:", error);
    return null;
  }
};
