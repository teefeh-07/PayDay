// Real-time notification system
import React, { useState, useEffect } from 'react';


interface NotificationCenterProps {
  title?: string;
  loading?: boolean;
}


export const NotificationCenter: React.FC<NotificationCenterProps> = ({ title, loading }) => {

  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
