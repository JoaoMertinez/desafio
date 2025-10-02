import Fastify from 'fastify';
import contatosRoute from './rotas/contatosRotas.js';
import cors from '@fastify/cors'; // Importa o plugin

const fastify = Fastify({
  logger: true,
});

fastify.register(cors, {  origin: true, // Ou o seu domínio específico, por exemplo: 'http://localhost:5173'  
methods: ['GET', 'PUT', 'POST', 'DELETE']}); // Adicione os métodos que você precisa;

// Registra as rotas da sua aplicação
fastify.register(contatosRoute);

const start = async () => {
  try {
    const PORT = process.env.PORT || 3000;
    await fastify.listen({ port: PORT });
    console.log(`Server is running on http://localhost:${PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();