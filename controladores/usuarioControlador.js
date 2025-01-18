const { validationResult } = require('express-validator');
const Usuario = require('../modelos/usuario');
const { validarCadastroUsuario, validarLoginUsuario } = require('../validacoes/usuarioValidacao');

const criarUsuario = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const usuario = new Usuario(req.body);
        await usuario.save();
        const token = await usuario.gerarTokenAutenticacao();
        res.status(201).json({ usuario, token });
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar usuário', error: error.message });
    }
};


const loginUsuario = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
  try {
      const { email, senha } = req.body;
      const usuario = await Usuario.findByCredentials(email, senha);
      const token = await usuario.gerarTokenAutenticacao();
    res.status(200).json({ usuario, token });
  } catch (error) {
    res.status(401).json({ message: 'Credenciais inválidas', error: error.message });
  }
};

const logoutUsuario = async (req, res) => {
  try {
    const token = req.token;
    req.usuario.tokens = req.usuario.tokens.filter((t) => t.token !== token);
    await req.usuario.save();
    res.status(200).json({ message: 'Logout realizado com sucesso' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao realizar logout', error: error.message });
  }
};


module.exports = {
    criarUsuario,
    loginUsuario,
    logoutUsuario,
};