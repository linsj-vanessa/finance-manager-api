const mongoose = require('mongoose');

const orcamentoSchema = new mongoose.Schema({
    valor: {
        type: Number,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    periodoInicial: {
        type: Date,
        required: true
    },
    periodoFinal: {
        type: Date,
        required: true
    },
    usuarioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
});

const Orcamento = mongoose.model('Orcamento', orcamentoSchema);

module.exports = Orcamento; 