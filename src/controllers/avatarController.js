const avatarService = require('../services/avatarService');

const getAvatars = async (req, res) => {
  try {
    const data = await avatarService.getAllAvatars();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar avatares', error });
  }
};

const createAvatar = async (req, res) => {
  try {
    const result = await avatarService.createAvatar(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar avatar', error });
  }
};

// MOCK: para testes sem banco
const getAvatarsMock = (req, res) => {
  const avatares = [
    { id: 1, nome: "Pedro", estilo: "Reflexivo, lógico, analítico", progresso: 60 },
    { id: 2, nome: "Laura", estilo: "Acolhedora, empática, serena", progresso: 40 },
    { id: 3, nome: "Letícia", estilo: "Criativa, vibrante, carinhosa", progresso: 90 }
  ];
  res.status(200).json(avatares);
};

module.exports = {
  getAvatars,
  createAvatar,
  getAvatarsMock
};
