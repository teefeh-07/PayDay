// Stacks blockchain connection context
import React, { createContext, useContext, useState, useCallback } from 'react';


interface BlockchainContextType {
  loading: boolean;
  error: string | null;
  data: any;
  refresh: () => void;
}


const BlockchainContext = createContext<BlockchainContextType | undefined>(undefined);


export const BlockchainContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);

  const refresh = useCallback(() => {
    setLoading(true);
    // Refresh BlockchainContext data
    setLoading(false);
  }, []);

  return (
    <BlockchainContext.Provider value={{ loading, error, data, refresh }}>
      {children}
    </BlockchainContext.Provider>
  );
};


export const useBlockchain = () => {
  const ctx = useContext(BlockchainContext);
  if (!ctx) throw new Error('useBlockchain must be used within BlockchainContextProvider');
  return ctx;
};

export default BlockchainContext;
