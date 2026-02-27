// Request body validation middleware
import { Request, Response, NextFunction } from 'express';


interface validationMiddlewareOptions {
  enabled: boolean;
  strict?: boolean;
  timeout?: number;
}


export const validationMiddleware = (options: validationMiddlewareOptions = { enabled: true }) => {
