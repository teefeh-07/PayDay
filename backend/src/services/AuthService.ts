// JWT authentication service


export interface AuthServiceConfig {
  enabled: boolean;
  retryAttempts: number;
  timeout: number;
}
