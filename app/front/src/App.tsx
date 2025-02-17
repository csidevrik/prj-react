import React from 'react';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Invoices from './components/pages/Invoices/Invoices';
import GoalSelection from './pages/GoalSelection';
import Dashboard from './pages/Dashboard';
import Facturas from './pages/Facturas';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main-container">
          <Sidebar />
          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/facturas" element={<Facturas />} />
              <Route path="/seleccion-objetivos" element={<GoalSelection />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
