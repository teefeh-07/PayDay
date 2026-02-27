// Expense submission form page
// Route: /expenses/submit
import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';


interface ExpenseSubmitPageProps {
  isAuthenticated?: boolean;
}


export const ExpenseSubmitPage: React.FC<ExpenseSubmitPageProps> = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'ExpenseSubmit | PayDay';
  }, []);

  if (loading) return <div className="page-loader">Loading...</div>;
  if (error) return <div className="page-error">{error}</div>;

  return (
    <main className="expensesubmitpage-wrapper">
      <h1>Expense Submit</h1>
      <p>Expense submission form page</p>
    </main>
  );
