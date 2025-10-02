import prisma from './../db/db.js';

const contatoService = {

  create: async (data) => {
    return prisma.contatos.create({ data });
  },

  findAll: async () => {
    return prisma.contatos.findMany();
  },

  findById: async (id) => {
    return prisma.contatos.findUnique({
      where: { id: parseInt(id) },
    });
  },

  update: async (id, data) => {
    return prisma.contatos.update({
      where: { id: parseInt(id) },
      data,
    });
  },

  updateF: async (id, data) => {
    return prisma.contatos.update({
      where: { id: parseInt(id) },
      data,
    });
  },

  delete: async (id) => {
    return prisma.contatos.delete({
      where: { id: parseInt(id) },
    });
  },

};

export default contatoService;