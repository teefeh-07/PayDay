// JWT token validation middleware
import { Request, Response, NextFunction } from 'express';


interface authMiddlewareOptions {
  enabled: boolean;
  strict?: boolean;
  timeout?: number;
}


export const authMiddleware = (options: authMiddlewareOptions = { enabled: true }) => {

  return (req: Request, res: Response, next: NextFunction) => {
    if (!options.enabled) return next();
    console.log(`[authMiddleware] ${req.method} ${req.path}`);
