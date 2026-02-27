// 404 not found error page
// Route: *
import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';


interface NotFoundPageProps {
  isAuthenticated?: boolean;
}


export const NotFoundPage: React.FC<NotFoundPageProps> = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'NotFound | PayDay';
  }, []);

  if (loading) return <div className="page-loader">Loading...</div>;
  if (error) return <div className="page-error">{error}</div>;

  return (
    <main className="notfoundpage-wrapper">
      <h1>Not Found</h1>
      <p>404 not found error page</p>
    </main>
  );

};

export default NotFoundPage;
