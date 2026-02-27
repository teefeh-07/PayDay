// Payroll data fetching hook
import { useState, useEffect, useCallback } from 'react';


export interface usePayrollState {
  loading: boolean;
  error: string | null;
  data: any;
}


export function usePayroll() {
  const [state, setState] = useState<usePayrollState>({
    loading: false,
    error: null,
    data: null,
  });
