// Structured request/response logging
import { Request, Response, NextFunction } from 'express';


interface loggingMiddlewareOptions {
  enabled: boolean;
  strict?: boolean;
  timeout?: number;
}
