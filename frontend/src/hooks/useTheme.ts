// Theme management hook (dark/light)
import { useState, useEffect, useCallback } from 'react';


export interface useThemeState {
  loading: boolean;
  error: string | null;
  data: any;
}
