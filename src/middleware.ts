import type { NextAuthRequest } from "next-auth/middleware";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req: NextAuthRequest) {
    const token = req.nextauth?.token;
    const { pathname } = req.nextUrl;

    // Token yoksa ve login veya signin sayfası değilse yönlendir
    if (!token && !pathname.startsWith('/login') && !pathname.startsWith('/signin')) {
      const callbackUrl = req.nextUrl.clone();
      return NextResponse.redirect(
        new URL(`/login?callbackUrl=${encodeURIComponent(callbackUrl.toString())}`, req.url)
      );
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|login|signin).*)"],
};
