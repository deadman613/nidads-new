import { NextResponse } from "next/server";

const ROBOTS_HEADER = "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large";
const NOINDEX_HEADER = "noindex, nofollow";

export function middleware(request) {
  const response = NextResponse.next();
  const pathname = request.nextUrl.pathname;

  const isProtectedRoute = pathname.startsWith("/admin") || pathname.startsWith("/api");

  response.headers.set(
    "X-Robots-Tag",
    isProtectedRoute ? NOINDEX_HEADER : ROBOTS_HEADER
  );

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
