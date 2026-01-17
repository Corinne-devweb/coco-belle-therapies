const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
//const mongoSanitize = require("express-mongo-sanitize");
//const xss = require("xss-clean");
require("dotenv").config();

// Import des routes
const authRoutes = require("./routes/auth");
const contactRoutes = require("./routes/contact");

const app = express();

// ===== MIDDLEWARE =====

// Sécurité avec Helmet
app.use(helmet());

// CORS - Autoriser le frontend
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  })
);

// Parser JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Protection contre les injections NoSQL
//app.use(mongoSanitize());

// Protection contre les attaques XSS
//app.use(xss());

// Rate limiting - Limite les requêtes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // max 100 requêtes par IP
});
app.use("/api/", limiter);

// ===== ROUTES =====

// Route de test
app.get("/", (req, res) => {
  res.json({
    message: "🚀 API Coco Belle Therapies - Backend opérationnel !",
    version: "1.0.0",
  });
});

// Routes API
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);

// ===== CONNEXION MONGODB =====

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ Connecté à MongoDB Atlas");
  })
  .catch((error) => {
    console.error("❌ Erreur de connexion MongoDB:", error.message);
    process.exit(1);
  });

// ===== GESTION DES ERREURS =====

// Route 404
app.use((req, res) => {
  res.status(404).json({
    error: "Route non trouvée",
    path: req.path,
  });
});

// Gestion des erreurs globales
app.use((err, req, res, next) => {
  console.error("❌ Erreur serveur:", err.stack);
  res.status(500).json({
    error: "Erreur serveur",
    message: err.message,
  });
});

// ===== DÉMARRAGE DU SERVEUR =====

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
  console.log(`📍 http://localhost:${PORT}`);
});
