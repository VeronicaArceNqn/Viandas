import React, { useEffect, useContext, useState} from 'react'
import { GlobalContext } from "../context/GlobalContext";
import { NavLink, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";


const CardViandero = ({ vianderoId }) => {

  const { SERVER } = useContext(GlobalContext);
 
  const [viandero, setViandero] = useState();
  //console.log("vianderoId: ", vianderoId)
  //console.log("vianderoServer:", `${SERVER}viandero/${vianderoId}`)


  useEffect(() => {
    if (!vianderoId) {
      console.error("El ID del viandero no está definido.");
      return;
    }
    console.log("vianderoServer:")
    console.log("vianderoServer:", `${SERVER}viandero/${vianderoId}`)

    const fetchVianderoData = async () => {
      try {
        const response = await axios.get(`${SERVER}viandero/${vianderoId}`);

        if (response.data && response.data.vianderos) {
          setViandero(response.data.vianderos);
        } else {
          throw new Error('Respuesta del servidor inesperada o sin datos');
        }
      } catch (error) {
        console.error('Error al obtener datos del viandero:', error.message);
        // Aquí podrías mostrar un mensaje de error al usuario o realizar otra acción
      }
    };

    fetchVianderoData();
  }, [SERVER, vianderoId]);

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
        
            {/* <h1 className="text-2xl font-bold mb-8">Recommended project</h1> */}
            <div className="bg-gray-200 p-4 rounded-xl shadow-2xl mb-2 flex flex-col gap-2">
              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
                <div className="flex items-center gap-4 p-3 ">
                  <span
                    src=""
                    className="w-14 h-14 object-cover rounded-full  bg-indigo-100"
                  ><svg class="h-14 w-14 text-purple-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />  <path d="M4 16v2a2 2 0 0 0 2 2h2" />  <path d="M16 4h2a2 2 0 0 1 2 2v2" />  <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />  <line x1="9" y1="10" x2="9.01" y2="10" />  <line x1="15" y1="10" x2="15.01" y2="10" />  <path d="M9.5 15a3.5 3.5 0 0 0 5 0" /></svg></span>
                  <div>
                    <h3 className="text-2xl font-bold ">Espacio en construcción - trae datos de mi calificación  </h3>
                    {/* <p className="text-gray-500">Updated 10m ago</p> */}
                   
                  </div>
                </div>
                
              </div>
              <div className=" rounded">
                {/* <h5 className="text-lg font-bold">
                Descripción
                </h5> */}

                <p className="text-gray-600 text-center mt-4">
                <span className="text-lg font-bold ">Comentario </span> <span className="text-md text-green-700 uppercase "></span> 
                </p>
              </div>
              <div className="bg-primary-100/10 bg-indigo-200  flex flex-col md:flex-row items-center justify-between py-4 px-8 rounded-lg">
                
                <div>
                  {/* <span className="border border-primary-100 text-primary-100 py-2 px-4 rounded-full">
                    Full time
                  </span> */}
                </div>
              </div>
            </div>
            
      </div>

     );
};

export default CardViandero;