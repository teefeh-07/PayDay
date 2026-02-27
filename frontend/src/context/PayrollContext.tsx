// Global payroll state context
import React, { createContext, useContext, useState, useCallback } from 'react';


interface PayrollContextType {
  loading: boolean;
  error: string | null;
  data: any;
  refresh: () => void;
}


const PayrollContext = createContext<PayrollContextType | undefined>(undefined);


export const PayrollContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);

  const refresh = useCallback(() => {
    setLoading(true);
    // Refresh PayrollContext data
    setLoading(false);
  }, []);

  return (
    <PayrollContext.Provider value={{ loading, error, data, refresh }}>
      {children}
    </PayrollContext.Provider>
  );
};
