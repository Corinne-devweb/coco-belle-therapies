const express = require("express");
const router = express.Router();
const Article = require("../models/Article");
const jwt = require("jsonwebtoken");

// ===== MIDDLEWARE D'AUTHENTIFICATION =====
const authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentification requise",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Token invalide",
    });
  }
};

// ===== MIDDLEWARE ADMIN =====
const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      success: false,
      message: "Accès réservé aux administrateurs",
    });
  }
  next();
};

// ===== OBTENIR TOUS LES ARTICLES (PUBLIC) =====
router.get("/articles", async (req, res) => {
  try {
    const { category, published } = req.query;

    let filter = {};

    // Filtrer par catégorie si fournie
    if (category) {
      filter.category = category;
    }

    // Par défaut, afficher seulement les articles publiés (sauf si admin)
    if (published !== "false") {
      filter.published = true;
    }

    const articles = await Article.find(filter)
      .populate("author", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: articles.length,
      articles,
    });
  } catch (error) {
    console.error("Erreur récupération articles:", error);
    res.status(500).json({
      success: false,
      message: "Erreur lors de la récupération des articles",
      error: error.message,
    });
  }
});

// ===== OBTENIR UN ARTICLE PAR ID OU SLUG (PUBLIC) =====
router.get("/articles/:identifier", async (req, res) => {
  try {
    const { identifier } = req.params;

    // Chercher par ID ou par slug
    let article = await Article.findById(identifier).populate(
      "author",
      "name email"
    );

    if (!article) {
      article = await Article.findOne({ slug: identifier }).populate(
        "author",
        "name email"
      );
    }

    if (!article) {
      return res.status(404).json({
        success: false,
        message: "Article non trouvé",
      });
    }

    // Incrémenter le compteur de vues
    article.views += 1;
    await article.save();

    res.status(200).json({
      success: true,
      article,
    });
  } catch (error) {
    console.error("Erreur récupération article:", error);
    res.status(500).json({
      success: false,
      message: "Erreur lors de la récupération de l'article",
      error: error.message,
    });
  }
});

// ===== CRÉER UN ARTICLE (ADMIN UNIQUEMENT) =====
router.post("/articles", authenticate, isAdmin, async (req, res) => {
  try {
    const { title, excerpt, content, image, category, published } = req.body;

    const article = await Article.create({
      title,
      excerpt,
      content,
      image,
      category,
      published,
      author: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Article créé avec succès",
      article,
    });
  } catch (error) {
    console.error("Erreur création article:", error);
    res.status(500).json({
      success: false,
      message: "Erreur lors de la création de l'article",
      error: error.message,
    });
  }
});

// ===== MODIFIER UN ARTICLE (ADMIN UNIQUEMENT) =====
router.put("/articles/:id", authenticate, isAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const article = await Article.findByIdAndUpdate(
      id,
      { ...updates, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );

    if (!article) {
      return res.status(404).json({
        success: false,
        message: "Article non trouvé",
      });
    }

    res.status(200).json({
      success: true,
      message: "Article modifié avec succès",
      article,
    });
  } catch (error) {
    console.error("Erreur modification article:", error);
    res.status(500).json({
      success: false,
      message: "Erreur lors de la modification de l'article",
      error: error.message,
    });
  }
});

// ===== SUPPRIMER UN ARTICLE (ADMIN UNIQUEMENT) =====
router.delete("/articles/:id", authenticate, isAdmin, async (req, res) => {
  try {
    const { id } = req.params;

    const article = await Article.findByIdAndDelete(id);

    if (!article) {
      return res.status(404).json({
        success: false,
        message: "Article non trouvé",
      });
    }

    res.status(200).json({
      success: true,
      message: "Article supprimé avec succès",
    });
  } catch (error) {
    console.error("Erreur suppression article:", error);
    res.status(500).json({
      success: false,
      message: "Erreur lors de la suppression de l'article",
      error: error.message,
    });
  }
});

module.exports = router;
