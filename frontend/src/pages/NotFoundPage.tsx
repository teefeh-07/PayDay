// 404 not found error page
// Route: *
import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';


interface NotFoundPageProps {
  isAuthenticated?: boolean;
}
