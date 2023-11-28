import React, { useEffect, useContext, useState} from 'react'
import { GlobalContext } from "../context/GlobalContext";
import { NavLink, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import Nav from "./Nav";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import PerfilViandero2Editar from "./PerfilViandero2Editar";

const PerfilViandero2 = () => {

  const {viandero, user, SERVER, getViandero} = useContext(GlobalContext);
  const [editing, setEditing] = useState(false);
 
  //const [viandero, setViandero] = useState();
  console.log("viandero: ", viandero)
  console.log("user: ", user)
  // console.log("vianderoServer:", `${SERVER}viandero/${viandero}`)

  const handleEditClick = () => {
    setEditing(true);
  }
  const handleSaveClick = async () => {
    // ... Lógica de guardado de datos en el servidor ...

    try {
      // Realizar la solicitud PUT al servidor para actualizar los datos del viandero
      await axios.put(`${SERVER}viandero/${formData.id}`, formData);
      
      // Obtener los datos actualizados del viandero después de la edición
      await getViandero();

      // Cerrar la edición
      setEditing(false);
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };



  // useEffect(() => {
  //   if (!viandero) {
  //     console.error("El ID del viandero no está definido.");
  //     return;
  //   }
  //   // console.log("vianderoServer:")
  //   console.log("vianderoServer:", `${SERVER}viandero/${viandero}`)

  //   const fetchVianderoData = async () => {
  //     try {
  //       const response = await axios.get(`${SERVER}viandero/${viandero}`);

  //       if (response.data && response.data.vianderos) {
  //         setViandero(response.data.vianderos);
  //       } else {
  //         throw new Error('Respuesta del servidor inesperada o sin datos');
  //       }
  //     } catch (error) {
  //       console.error('Error al obtener datos del viandero:', error.message);
  //       // Aquí podrías mostrar un mensaje de error al usuario o realizar otra acción
  //     }
  //   };

  //   fetchVianderoData();
  // }, [SERVER, vianderoId]);

  if (!viandero) {
    return <div>Cargando...</div>;
  }



      // axios.get(`${SERVER}viandero/${vianderoId}`)
      //     .then((res) => {
      //       console.log("res", res.data)
      //       if (res.data && res.data.vianderos) {
      //         setViandero(res.data.vianderos);
            
      //     } else {
      //       throw new Error("No se encontraron datos para el viandero");
      //     }             

      //         })
      //         .catch((error) => {
      //             console.error("Error al obtener datos al viandero:", error.message);
      //         });
      // }, [SERVER, vianderoId]);


  return (
      <div>
         <Nav />
      
      <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen  dark:bg-gray-400 text-black">
        <Sidebar />
          <div className="lg:col-span-3 xl:col-span-5 p-8 h-[100vh] overflow-y-scroll bg-gray-700 dark:bg-gray-400"> 
        
            {/* <h1 className="text-2xl font-bold mb-8">Recommended project</h1> */}
            <div className="bg-gray-200 p-4 rounded-xl shadow-2xl mb-2 flex flex-col gap-8">
              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
                <div className="flex items-center gap-4 p-3 ">
                  <span
                    src=""
                    className="w-14 h-14 object-cover rounded-full  bg-indigo-100"
                  ><svg class="h-14 w-14 text-purple-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />  <path d="M4 16v2a2 2 0 0 0 2 2h2" />  <path d="M16 4h2a2 2 0 0 1 2 2v2" />  <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />  <line x1="9" y1="10" x2="9.01" y2="10" />  <line x1="15" y1="10" x2="15.01" y2="10" />  <path d="M9.5 15a3.5 3.5 0 0 0 5 0" /></svg></span>
                  <div>
                    <h3 className="text-2xl font-bold ">{user.user.nombre} {user.user.apellido} 
                    
                  </h3>
                    {/* <p className="text-gray-500">Updated 10m ago</p> */}
                   
                  </div>
                </div>
                
              </div>
              <div className=" rounded">
                {/* <h5 className="text-lg font-bold">
                Descripción
                </h5> */}
                <p className="text-gray-600 text-left">
                {viandero.descripcion}
                </p>
                <p className="text-gray-600 text-center mt-4">
                <span className="text-lg font-bold ">Formas de pago: </span> <span className="text-md text-green-700 uppercase ">{viandero.descripPago}</span> 
                </p>
              </div>
              <div className="bg-primary-100/10 bg-indigo-200  flex flex-col md:flex-row items-center justify-between gap-4 py-4 px-4 rounded-lg">
                <div>
                  <span className="">Email: {user.user.email}</span> - 
                  <span className="m-2">Teléfono: {user.user.telefono}</span>
                  {/* <span className="text-sm text-gray-500">Descripción: </span>
                </div>
                <div>
                  {/* <span className="border border-primary-100 text-primary-100 py-2 px-4 rounded-full">
                    Full time
                  </span> */}
                </div>
              </div>
              {viandero?( 
                <div>  
                  {editing ? (
                    <PerfilViandero2Editar viandero={viandero} setEditing={setEditing} />
                    ) : (
                      <button
                        className="text-white w-52 bg-indigo-700 p-2 rounded-full hover:bg-indigo-800 m-5 transition-colors"
                        onClick={handleEditClick}
                      >
                        Editar mi perfil de viandero
                      </button>
                    )}           
                </div>
                ) : (
                  ""
                  )}
              


            </div>
            

            
      </div>
      </div>
      </div>

     );
};

export default PerfilViandero2;