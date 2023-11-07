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

import AdminCliente from "./components/AdminCliente";
import Sidebar from "./components/Sidebar";

import EntregaNuevo from "./components/EntregaNuevo"; // Nuevo componente para el registro del lugar de entrega
import EntregaListar from "./components/EntregaListar";
import Perfil from "./components/Perfil";
function App() {
  return (
    <GlobalContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />        
        <Route path="/register" element={<Register />} />
        <Route path="/nosotros" element={<Error404 />} />
        <Route path="/crear-viandas" element={<AdminVianda />} />
        <Route path="/entrega" element={<Entrega />} /> 
        <Route path="/nueva-vianda" element={<NuevaVianda />} />   
        <Route path="/entregaNuevo" element={<EntregaNuevo />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/AdminVianda" element={<AdminVianda />} />
        <Route path="/AdminCliente" element={<AdminCliente />} />
        <Route path="/EntregaListar" component={<EntregaListar />} />
        <Route path="/Sidebar" element={<Sidebar />} />
      </Routes>
     
    </BrowserRouter>
    </GlobalContextProvider>
  );
}
//useContext
export default App;
