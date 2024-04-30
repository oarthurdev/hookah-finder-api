// swagger.js
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  swaggerDefinition: {
    info: {
      title: 'HookahFinder API',
      version: '1.0.0',
      description: 'API para o HookahFinder',
    },
    basePath: '/',
  },
  apis: ['./routes/*.js'], // Caminho para os arquivos de rota
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
