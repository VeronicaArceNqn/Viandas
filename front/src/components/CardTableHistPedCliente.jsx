import React, { useContext, useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";
import CardViandero from "./CardViandero";

function CardTableHistPedCliente ({id, user_id }){
    
    const { SERVER } = useContext(GlobalContext);
    const [pedidoVianda, setPedidoVianda] = useState([]);
    const [viandero, setViandero] = useState([]);

    useEffect(() => {
        axios.get(`${SERVER}porPedidoVianda/${id}`)
            .then((res) => {

                // if (res.data && Array.isArray(res.data.pedidoVianda)) {
                //     setPedidoVianda(res.data.pedidoVianda);
                //     const vianderoIds = res.data.pedidoVianda.map(pedido => pedido.vianda_id);
            
                //     vianderoIds.forEach(viandaId => {
                //       axios.get(`${SERVER}viandas/${viandaId}`)
                //         .then((viandaRes) => {
                //           if (viandaRes.data) {

                //             const vianderoId = viandaRes.data.viandero_id;
                            
                //             axios.get(`${SERVER}viandero/${vianderoId}`)
                //               .then((secondRes) => {
                //                 console.log("secondRes", secondRes.data)
                //                 if (secondRes.data) {
                //                     setViandero(res.data.Viandero);
                                  
                //                 } else {
                //                   throw new Error("No se encontraron datos para el viandero");
                //                 }
                //               })
                //               .catch((secondError) => {
                //                 console.error("Error al obtener datos del viandero:", secondError.message);
                //               });
                //           } else {
                //             throw new Error("No se encontraron datos para la vianda");
                //           }
                //         })
                //         .catch((viandaError) => {
                //           console.error("Error al obtener datos de la vianda:", viandaError.message);
                //         });
                //     });
                //   } else {
                //     throw new Error("No se encontraron datos para el pedido");
                //   }
               

                if (res.data && Array.isArray(res.data.pedidoVianda)) {
                    setPedidoVianda(res.data.pedidoVianda);
                    // const vianderoId = res.data.pedidoVianda.vianda.viandero.id;
                    // // console.log("viandero: ", vianderoId )
                    // // console.log("vianderoServer: ", `${SERVER}viandero/${vianderoId}`)
                    // axios.get(`${SERVER}viandero/${vianderoId}`)
                    //     .then((secondRes)=> {
                    //         if (secondRes) {
                    //             setViandero(res.data.Viandero);
                    //         }else{
                    //             throw new Error ("No se encontraron datos para el viandero")
                    //         }
                    //     })
                    //     .catch((secondError) => {
                    //         console.error("Error al obtener datos del viandero: ", secondError.messaje);
                    //     });
                } else {
                    throw new Error("No se encontraron datos para el pedido");
                }
            })
            .catch((error) => {
                console.error("Error al obtener datos del pedido:", error.message);
            });
    }, [SERVER, id]);

    const [showPopup, setShowPopup] = useState(false);
    const [selectedVianderoId, setSelectedVianderoId] = useState(null);
    
    const handleOpenPopup = (vianderoId) => {
      setSelectedVianderoId(vianderoId);
      setShowPopup(true);
    };
    
    const handleClosePopup = () => {
      setShowPopup(false);
      setSelectedVianderoId(null);
    };
    


           
return (
    <>
  <div class="col-span-12 ">
    <div class="overflow-auto lg:overflow-visible">
      
      </div>      
        <div className="col-span-6 rounded "> 
        <div className="col-span-6 bg-purple-300 text-left font-bold pl-3" ><span>Pedido {id}</span></div>
        
          <table class="table w-full border-separate space-y-6 text-sm">
        
        <thead class="bg-indigo-500 text-dark">
           
          <tr>
            <th class="p-1">Vianda</th>
            <th class="p-1 text-center">Foto</th>
            <th class="p-1 text-center">Vianda</th>
            <th class="p-1 text-center">Precio</th>

            <th class="p-1 text-center">Fecha</th>
            <th class="p-1 text-center">Viandero</th>
            <th class="p-1 text-center">Calificar</th>
          </tr>
        </thead>
        <tbody>
        {pedidoVianda.map((item, index) => (
          <tr class="bg-gray-200 text-black">
            <td class="font-medium capitalize">{item.vianda.id}</td>
            <td class="p-1"><img
                    src={`http://localhost:8000${item.vianda.urlFoto}`}
                    className="w-14 h-14 object-cover rounded-xl"
                  /></td>
            <td class="p-2">{item.vianda.nombre}</td>
            <td class="p-2 uppercase">${item.precio}</td>

            <td class="p-2">{item.fechaEntrega}
              {/* <span class="bg-green-400 text-gray-50 rounded-md px-2"
                ></span
              > */}
            </td>
            <td class="p-1 uppercase "> <button className="bg-white p-1" onClick={() => handleOpenPopup(item.vianda.viandero_id)}><svg class="h-6 w-6 text-purple-700"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />  <path d="M4 16v2a2 2 0 0 0 2 2h2" />  <path d="M16 4h2a2 2 0 0 1 2 2v2" />  <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />  <line x1="9" y1="10" x2="9.01" y2="10" />  <line x1="15" y1="10" x2="15.01" y2="10" />  <path d="M9.5 15a3.5 3.5 0 0 0 5 0" /></svg></button></td>
            <td class="p-3">
            
            <svg class="h-5 w-5 text-yellow-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
</svg>
              




              {/* <a href="#" class="text-gray-500 hover:text-gray-100 mr-2">
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
              </a> */}
            </td>
          </tr>      
        ))}   
        </tbody>
      </table>
        </div>
    
     
    </div>
    
    {showPopup && (
  <div className="popup">
    <div className="popup_inner">
      <CardViandero vianderoId={selectedVianderoId} />
      <button className="bg-indigo-600 p-1 text-white w-64" onClick={handleClosePopup}>Cerrar</button>
    </div>
  </div>
)}
    </>
  )
}

export default CardTableHistPedCliente;
