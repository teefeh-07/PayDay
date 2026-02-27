// Employee Database Model
import { z } from 'zod';


export const EmployeeSchema = z.object({

  id: z.string(),

  walletAddress: z.string(),

  name: z.string(),

  department: z.string(),

  salary: z.string(),

  startDate: z.string(),

});

export type Employee = z.infer<typeof EmployeeSchema>;

export default EmployeeSchema;
