const express = require('express');
const router = express.Router();
const avatarController = require('../controllers/avatarController');

// ATUAL: mock até integrar com MongoDB
router.get('/', avatarController.getAvatarsMock);

// FUTURO: endpoints reais
// router.get('/', avatarController.getAvatars);
// router.post('/', avatarController.createAvatar);

module.exports = router;
