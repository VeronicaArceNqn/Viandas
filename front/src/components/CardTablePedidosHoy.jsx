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

    {/* <div className="grid grid-cols-1 xl:grid-cols-4 items-center mb-1 p-1 bg-purple-50">
                <div className="col-span-2 flex items-center gap-4"> 
                  <img
                    src={vianda.urlFoto}
                    className="w-14 h-14 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="font-bold">{vianda.nombre}</h3>
                    <p className="text-gray-500">Cantidad: {cantidad}</p>
                    <p className="text-gray-500">Entrega: {lugarEntrega.calle} {lugarEntrega.nroCalle} ({lugarEntrega.nombreLugar})</p>
                  </div>
                </div>
                <div className="col-span-1 flex items-center gap-4">
                  <button className="bg-green-100 text-green-800 py-1 px-3 rounded-full font-medium">
                    {estadoVianda.estadoActual.nombreEstado}
                  </button>
                 
                </div>
                <div>
                  <span className="font-bold">$ {precio}</span>
                </div>
              </div>
              <div class="flex items-center justify-center min-h-screen bg-white"> */}

  <div class="col-span-12">
    <div class="overflow-auto lg:overflow-visible">
      
        
        {/* <div class="text-center flex-auto">
          <input
            type="text"
            name="name"
            placeholder="Search..."
            class="
              w-1/3
              py-2
              border-b-2 border-blue-600
              outline-none
              focus:border-yellow-400
            "
          />
        </div> */}

        {/* <div>
          <a href="#">
            <button
              class="
                bg-blue-500
                hover:bg-blue-700
                text-white
                py-1
                px-3
                sm
                rounded-full
              "
            >
              All
            </button>
          </a>
          <a href="#">
            <button
              class="
                bg-blue-500
                hover:bg-blue-700
                text-white
                py-1
                px-3
                sm
                rounded-full
              "
            >
              Admin
            </button>
          </a>
          <a href="#">
            <button
              class="
                bg-blue-500
                hover:bg-blue-700
                text-white
                py-1
                px-3
                sm
                rounded-full
              "
            >
              User
            </button></a
          >
        </div>*/}
      </div> 
      <table class="table text-gray-400 border-separate space-y-6 text-sm">
        <thead class="bg-indigo-500 text-white">
          <tr>
            <th class="p-3">Vianda</th>
            <th class="p-3 text-left">Cantidad</th>
            <th class="p-3 text-left">Entrega</th>
            <th class="p-3 text-left">Precio</th>

            {/* <th class="p-3 text-left">Status</th> */}
            <th class="p-3 text-left">Accion</th>
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
                >{estadoVianda.estadoActual.nombreEstado}</span
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
