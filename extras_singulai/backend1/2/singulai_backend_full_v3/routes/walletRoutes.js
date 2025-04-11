const express = require('express');
const router = express.Router();
const { registrarConexao } = require('../controllers/walletController');

router.post('/registrar', registrarConexao);

module.exports = router;
