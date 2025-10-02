// src/components/ContatoTable.jsx
import React from 'react';

const ContatoTable = ({ contatos, onEdit, onDelete }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Favorito</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {contatos.map((contato) => (
            <tr key={contato.id}>
              <td>{contato.name}</td>
              <td>{contato.email}</td>
              <td>{contato.phone}</td>
              <td>{contato.favorite ? 'Sim' : 'Não'}</td>
              <td>
                <button onClick={() => onEdit(contato)}>Editar</button>
                <button onClick={() => onDelete(contato.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ContatoTable;

