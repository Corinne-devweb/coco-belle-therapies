const { body, validationResult } = require("express-validator");

// Middleware pour gérer les erreurs de validation
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Erreurs de validation",
      errors: errors.array(),
    });
  }
  next();
};

// Validation pour l'inscription
const validateRegister = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Le nom est requis")
    .isLength({ min: 2, max: 50 })
    .withMessage("Le nom doit contenir entre 2 et 50 caractères"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("L'email est requis")
    .isEmail()
    .withMessage("Email invalide")
    .normalizeEmail(),

  body("password")
    .notEmpty()
    .withMessage("Le mot de passe est requis")
    .isLength({ min: 6 })
    .withMessage("Le mot de passe doit contenir au moins 6 caractères")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage(
      "Le mot de passe doit contenir au moins une majuscule, une minuscule et un chiffre"
    ),

  validate,
];

// Validation pour la connexion
const validateLogin = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("L'email est requis")
    .isEmail()
    .withMessage("Email invalide")
    .normalizeEmail(),

  body("password").notEmpty().withMessage("Le mot de passe est requis"),

  validate,
];

// Validation pour le formulaire de contact
const validateContact = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Le nom est requis")
    .isLength({ min: 2, max: 100 })
    .withMessage("Le nom doit contenir entre 2 et 100 caractères"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("L'email est requis")
    .isEmail()
    .withMessage("Email invalide")
    .normalizeEmail(),

  body("phone")
    .optional()
    .trim()
    .matches(/^[\d\s\+\-\(\)]+$/)
    .withMessage("Numéro de téléphone invalide"),

  body("subject")
    .trim()
    .notEmpty()
    .withMessage("Le sujet est requis")
    .isLength({ min: 3, max: 200 })
    .withMessage("Le sujet doit contenir entre 3 et 200 caractères"),

  body("message")
    .trim()
    .notEmpty()
    .withMessage("Le message est requis")
    .isLength({ min: 10, max: 2000 })
    .withMessage("Le message doit contenir entre 10 et 2000 caractères"),

  validate,
];

module.exports = {
  validateRegister,
  validateLogin,
  validateContact,
};
