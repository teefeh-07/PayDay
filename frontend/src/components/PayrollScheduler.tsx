// Schedule and automate payroll runs
import React, { useState, useEffect } from 'react';


interface PayrollSchedulerProps {
  title?: string;
  loading?: boolean;
}


export const PayrollScheduler: React.FC<PayrollSchedulerProps> = ({ title, loading }) => {
