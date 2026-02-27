// Employee data and permissions context
import React, { createContext, useContext, useState, useCallback } from 'react';


interface EmployeeContextType {
  loading: boolean;
  error: string | null;
  data: any;
  refresh: () => void;
}
