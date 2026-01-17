// backend/middleware/validation.js
// Validation manuelle sans dépendances externes

const validateRegister = (req, res, next) => {
  const { name, email, password } = req.body;
  const errors = [];

  // Validation nom
  if (!name || name.trim().length < 2 || name.trim().length > 50) {
    errors.push({
      field: "name",
      message: "Le nom doit contenir entre 2 et 50 caractères",
    });
  }

  // Validation email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.push({ field: "email", message: "Email invalide" });
  }

  // Validation mot de passe
  if (!password || password.length < 6) {
    errors.push({
      field: "password",
      message: "Le mot de passe doit contenir au moins 6 caractères",
    });
  }
  if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
    errors.push({
      field: "password",
      message:
        "Le mot de passe doit contenir une majuscule, une minuscule et un chiffre",
    });
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: "Erreurs de validation",
      errors,
    });
  }

  next();
};

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  const errors = [];

  // Validation email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.push({ field: "email", message: "Email invalide" });
  }

  // Validation mot de passe
  if (!password) {
    errors.push({ field: "password", message: "Le mot de passe est requis" });
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: "Erreurs de validation",
      errors,
    });
  }

  next();
};

const validateContact = (req, res, next) => {
  const { name, email, subject, message } = req.body;
  const errors = [];

  // Validation nom
  if (!name || name.trim().length < 2 || name.trim().length > 100) {
    errors.push({
      field: "name",
      message: "Le nom doit contenir entre 2 et 100 caractères",
    });
  }

  // Validation email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.push({ field: "email", message: "Email invalide" });
  }

  // Validation sujet
  if (!subject || subject.trim().length < 3 || subject.trim().length > 200) {
    errors.push({
      field: "subject",
      message: "Le sujet doit contenir entre 3 et 200 caractères",
    });
  }

  // Validation message
  if (!message || message.trim().length < 10 || message.trim().length > 2000) {
    errors.push({
      field: "message",
      message: "Le message doit contenir entre 10 et 2000 caractères",
    });
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: "Erreurs de validation",
      errors,
    });
  }

  next();
};

module.exports = {
  validateRegister,
  validateLogin,
  validateContact,
};
