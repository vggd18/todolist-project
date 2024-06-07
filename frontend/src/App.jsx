import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Minha Aplicação</h1>
      <nav>
        <Link to="/tarefas/nova">Criar Nova Tarefa</Link>
        <Link to="/tarefas">Listar Tarefas</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
