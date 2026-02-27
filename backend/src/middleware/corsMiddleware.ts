// Cross-origin resource sharing setup
import { Request, Response, NextFunction } from 'express';


interface corsMiddlewareOptions {
  enabled: boolean;
  strict?: boolean;
  timeout?: number;
}


export const corsMiddleware = (options: corsMiddlewareOptions = { enabled: true }) => {

  return (req: Request, res: Response, next: NextFunction) => {
    if (!options.enabled) return next();
    console.log(`[corsMiddleware] ${req.method} ${req.path}`);
