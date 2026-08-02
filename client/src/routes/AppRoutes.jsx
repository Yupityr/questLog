import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return null; // or a loading spinner

  return user ? children : <Navigate to="/signin" replace />;
}

function PublicOnlyRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return null;

  return user ? <Navigate to="/" replace /> : children;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />

      <Route
        path="/signin"
        element={
          <PublicOnlyRoute>
            <SignIn />
          </PublicOnlyRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicOnlyRoute>
            <SignUp />
          </PublicOnlyRoute>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}