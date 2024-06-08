import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import './styles/App.css'
const App = () => {
  return (
    <div className='todo'>
      <h1>To do List</h1>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
