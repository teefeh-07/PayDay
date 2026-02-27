// WebSocket real-time connection hook
import { useState, useEffect, useCallback } from 'react';


export interface useWebSocketState {
  loading: boolean;
  error: string | null;
  data: any;
}


export function useWebSocket() {
  const [state, setState] = useState<useWebSocketState>({
    loading: false,
    error: null,
    data: null,
  });
