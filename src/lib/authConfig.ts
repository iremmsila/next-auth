import { NextAuthOptions } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

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
async jwt({ token, account, profile }) {
  if (account && profile) {
    const prof = profile as any;

    token.role = prof["https://your-app.com/role"] || "user";
    token.accessToken = account.access_token;

    // ✅ updated_at bilgisi varsa token'a ekle
    if (prof.updated_at) {
      token.updated_at = prof.updated_at;
    }
  }
  return token;
},


  async session({ session, token }) {
    session.accessToken = token.accessToken as string;
    session.user.role = token.role as string;

    // ✅ updated_at bilgisini session.user'a ekle
    if (token.updated_at) {
      session.user.updated_at = token.updated_at as string;
    }

    return session;
  },

  async redirect({ url, baseUrl }) {
    return url.startsWith("/") ? `${baseUrl}${url}` : url;
  },
},


  pages: {
    signIn: "/login",
    error: "/login",
  },

  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 saat
  },

  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
};
