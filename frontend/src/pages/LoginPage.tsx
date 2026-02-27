// Stacks wallet-based login page
// Route: /login
import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';


interface LoginPageProps {
  isAuthenticated?: boolean;
}


export const LoginPage: React.FC<LoginPageProps> = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Login | PayDay';
  }, []);
