import React, { useContext, useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { RiThumbUpFill, RiEBike2Fill, RiCommunityFill, RiVerifiedBadgeFill, RiCloseFill } from "react-icons/ri";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";

function CardPedidoCliente ({id, vianda_id, fechaEntrega, cantidad, precio, lugarEntrega_id}){
    const { SERVER } = useContext(GlobalContext);
    const [vianda, setVianda] = useState([]);
    const [lugarEntrega, setLugarEntrega] = useState({});
    const [estadoVianda, setEstadoVianda] = useState({});
    //const [estadoId, setEstadoId] = useState();

    const cambiarEstado = async (estadoId) => {
      try {
        // Llamada a la API para cambiar el estado
        const response = await axios.post(`${SERVER}estadoVianda`, {
          pedidoVianda_id: id,
          estado_id: estadoId,
        });
  
        const data = response.data;
        console.log(data); // Puedes hacer algo con la respuesta, como mostrar un mensaje de éxito
        // Actualizar el estadoVianda después de cambiar el estado
        fetchEstadoVianda();
      } catch (error) {
        console.error('Error al cambiar el estado:', error);
        // Manejar errores o mostrar un mensaje de error
      }
    };


    const fetchVianda = async () => {
        await axios.get(`${SERVER}viandas/${vianda_id}`)
          .then((res) => {
           console.log("viandaHoy",res.data);           
          if (res.data===null || res.data.mensaje){
            console.log("");           
          }else{
            setVianda(res.data);
          }
        });
      };
      const fetchLugarEntrega = async () => {
        await axios.get(`${SERVER}lugarEntrega/${lugarEntrega_id}`)
          .then((res) => {
           //console.log(res.data); 
           console.log("res Lugar de entrega:", res);
          if (res.data===null || res.data.mensaje){
            console.log("hola");           
          }else{
            setLugarEntrega(res.data);
          }
        });
      };

      const fetchEstadoVianda = async () => {
        try {
          console.log(`${SERVER}estadoVianda/obtenerEstado/${id}`)
          const response = await axios.get(`${SERVER}estadoVianda/obtenerEstado/${id}`);
          const data = response.data;
          console.log("estadosHoy", data);
          setEstadoVianda(data);
        } catch (error) {
          console.error('Error al obtener el estado de la vianda:', error);
        }
      };   

      useEffect(() => {
        fetchVianda(),
        fetchLugarEntrega(),
        fetchEstadoVianda();        
      }, []);
           
    



return (
    <>   

 
        <tbody>
      
          <tr class="bg-gray-200 text-black">
                <td class="p-2 font-medium capitalize">{vianda.nombre}</td>
                <td class="p-1">{cantidad}</td>
                <td class="p-2">{lugarEntrega.calle} {lugarEntrega.nroCalle} ({lugarEntrega.nombreLugar})</td>
                <td class="p-3 uppercase">${precio}</td>

                <td class="p-2">
                  <span class="bg-green-600 text-gray-50 rounded-md px-2"
                    >{estadoVianda?.estadoActual?.nombreEstado}</span>
                </td>

            <td className="">
              
                  <td className="">
                    <button
                      className="text-indigo-600 hover:text-gray-100 m-1"
                      onClick={() => {
                        //setEstadoId(2); // Cambiar el estado al hacer clic en este botón
                        cambiarEstado(2); // Llamar a la función para cambiar el estado con el valor correspondiente
                      }}
                      title="Confirmar"
                    >
                      <RiThumbUpFill className={`text-lg p-1 box-content rounded-xl`}/>
                    </button>
                  </td>
                  <td className="">
                    <button
                      className="text-red-600 hover:text-gray-100 m-1"
                      onClick={() => {
                        //setEstadoId(6); // Cambiar el estado al hacer clic en este botón
                        cambiarEstado(6); // Llamar a la función para cambiar el estado con el valor correspondiente
                      }}
                      title="Cancelada"
                    >
                      <RiCloseFill className={`text-lg p-1 box-content rounded-xl`}/>
                    </button>
                  </td>
               
               
                  <td>
                    <button
                      className="text-yellow-600 hover:text-gray-100 m-1"
                      onClick={() => {
                        //setEstadoId(3); // Cambiar el estado al hacer clic en este botón
                        cambiarEstado(3); // Llamar a la función para cambiar el estado con el valor correspondiente
                      }}
                      title="En camino"
                    >
                      <RiEBike2Fill className={`text-lg p-1 box-content rounded-xl`}/>
                    </button>
                  </td>

                  <td>
                    <button
                      className="text-yellow-600 hover:text-gray-100 m-1"
                      onClick={() => {
                        //setEstadoId(4); // Cambiar el estado al hacer clic en este botón
                        cambiarEstado(4); // Llamar a la función para cambiar el estado con el valor correspondiente
                      }}
                      title="En destino"
                    >
                      <RiCommunityFill className={`text-lg p-1 box-content rounded-xl`}/>
                    </button>
                  </td>
                  <td>
                    <button
                      className="text-green-700 hover:text-gray-100 m-1"
                      onClick={() => {
                        //setEstadoId(5); // Cambiar el estado al hacer clic en este botón
                        cambiarEstado(5); // Llamar a la función para cambiar el estado con el valor correspondiente
                      }}
                      title="Entregada"
                      >
                      <RiVerifiedBadgeFill className={`text-lg p-1 box-content rounded-xl`}/>
                    </button>
                  </td>
              
              </td>
          </tr>      
            
        </tbody>
        
    </>
  )
}

export default CardPedidoCliente;
