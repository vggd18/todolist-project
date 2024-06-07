import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTarefa } from '../services/api';

const TarefaForm = () => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [finalizada, setFinalizada] = useState(false);
  const [prioridade, setPrioridade] = useState('Baixa');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita o comportamento padrão do envio do formulário (recarregar a página)
    const tarefa = { nome, descricao, finalizada, prioridade };
    createTarefa(tarefa);
    navigate('/'); 
  };

  return (
    <div>
      <h2>Criar Tarefa</h2>
      <form onSubmit={handleSubmit}> 
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            minLength={5}
            maxLength={50}
          />
        </div>
        <div>
          <label>Descrição:</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            maxLength={140}
          />
        </div>
        <div>
          <label>Finalizada:</label>
          <input
            type="checkbox"
            checked={finalizada}
            onChange={(e) => setFinalizada(e.target.checked)}
          />
        </div>
        <div>
          <label>Prioridade:</label>
          <select
            value={prioridade}
            onChange={(e) => setPrioridade(e.target.value)}
            required
          >
            <option value="Baixa">Baixa</option>
            <option value="Média">Média</option>
            <option value="Alta">Alta</option>
          </select>
        </div>
        <button type="submit">Salvar</button> 
      </form>
    </div>
  );
};

export default TarefaForm;