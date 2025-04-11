const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Importa rotas
const avatarRoutes = require('./routes/avatarRoutes');
const walletRoutes = require('./routes/walletRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Rotas simuladas (sem dependência de banco agora)
app.use('/api/avatars', avatarRoutes);
app.use('/api/wallet', walletRoutes);

app.get('/', (req, res) => {
  res.send('🧠 API da SingulAI está ONLINE — versão de teste sem MongoDB');
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor em http://localhost:${PORT}`);
});
