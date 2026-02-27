// Audit trail and logging service


export interface AuditServiceConfig {
  enabled: boolean;
  retryAttempts: number;
  timeout: number;
}
