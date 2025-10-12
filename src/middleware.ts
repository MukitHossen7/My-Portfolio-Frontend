import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("accessToken")?.value;
  console.log(token);
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
    const { payload } = await jwtVerify(token, secret);
    if (payload.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }
  } catch (error) {
    console.error("Invalid Token:", error);
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};

// export const config = {
//   matcher: [
//     "/dashboard",
//     "/dashboard/create-blog",
//     "/dashboard/manage-blog",
//     "/dashboard/manage-blog/:slug*",
//     "/dashboard/create-project",
//     "/dashboard/manage-project",
//     "/dashboard/manage-project/:slug*",
//   ],
// };
