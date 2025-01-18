const express = require('express');
const router = express.Router();
const {
    criarMeta,
    listarMetas,
    obterMetaPorId,
    atualizarMeta,
    deletarMeta,
    marcarMetaConcluida,
} = require('../controladores/metaControlador');
const { autenticarUsuario } = require('../middlewares/auth');

router.use(autenticarUsuario);

router.post('/', criarMeta);
router.get('/', listarMetas);
router.get('/:id', obterMetaPorId);
router.put('/:id', atualizarMeta);
router.delete('/:id', deletarMeta);
router.patch('/:id/concluida', marcarMetaConcluida);

module.exports = router;