import * as BruxoModel from "./../models/bruxoModel.js";

export const listarTodos = async (req, res) => {
  try {
    const bruxos = await BruxoModel.encontreTodos();

    if (!bruxos || bruxos.length === 0) {
      res.status(404).json({
        total: 0,
        mensagem: "Não há bruxos na lista",
        bruxos,
      });
    }

    res.status(200).json({
      total: bruxos.length,
      mensagem: "Lista de bruxos",
      bruxos,
    });
  } catch (error) {
    res.status(500).json({
      erro: "Erro interno de servidor",
      detalhes: error.message,
      status: 500,
    });
  }
};

export const listarUm = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const bruxo = await BruxoModel.encontreUm(id);

    if (!bruxo) {
      return res.status(404).json({
        erro: "Bruxo não encontrado",
        mensagem: "Verifique o id do bruxo",
        id: id,
      });
    }

    res.status(200)({
      message: "Bruxo encontrado",
      bruxo,
    });
  } catch (error) {
    res.status(500).json({
      erro: "Erro interno de servidor",
      detalhes: error.message,
      status: 500,
    });
  }
};

export const criar = async (req, res) => {
  try {
    const { nome, casa, patrono, varinha, anoMatricula } = req.body;
    const dado = req.body;

    // Validação automática de campos obrigatórios

    const camposObrigatorios = ["nome", "casa", "varinha", "anoMatricula"];
    const faltando = camposObrigatorios.filter((campo) => !dado[campo]);

    if (faltando.length > 0) {
      return res.status(400).json({
        erro: `Os seguintes campos são obrigatórios: ${faltando.join(", ")}.`,
      });
    }

    //Validar se a casa é válida
    const casasValidas = ["Grifinória", "Sonserina", "Corvinal", "Lufa-Lufa"];
    if (!casasValidas.includes(dados.casa)) {
      return res.status(400).json({
        erro: "Casa inválida! O Chapéu Seletor só reconhece as 4 casas",
        casasValidas,
      });
    }

    // Eu crio o bruxo usando o Model
    const novoBruxo = await BruxoModel.criar(req.body);

    res.status(201).json({
      mensagem: "Bruxo criado com sucesso!",
      bruxo: novoBruxo,
    });
  } catch (error) {
    res.status(500).json({
      erro: "Erro ao criar bruxo",
      detalhes: error.message,
    });
  }
};

export const deletar = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    //Verificars e o id exixgd, ou seja, se tem bruxo com esse ID
    const bruxoExiste = await BruxoModel.encontreUm(id);

    if (!bruxoExiste) {
      return res.status(404).json({
        erro: "Bruxo não encontrado com esse id",
        id: id,
      });
    }

    await BruxoModel.deletar(id);

    res.status(200).json({
      mensagem: "Bruxo apagado com sucesso!",
      bruxoRemovido: bruxoExiste,
    });
  } catch (error) {
    res.status(500).json({
      erro: "Erro ao apagar bruxo!",
      detalhees: error.message,
    });
  }
};

export const atualizar = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const dados = req.body;

    //Verificar se o bruxo existe
    const bruxoExiste = await BruxoModel.encontreUm(id);

    if (!bruxoExiste) {
      return res.status(404).json({
        erro: "Bruxo não existe!",
        id: id,
      });
    }

    const casasValidas = ["Grifinória", "Sonserina", "Corvinal", "Lufa-Lufa"];
    if (!casasValidas.includes(dados.casa)) {
      return res.status(400).json({
        erro: "Casa inválida! O Chapéu Seletor só reconhece as 4 casas",
        casasValidas,
      });
    }

    const bruxoAtualizado = await BruxoModel.atuaizar(id, dados);

    res.status(200).json({
      messagem: "Bruxo atualizado com sucesso",
      bruxo: bruxoAtualizado,
    });
  } catch (error) {
    res.status(500).json({
      erro: "Erro ao atualizar bruxo",
      detalhes: error.message,
    });
  }
};
