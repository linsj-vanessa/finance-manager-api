const { body } = require('express-validator');

const validarCadastroUsuario = [
  body('nome').trim().notEmpty().withMessage('O nome é obrigatório'),
  body('email').trim().notEmpty().withMessage('O email é obrigatório').isEmail().withMessage('O email é inválido'),
  body('senha').trim().notEmpty().withMessage('A senha é obrigatória').isLength({ min: 6 }).withMessage('A senha deve ter no mínimo 6 caracteres'),
];

const validarLoginUsuario = [
    body('email').trim().notEmpty().withMessage('O email é obrigatório').isEmail().withMessage('O email é inválido'),
    body('senha').trim().notEmpty().withMessage('A senha é obrigatória')
];


module.exports = {
  validarCadastroUsuario,
  validarLoginUsuario
};