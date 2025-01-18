const express = require('express');
const router = express.Router();
const {
    criarCategoria,
    listarCategorias,
    obterCategoriaPorId,
    atualizarCategoria,
    deletarCategoria,
} = require('../controladores/categoriaControlador');
const { autenticarUsuario } = require('../middlewares/auth'); // Importa o middleware de autenticação

router.use(autenticarUsuario); // Aplica o middleware de autenticação em todas as rotas abaixo

router.post('/', criarCategoria);
router.get('/', listarCategorias);
router.get('/:id', obterCategoriaPorId);
router.put('/:id', atualizarCategoria);
router.delete('/:id', deletarCategoria);

module.exports = router;