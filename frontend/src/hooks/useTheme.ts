// Theme management hook (dark/light)
import { useState, useEffect, useCallback } from 'react';


export interface useThemeState {
  loading: boolean;
  error: string | null;
  data: any;
}


export function useTheme() {
  const [state, setState] = useState<useThemeState>({
    loading: false,
    error: null,
    data: null,
  });
