import React from "react";
import { GlobalContextProvider } from "../context/GlobalContext";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CarritoProvider } from "../context/CarritoProvider";
import Ubicar from "../components/Ubicar";
import AdminVianda from "../components/AdminVianda";
import NuevaVianda from "../components/NuevaVianda";
import EntregaListar from "../components/EntregaListar";
import Perfil from "../components/Perfil";
import AdminCliente from "../components/AdminCliente";
import CardEntrega from "../components/CardEntrega";
import Sidebar from "../components/Sidebar";
import EditarVianda from "../components/EditarVianda";
import Carrito from "../components/Carrito";
import PedidosHoyViandero from "../components/PedidosHoyViandero";
import HistoricoViandasCliente from "../components/HistoricoViandasCliente";
import Home from "../components/Home";
import Entrega from "../components/Entrega";
import EntregaNuevo from "../components/EntregaNuevo";
import Error404 from "../components/Error404";

const RoutesPriv = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/register" element={<Register />} /> */}
      <Route path="/nosotros" element={<Error404 />} />
      <Route path="/crear-viandas" element={<AdminVianda />} />
      <Route path="/entrega" element={<Entrega />} />
      <Route path="/nueva-vianda" element={<NuevaVianda />} />
      <Route path="/entregaNuevo" element={<EntregaNuevo />} />
      <Route path="/entregaListar" element={<EntregaListar />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/AdminCliente" element={<AdminCliente />} />
      <Route path="/CardEntrega" element={<CardEntrega />} />
      <Route path="/Sidebar" element={<Sidebar />} />
      <Route path="/editar-vianda/:id" element={<EditarVianda />} />
      {/* <Route path="/*" element={<Navigate to="/" />} /> */}
      {/* <Route path="/home" element={<Home} /> */}
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/PedidosHoyViandero" element={<PedidosHoyViandero />} />

      <Route
        path="/HistoricoViandasCliente"
        element={<HistoricoViandasCliente />}
      />
    </Routes>
  );
};

export default RoutesPriv;
