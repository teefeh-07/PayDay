// Centralized error handling middleware
import { Request, Response, NextFunction } from 'express';


interface errorMiddlewareOptions {
  enabled: boolean;
  strict?: boolean;
  timeout?: number;
}


export const errorMiddleware = (options: errorMiddlewareOptions = { enabled: true }) => {
