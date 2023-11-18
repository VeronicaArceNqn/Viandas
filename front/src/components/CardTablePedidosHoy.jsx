import React, { useContext, useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";

function CardPedidoCliente ({id, vianda_id, fechaEntrega, cantidad, precio, lugarEntrega_id}){
    const { SERVER } = useContext(GlobalContext);
    const [vianda, setVianda] = useState([]);
    const [lugarEntrega, setLugarEntrega] = useState({});
    const [estadoVianda, setEstadoVianda] = useState({});
    const fetchVianda = async () => {
        await axios.get(`${SERVER}viandas/${vianda_id}`)
          .then((res) => {
           console.log(res.data);           
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
           console.log(res.data); 
           console.log("res Lugar de entrega:", res);
          if (res.data===null || res.data.mensaje){
            console.log("hola");           
          }else{
            setLugarEntrega(res.data);
          }
        });
      };

      const fetchEstadoVianda = async () => {
        await axios.get(`${SERVER}estadoVianda/obtenerEstado/${id}`)
          .then((res) => {
           console.log(res.data); 
           console.log("res estado actual:", res);
          if (res.data===null || res.data.mensaje){
            console.log("hola");           
          }else{
            setEstadoVianda(res.data);
          }
        });
      };

      useEffect(() => {
        fetchVianda(),
        fetchLugarEntrega(),
        fetchEstadoVianda();        
      }, []);
           
return (
    <>   

  <div class="col-span-12">
    <div class="overflow-auto lg:overflow-visible">      
        
      </div> 
      <table class="table text-gray-400 border-separate space-y-6 text-sm">
        <thead class="bg-indigo-500 text-white">
          <tr>
            <th class="p-3">Vianda</th>
            <th class="p-3 text-left">Cantidad</th>
            <th class="p-3 text-left">Entrega</th>
            <th class="p-3 text-left">Precio</th>

            <th class="p-3 text-left">Estado</th>
            <th class="p-3 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
      
          <tr class="bg-gray-200 text-black">
            <td class="p-3 font-medium capitalize">{vianda.nombre}</td>
            <td class="p-3">{cantidad}</td>
            <td class="p-3">{lugarEntrega.calle} {lugarEntrega.nroCalle} ({lugarEntrega.nombreLugar})</td>
            <td class="p-3 uppercase">${precio}</td>

            <td class="p-3">
              <span class="bg-green-400 text-gray-50 rounded-md px-2"
                >{estadoVianda?.estadoActual?.nombreEstado}</span
              >
            </td>
            <td class="p-3">
              <a href="#" class="text-gray-500 hover:text-gray-100 mr-2">
                <i class="material-icons-outlined text-base">visibility</i>
              </a>
              <a href="#" class="text-yellow-400 hover:text-gray-100 mx-2">
                <i class="material-icons-outlined text-base">edit</i>
              </a>
              <a
                href="#"
                class="text-red-400 hover:text-gray-100 ml-2"
              >
                <i class="material-icons-round text-base">delete_outline</i>
              </a>
            </td>
          </tr>
       
            
        </tbody>
      </table>
    </div>
 
{/* </div> */}


   
    </>
  )
}

export default CardPedidoCliente;
