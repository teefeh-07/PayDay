// Main dashboard overview with payroll stats
import React, { useState, useEffect } from 'react';


interface DashboardProps {
  title?: string;
  loading?: boolean;
}


export const Dashboard: React.FC<DashboardProps> = ({ title, loading }) => {

  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
