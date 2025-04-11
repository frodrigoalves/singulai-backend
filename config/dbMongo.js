const mongoose = require("mongoose");
require("dotenv").config();

async function conectarMongo() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB conectado");
  } catch (error) {
    console.error("❌ Erro ao conectar no MongoDB:", error.message);
  }
}

module.exports = conectarMongo;
