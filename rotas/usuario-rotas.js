const express = require('express');
const router = express.Router();
const {
    criarUsuario,
    loginUsuario,
    logoutUsuario,
} = require('../controladores/usuarioControlador');
const { validarCadastroUsuario, validarLoginUsuario } = require('../validacoes/usuarioValidacao')
const { autenticarUsuario } = require('../middlewares/auth');

router.post('/cadastro', validarCadastroUsuario, criarUsuario);
router.post('/login', validarLoginUsuario, loginUsuario);
router.post('/logout', autenticarUsuario, logoutUsuario);

module.exports = router;