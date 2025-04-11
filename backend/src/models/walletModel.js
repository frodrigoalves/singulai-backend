// src/routes/walletRoutes.js
const express = require('express');
const router = express.Router();
const { salvarWallet } = require('../services/walletService'); // ✅ Certifique-se que o caminho está correto

// Teste de rota
router.get('/', (req, res) => {
  res.status(200).json({ status: '✅ Endpoint /api/wallet ativo!' });
});

// Registro de wallet no PostgreSQL
router.post('/registrar', async (req, res) => {
  const { wallet, email } = req.body;

  if (!wallet || !email) {
    return res.status(400).json({ erro: 'Wallet e email são obrigatórios' });
  }

  try {
    const resultado = await salvarWallet(wallet, email);
    res.status(201).json({
      mensagem: 'Wallet registrada com sucesso!',
      dados: resultado
    });
  } catch (error) {
    console.error('Erro ao salvar no banco:', error);
    res.status(500).json({ erro: 'Erro ao registrar wallet no banco' });
  }
});

module.exports = router;
