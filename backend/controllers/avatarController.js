const Avatar = require('../models/avatarModel');
const blockchain = require('../services/blockchainService');

exports.createAvatar = async (req, res) => {
  try {
    const { nome, faixaEtaria, energiaEmocional, criador } = req.body;

    // Envia para blockchain
    const txHash = await blockchain.createAvatarOnChain(nome, faixaEtaria, energiaEmocional);

    // Salva no MongoDB
    const novo = new Avatar({ nome, faixaEtaria, energiaEmocional, criador, txHash });
    await novo.save();

    res.status(201).json({ msg: "Avatar criado com sucesso!", txHash });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
