// Email and push notification service


export interface NotificationServiceConfig {
  enabled: boolean;
  retryAttempts: number;
  timeout: number;
}
