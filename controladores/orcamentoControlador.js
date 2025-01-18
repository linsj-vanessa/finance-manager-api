const Orcamento = require('../modelos/orcamento');

const criarOrcamento = async (req, res) => {
    try {
        const orcamento = new Orcamento({ ...req.body, usuarioId: req.usuario._id });
        await orcamento.save();
        res.status(201).json({ message: 'Orçamento criado com sucesso', orcamento });
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar orçamento', error: error.message });
    }
};

const listarOrcamentos = async (req, res) => {
    try {
      const usuarioId = req.usuario._id;
        const orcamentos = await Orcamento.find({ usuarioId });
      res.status(200).json(orcamentos);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar orçamentos', error: error.message });
    }
};

const obterOrcamentoPorId = async (req, res) => {
    try {
        const orcamentoId = req.params.id;
        const usuarioId = req.usuario._id;

        const orcamento = await Orcamento.findOne({ _id: orcamentoId, usuarioId: usuarioId });

        if (!orcamento) {
            return res.status(404).json({ message: 'Orçamento não encontrado' });
        }
        res.status(200).json(orcamento);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter orçamento', error: error.message });
    }
};

const atualizarOrcamento = async (req, res) => {
    try {
        const orcamentoId = req.params.id;
        const usuarioId = req.usuario._id;

        const orcamentoAtualizado = await Orcamento.findOneAndUpdate({ _id: orcamentoId, usuarioId: usuarioId }, req.body, { new: true });

        if (!orcamentoAtualizado) {
            return res.status(404).json({ message: 'Orçamento não encontrado' });
        }
        res.status(200).json({ message: 'Orçamento atualizado com sucesso', orcamento: orcamentoAtualizado });
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar orçamento', error: error.message });
    }
};

const deletarOrcamento = async (req, res) => {
    try {
        const orcamentoId = req.params.id;
         const usuarioId = req.usuario._id;

        const orcamentoDeletado = await Orcamento.findOneAndDelete({ _id: orcamentoId, usuarioId: usuarioId });

        if (!orcamentoDeletado) {
            return res.status(404).json({ message: 'Orçamento não encontrado' });
        }
        res.status(200).json({ message: 'Orçamento deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar orçamento', error: error.message });
    }
};

module.exports = {
    criarOrcamento,
    listarOrcamentos,
    obterOrcamentoPorId,
    atualizarOrcamento,
    deletarOrcamento,
};