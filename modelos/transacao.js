const mongoose = require('mongoose');

const transacaoSchema = new mongoose.Schema({
    tipo: {
        type: String,
        enum: ['receita', 'despesa'],
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    data: {
        type: Date,
        default: Date.now // Data padrão é a data atual
    },
    categoria: {
        type: String,
        required: true
    },
    descricao: {
        type: String
    },
    usuarioId: {
      type: mongoose.Schema.Types.ObjectId, // Referência ao ID do usuário
      ref: 'Usuario',
      required: true,
    },
});

const Transacao = mongoose.model('Transacao', transacaoSchema);

module.exports = Transacao;