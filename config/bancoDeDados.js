const mongoose = require('mongoose');

const connectToDatabase = async () => {
try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Conectado ao MongoDB com sucesso');
} catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error.message);
}
};

module.exports = connectToDatabase;
