import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TarefaListPage from './routes/TarefaListPage';
import MembroCreatePage from './routes/MembroCreatePage';
import Login from './Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: <App />
  },
  {
    path: '/tarefas',
    element: <TarefaListPage />
  },
  {
    path: '/membros',
    element: <MembroCreatePage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
