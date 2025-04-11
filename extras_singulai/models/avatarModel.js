const mongoose = require('mongoose');

const avatarSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  faixaEtaria: String,
  energiaEmocional: String,
  criador: String,
  criadoEm: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Avatar', avatarSchema);
