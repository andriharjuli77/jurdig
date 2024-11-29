import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Mapel_view from './pages/data_master/mapel/Mapel_view'
import Tambah_mapel_view from './pages/data_master/mapel/Tambah_mapel_view'
import Edit_mapel_view from './pages/data_master/mapel/Edit_mapel_view'
import Rombel_view from './pages/data_master/rombel/rombel_view'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Mapel" element={<Mapel_view />} />
      <Route path="/Tambah_mapel" element={<Tambah_mapel_view />} />
      <Route path="/Edit_mapel" element={<Edit_mapel_view />} />
      <Route path="/Rombel" element={<Rombel_view />} />
    </Routes>
  )
}

export default App
