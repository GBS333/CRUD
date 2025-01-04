const express = require('express');
const bikesController = require('../controllers/bikesController');
const router = express.Router();

router.get('/products', bikesController.geBikes);
// Rota para obter todos os produtos
router.get('/', bikesController.getAllbikes);

// Rota para renderizar o formulário de criação de um novo produto
router.get('/new', bikesController.renderCreateForm);

// Rota para criar um novo produto
router.post('/', bikesController.createbikes);

// Rota para obter um produto específico por ID
router.get('/:id', bikesController.getbikesById);

// Rota para renderizar o formulário de edição de um produto existente
router.get('/:id/edit', bikesController.renderEditForm);

// Rota para atualizar um produto existente
router.put('/:id', bikesController.updatebikes);

// Rota para deletar um produto
router.delete('/:id', bikesController.deletebikes);

module.exports = router;
