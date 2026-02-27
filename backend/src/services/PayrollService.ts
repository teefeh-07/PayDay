// Core payroll processing service


export interface PayrollServiceConfig {
  enabled: boolean;
  retryAttempts: number;
  timeout: number;
}
