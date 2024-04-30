// userController.js
const { sql, config } = require('../db');

// Função para listar todos os usuários
exports.getAllUsers = async (req, res) => {
  let pool;
  try {
    pool = await sql.connect(config);
    const result = await pool.request().query(`SELECT * FROM users`);
    res.status(200).json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao buscar usuários' });
  }
};

// Função para obter um usuário por ID
exports.getUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const result = await sql.query`SELECT * FROM users WHERE id = ${userId}`;
    if (result.recordset.length === 0) {
      res.status(404).json({ message: 'Usuário não encontrado' });
    } else {
      res.status(200).json(result.recordset[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao buscar usuário' });
  }
};

exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  let pool;
  try {
    pool = await sql.connect(config);
    await pool.request().query(`INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${password}')`);
    res.status(201).json({ message: 'Usuário criado com sucesso' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  } finally {
    if (pool) {
      pool.close();
    }
  }
};

// Função para atualizar informações de um usuário
exports.updateUser = async (req, res) => {
  const userId = req.params.id;
  const { name, email } = req.body;
  try {
    await sql.query`UPDATE users SET name = ${name}, email = ${email} WHERE id = ${userId}`;
    res.status(200).json({ message: 'Usuário atualizado com sucesso' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao atualizar usuário' });
  }
};

// Função para excluir um usuário
exports.deleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    await sql.query`DELETE FROM users WHERE id = ${userId}`;
    res.status(200).json({ message: 'Usuário excluído com sucesso' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao excluir usuário' });
  }
};
