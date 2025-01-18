const express = require('express');
const router = express.Router();
const {
    criarOrcamento,
    listarOrcamentos,
    obterOrcamentoPorId,
    atualizarOrcamento,
    deletarOrcamento,
} = require('../controladores/orcamentoControlador');
const { autenticarUsuario } = require('../middlewares/auth');

router.use(autenticarUsuario);

router.post('/', criarOrcamento);
router.get('/', listarOrcamentos);
router.get('/:id', obterOrcamentoPorId);
router.put('/:id', atualizarOrcamento);
router.delete('/:id', deletarOrcamento);

module.exports = router;
