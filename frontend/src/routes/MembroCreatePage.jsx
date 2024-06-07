import React from 'react';
import MembroCreate from '../components/MembroCreate';
import Navbar from '../components/Navbar'

const MembroCreatePage = () => {
  return (
    <div>
      <div className='todo'>
        <h1>Cadastro de Membros</h1>
        <Navbar />
      </div>
      <MembroCreate />
    </div>
  );
};

export default MembroCreatePage;