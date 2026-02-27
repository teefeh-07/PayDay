// Redis-based caching layer


export interface CacheServiceConfig {
  enabled: boolean;
  retryAttempts: number;
  timeout: number;
}
