// src/pages/ContatoPage.jsx
import { useState, useEffect } from 'react';
import { getContatos, createContato, updateContato, deleteContato } from '../api/contatos.jsx';
import ContatoTable from '../components/contatoTable.jsx';
import ContatoForm from '../components/ContatoForm.jsx';
import Modal from '../components/modal.jsx';

// os botes nao funcionam
const ContatoPage = () => {
  const [contatos, setContatos] = useState([]);
  const [selectedContato, setSelectedContato] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchContatos = async () => {
    setIsLoading(true);
    try {
      const data = await getContatos();
      setContatos(data);
    } catch (err) {
      setError('Erro ao buscar contatos.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchContatos();
  }, []);
  const handleEdit = (contato) => {
    setSelectedContato(contato);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este contato?')) {
      try {
        await deleteContato(id);
        fetchContatos();
      } catch (err) {
        setError('Erro ao excluir contato.');
      }
    }
  };
  const handleSave = async (contatoData) => {
    setIsSaving(true);
    try {
      if (selectedContato) {
        await updateContato(selectedContato.id, contatoData);
      } else {
        await createContato(contatoData);
      }
      setIsModalOpen(false);
      setSelectedContato(null);
      fetchContatos();
    } catch (err) {
      setError(err.response?.data?.error || 'Erro ao salvar contato.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedContato(null);
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold underline">Lista de Contatos</h1>
      {isLoading ? (
        <p>Carregando...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <ContatoTable
          contatos={contatos}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
      <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>Adicionar Contato</button>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <ContatoForm
            Contato={selectedContato}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        </Modal>
      )}
    </div>
  );
};

export default ContatoPage;