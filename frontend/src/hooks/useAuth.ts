// Authentication state management hook
import { useState, useEffect, useCallback } from 'react';


export interface useAuthState {
  loading: boolean;
  error: string | null;
  data: any;
}
