// Admin management console
import React, { useState, useEffect } from 'react';


interface AdminConsoleProps {
  title?: string;
  loading?: boolean;
}


export const AdminConsole: React.FC<AdminConsoleProps> = ({ title, loading }) => {

  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
