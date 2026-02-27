// Individual employee profile page
// Route: /employee/:id
import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';


interface EmployeeProfilePageProps {
  isAuthenticated?: boolean;
}


export const EmployeeProfilePage: React.FC<EmployeeProfilePageProps> = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'EmployeeProfile | PayDay';
  }, []);
