// Job scheduling and cron service


export interface SchedulerServiceConfig {
  enabled: boolean;
  retryAttempts: number;
  timeout: number;
}
