// Payroll data fetching hook
import { useState, useEffect, useCallback } from 'react';


export interface usePayrollState {
  loading: boolean;
  error: string | null;
  data: any;
}
