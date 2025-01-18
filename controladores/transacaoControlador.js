const Transacao = require('../modelos/transacao');
const { validationResult } = require('express-validator');
const { validarCriarTransacao } = require('../validacoes/transacaoValidacao');

// Função para criar uma nova transação
const criarTransacao = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const transacao = new Transacao({ ...req.body, usuarioId: req.usuario._id });
        await transacao.save();
        res.status(201).json({ message: 'Transação criada com sucesso', transacao });
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar transação', error: error.message });
    }
};

const listarTransacoes = async (req, res) => {
    try {
        const usuarioId = req.usuario._id; // Obtém o ID do usuário autenticado
        const transacoes = await Transacao.find({ usuarioId });
        res.status(200).json(transacoes);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar transações', error: error.message });
    }
};


const obterTransacaoPorId = async (req, res) => {
    try {
        const transacaoId = req.params.id;
        const usuarioId = req.usuario._id;

        const transacao = await Transacao.findOne({ _id: transacaoId, usuarioId: usuarioId });

        if (!transacao) {
            return res.status(404).json({ message: 'Transação não encontrada' });
        }
        res.status(200).json(transacao);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter transação', error: error.message });
    }
};


const atualizarTransacao = async (req, res) => {
    try {
        const transacaoId = req.params.id;
        const usuarioId = req.usuario._id;

        const transacaoAtualizada = await Transacao.findOneAndUpdate({ _id: transacaoId, usuarioId: usuarioId }, req.body, { new: true });

        if (!transacaoAtualizada) {
            return res.status(404).json({ message: 'Transação não encontrada' });
        }
        res.status(200).json({ message: 'Transação atualizada com sucesso', transacao: transacaoAtualizada });
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar transação', error: error.message });
    }
};

const deletarTransacao = async (req, res) => {
    try {
        const transacaoId = req.params.id;
        const usuarioId = req.usuario._id;

        const transacaoDeletada = await Transacao.findOneAndDelete({ _id: transacaoId, usuarioId: usuarioId });

        if (!transacaoDeletada) {
            return res.status(404).json({ message: 'Transação não encontrada' });
        }
        res.status(200).json({ message: 'Transação deletada com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar transação', error: error.message });
    }
};

module.exports = {
    criarTransacao,
    listarTransacoes,
    obterTransacaoPorId,
    atualizarTransacao,
    deletarTransacao,
};