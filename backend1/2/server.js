require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { ethers } = require("ethers");

const avatarRoutes = require("./routes/avatarRoutes");
const tokenRoutes = require("./routes/tokenRoutes"); // ✅ Novo endpoint

const app = express();

// Middlewares globais
app.use(cors());
app.use(express.json());

// Rotas
app.use("/api/avatars", avatarRoutes);
app.use("/api/token", tokenRoutes); // ✅ Ativa endpoint do token SGL

// Conexão MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("✅ MongoDB conectado com sucesso"))
  .catch((err) => {
    console.error("❌ Erro ao conectar MongoDB:", err.message);
    process.exit(1);
  });

// Conexão Blockchain
try {
  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY_SGL, provider);
  console.log("🦊 Wallet conectada com sucesso:", wallet.address);
} catch (error) {
  console.error("⚠️ Falha ao conectar carteira:", error.message);
}

// Inicialização do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
