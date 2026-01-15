const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Middleware pour vérifier si l'utilisateur est authentifié
const protect = async (req, res, next) => {
  try {
    // Récupérer le token du header Authorization
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Non authentifié - Token manquant",
      });
    }

    // Extraire le token
    const token = authHeader.split(" ")[1];

    // Vérifier le token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Récupérer l'utilisateur
    req.user = await User.findById(decoded.id).select("-password");

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Utilisateur non trouvé",
      });
    }

    next();
  } catch (error) {
    console.error("Erreur authentification:", error);
    return res.status(401).json({
      success: false,
      message: "Token invalide ou expiré",
    });
  }
};

// Middleware pour vérifier si l'utilisateur est admin
const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({
      success: false,
      message: "Accès refusé - Droits administrateur requis",
    });
  }
};

module.exports = { protect, isAdmin };
