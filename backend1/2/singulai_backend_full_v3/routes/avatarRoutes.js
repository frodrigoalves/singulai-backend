const express = require('express');
const router = express.Router();
const { criarAvatar, listarAvatares } = require('../controllers/avatarController');

router.post('/', criarAvatar);
router.get('/', listarAvatares);

module.exports = router;
