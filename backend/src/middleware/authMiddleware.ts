// JWT token validation middleware
import { Request, Response, NextFunction } from 'express';


interface authMiddlewareOptions {
  enabled: boolean;
  strict?: boolean;
  timeout?: number;
}


export const authMiddleware = (options: authMiddlewareOptions = { enabled: true }) => {
