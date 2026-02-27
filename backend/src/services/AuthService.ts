// JWT authentication service


export interface AuthServiceConfig {
  enabled: boolean;
  retryAttempts: number;
  timeout: number;
}


export class AuthService {
  private config: AuthServiceConfig;
