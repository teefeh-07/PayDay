// Authentication and wallet session context
import React, { createContext, useContext, useState, useCallback } from 'react';


interface AuthContextType {
  loading: boolean;
  error: string | null;
  data: any;
  refresh: () => void;
}


const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);

  const refresh = useCallback(() => {
    setLoading(true);
    // Refresh AuthContext data
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ loading, error, data, refresh }}>
      {children}
    </AuthContext.Provider>
  );
};
