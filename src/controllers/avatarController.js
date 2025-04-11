// src/controllers/avatarController.js

exports.criarAvatar = (req, res) => {
  const { nome, estilo, progresso } = req.body;

  if (!nome || !estilo || progresso === undefined) {
    return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' });
  }

  const novoAvatar = {
    id: Date.now(),
    nome,
    estilo,
    progresso
  };

  // Aqui você pode salvar em um banco ou array simulado
  res.status(201).json({
    mensagem: 'Avatar criado com sucesso!',
    avatar: novoAvatar
  });
};

exports.listarAvatares = (req, res) => {
  const avatares = [
    {
      id: 1,
      nome: 'Pedro',
      estilo: 'Reflexivo, lógico, analítico',
      progresso: 60
    },
    {
      id: 2,
      nome: 'Laura',
      estilo: 'Acolhedora, empática, serena',
      progresso: 40
    },
    {
      id: 3,
      nome: 'Letícia',
      estilo: 'Criativa, vibrante, carinhosa',
      progresso: 90
    }
  ];

  res.status(200).json(avatares);
};
