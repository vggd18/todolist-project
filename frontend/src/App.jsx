import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css'
const App = () => {
  return (
    <div>
      <div className='todo'>
        <h1>To do List</h1>
      </div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
