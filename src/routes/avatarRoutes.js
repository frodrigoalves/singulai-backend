const express = require('express');
const router = express.Router();
const { criarAvatar } = require('../controllers/avatarController');

router.post('/criar', criarAvatar); // ✅ função válida

module.exports = router;
