// src/api/ContatoApi.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/contatos';

export const getContatos = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

export const createContato = async (contato) => {
  const response = await axios.post(API_BASE_URL, contato);
  return response.data;
};

export const updateContato = async (id, contato) => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, contato);
  return response.data;
};

export const deleteContato = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/${id}`);
  return response.data;
};

export const toggleFavorite = async (id, favorite) => {
  const response = await axios.patch(`${API_BASE_URL}/${id}`, { favorite });
  return response.data;
};

export default {
  getContatos,
  createContato,
  updateContato,
  deleteContato,
  toggleFavorite,
};