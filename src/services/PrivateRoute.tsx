import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


interface PrivateRouteProps {
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
 
  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);  // eslint-disable-line

  
  
  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  return <>{element}</>; 
};

export default PrivateRoute;
