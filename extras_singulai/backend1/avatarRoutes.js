const express = require('express');
const router = express.Router();
const avatarRoutes = require("./routes/avatarRoutes");

router.post('/', avatarController.createAvatar);
router.get('/', avatarController.getAvatars); // opcional, para listar

module.exports = router;
