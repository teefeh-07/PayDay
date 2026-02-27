// Authentication and wallet session context
import React, { createContext, useContext, useState, useCallback } from 'react';


interface AuthContextType {
  loading: boolean;
  error: string | null;
  data: any;
  refresh: () => void;
}


const AuthContext = createContext<AuthContextType | undefined>(undefined);
