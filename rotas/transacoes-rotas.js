const express = require('express');
const router = express.Router();
const {
    criarTransacao,
    listarTransacoes,
    obterTransacaoPorId,
    atualizarTransacao,
    deletarTransacao,
} = require('../controladores/transacaoControlador');

const { autenticarUsuario } = require('../middlewares/auth'); // Importa o middleware de autenticação


router.use(autenticarUsuario); // Aplica o middleware de autenticação em todas as rotas abaixo

router.post('/', criarTransacao);
router.get('/', listarTransacoes);
router.get('/:id', obterTransacaoPorId);
router.put('/:id', atualizarTransacao);
router.delete('/:id', deletarTransacao);

module.exports = router;