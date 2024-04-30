// db.js
const sql = require('mssql');

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DATABASE,
  port: process.env.DB_PORT,
  options: {
    encrypt: false
  }
};

const poolPromise = new sql.ConnectionPool(config)
  .connect(config)
  .then(pool => {
    console.log('Conexão com o banco de dados estabelecida');
    return pool;
  })
  .catch(err => console.log('Erro ao conectar ao banco de dados:', err));

module.exports = { sql, poolPromise, config }; // Exporte config também se for necessário em outros lugares
