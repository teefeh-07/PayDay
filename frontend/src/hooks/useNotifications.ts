// Notification system hook
import { useState, useEffect, useCallback } from 'react';


export interface useNotificationsState {
  loading: boolean;
  error: string | null;
  data: any;
}


export function useNotifications() {
  const [state, setState] = useState<useNotificationsState>({
    loading: false,
    error: null,
    data: null,
  });
