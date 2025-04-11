// backend/config/db.js

const mongoose = require('mongoose');

// Função assíncrona para conectar ao banco de dados MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Conectado ao MongoDB com sucesso');
  } catch (error) {
    console.error('❌ Erro ao conectar ao MongoDB:', error.message);
    process.exit(1); // Encerra o processo se a conexão falhar
  }
};

module.exports = connectDB;
