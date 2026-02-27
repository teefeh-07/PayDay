// Authentication state management hook
import { useState, useEffect, useCallback } from 'react';


export interface useAuthState {
  loading: boolean;
  error: string | null;
  data: any;
}


export function useAuth() {
  const [state, setState] = useState<useAuthState>({
    loading: false,
    error: null,
    data: null,
  });
