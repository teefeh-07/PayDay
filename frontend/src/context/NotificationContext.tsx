// Real-time notification context
import React, { createContext, useContext, useState, useCallback } from 'react';


interface NotificationContextType {
  loading: boolean;
  error: string | null;
  data: any;
  refresh: () => void;
}


const NotificationContext = createContext<NotificationContextType | undefined>(undefined);
