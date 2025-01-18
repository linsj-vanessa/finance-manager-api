const { body } = require('express-validator');

const validarCriarCategoria = [
    body('nome').trim().notEmpty().withMessage('O nome é obrigatório'),
];

module.exports = {
  validarCriarCategoria
};