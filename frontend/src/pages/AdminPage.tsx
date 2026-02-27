// Admin management and configuration page
// Route: /admin
import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';


interface AdminPageProps {
  isAuthenticated?: boolean;
}


export const AdminPage: React.FC<AdminPageProps> = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Admin | PayDay';
  }, []);

  if (loading) return <div className="page-loader">Loading...</div>;
  if (error) return <div className="page-error">{error}</div>;

  return (
    <main className="adminpage-wrapper">
      <h1>Admin</h1>
      <p>Admin management and configuration page</p>
    </main>
  );

};

export default AdminPage;
