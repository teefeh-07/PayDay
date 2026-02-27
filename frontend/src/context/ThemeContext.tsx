// Application theme (dark/light) context
import React, { createContext, useContext, useState, useCallback } from 'react';


interface ThemeContextType {
  loading: boolean;
  error: string | null;
  data: any;
  refresh: () => void;
}


const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);

  const refresh = useCallback(() => {
    setLoading(true);
    // Refresh ThemeContext data
    setLoading(false);
  }, []);
