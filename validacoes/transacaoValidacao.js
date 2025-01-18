const { body } = require('express-validator');

const validarCriarTransacao = [
    body('tipo').trim().notEmpty().withMessage('O tipo é obrigatório').isIn(['receita', 'despesa']).withMessage('O tipo deve ser "receita" ou "despesa"'),
    body('valor').notEmpty().withMessage('O valor é obrigatório').isNumeric().withMessage('O valor deve ser um número'),
    body('categoria').trim().notEmpty().withMessage('A categoria é obrigatória'),
    body('descricao').trim()
];


module.exports = {
  validarCriarTransacao
};