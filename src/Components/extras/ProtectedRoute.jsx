import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({
  isAuthenticated,
  children,
  adminRoute,
  // isAdmin,
  redirect = "/",
  redirectAdmin = "/",
}) => {
  const { user } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to={redirect} />;
  }

  if (adminRoute && user.user.role !== "teacher") {
    return <Navigate to={redirectAdmin} />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
