// AuditLog Database Model
import { z } from 'zod';


export const AuditLogSchema = z.object({

  id: z.string(),

  action: z.string(),

  userId: z.string(),
