import contatosService from '../services/contatosService.js'
import '../util/validar.js'

// `GET /contatos?q=...` → listar com busca `ILIKE` por `nome` ou `email`.
export const getAll = async (request, reply) => {
    try {
    const contatos = await contatosService.findAll();
    return reply.send(contatos);
  } catch (error) {
    reply.status(500).send({ error: 'Erro ao buscar contatos.' });
  }
};

// `POST /contatos` → criar; **validar manualmente** `nome`/`email`.
export const createContato = async (request, reply) => {
  const { name, email, phone, favorite } = request.body;
  if (!name || !email) {
    return reply.status(400).send({ error: 'Nome e email são obrigatórios.' });
  }
  try {
    const novoContato = await contatosService.create({ name, email, phone, favorite });
    return reply.status(201).send(novoContato);
  } catch (error) {
    if (error.code === 'P2002') {
      return reply.status(409).send({ error: 'Email já existe.' });
    }
    reply.status(500).send({ error: 'Erro ao criar contato.' });
  }
}

// `PATCH /contatos/:id/alternar-favorito` → inverter boolean `favorito`.
export const updateContato = async (request, reply) => {
  const { id } = request.params;
  try {
    const contatoAtualizado = await contatosService.toggleFavorite(id);
    return reply.send(contatoAtualizado);
  } catch (error) {
    if (error.code === 'P2025') {
      return reply.status(404).send({ error: 'Contato não encontrado.' });
    }
    reply.status(500).send({ error: 'Erro ao atualizar contato.' });
  }
};

//`DELETE /contatos/:id` → excluir; **204**.
export const deleteContato = async (request, reply) => {
  const { id } = request.params;
  try {
    await contatosService.deleteById(id);
    return reply.status(204).send();
  } catch (error) {
    if (error.code === 'P2025') {
      return reply.status(404).send({ error: 'Contato não encontrado.' });
    }
    reply.status(500).send({ error: 'Erro ao excluir contato.' });
  }
};