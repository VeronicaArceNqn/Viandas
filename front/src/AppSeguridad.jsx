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
import CardEntrega from "./components/CardEntrega";

import { CarritoProvider } from "./context/CarritoProvider";
import Carrito from "./components/Carrito";

import PedidosHoyViandero from "./components/PedidosHoyViandero";
import HistoricoViandasCliente from "./components/HistoricoViandasCliente";
import Ubicar from "./components/Ubicar";
import RoutesP from "./routes/RoutesP";

function App() {
  return (
    <>
    <RoutesP />
    </>
    // <GlobalContextProvider>
    //   <Ubicar />
    //   <CarritoProvider>
       
    //       <RoutesP />
       
    //   </CarritoProvider>
    // </GlobalContextProvider>
  );
}
//useContext
export default App;
