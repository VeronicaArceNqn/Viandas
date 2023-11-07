import React, { useContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { GlobalContext } from "../context/GlobalContext";

const PerfilEditar = ({ setEditing }) => {
    const { user, setUser, SERVER } = useContext(GlobalContext);
  const [formData, setFormData] = useState({
    apellido: user.user.apellido,
    nombre: user.user.nombre,
    email: user.user.email,
    telefono: user.user.telefono,
    fechaNac: user.user.fechaNac,
    genero: user.user.genero,
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSaveClick = async () => {
    try {
      const response = await axios.put(`http://localhost:8000/api/user/${user.user.id}`, formData);

      console.log("Respuesta del servidor:", response.data);
      Swal.fire("Perfil actualizado con éxito");
      setUser(response.data);
      setEditing(false);
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  }

  return (
    <div className="bg-indigo-300">
      <h2 className="text-2xl">Editar Perfil</h2>
      <form className="flex flex-col gap-2">
        {/* Campos de edición */}
        <div>
              <label htmlFor="nombre" className="text-gray-100">
                Nombre
              </label>
              <input
               
                type="text"
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-500"
                placeholder="Ingresa tu nombre completo"
                name="nombre"
                value={formData.nombre}
          onChange={handleInputChange}
              />
              
            </div>

            <div>
              <label htmlFor="apellido" className="text-gray-100">
                Apellido
              </label>
              <input
               
                type="text"
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-500"
                placeholder="Ingresa tu nombre completo"
                name="apellido"
                value={formData.apellido}
          onChange={handleInputChange}
              />
              
            </div>
            <div>
              <label htmlFor="email" className="text-gray-100">
              Email
              </label>
              <input
               
                type="email"
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-500"
                placeholder="Ingresa tu nombre completo"
                name="email"
                value={formData.email}
          onChange={handleInputChange}
              />
              
            </div>
        
        
        <div>
              <label htmlFor="telefono" className="text-gray-100">
              Telefono
              </label>
              <input
               
                type="text"
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-500"
                placeholder="Ingresa tu nombre completo"
                name="telefono"
                value={formData.telefono}
          onChange={handleInputChange}
              />
              
            </div>

            <div>
              <label htmlFor="fechaNac" className="text-gray-100">
              Fecha de nacimiento
              </label>
              <input
               
                type="date"
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-500"
                placeholder="Ingresa tu nombre completo"
                name="fechaNac"
                value={formData.fechaNac}
          onChange={handleInputChange}
              />
              
            </div>
        

<div>
              <label htmlFor="genero" className="text-gray-100">
              Género
              </label>
              <select
               
                type="text"
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-500"
                placeholder="Ingresa tu nombre completo"
                name="genero"
                value={formData.genero}
          onChange={handleInputChange}
              >
              <option value={""}>Selecione Género</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                <option value="NoBinario">No binario</option>
              </select>
            </div>
        
        <button className="text-gray-100 w-full bg-indigo-700 p-2 rounded-full hover:bg-indigo-800 transition-colors" type="button" onClick={handleSaveClick}>Guardar</button>
      </form>
    </div>
  );
}

export default PerfilEditar;
