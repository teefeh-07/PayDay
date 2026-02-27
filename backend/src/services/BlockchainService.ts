// Stacks blockchain interaction service


export interface BlockchainServiceConfig {
  enabled: boolean;
  retryAttempts: number;
  timeout: number;
}


export class BlockchainService {
  private config: BlockchainServiceConfig;
