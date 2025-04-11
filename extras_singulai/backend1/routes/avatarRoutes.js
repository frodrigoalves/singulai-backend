const express = require('express');
const router = express.Router();
const avatarController = require('../controllers/avatarController');

router.get('/', avatarController.getAllAvatars);
router.post('/', avatarController.createAvatar);

module.exports = router;
