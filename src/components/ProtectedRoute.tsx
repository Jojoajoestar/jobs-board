// src/components/ProtectedRoute.tsx

import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../context/AuthContext';


interface ProtectedRouteProps {
  children: React.ReactNode; // Components to be rendered inside the protected route
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push('/login');
    }
  }, [currentUser, router]);

  if (!currentUser) {
    return null; // Optionally render a loading state here
  }

  return <>{children}</>;
};

export default ProtectedRoute;
