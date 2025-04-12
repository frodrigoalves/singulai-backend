const express = require('express');
const cors = require('cors');
require('dotenv').config();
const conectarMongo = require('./config/dbmongo');
const walletRoutes = require('./routes/walletRoutes');
const avatarRoutes = require('./routes/avatarRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Conecta ao MongoDB
conectarMongo();

// Rotas da API
app.use('/api/wallet', walletRoutes);
app.use('/api/avatars', avatarRoutes);

app.get('/', (req, res) => {
  res.send('API SingulAI rodando 🚀');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
