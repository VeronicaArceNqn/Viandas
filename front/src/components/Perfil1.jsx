import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
// import "../myCss.css";
import Nav from "./Nav";
import { NavLink, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "./Footer";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


export default function Register() {
  const navigate = useNavigate(); 
  const { user, SERVER } = useContext(GlobalContext);
  console.log("Valor de user:", user);
  console.log("Valor de server:", SERVER);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm(); 




  const onSubmit = handleSubmit((data) => {
    // console.log(data);
    saveRegister(data);
  });

  

  const saveRegister = (data) => {
    try {
      const response = axios.post("http://localHost:8000/api/register", data);

      console.log("Respuesta del servidor:", response.data);
      //swit alerta confirmacion
      Swal.fire("Ya estas registrado al sistema, ahora puedes iniciar session !");
      navigate("/login");
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  return (
    <>
      {/* <!-- HTML --> */}
      <div className=" container mx-auto min-h-screen bg-[#252831] grid grid-cols-1 lg:grid-cols-1">
        <Nav />
        <div className="text-white flex flex-col items-center justify-center gap-8 p-8 max-w-lg mx-auto lg:grid-cols-1 text-center">
          {/* <!-- Titulo con descripción --> */}
          <div className="flex flex-col gap-1 w-full">
            <h1 className="text-4xl font-medium ">Perfil</h1>
            <p className="text-gray-400">Registrate en la plataforma</p>
          </div>

          {/* <!-- Form --> */}
          <form className="flex flex-col gap-4" onSubmit={onSubmit}>
            
            <div>
              <label htmlFor="apellido" className="text-gray-200">
                Apellido 
              </label>
              <input
                {...register("apellido", {
                 
                })}
                type="text"
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                placeholder="Ingresa tu apellido"
                defaultValue={user.user.apellido} 
                readOnly
              />
              
              <label htmlFor="name" className="text-gray-200">
                Nombre 
              </label>
              <input
               
                type="text"
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                
                defaultValue={user.user.nombre} 
                readOnly
              />
             
            </div>
            <div>
              <label htmlFor="email" className="text-gray-200">
                Correo electrónico 
              </label>
              <input
                
                type="email"
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                
                defaultValue={user.user.email} 
                readOnly
              />
             
            </div>
            <div>
              <label htmlFor="telefono" className="text-gray-200">
                Teléfono
              </label>
              <input
                {...register("telefono", {
                 
                })}
                type="texto"
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                placeholder="Ingresa un nro de contacto"
                defaultValue={user.user.telefono} 
                readOnly
              />
             
            </div>
            <div>
              <label htmlFor="fechaNac" className="text-gray-200">
                Fecha de nacimiento
              </label>
              <input
                type="date"
                
                className="w-full text-center py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                name="fechaNac"
                defaultValue={user.user.fechaNac} 
                readOnly
              />
             
            </div>

            <div>
              <label htmlFor="genero" className="text-gray-200">
                Género 
              </label> 
              <input               
                type="text"
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                
                defaultValue={user.user.genero} 
                readOnly
              />
            </div>
            <div className="mt-4 order-1 md:order-2">
              <button
                type="submit"
                className="w-full bg-indigo-700 p-2 rounded-full hover:bg-indigo-800 transition-colors"
              >
                Deseo actualizar mi perfil
              </button>
            </div>


            <div>              
               <h5 className="text-2xl font-medium ">Mis lugares de entrega</h5>
            </div>
            
            <div>
              <label htmlFor="provincia" className="text-gray-200">
             Provincia
              </label>
              <input
                type="text"
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                
                defaultValue={user.user.nombre} 
                readOnly
              />
              
            </div>
            <div>
              <label htmlFor="ciudad" className="text-gray-200">
              Ciudad 
              </label>
              <input
               
                type="text"
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                
                defaultValue={user.user.nombre} 
                readOnly
              />
              
            </div>
           
        
            <div className="mt-4 order-1 md:order-2">
              <button
                type="submit"
                className="w-full bg-indigo-700 p-2 rounded-full hover:bg-indigo-800 transition-colors"
              >
                Agregar nuevo lugar de entrega
              </button>
            </div>
            {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
            
          </form>
        </div>
        {/* <!-- Imagen de fondo --> */}
        <div className="bg hidden lg:block"></div>
        <Footer />
      </div>
    </>
  );
}


