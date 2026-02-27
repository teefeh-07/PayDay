// Expense submission form page
// Route: /expenses/submit
import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';


interface ExpenseSubmitPageProps {
  isAuthenticated?: boolean;
}


export const ExpenseSubmitPage: React.FC<ExpenseSubmitPageProps> = ({ isAuthenticated }) => {
  const navigate = useNavigate();
