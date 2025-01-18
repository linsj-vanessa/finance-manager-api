const { body } = require('express-validator');

const validarCriarMeta = [
    body('descricao').trim().notEmpty().withMessage('A descrição é obrigatória'),
    body('valor').notEmpty().withMessage('O valor é obrigatório').isNumeric().withMessage('O valor deve ser um número'),
    body('dataLimite').trim().notEmpty().withMessage('A data limite é obrigatória').isDate().withMessage('A data limite deve ser uma data válida'),
];

module.exports = {
  validarCriarMeta
};