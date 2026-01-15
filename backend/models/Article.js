const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Le titre est requis"],
    trim: true,
    maxlength: [200, "Le titre ne peut pas dépasser 200 caractères"],
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
  },
  excerpt: {
    type: String,
    required: [true, "L'extrait est requis"],
    maxlength: [300, "L'extrait ne peut pas dépasser 300 caractères"],
  },
  content: {
    type: String,
    required: [true, "Le contenu est requis"],
  },
  image: {
    type: String,
    default: "/images/default-blog.jpg",
  },
  category: {
    type: String,
    required: [true, "La catégorie est requise"],
    enum: ["Sophrologie", "Hypnothérapie", "TDAH", "Bien-être", "Autre"],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  published: {
    type: Boolean,
    default: false,
  },
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Générer automatiquement le slug avant sauvegarde
articleSchema.pre("save", function (next) {
  if (this.isModified("title")) {
    this.slug = this.title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Enlever les accents
      .replace(/[^a-z0-9\s-]/g, "") // Enlever les caractères spéciaux
      .trim()
      .replace(/\s+/g, "-") // Remplacer les espaces par des tirets
      .replace(/-+/g, "-"); // Enlever les tirets multiples
  }
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("Article", articleSchema);
