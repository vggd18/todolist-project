import React from 'react';
import TarefaList from '../components/TarefaList';
import Navbar from '../components/Navbar';

const TarefaListPage = () => {
  return (
    <div>
      <div className='todo'>
        <h1>Listagem de Tarefas</h1>
        <Navbar />
      </div>
      <TarefaList />
    </div>

  );
};

export default TarefaListPage;