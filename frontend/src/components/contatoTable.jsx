// src/components/ContatoTable.jsx
import React from 'react';

const ContatoTable = ({ contatos, onEdit, onDelete }) => {
  return (
    <>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telefone</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Favorito</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
          </tr>
        </thead>
        <tbody>
          {contatos.map((contato) => (
            <tr key={contato.id}>
              <td className="px-6 py-4 whitespace-nowrap">{contato.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{contato.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{contato.phone}</td>
              <td className="px-6 py-4 whitespace-nowrap">{contato.favorite ? 'Sim' : 'Não'}</td>
              <td>
                <button className="btn btn-secondary" onClick={() => onEdit(contato)}>Editar</button>
                <button className="btn btn-danger" onClick={() => onDelete(contato.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ContatoTable;

