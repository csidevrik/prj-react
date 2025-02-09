import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import './components/Navbar.css'
import './components/Navbar.tsx'


function App() {
  const [count, setCount] = useState(0)

  return (
<>
      <Navbar />
      <div className="content">
        {/* Aquí irá el resto del contenido de tu aplicación */}
      </div>
    </>
  )
}

const Navbar = () => {
  return (
    <nav className="outlook-navbar">
      <div className="navbar-left">
        <div className="brand">
          <h1>facetapa</h1>
        </div>
      </div>
      
      <div className="navbar-center">
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Buscar" 
            className="search-input"
          />
          <button className="search-button">
            <i className="search-icon">🔍</i>
          </button>
        </div>
      </div>

      <div className="navbar-right">
        <button className="icon-button">💡</button>
        <button className="icon-button">📝</button>
        <button className="icon-button">🔔</button>
        <button className="icon-button">⚙️</button>
        <button className="icon-button">➖</button>
        <button className="icon-button">⬜</button>
        <button className="icon-button">✖️</button>
      </div>
    </nav>
  )
}

export default App
