// Request body validation middleware
import { Request, Response, NextFunction } from 'express';


interface validationMiddlewareOptions {
  enabled: boolean;
  strict?: boolean;
  timeout?: number;
}


export const validationMiddleware = (options: validationMiddlewareOptions = { enabled: true }) => {

  return (req: Request, res: Response, next: NextFunction) => {
    if (!options.enabled) return next();
    console.log(`[validationMiddleware] ${req.method} ${req.path}`);
