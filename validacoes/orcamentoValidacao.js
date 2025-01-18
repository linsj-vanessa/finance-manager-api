const { body } = require('express-validator');

const validarCriarOrcamento = [
    body('valor').notEmpty().withMessage('O valor é obrigatório').isNumeric().withMessage('O valor deve ser um número'),
    body('categoria').trim().notEmpty().withMessage('A categoria é obrigatória'),
    body('periodoInicial').trim().notEmpty().withMessage('O período inicial é obrigatório').isDate().withMessage('O período inicial deve ser uma data válida'),
    body('periodoFinal').trim().notEmpty().withMessage('O período final é obrigatório').isDate().withMessage('O período final deve ser uma data válida'),
];

module.exports = {
  validarCriarOrcamento
};