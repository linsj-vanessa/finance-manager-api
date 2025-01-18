const Categoria = require('../modelos/categoria');

const criarCategoria = async (req, res) => {
    try {
        const categoria = new Categoria({ ...req.body, usuarioId: req.usuario._id });
        await categoria.save();
        res.status(201).json({ message: 'Categoria criada com sucesso', categoria });
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar categoria', error: error.message });
    }
};

const listarCategorias = async (req, res) => {
    try {
        const usuarioId = req.usuario._id;
        const categorias = await Categoria.find({ usuarioId });
        res.status(200).json(categorias);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar categorias', error: error.message });
    }
};


const obterCategoriaPorId = async (req, res) => {
    try {
        const categoriaId = req.params.id;
        const usuarioId = req.usuario._id;

      const categoria = await Categoria.findOne({ _id: categoriaId, usuarioId });

      if (!categoria) {
            return res.status(404).json({ message: 'Categoria não encontrada' });
        }
        res.status(200).json(categoria);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter categoria', error: error.message });
    }
};

const atualizarCategoria = async (req, res) => {
    try {
        const categoriaId = req.params.id;
        const usuarioId = req.usuario._id;

        const categoriaAtualizada = await Categoria.findOneAndUpdate({ _id: categoriaId, usuarioId: usuarioId }, req.body, { new: true });

        if (!categoriaAtualizada) {
            return res.status(404).json({ message: 'Categoria não encontrada' });
        }
        res.status(200).json({ message: 'Categoria atualizada com sucesso', categoria: categoriaAtualizada });
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar categoria', error: error.message });
    }
};

const deletarCategoria = async (req, res) => {
  try {
      const categoriaId = req.params.id;
      const usuarioId = req.usuario._id;

      const categoriaDeletada = await Categoria.findOneAndDelete({ _id: categoriaId, usuarioId: usuarioId });

      if (!categoriaDeletada) {
        return res.status(404).json({ message: 'Categoria não encontrada' });
    }
      res.status(200).json({ message: 'Categoria deletada com sucesso' });
  } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar categoria', error: error.message });
  }
};


module.exports = {
    criarCategoria,
    listarCategorias,
    obterCategoriaPorId,
    atualizarCategoria,
    deletarCategoria,
};