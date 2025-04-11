// MVP/backend/src/server.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Carrega variáveis de ambiente do arquivo .env
dotenv.config();

// Importa rotas
const avatarRoutes = require('./routes/avatarRoutes');

const app = express();

// Middlewares globais
app.use(cors());
app.use(express.json());

// Rotas da API
app.use('/api/avatars', avatarRoutes);

// Middleware de erro genérico
app.use((err, req, res, next) => {
  console.error('[Erro]', err.stack);
  res.status(500).json({ message: 'Erro interno no servidor' });
});

// Rota default
app.get('/', (req, res) => {
  res.send('🧠 API da SingulAI está online!');
});

// Define a porta padrão
const PORT = process.env.PORT || 5000;

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
