const express = require("express");
const router = express.Router();
const tokenService = require("../services/tokenService");

router.get("/saldo/:wallet", async (req, res) => {
  try {
    const saldo = await tokenService.getBalance(req.params.wallet);
    res.json({ saldo });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
