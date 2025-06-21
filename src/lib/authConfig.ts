import { NextAuthOptions } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { UserRole } from "@/types/auth";

export const authOptions: NextAuthOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: `https://${process.env.AUTH0_DOMAIN}`,
      authorization: {
        params: {
          scope: "openid profile email read:user_role",
        },
      },
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async jwt({ token, account, profile, user }) {
      if (account && profile) {
        const prof = profile as any;


        token.role = prof["https://your-app.com/role"] || "user";
        token.permissions = prof["https://your-app.com/permissions"] || ["read:profile"];
        token.accessToken = account.access_token ?? "";



        if (account.provider !== 'auth0') {
          const adminEmails = ['iremsilasarikaya@gmail.com'];
          
          if (adminEmails.includes(prof.email || '')) {
            token.role = 'admin';
            token.permissions = ['read:all', 'write:all', 'delete:all', 'manage:users'];
          } else {
            token.role = 'user';
            token.permissions = ['read:profile'];
          }
        }

        if (prof.updated_at) {
          token.updated_at = prof.updated_at;
        }
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as UserRole;
        session.user.permissions = token.permissions as string[];
        session.accessToken = token.accessToken as string;

        if (token.updated_at) {
          session.user.updated_at = token.updated_at as string;
        }
      }

      return session;
    },

    async redirect({ url, baseUrl }) {
      if (url === baseUrl) {
        return `${baseUrl}/dashboard`;
      }
      return url.startsWith("/") ? `${baseUrl}${url}` : url;
    },
  },

  pages: {
    signIn: "/login",
    error: "/login",
  },

  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, 
  },

  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
};