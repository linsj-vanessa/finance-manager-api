require('dotenv').config(); // Carrega as variáveis de ambiente do .env
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');

const transacoesRotas = require(path.join(__dirname, 'rotas', 'transacoes-rotas'));
const usuariosRotas = require(path.join(__dirname, 'rotas', 'usuario-rotas'));
const categoriasRotas = require(path.join(__dirname, 'rotas', 'categoria-rotas'));
const relatorioRotas = require(path.join(__dirname, 'rotas', 'relatorio-rotas'));
const orcamentoRotas = require(path.join(__dirname, 'rotas', 'orcamento-rotas'));
const metaRotas = require(path.join(__dirname, 'rotas', 'meta-rotas'));
const errorHandler = require(path.join(__dirname, 'middlewares', 'errorHandler'));

const app = express();

//Middleware para aumentar a segurança da aplicação
app.use(helmet());

// Middleware para processar JSON
app.use(express.json());

// Rotas da API
app.use('/transacoes', transacoesRotas);
app.use('/usuarios', usuariosRotas);
app.use('/categorias', categoriasRotas);
app.use('/relatorios', relatorioRotas);
app.use('/orcamentos', orcamentoRotas);
app.use('/metas', metaRotas);

// Middleware de tratamento de erros
app.use(errorHandler);

// Conexão com o banco de dados MongoDB
const URI_MONGODB = process.env.MONGODB_URI;
mongoose.connect(URI_MONGODB)
    .then(() => {
        console.log("Banco de dados conectado com sucesso!");
    })
    .catch((error) => {
        console.error("Erro ao conectar ao banco de dados:", error);
    });


// Definindo a porta
const PORT = process.env.PORT || 3000;

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});