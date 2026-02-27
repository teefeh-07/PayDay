// Stacks blockchain interaction hook
import { useState, useEffect, useCallback } from 'react';


export interface useStacksState {
  loading: boolean;
  error: string | null;
  data: any;
}


export function useStacks() {
  const [state, setState] = useState<useStacksState>({
    loading: false,
    error: null,
    data: null,
  });
