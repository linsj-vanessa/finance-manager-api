const jwt = require('jsonwebtoken');
const Usuario = require('../modelos/usuario'); // Importe o modelo de usuário

const autenticarUsuario = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', ''); // Pega o token do cabeçalho
    if (!token) {
      return res.status(401).json({ message: 'Não autorizado: token não fornecido' });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'SEU_SEGREDO_JWT'); // Verifica o token
    const usuario = await Usuario.findOne({ _id: decoded._id, 'tokens.token': token }); // Encontra o usuário pelo ID e token

    if (!usuario) {
      return res.status(401).json({ message: 'Não autorizado: usuário não encontrado' });
    }
    req.usuario = usuario; // Adiciona o usuário à requisição
    req.token = token; // Adiciona o token à requisição
    next(); // Passa para o próximo middleware ou rota
  } catch (error) {
      if (error.name === 'JsonWebTokenError') {
          return res.status(401).json({ message: 'Não autorizado: token inválido' });
      }
      console.error(error);
    res.status(401).json({ message: 'Não autorizado: token inválido ou expirado' });
  }
};

module.exports = {
    autenticarUsuario,
};