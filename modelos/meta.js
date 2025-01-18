const mongoose = require('mongoose');

const metaSchema = new mongoose.Schema({
    descricao: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    dataLimite: {
        type: Date,
        required: true
    },
    usuarioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    concluida: {
        type: Boolean,
        default: false,
    }
});

const Meta = mongoose.model('Meta', metaSchema);

module.exports = Meta;