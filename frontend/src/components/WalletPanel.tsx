// Stacks wallet connection panel
import React, { useState, useEffect } from 'react';


interface WalletPanelProps {
  title?: string;
  loading?: boolean;
}


export const WalletPanel: React.FC<WalletPanelProps> = ({ title, loading }) => {
