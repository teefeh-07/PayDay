// API rate limiting middleware
import { Request, Response, NextFunction } from 'express';


interface rateLimitMiddlewareOptions {
  enabled: boolean;
  strict?: boolean;
  timeout?: number;
}


export const rateLimitMiddleware = (options: rateLimitMiddlewareOptions = { enabled: true }) => {
