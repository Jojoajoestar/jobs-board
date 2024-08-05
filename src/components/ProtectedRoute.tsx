/**
 * ProtectedRoute Component
 *
 * This component wraps around routes that need authentication. If the user is not authenticated,
 * they are redirected to the login page.
 *
 * Props:
 * - children: ReactNode - The components to be rendered inside the protected route.
 *
 * Example:
 * <ProtectedRoute>
 *   <Dashboard />
 * </ProtectedRoute>
 */

import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode; // Components to be rendered inside the protected route
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();

  if (!currentUser) {
    router.push('/login');
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
