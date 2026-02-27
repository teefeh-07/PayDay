// Generate payroll and tax reports
import React, { useState, useEffect } from 'react';


interface ReportGeneratorProps {
  title?: string;
  loading?: boolean;
}


export const ReportGenerator: React.FC<ReportGeneratorProps> = ({ title, loading }) => {

  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
