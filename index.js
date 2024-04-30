// app.js
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const { poolPromise, config } = require('./db'); // Importe poolPromise e config
const { createUserTable } = require('./models/userModel');
const { swaggerUi, specs } = require('./swagger');
const cors = require('cors')

const app = express();
const port = 5000;

app.use(cors())
app.use(bodyParser.json());

poolPromise
  .then(() => createUserTable())
  .catch(err => console.error('Erro ao conectar ao banco de dados:', err));

// Rota para a documentação do Swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
