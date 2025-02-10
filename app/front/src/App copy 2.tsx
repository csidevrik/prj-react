import { useState } from 'react'
import './App.css'
import Navbar from './components/layout/Navbar'

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

export default App
