import type { NextAuthRequest } from "next-auth/middleware";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { UserRole } from "./types/auth";

export default withAuth(
  function middleware(req: NextAuthRequest) {
    const token = req.nextauth?.token;
    const { pathname } = req.nextUrl;


    if (!token && !isPublicPath(pathname)) {
      const callbackUrl = req.nextUrl.clone();
      return NextResponse.redirect(
        new URL(`/login?callbackUrl=${encodeURIComponent(callbackUrl.toString())}`, req.url)
      );
    }


    if (token) {
      const userRole = token.role as UserRole;
      

      if (pathname.startsWith('/admin')) {
        if (userRole !== 'admin') {
          return NextResponse.redirect(new URL('/unauthorized', req.url));
        }
      }
      

      if (pathname.startsWith('/moderate')) {
        if (userRole !== 'admin' && userRole !== 'moderator') {
          return NextResponse.redirect(new URL('/unauthorized', req.url));
        }
      }
      

      if (pathname.startsWith('/dashboard')) {
        if (!userRole) {
          return NextResponse.redirect(new URL('/login', req.url));
        }
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl;
        

        if (isPublicPath(pathname)) {
          return true;
        }
        

        return !!token;
      },
    },
  }
);


function isPublicPath(pathname: string): boolean {
  const publicPaths = [
    '/login',
    '/signin',
    '/signup',
    '/register',
    '/unauthorized',
    '/api/auth',
    '/_next',
    '/favicon.ico',
    '/public'
  ];
  
  return publicPaths.some(path => pathname.startsWith(path));
}

export const config = {
  matcher: [
    "/((?!api/auth|_next/static|_next/image|favicon.ico|public).*)",
  ],
};