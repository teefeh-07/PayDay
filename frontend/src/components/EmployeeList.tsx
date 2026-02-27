// List and manage all employees
import React, { useState, useEffect } from 'react';


interface EmployeeListProps {
  title?: string;
  loading?: boolean;
}


export const EmployeeList: React.FC<EmployeeListProps> = ({ title, loading }) => {
