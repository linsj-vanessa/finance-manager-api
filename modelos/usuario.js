const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const usuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  senha: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
  },
  tokens: [{
      token: {
          type: String,
          required: true
      }
  }]
});

// Função para criptografar a senha antes de salvar
usuarioSchema.pre('save', async function(next) {
    const usuario = this;
    if (usuario.isModified('senha')) {
        usuario.senha = await bcrypt.hash(usuario.senha, 8);
    }
    next();
});

// Função para gerar token de autenticação
usuarioSchema.methods.gerarTokenAutenticacao = async function() {
  const usuario = this;
    const token = jwt.sign({ _id: usuario._id.toString() }, process.env.JWT_SECRET || 'SEU_SEGREDO_JWT', { expiresIn: '7d'});
    usuario.tokens = usuario.tokens.concat({ token });
    await usuario.save();
  return token;
};


// Função para encontrar usuário por email e senha
usuarioSchema.statics.findByCredentials = async (email, senha) => {
  const usuario = await Usuario.findOne({ email });
  if (!usuario) {
    throw new Error('Credenciais inválidas');
  }
  const senhaValida = await bcrypt.compare(senha, usuario.senha);
  if (!senhaValida) {
    throw new Error('Credenciais inválidas');
  }
  return usuario;
};


const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;