import { NextAuthOptions } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { UserRole } from "@/types/auth";

// Auth0 Management API fonksiyonu
// Auth0 Management API fonksiyonu - Metadata ile rol kontrolü
async function validateAuth0User(email: string, password: string) {
  try {
    const authResponse = await fetch(`https://${process.env.AUTH0_DOMAIN}/oauth/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        grant_type: 'password',
        username: email,
        password,
        client_id: process.env.AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        scope: 'openid profile email',
        realm: 'Username-Password-Authentication',
      }),
    });

    if (!authResponse.ok) {
      const errorText = await authResponse.text();
      console.error('Auth API failed:', errorText);
      return null;
    }

    const authData = await authResponse.json();

    const userResponse = await fetch(`https://${process.env.AUTH0_DOMAIN}/userinfo`, {
      headers: { Authorization: `Bearer ${authData.access_token}` },
    });

    if (!userResponse.ok) {
      const errorText = await userResponse.text();
      console.error('Userinfo API failed:', errorText);
      return null;
    }

    const userData = await userResponse.json();

    // Auth0'dan gelen rol bilgisini kontrol et
    const auth0Role = userData["https://your-app.com/role"];
    
    // Admin email kontrolü (fallback)
    const adminEmails = ['iremsilasarikaya@gmail.com', 'admin@gmail.com'];
    const isAdminByEmail = adminEmails.includes(userData.email);
    
    // Auth0'dan gelen rol varsa onu kullan, yoksa email kontrolü yap
    const userRole = auth0Role || (isAdminByEmail ? 'admin' : 'user');
    const userPermissions = userData["https://your-app.com/permissions"] || 
                           (userRole === 'admin' ? ['read:all', 'write:all', 'delete:all', 'manage:users'] : ['read:profile']);

    return {
      id: userData.sub,
      email: userData.email,
      name: userData.name,
      image: userData.picture,
      role: userRole as UserRole,
      permissions: userPermissions,
    };
  } catch (error) {
    console.error('validateAuth0User error:', error);
    return null;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Email and Password",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "email@example.com"
        },
        password: {
          label: "Password",
          type: "password"
        }
      },
      async authorize(
        credentials: Record<string, string> | undefined,
        req: any
      ): Promise<any | null> {
        console.log('Authorize başladı, credentials:', credentials);

        if (!credentials?.email || !credentials?.password) {
          console.log('Email veya password eksik');
          throw new Error('Email ve password gerekli');
        }

        try {
          // Auth0 ile doğrulama
          const user = await validateAuth0User(credentials.email, credentials.password);
          console.log('validateAuth0User sonucu:', user);

          if (user) {
            console.log('Kullanıcı başarıyla doğrulandı:', user);
            return {
              id: user.id,
              email: user.email,
              name: user.name,
              image: user.image,
              role: user.role,
              permissions: user.permissions,
            };
          }

          console.log('Kullanıcı bulunamadı veya geçersiz kimlik bilgileri');
          throw new Error('Geçersiz email veya password');
        } catch (error) {
          console.error('Authorize hatası:', error);
          throw new Error('Giriş işlemi başarısız');
        }
      }
    }),

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
      console.log('JWT callback:', { account: account?.provider, user, token });

      // Credentials provider'dan gelen kullanıcı
      if (account?.provider === 'credentials' && user) {
        console.log('Credentials provider için JWT token oluşturuluyor');
        token.role = user.role;
        token.permissions = user.permissions;
        token.sub = user.id;
        return token;
      }

      // Diğer provider'lar için mevcut logic
      if (account && profile) {
        const prof = profile as any;

        token.role = prof["https://your-app.com/role"] || "user";
        token.permissions = prof["https://your-app.com/permissions"] || ["read:profile"];
        token.accessToken = account.access_token ?? "";

        if (account.provider !== 'auth0') {
          const adminEmails = ['iremsilasarikaya@gmail.com', 'admin@gmail.com'];
          
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
      console.log('Session callback:', { session, token });

      if (session.user && token) {
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
      console.log('Redirect callback:', { url, baseUrl });
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
    maxAge: 24 * 60 * 60, // 24 saat
  },

  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
};