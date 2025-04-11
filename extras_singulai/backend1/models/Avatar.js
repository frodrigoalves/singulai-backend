const mongoose = require('mongoose');

const avatarSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  faixaEtaria: { type: String }, // ex: "adulto", "idoso", "criança"
  energiaEmocional: { type: String }, // ex: "sereno", "intenso", "neutro"
  status: { type: String, default: 'ativo' }, // estados possíveis: "ativo", "inativo", "aguardando"
  criador: { type: String }, // endereço da wallet
  criadoEm: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Avatar', avatarSchema);

