// Employee data and permissions context
import React, { createContext, useContext, useState, useCallback } from 'react';


interface EmployeeContextType {
  loading: boolean;
  error: string | null;
  data: any;
  refresh: () => void;
}


const EmployeeContext = createContext<EmployeeContextType | undefined>(undefined);


export const EmployeeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);
