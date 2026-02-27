// Application theme (dark/light) context
import React, { createContext, useContext, useState, useCallback } from 'react';


interface ThemeContextType {
  loading: boolean;
  error: string | null;
  data: any;
  refresh: () => void;
}


const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
