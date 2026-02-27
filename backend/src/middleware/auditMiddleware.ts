// Automatic audit trail middleware
import { Request, Response, NextFunction } from 'express';


interface auditMiddlewareOptions {
  enabled: boolean;
  strict?: boolean;
  timeout?: number;
}
