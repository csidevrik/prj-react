import React from 'react';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <main className="content">
          {/* Aquí irá el contenido principal */}
        </main>
      </div>
    </div>
  );
}

export default App;
