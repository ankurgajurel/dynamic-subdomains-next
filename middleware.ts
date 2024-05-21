import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const hostname = request.headers.get("host");

  console.log(request.nextUrl);
  const subdomain = hostname?.split(".")[0];

  console.log(subdomain);

  if (subdomain) {
    return NextResponse.rewrite(new URL(`/restro/${subdomain}`, request.url));
  }

  return new Response(null, { status: 404 });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
