// Job scheduling and cron service


export interface SchedulerServiceConfig {
  enabled: boolean;
  retryAttempts: number;
  timeout: number;
}


export class SchedulerService {
  private config: SchedulerServiceConfig;
