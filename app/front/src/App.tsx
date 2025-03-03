// import React from 'react';
import Navbar from './components/layout/Navbar/index';
import Sidebar from './components/layout/Sidebar/index';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
              <Route index element={<Dashboard />} />
              <Route path="/facturas" element={<Facturas />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
