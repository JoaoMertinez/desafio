import {
    createContato,
    getAll,
    updateContato,
    deleteContato
} from '../controllers/contatosController.js'

export async function contatoRoutes(fastify, options) {
    fastify.post('/contatos',createContato);
    fastify.get('/contatos',getAll);
    fastify.put('/contatos',updateContato);
    fastify.delete('/contatos/:id',deleteContato);
    
}

export default contatoRoutes;