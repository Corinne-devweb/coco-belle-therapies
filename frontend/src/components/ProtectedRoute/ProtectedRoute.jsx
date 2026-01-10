// src/components/ProtectedRoute/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // Vérifier si l'utilisateur est connecté
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // Si non connecté, rediriger vers la page de connexion
  if (!isLoggedIn) {
    return <Navigate to="/connexion" replace />;
  }

  // Si connecté, afficher la page
  return children;
};

export default ProtectedRoute;
