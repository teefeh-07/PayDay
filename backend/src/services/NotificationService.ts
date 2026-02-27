// Email and push notification service


export interface NotificationServiceConfig {
  enabled: boolean;
  retryAttempts: number;
  timeout: number;
}


export class NotificationService {
  private config: NotificationServiceConfig;

  constructor(config: NotificationServiceConfig) {
    this.config = config;
    console.log('NotificationService initialized');
  }
