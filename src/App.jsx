import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Tutorial from './pages/Tutorial'
import Drones from './pages/Drones'
import Utility from './pages/Utility'
import Regulamentacao from './pages/Regulamentacao'

export default function App(){
  return (
    <BrowserRouter>
      <header style={{
        padding: '16px',
        borderBottom: '1px solid #ddd',
        backgroundColor: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <nav style={{
          display: 'flex',
          gap: '20px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <Link to="/" style={{
            color: '#007bff',
            textDecoration: 'none',
            fontWeight: 500
          }}>Início</Link>
          <Link to="/drones" style={{
            color: '#007bff',
            textDecoration: 'none',
            fontWeight: 500
          }}>Drones</Link>
          <Link to="/tutorial" style={{
            color: '#007bff',
            textDecoration: 'none',
            fontWeight: 500
          }}>Tutorial</Link>
          <Link to="/utility" style={{
            color: '#007bff',
            textDecoration: 'none',
            fontWeight: 500
          }}>Utilidades</Link>
          <Link to="/regulamentacao" style={{
            color: '#007bff',
            textDecoration: 'none',
            fontWeight: 500
          }}>Regulamentação</Link>
        </nav>
      </header>
      <main style={{
        minHeight: 'calc(100vh - 53px)',
        backgroundColor: '#f8f9fa'
      }}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/tutorial" element={<Tutorial/>} />
          <Route path="/drones" element={<Drones/>} />
          <Route path="/utility" element={<Utility/>} />
          <Route path="/regulamentacao" element={<Regulamentacao/>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
