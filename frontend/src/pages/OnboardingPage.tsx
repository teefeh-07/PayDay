// New employee onboarding wizard page
// Route: /onboarding
import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';


interface OnboardingPageProps {
  isAuthenticated?: boolean;
}


export const OnboardingPage: React.FC<OnboardingPageProps> = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Onboarding | PayDay';
  }, []);

  if (loading) return <div className="page-loader">Loading...</div>;
  if (error) return <div className="page-error">{error}</div>;
