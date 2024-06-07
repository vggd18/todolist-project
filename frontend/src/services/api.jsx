import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const createTarefa = (tarefa) => {
  return api.post('/tarefas', tarefa);
};

export const getTarefas = () => {
  return api.get('/tarefas');
}

export const updateTarefa = (id, tarefa) => {
  return api.put(`/tarefas/${id}`, tarefa);
}
