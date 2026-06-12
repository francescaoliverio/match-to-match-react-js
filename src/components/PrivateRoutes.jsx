// src/components/PrivateRoutes.jsx

import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoutes() {
  const { user } = useAuth();

  // If user is logged in show private route, otherwise go to login
  return user ? <Outlet /> : <Navigate to="/profile/login" replace />;
}