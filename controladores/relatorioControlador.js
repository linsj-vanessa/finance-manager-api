const Transacao = require('../modelos/transacao');

const gerarRelatorio = async (req, res) => {
    try {
        const usuarioId = req.usuario._id;
        const { periodoInicial, periodoFinal } = req.query;

        const filtro = { usuarioId };

        if (periodoInicial && periodoFinal) {
           filtro.data = {
               $gte: new Date(periodoInicial),
               $lte: new Date(periodoFinal),
           }
        }

        const transacoes = await Transacao.find(filtro);


        let saldo = 0;
        let totalReceitas = 0;
        let totalDespesas = 0;
        let receitas = [];
        let despesas = [];


        transacoes.forEach(transacao => {
             if (transacao.tipo === 'receita') {
                totalReceitas += transacao.valor;
                receitas.push(transacao);
            } else if (transacao.tipo === 'despesa') {
                totalDespesas += transacao.valor;
                 despesas.push(transacao);
             }
        });

        saldo = totalReceitas - totalDespesas;

        res.status(200).json({
            saldo,
            totalReceitas,
            totalDespesas,
            receitas,
            despesas
        });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao gerar relatório', error: error.message });
    }
};

module.exports = {
    gerarRelatorio,
};