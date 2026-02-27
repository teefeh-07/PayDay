// Global payroll state context
import React, { createContext, useContext, useState, useCallback } from 'react';


interface PayrollContextType {
  loading: boolean;
  error: string | null;
  data: any;
  refresh: () => void;
}


const PayrollContext = createContext<PayrollContextType | undefined>(undefined);
