// Redis cache-control middleware
import { Request, Response, NextFunction } from 'express';


interface cacheMiddlewareOptions {
  enabled: boolean;
  strict?: boolean;
  timeout?: number;
}


export const cacheMiddleware = (options: cacheMiddlewareOptions = { enabled: true }) => {

  return (req: Request, res: Response, next: NextFunction) => {
    if (!options.enabled) return next();
    console.log(`[cacheMiddleware] ${req.method} ${req.path}`);

    // Redis cache-control middleware logic
    next();
  };
};


export default cacheMiddleware;
