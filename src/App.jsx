import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Tutorial from './pages/Tutorial'
import Drones from './pages/Drones'
import Utility from './pages/Utility'

export default function App(){
  return (
    <BrowserRouter>
      <header style={{padding:16, borderBottom:'1px solid #ddd'}}>
        <nav style={{display:'flex', gap:12}}>
          <Link to="/">Home</Link>
          <Link to="/tutorial">Tutorial</Link>
          <Link to="/drones">Drones</Link>
          <Link to="/utility">Utility</Link>
        </nav>
      </header>
      <main style={{padding:16}}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/tutorial" element={<Tutorial/>} />
          <Route path="/drones" element={<Drones/>} />
          <Route path="/utility" element={<Utility/>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
