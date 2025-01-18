const Meta = require('../modelos/meta');

const criarMeta = async (req, res) => {
    try {
        const meta = new Meta({ ...req.body, usuarioId: req.usuario._id });
        await meta.save();
        res.status(201).json({ message: 'Meta criada com sucesso', meta });
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar meta', error: error.message });
    }
};

const listarMetas = async (req, res) => {
    try {
        const usuarioId = req.usuario._id;
        const metas = await Meta.find({ usuarioId });
        res.status(200).json(metas);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar metas', error: error.message });
    }
};

const obterMetaPorId = async (req, res) => {
    try {
      const metaId = req.params.id;
      const usuarioId = req.usuario._id;

        const meta = await Meta.findOne({ _id: metaId, usuarioId: usuarioId });

        if (!meta) {
          return res.status(404).json({ message: 'Meta não encontrada' });
        }
      res.status(200).json(meta);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter meta', error: error.message });
    }
};

const atualizarMeta = async (req, res) => {
    try {
        const metaId = req.params.id;
        const usuarioId = req.usuario._id;

        const metaAtualizada = await Meta.findOneAndUpdate({ _id: metaId, usuarioId: usuarioId }, req.body, { new: true });

        if (!metaAtualizada) {
          return res.status(404).json({ message: 'Meta não encontrada' });
        }
      res.status(200).json({ message: 'Meta atualizada com sucesso', meta: metaAtualizada });
    } catch (error) {
      res.status(400).json({ message: 'Erro ao atualizar meta', error: error.message });
    }
};

const deletarMeta = async (req, res) => {
    try {
      const metaId = req.params.id;
      const usuarioId = req.usuario._id;

        const metaDeletada = await Meta.findOneAndDelete({ _id: metaId, usuarioId: usuarioId });

        if (!metaDeletada) {
          return res.status(404).json({ message: 'Meta não encontrada' });
        }
      res.status(200).json({ message: 'Meta deletada com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar meta', error: error.message });
    }
};

const marcarMetaConcluida = async (req, res) => {
    try {
        const metaId = req.params.id;
        const usuarioId = req.usuario._id;

        const metaAtualizada = await Meta.findOneAndUpdate({ _id: metaId, usuarioId: usuarioId }, { concluida: true }, { new: true });

        if (!metaAtualizada) {
            return res.status(404).json({ message: 'Meta não encontrada' });
        }
        res.status(200).json({ message: 'Meta marcada como concluída', meta: metaAtualizada });

    } catch (error) {
        res.status(500).json({ message: 'Erro ao marcar meta como concluída', error: error.message });
    }
};


module.exports = {
    criarMeta,
    listarMetas,
    obterMetaPorId,
    atualizarMeta,
    deletarMeta,
    marcarMetaConcluida,
};