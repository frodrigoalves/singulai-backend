// src/routes/walletRoutes.js
const express = require('express');
const router = express.Router();

// Rota de status da wallet API
router.get('/', (req, res) => {
  res.status(200).json({ status: '✅ Endpoint /api/wallet ativo!' });
});

// Rota de registro de wallet
router.post('/registrar', (req, res) => {
  const { wallet } = req.body;
  if (!wallet) {
    return res.status(400).json({ erro: 'Wallet não fornecida' });
  }

  // Aqui você pode inserir lógica de persistência no banco futuramente
  res.status(201).json({ mensagem: 'Wallet registrada com sucesso!', wallet });
});

module.exports = router;
