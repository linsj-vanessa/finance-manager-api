const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    usuarioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true,
    },
});

const Categoria = mongoose.model('Categoria', categoriaSchema);

module.exports = Categoria;