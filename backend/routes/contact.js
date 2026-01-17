// backend/routes/contact.js
const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const { protect } = require("../middleware/auth");
const { validateContact } = require("../middleware/validation");

// ===== ENVOYER UN MESSAGE DE CONTACT =====
router.post("/", validateContact, async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Sauvegarder le message dans la base de données
    const contact = await Contact.create({
      name,
      email,
      phone,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message envoyé avec succès ! Nous vous répondrons rapidement.",
      contact: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
        subject: contact.subject,
      },
    });
  } catch (error) {
    console.error("Erreur envoi message:", error);
    res.status(500).json({
      success: false,
      message: "Erreur lors de l'envoi du message",
      error: error.message,
    });
  }
});

// ===== OBTENIR TOUS LES MESSAGES (PROTÉGÉ) =====
router.get("/", protect, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: contacts.length,
      contacts,
    });
  } catch (error) {
    console.error("Erreur récupération messages:", error);
    res.status(500).json({
      success: false,
      message: "Erreur lors de la récupération des messages",
      error: error.message,
    });
  }
});

module.exports = router;
