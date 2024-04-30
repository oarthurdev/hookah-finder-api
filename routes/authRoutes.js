// authRoutes.js
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Autentica um usuário
 *     parameters:
 *       - in: body
 *         name: auth
 *         description: Dados do usuário
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       201:
 *         description: Usuário autenticado com sucesso
 *       400:
 *         description: Requisição inválida
 *       500:
 *         description: Erro do servidor
 */


const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Rota de login
router.post('/login', authController.login);

// Rota de logout
router.post('/logout', authController.logout);

module.exports = router;
