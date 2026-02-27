// PayrollRun Database Model
import { z } from 'zod';


export const PayrollRunSchema = z.object({

  id: z.string(),

  runDate: z.string(),

  totalAmount: z.string(),

  status: z.string(),

  txHash: z.string(),

  employeeCount: z.string(),

});

export type PayrollRun = z.infer<typeof PayrollRunSchema>;

export default PayrollRunSchema;
