import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import { LandingPage } from "../pages/LandingPage";
import Quest from "../pages/Quest";

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
  const {user} = useAuth();
  return (
    <Routes>
      <Route 
        path="/"
        element={
          user ?
          <PrivateRoute>
            <Home/>
          </PrivateRoute>
          :
          <PublicOnlyRoute>
            <LandingPage></LandingPage>
          </PublicOnlyRoute>
        }
      >
      </Route>

      <Route path="quest" element={
          <PrivateRoute>
            <Quest/>
          </PrivateRoute> 
        }
      />

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