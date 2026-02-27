// On-chain transaction history viewer
import React, { useState, useEffect } from 'react';


interface TransactionHistoryProps {
  title?: string;
  loading?: boolean;
}


export const TransactionHistory: React.FC<TransactionHistoryProps> = ({ title, loading }) => {
