import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
// import "../myCss.css";
import Nav from "./Nav";
import { NavLink, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "./Footer";
import SidebarCliente from "./SidebarCliente";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


export default function Register() {
  const navigate = useNavigate(); 
  const { user, SERVER } = useContext(GlobalContext);
  //console.log("Valor de user:", user);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm(); 


   const [ciudades, setCiudades] = useState([]);

   const onSubmit = handleSubmit((data) => {
     console.log(data);
    saveRegister(data);
  });

  // const getCiudades = async () => {
  //   await axios
  //     .get("https://apis.datos.gob.ar/georef/api/provincias")
  //     .then((response) => setCiudades(response.data.provincias));
  // };
  // // console.log(watch("ciudade_id"))
  // const getLocalidades = () => {
  //   axios
  //     .get(
  //       "https://apis.datos.gob.ar/georef/api/municipios?provincia=58&campos=id,nombre&max=100"
  //     )
  //     .then((loc) => console.log(loc));
  // };

  //  useEffect(() => {
  //    getCiudades();
  //  }, []);

  //  useEffect(() => {
  //    getLocalidades();
  //  }, []);

  const saveRegister = (data) => {
    try {
      const response = axios.post(`${SERVER}lugarEntrega`, data);

      console.log("Respuesta del servidor:", response.data);
      //swit alerta confirmacion
      Swal.fire("Se ha registrado el lugar de entrega correctamente !");
      navigate("/EntregaListar");
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  return (
    <>
     <Nav />
      {/* <!-- HTML --> */}
      {/* <div className=" container mx-auto min-h-screen bg-[#252831] grid grid-cols-1 lg:grid-cols-1"> */}
      {/* <div className="flex justify-between w-full  bg-gray-600 dark:bg-gray-400  "> */}
        <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen  bg-gray-100 dark:bg-gray-400 text-black">
      <SidebarCliente />
        <div className="lg:col-span-3 xl:col-span-5 p-8 h-[100vh] overflow-y-scroll bg-gray-700 dark:bg-gray-400">
        
          {/* <!-- Titulo con descripción --> */}
          <div className="text-dark p-3 m-3 border border-indigo-700 bg-slate-400 rounded-md">
            <h1 className="text-2xl font-bold ">Ingresar un lugar de entrega para la vianda</h1>
            
          

          {/* <!-- Form --> */}
          <form className="flex flex-col gap-4" onSubmit={onSubmit}>

          <label htmlFor="user_id" className="text-white">
               
              </label>
              <input
                {...register("user_id", {              
                                   
                })}
                type="number"
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-500"                
                defaultValue={user.user.id} 
                readOnly
                hidden 
              />
           
            <div>
              <label htmlFor="calle" className="text-white">
                Calle *
              </label>
              <input
                {...register("calle", {
                  required: {
                    value: true,
                    message: "Campo requerido!!",
                  },
                  minLength: {
                    value: 2,
                    message: "Minimos 2 caracteres!",
                  },
                 
                })}
                type="text"
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-500"
                placeholder="Ingresa la calle"
              />
              {errors.calle && (
                <div className="flex  shadow-lg rounded-lg mt-1">
                  <div className=" bg-red-600 flex justify-center items-center  px-2 rounded-tr-3xl rounded-lg"></div>

                  <div className="flex flex-col p-2  rounded-tr-lg rounded-br-lg">
                    <h2 className="font-semibold text-red-100">
                      {errors.calle.message}
                    </h2>
                    <p className="text-gray-700"></p>
                  </div>
                </div>
              )}
              </div>
              
              <div>
              <label htmlFor="nroCalle" className="text-white">
                Altura de la calle
              </label>
              <input
                {...register("nroCalle", {                  
                    maxLength: {
                    value: 4,
                    message: "A superado el maximo de caracteres",
                  },
                  
                })}
                type="number"
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-500"
                placeholder="Ingresa un nro de altura de la calle"
              />
              {errors.nroCalle && (
                <div className="flex  shadow-lg rounded-lg mt-1">
                  <div className=" bg-red-600 flex justify-center items-center  px-2 rounded-tr-3xl rounded-lg"></div>

                  <div className="flex flex-col p-2  rounded-tr-lg rounded-br-lg">
                    <h2 className="font-semibold text-red-100">
                      {errors.nroCalle.message}
                    </h2>
                    <p className="text-gray-700"></p>
                  </div>
                </div>
              )}
            </div>

              <div>
              <label htmlFor="nombreLugar" className="text-white">
                Nombre del Organismo / Institución / Local / Domicilio particular *
              </label>
              <input
                {...register("nombreLugar", {
                  required: {
                    value: true,
                    message: "Este campo es requerido.!",
                  },
                  minLength: {
                    value: 2,
                    message: "Minimo 2 caracteres!",
                  },
                  maxLength: {
                    value: 50,
                    message: "A superado el maximo de 50 caracteres!",
                  },
                 
                })}
                type="text"
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-500"
                placeholder="Organismo "
              />
              {errors.nombreLugar && (
                <div className="flex  shadow-lg rounded-lg mt-1">
                  <div className=" bg-red-600 flex justify-center items-center  px-2 rounded-tr-3xl rounded-lg"></div>

                  <div className="flex flex-col p-2  rounded-tr-lg rounded-br-lg">
                    <h2 className="font-semibold text-red-100">
                      {errors.nombreLugar.message}
                    </h2>
                    <p className="text-gray-700"></p>
                  </div>
                </div>
              )}
            </div>

            <div>
              <label htmlFor="provincia" className="text-white">
                Provincia *
              </label>
              <input
                {...register("provincia", {
                  required: {
                    value: true,
                    message: "Este campo es requerido.!",
                  },
                  minLength: {
                    value: 2,
                    message: "Minimo 2 caracteres!",
                  },
                  maxLength: {
                    value: 10,
                    message: "A superado el maximo de 10 caracteres!",
                  },
                  
                })}
                type="text"
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-500"
                placeholder="Provincia "
              />
              
              {errors.provincia && (
                <div className="flex  shadow-lg rounded-lg mt-1">
                  <div className=" bg-red-600 flex justify-center items-center  px-2 rounded-tr-3xl rounded-lg"></div>

                  <div className="flex flex-col p-2  rounded-tr-lg rounded-br-lg">
                    <h2 className="font-semibold text-red-100">
                      {errors.provincia.message}
                    </h2>
                    <p className="text-gray-700"></p>
                  </div>
                </div>
              )}

            </div>
           
            {/* <div>
              <label htmlFor="provincia" className="text-gray-200">
                Provincia *
              </label>
              <select
                {...register("provincia", {
                  required: {
                    value: true,
                    message: "Seleccione una provincia",
                  },
                })}
               
                className="w-full py-2 px-4  border rounded-full mt-2 outline-none focus:border-indigo-400"
                placeholder="Eliga una provincia"
              >
                <option value={""}>Selecione una provincia</option>
                {ciudades.map((ciudad) => (
                  <option key={ciudad.id} value={ciudad.id}>
                    {ciudad.nombre}
                  </option>
                ))}
              </select>
              {errors.provincia && (
                <div className="flex  shadow-lg rounded-lg mt-1">
                  <div className=" bg-red-600 flex justify-center items-center  px-2 rounded-tr-3xl rounded-lg"></div>

                  <div className="flex flex-col p-2  rounded-tr-lg rounded-br-lg">
                    <h2 className="font-semibold text-red-100">
                      {errors.provincia.message}
                    </h2>
                    <p className="text-gray-700"></p>
                  </div>
                </div>
              )}

            </div>  */}
              
              <div>
              <label htmlFor="ciudad" className="text-white">
                Ciudad *
              </label>
              <input
                {...register("ciudad", {
                  required: {
                    value: true,
                    message: "Este campo es requerido.!",
                  },
                  minLength: {
                    value: 2,
                    message: "Minimo 2 caracteres!",
                  },
                  maxLength: {
                    value: 10,
                    message: "A superado el maximo de 10 caracteres!",
                  },
                 
                })}
                type="text"
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-500"
                placeholder="Ciudad"
              />
              {errors.ciudad && (
                <div className="flex  shadow-lg rounded-lg mt-1">
                  <div className=" bg-red-600 flex justify-center items-center  px-2 rounded-tr-3xl rounded-lg"></div>

                  <div className="flex flex-col p-2  rounded-tr-lg rounded-br-lg">
                    <h2 className="font-semibold text-red-100">
                      {errors.ciudad.message}
                    </h2>
                    <p className="text-gray-700"></p>
                  </div>
                </div>
              )}

            </div>
            
            {/* <div>
              <label htmlFor="ciudad" className="text-gray-200">
                Ciudad *
              </label>
              <select
                {...register("ciudad", {
                  required: {
                    value: true,
                    message: "Seleccione una ciudad",
                  },
                })}
               
                className="w-full py-2 px-4  border rounded-full mt-2 outline-none focus:border-indigo-400"
                placeholder="Eliga una ciudad"
              >
                <option value={""}>Selecione una ciudad</option>
                {ciudades.map((ciudad) => (
                  <option key={ciudad.id} value={ciudad.id}>
                    {ciudad.nombre}
                  </option>
                ))}
              </select>
              {errors.ciudad && (
                <div className="flex  shadow-lg rounded-lg mt-1">
                  <div className=" bg-red-600 flex justify-center items-center  px-2 rounded-tr-3xl rounded-lg"></div>

                  <div className="flex flex-col p-2  rounded-tr-lg rounded-br-lg">
                    <h2 className="font-semibold text-red-100">
                      {errors.ciudad.message}
                    </h2>
                    <p className="text-gray-700"></p>
                  </div>
                </div>
              )}

            </div>  */}
                       
            
            <div className="mt-4 order-1 md:order-2">
              <button
                type="submit"
                className="w-72 bg-indigo-700 p-2 rounded-full text-white text-lg hover:bg-indigo-800 transition-colors"
              >
                Agregar lugar de entrega
              </button>
            </div>
            {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
          </form>
          </div>
        </div>
        {/* <!-- Imagen de fondo --> */}
        <div className="bg hidden lg:block"></div>
       
      </div>
    <Footer />
    </>
  );
}
