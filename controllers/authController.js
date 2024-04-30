// authController.js
const { sql, config } = require('../db');
const jwt = require('jsonwebtoken');

// Função para autenticar usuário e gerar token JWT
exports.login = async (req, res) => {
  const { email, password } = req.body;
  let pool;
  try {
    pool = await sql.connect(config);
    const result = await pool.request()
      .input('email', sql.VarChar(255), email)
      .input('password', sql.VarChar(255), password)
      .query('SELECT * FROM users WHERE email = @email AND password = @password');
    if (result.recordset.length === 0) {
      res.status(401).json({ message: 'Credenciais inválidas' });
    } else {
      const user = result.recordset[0];

      const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
      await pool.request()
        .input('userId', sql.Int, user.id)
        .input('currentDate', sql.VarChar(255), currentDate)
        .query('UPDATE users SET last_login = @currentDate WHERE id = @userId');

      // Gerar token JWT com os dados do usuário
      const token = jwt.sign({
        userId: user.id,
        email: user.email,
        name: user.name
        // Você pode adicionar mais dados ao token conforme necessário
      }, process.env.SECRET_JWT, { expiresIn: '1h' }); // Defina o tempo de expiração do token

      await pool.request()
        .input('userId', sql.Int, user.id)
        .input('token', sql.VarChar(255), token)
        .query('UPDATE users SET token = @token WHERE id = @userId');

      res.status(200).json({ message: 'Login bem-sucedido', token });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao autenticar usuário' });
  }
};

// Função para fazer logout
exports.logout = (req, res) => {
  // Implemente a lógica de logout aqui
  res.status(200).json({ message: 'Logout bem-sucedido' });
};
