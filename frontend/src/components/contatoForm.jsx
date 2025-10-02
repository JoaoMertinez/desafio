// src/components/ContatoForm.jsx
import { useState, useEffect } from 'react';

const ContatoForm = ({ Contato, onSave, onCancel }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [favorite, setFavorite] = useState(false);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Contato) {
      setName(Contato.name);
      setEmail(Contato.email);
      setPhone(Contato.phone);
      setFavorite(Contato.favorite);
      setIsEditing(true);
    } else {
      setName('');
      setEmail('');
      setPhone('');
      setFavorite(false);
      setIsEditing(false);
    }
    setError(null);
  }, [Contato]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    if (!name || !email) {
      setError('Nome e email são obrigatórios.');
      setIsSubmitting(false);
      return;
    }
    try {
      await onSave({ name, email, phone, favorite });
      setName('');
      setEmail('');
      setPhone('');
      setFavorite(false);
    } catch (err) {
      setError(err.response?.data?.error || 'Erro ao salvar contato.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isSubmitting}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSubmitting}
        />
      </div>
      <div>
        <label>Telefone:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          disabled={isSubmitting}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={favorite}
            onChange={(e) => setFavorite(e.target.checked)}
            disabled={isSubmitting}
          />
          Favorito
        </label>
      </div>
      <button type="submit" disabled={isSubmitting}>
        {isEditing ? (isSubmitting ? 'Atualizando...' : 'Atualizar') : (isSubmitting ? 'Salvando...' : 'Salvar')}
      </button>
      {isEditing && (
        <button type="button" onClick={onCancel} disabled={isSubmitting}>
          Cancelar
        </button>
      )}
    </form>
  );
};

export default ContatoForm;