// Expense Database Model
import { z } from 'zod';


export const ExpenseSchema = z.object({

  id: z.string(),

  employeeId: z.string(),

  amount: z.string(),

  category: z.string(),

  status: z.string(),
