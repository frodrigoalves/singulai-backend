const Avatar = require('../models/avatarModel');

exports.criarAvatar = async (req, res) => {
  try {
    const novo = new Avatar(req.body);
    const avatarSalvo = await novo.save();
    res.status(201).json(avatarSalvo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao criar avatar." });
  }
};

exports.listarAvatares = async (req, res) => {
  try {
    const avatares = await Avatar.find();
    res.json(avatares);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao buscar avatares." });
  }
};
