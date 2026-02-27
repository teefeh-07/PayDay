// 403 unauthorized access page
// Route: /unauthorized
import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';


interface UnauthorizedPageProps {
  isAuthenticated?: boolean;
}
