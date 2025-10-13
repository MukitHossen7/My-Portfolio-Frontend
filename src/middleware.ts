// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("accessToken")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET!);
    return NextResponse.next();
  } catch (err) {
    console.log(err);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*"], // প্রাইভেট রাউট
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
