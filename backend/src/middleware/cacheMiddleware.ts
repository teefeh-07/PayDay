// Redis cache-control middleware
import { Request, Response, NextFunction } from 'express';


interface cacheMiddlewareOptions {
  enabled: boolean;
  strict?: boolean;
  timeout?: number;
}
