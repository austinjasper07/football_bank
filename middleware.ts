// /middleware.ts

import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const PUBLIC_PATHS = ["/api/auth/signin", "/api/auth/signup"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ✅ Allow public auth paths
  if (PUBLIC_PATHS.includes(pathname)) return NextResponse.next();

  // ✅ Allow public read-only APIs
  if (
    pathname.startsWith("/api/user") ||
    pathname.startsWith("/api/post") ||
    (pathname.startsWith("/api/product") && req.method === "GET")
  ) {
    return NextResponse.next();
  }

  // ✅ Require token for all other /api paths
  const token = req.headers.get("authorization")?.split(" ")[1];
  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { role: string };

    // 🔐 Admin-only routes
    if (pathname.startsWith("/api/admin") && decoded.role !== "admin") {
      return NextResponse.json({ error: "Forbidden: Admins only" }, { status: 403 });
    }

    // 🔐 Player modification restricted to admins
    if (
      pathname.startsWith("/api/player") &&
      ["POST", "PATCH", "DELETE"].includes(req.method) &&
      decoded.role !== "admin"
    ) {
      return NextResponse.json({ error: "Forbidden: Admins only for write actions" }, { status: 403 });
    }

    // 🔐 Player request route — allow any authenticated user (verify subscription in route)
    if (pathname.startsWith("/api/player-request")) {
      return NextResponse.next(); // ✅ already verified token
    }

    return NextResponse.next();
  } catch {
    return NextResponse.json({ error: "Invalid token" }, { status: 403 });
  }
}

export const config = {
  matcher: ["/api/:path*"], // Apply to all API routes
};
