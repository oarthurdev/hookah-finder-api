// userRoutes.js
/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Retorna todos os usuários
 *     responses:
 *       200:
 *         description: Lista de todos os usuários
 *       500:
 *         description: Erro do servidor
 *   post:
 *     summary: Cria um novo usuário
 *     parameters:
 *       - in: body
 *         name: user
 *         description: Dados do usuário
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             email:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Requisição inválida
 *       500:
 *         description: Erro do servidor
 */

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rotas para usuários
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
