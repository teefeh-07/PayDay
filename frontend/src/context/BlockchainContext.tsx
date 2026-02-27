// Stacks blockchain connection context
import React, { createContext, useContext, useState, useCallback } from 'react';


interface BlockchainContextType {
  loading: boolean;
  error: string | null;
  data: any;
  refresh: () => void;
}


const BlockchainContext = createContext<BlockchainContextType | undefined>(undefined);
