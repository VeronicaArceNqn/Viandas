import React, { useContext, useState } from "react";

import { GlobalContext } from "../context/GlobalContext";
import Nav from "./Nav";
import Footer from "./Footer";
import PerfilEditar from "./PerfilEditar";
import SidebarCliente from "./SidebarCliente";

const Perfil = () => {
  const [editing, setEditing] = useState(false);
  const { user, SERVER } = useContext(GlobalContext);
  //console.log("Valor de user:", user);

  const handleEditClick = () => {
    setEditing(true);
  }

  return (
    <>
     <Nav />
    {/* <div className=" container mx-auto min-h-screen bg-[#252831] grid grid-cols-1 lg:grid-cols-1"> */}
    <div className="flex justify-between w-full  bg-gray-600 dark:bg-gray-400  ">
    <div className="grid grid-cols-1  md:grid-cols-2 gap-8  text-dark">
    <SidebarCliente />
    {/* <div className="text-dark flex flex-col items-center justify-center gap-8 p-8 max-w-lg mx-auto lg:grid-cols-1 text-center"> */}
      
      {/* <!-- Titulo con descripción --> */}
      <div className="flex flex-col gap-1 w-full">
        <h1 className="text-gray-200 text-4xl font-medium ">Mi perfil</h1>
        <p className="text-gray-400">----------</p>
      
      <div className="bg-gray-200 shadow-md rounded-lg gap-8 p-8 max-w-sm dark:bg-gray-300 dark:border-gray-700">
      
      <div className="px-5 pb-5">
      <p>Nombre y Apellido: <span className="font-bold">{user.user.nombre} {user.user.apellido}</span> </p>   
      </div>
      <div className="px-5 pb-5">
      <p>Correo: <span className="font-bold">{user.user.email}</span></p>
        <p>Teléfono: <span className="font-bold">{user.user.telefono}</span></p>
      </div>
      <div className="px-5 pb-5">
      <p>Fecha de nac.: <span className="font-bold">{user.user.fechaNac}</span></p>
        <p>Género: <span className="font-bold">{user.user.genero}</span></p>
      </div>
      <div className="px-5 pb-5">  

        
       
        
        
      </div>
      {editing && <PerfilEditar usuario={user} setEditing={setEditing} />}
      {!editing && <button className="text-white w-full bg-indigo-700 p-2 rounded-full hover:bg-indigo-800 transition-colors" onClick={handleEditClick}>Editar perfil</button>}
    </div>
    </div>
    </div>
        {/* <!-- Imagen de fondo --> */}
        
        </div>
      {/* </div> */}
      <div className="bg hidden lg:block"></div>
        <Footer />
    </>
  );
}

export default Perfil;
