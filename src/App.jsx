import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Mapel_view from "./pages/data_master/mapel/Mapel_view";
import Tambah_mapel_view from "./pages/data_master/mapel/Tambah_mapel_view";
import Edit_mapel_view from "./pages/data_master/mapel/Edit_mapel_view";
import Rombel_view from "./pages/data_master/rombel/Rombel_view";
import Tambah_rombel_view from "./pages/data_master/rombel/Tambah_rombel_view";
import Edit_rombel_view from "./pages/data_master/rombel/Edit_rombel_view";
import Gtk_view from "./pages/data_master/gtk/Gtk_view";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      {/* Data Mapel */}
      <Route path="/Mapel" element={<Mapel_view />} />
      <Route path="/Tambah_mapel" element={<Tambah_mapel_view />} />
      <Route path="/Edit_mapel" element={<Edit_mapel_view />} />
      {/* Data Kelas */}
      <Route path="/Rombel" element={<Rombel_view />} />
      <Route path="/Tambah_rombel" element={<Tambah_rombel_view />} />
      <Route path="/Edit_rombel" element={<Edit_rombel_view />} />
      {/* Data Gtk */}
      <Route path="/Gtk" element={<Gtk_view />} />
    </Routes>
  );
}

export default App;
