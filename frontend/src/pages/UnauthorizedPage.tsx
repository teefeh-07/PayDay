// 403 unauthorized access page
// Route: /unauthorized
import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';


interface UnauthorizedPageProps {
  isAuthenticated?: boolean;
}


export const UnauthorizedPage: React.FC<UnauthorizedPageProps> = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Unauthorized | PayDay';
  }, []);
