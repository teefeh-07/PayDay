// Notification system hook
import { useState, useEffect, useCallback } from 'react';


export interface useNotificationsState {
  loading: boolean;
  error: string | null;
  data: any;
}
