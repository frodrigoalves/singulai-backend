const pool = require('../config/dbPostgres');

async function salvarWallet(wallet, email) {
  const result = await pool.query(
    'INSERT INTO usuarios (wallet, email, data_conexao) VALUES ($1, $2, NOW()) RETURNING *',
    [wallet, email]
  );
  return result.rows[0];
}

module.exports = { salvarWallet };
