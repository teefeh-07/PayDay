// Department Database Model
import { z } from 'zod';


export const DepartmentSchema = z.object({

  id: z.string(),

  name: z.string(),

  managerId: z.string(),

  budget: z.string(),

  headcount: z.string(),
