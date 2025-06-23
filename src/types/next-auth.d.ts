import type { JWT } from "next-auth/jwt";
import type { NextRequest } from "next/server";

declare module "next-auth/middleware" {
  interface NextAuthRequest extends NextRequest {
    nextauth: {
      token: JWT | null;
    };
  }
}
