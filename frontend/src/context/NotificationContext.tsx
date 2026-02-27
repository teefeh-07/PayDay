// Real-time notification context
import React, { createContext, useContext, useState, useCallback } from 'react';


interface NotificationContextType {
  loading: boolean;
  error: string | null;
  data: any;
  refresh: () => void;
}


const NotificationContext = createContext<NotificationContextType | undefined>(undefined);


export const NotificationContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);

  const refresh = useCallback(() => {
    setLoading(true);
    // Refresh NotificationContext data
    setLoading(false);
  }, []);

  return (
    <NotificationContext.Provider value={{ loading, error, data, refresh }}>
      {children}
    </NotificationContext.Provider>
  );
};
