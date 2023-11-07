import React, { useContext, useState } from "react";

import { GlobalContext } from "../context/GlobalContext";
import Nav from "./Nav";
import Footer from "./Footer";
import PerfilEditar from "./PerfilEditar";

const Perfil = () => {
  const [editing, setEditing] = useState(false);
  const { user, SERVER } = useContext(GlobalContext);
  console.log("Valor de user:", user);

  const handleEditClick = () => {
    setEditing(true);
  }

  return (
    <>
    <div className=" container mx-auto min-h-screen bg-[#252831] grid grid-cols-1 lg:grid-cols-1">
    <Nav />
    <div className="text-dark flex flex-col items-center justify-center gap-8 p-8 max-w-lg mx-auto lg:grid-cols-1 text-center">
      {/* <!-- Titulo con descripción --> */}
      <div className="flex flex-col gap-1 w-full">
        <h1 className="text-gray-200 text-4xl font-medium ">Mi perfil</h1>
        <p className="text-gray-400">----------</p>
      </div>
      <div className="bg-gray-200 shadow-md rounded-lg gap-8 p-8 max-w-sm dark:bg-gray-300 dark:border-gray-700">
      
      <div className="px-5 pb-5">
      <p>Nombre y Apellido: {user.user.nombre} {user.user.apellido}</p>   
      </div>
      <div className="px-5 pb-5">
      <p>Correo: {user.user.email}</p>
        <p>Teléfono: {user.user.telefono}</p>
      </div>
      <div className="px-5 pb-5">
      <p>Fecha de Nacimiento: {user.user.fechaNac}</p>
        <p>Género: {user.user.genero}</p>
      </div>
      <div className="px-5 pb-5">  

        
       
        
        
      </div>
      {editing && <PerfilEditar usuario={user} setEditing={setEditing} />}
      {!editing && <button className="text-white w-full bg-indigo-700 p-2 rounded-full hover:bg-indigo-800 transition-colors" onClick={handleEditClick}>Editar perfil</button>}
    </div>
    </div>
        {/* <!-- Imagen de fondo --> */}
        <div className="bg hidden lg:block"></div>
        <Footer />
      </div>
    </>
  );
}

export default Perfil;
