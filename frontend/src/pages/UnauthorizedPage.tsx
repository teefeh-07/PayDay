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

  if (loading) return <div className="page-loader">Loading...</div>;
  if (error) return <div className="page-error">{error}</div>;

  return (
    <main className="unauthorizedpage-wrapper">
      <h1>Unauthorized</h1>
      <p>403 unauthorized access page</p>
    </main>
  );
