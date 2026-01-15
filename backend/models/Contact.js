const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Le nom est requis"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "L'email est requis"],
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, "Email invalide"],
  },
  phone: {
    type: String,
    trim: true,
  },
  subject: {
    type: String,
    required: [true, "Le sujet est requis"],
    trim: true,
  },
  message: {
    type: String,
    required: [true, "Le message est requis"],
    minlength: [10, "Le message doit contenir au moins 10 caractères"],
  },
  status: {
    type: String,
    enum: ["nouveau", "lu", "traité"],
    default: "nouveau",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Contact", contactSchema);
