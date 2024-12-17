import React from 'react';
import { Navigate } from 'react-router-dom'; // Import Navigate instead of Redirect

// Private Route component to restrict access to logged-in users only
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('authToken'); // Get token from local storage

  if (!token) {
    // If there's no token, redirect to login
    return <Navigate to="/login" />;
  }

  return children; // If the user is authenticated, render the child routes
};

export default PrivateRoute;
