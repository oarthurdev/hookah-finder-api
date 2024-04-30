// userModel.js
const { sql, config } = require('../db');

// Função para criar a tabela de usuários
const createUserTable = async () => {
  let pool;
  try {
    pool = await sql.connect(config);
    await pool.request().query(`
      IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='users' and xtype='U')
      CREATE TABLE users (
        id INT PRIMARY KEY IDENTITY(1,1),
        email VARCHAR(255),
        password VARCHAR(255),
        name VARCHAR(255),
        token VARCHAR(255),
        profile_picture VARCHAR(255),
        last_login VARCHAR(255)
      )
    `);
    console.log('Tabela de usuários criada com sucesso');
  } catch (err) {
    console.error('Erro ao criar tabela de usuários:', err);
  } finally {
    if (pool) {
      pool.close();
    }
  }
};

module.exports = { createUserTable };
