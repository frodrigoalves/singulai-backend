const mongoose = require('mongoose');

const avatarSchema = new mongoose.Schema({
  nome: String,
  personalidade: String,
  energia: Number,
  legadoUrl: String,
}, { timestamps: true });

module.exports = mongoose.model('Avatar', avatarSchema);
