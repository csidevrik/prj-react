import React from 'react';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Invoices from './components/pages/Invoices/Invoices';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/" element={<div>Página Principal</div>} />
            <Route path="/facturas" element={<Invoices />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
