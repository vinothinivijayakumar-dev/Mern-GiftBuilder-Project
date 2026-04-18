import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const { user } = useContext(AuthContext);

  // If not logged in → go login
  if (!user) {
    return <Navigate to="/login" />;
  }

  // If logged in → show page
  return children;
}

export default ProtectedRoute;



