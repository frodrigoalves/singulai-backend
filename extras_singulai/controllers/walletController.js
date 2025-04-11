const { salvarWallet } = require('../models/walletModel');

exports.registrarConexao = async (req, res) => {
  try {
    const { wallet, email } = req.body;
    const novoUsuario = await salvarWallet(wallet, email);
    res.status(200).json({ sucesso: true, dados: novoUsuario });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao salvar conexão' });
  }
};
