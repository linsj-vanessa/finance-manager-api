const express = require('express');
const router = express.Router();
const { gerarRelatorio } = require('../controladores/relatorioControlador');
const { autenticarUsuario } = require('../middlewares/auth');

router.use(autenticarUsuario);

router.get('/', gerarRelatorio);

module.exports = router;