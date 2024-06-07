import React from 'react';
import TarefaForm from '../components/TarefaForm';

const TarefaEditPage = ({ match }) => {
  return (
    <div>
        <h1>EDITAR TAREFA</h1>
      <TarefaForm match={match} />
    </div>
  );
};

export default TarefaEditPage;
