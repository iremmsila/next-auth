import { UserRole } from "./roles";

export interface AuthUser {
  id: string;
  email: string;
  name?: string;
  image?: string;
  role: UserRole;
  permissions: string[];
}

export class Auth0Service {
  private adminEmails = ['iremsilasarikaya@gmail.com', 'admin@gmail.com'];

  constructor(
    private domain: string = process.env.AUTH0_DOMAIN || '',
    private clientId: string = process.env.AUTH0_CLIENT_ID || '',
    private clientSecret: string = process.env.AUTH0_CLIENT_SECRET || ''
  ) {}

  async validateUser(email: string, password: string): Promise<AuthUser | null> {
    try {
      const authResponse = await fetch(`https://${this.domain}/oauth/token`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          grant_type: 'password',
          username: email,
          password,
          client_id: this.clientId,
          client_secret: this.clientSecret,
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

      const userResponse = await fetch(`https://${this.domain}/userinfo`, {
        headers: { Authorization: `Bearer ${authData.access_token}` },
      });

      if (!userResponse.ok) {
        const errorText = await userResponse.text();
        console.error('Userinfo API failed:', errorText);
        return null;
      }

      const userData = await userResponse.json();


      const auth0Role = userData["https://your-app.com/role"];
      const isAdminByEmail = this.adminEmails.includes(userData.email);
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
      console.error('validateUser error:', error);
      return null;
    }
  }
}
