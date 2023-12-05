import "../node_modules/tailwindcss/tailwind.css";
// import "./myCss.css";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { GlobalContextProvider } from "./context/GlobalContext";
import Error404 from "./components/Error404";
import AdminVianda from "./components/AdminVianda";
import NuevaVianda from "./components/NuevaVianda";
import Entrega from "./components/Entrega"; // Nuevo componente para el registro del lugar de entrega
import EditarVianda from "./components/EditarVianda";
import AdminCliente from "./components/AdminCliente";
import Sidebar from "./components/Sidebar";
import EntregaNuevo from "./components/EntregaNuevo"; // Nuevo componente para el registro del lugar de entrega
import EntregaListar from "./components/EntregaListar";
import Perfil from "./components/Perfil";
import PerfilViandero from "./components/PerfilViandero";
import CardEntrega from "./components/CardEntrega";
import PerfilViandero2 from "./components/PerfilViandero2";
import VianderoPorZona from "./components/VianderoPorZona";


import { CarritoProvider } from "./context/CarritoProvider";
import Carrito from "./components/Carrito";

import PedidosHoyViandero from "./components/PedidosHoyViandero";
import HistoricoViandasCliente from "./components/HistoricoViandasCliente";
import Ubicar from "./components/Ubicar";
import InformesViandero from "./components/InformesViandero";

function App() {
  return (
    <GlobalContextProvider>
      {/* <Ubicar /> */}
      <CarritoProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/nosotros" element={<Error404 />} />
            <Route path="/crear-viandas" element={<AdminVianda />} />
            <Route path="/entrega" element={<Entrega />} />
            <Route path="/nueva-vianda" element={<NuevaVianda />} />
            {/* <Route path="/informeViandero" element={<InformesViandero />} /> */}
            <Route path="/entregaNuevo" element={<EntregaNuevo />} />
            <Route path="/entregaListar" element={<EntregaListar />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/perfilViandero" element={<PerfilViandero />} />
            <Route path="/PerfilViandero2" element={<PerfilViandero2 />} />
            <Route path="/VianderoPorZona" element={<VianderoPorZona />} />
            <Route path="/adminCliente" element={<AdminCliente />} />
            <Route path="/CardEntrega" element={<CardEntrega />} />
            <Route path="/Sidebar" element={<Sidebar />} />
            <Route path="/editar-vianda/:id" element={<EditarVianda />} />
            <Route path="/*" element={<Navigate to="/" />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route
              path="/PedidosHoyViandero"
              element={<PedidosHoyViandero />}
            />

            <Route
              path="/HistoricoViandasCliente"
              element={<HistoricoViandasCliente />}
            />
          </Routes>
        </BrowserRouter>
      </CarritoProvider>
    </GlobalContextProvider>
  );
}
//useContext
export default App;
