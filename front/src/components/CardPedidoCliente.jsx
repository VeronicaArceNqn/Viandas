import React, { useContext, useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";

function CardPedidoCliente ({id, vianda_id, fechaEntrega, cantidad, precio}){
    const { SERVER } = useContext(GlobalContext);
    const [vianda, setVianda, estadoVianda, setEstadoVianda] = useState([]);
    const fetchVianda = async () => {
        await axios.get(`${SERVER}viandas/${vianda_id}`)
          .then((res) => {
           //console.log(res.data);           
          if (res.data===null || res.data.mensaje){
            console.log("");           
          }else{
            setVianda(res.data);
          }
        });
      };
      const fetchEstadoVianda = async () => {
        await axios.get(`${SERVER}viandas/${vianda_id}`)
          .then((res) => {
           //console.log(res.data);           
          if (res.data===null || res.data.mensaje){
            console.log("");           
          }else{
            setEstadoVianda(res.data);
          }
        });
      };

      useEffect(() => {
        fetchVianda();        
      }, []);
           
return (
    <>

    <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-1 mb-4 p-4 bg-purple-50">
                <div className="col-span-2 flex items-center gap-4"> 
                  <img
                    src={vianda.urlFoto}
                    className="w-14 h-14 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="font-bold">{vianda.nombre}</h3>
                    <p className="text-gray-500">Cantidad: {cantidad}</p>
                  </div>
                </div>
                <div>
                  <span className="bg-green-100 text-green-800 py-1 px-3 rounded-full font-medium">
                    Estado
                  </span>
                 
                </div>
                <div>
                  <span className="font-bold">$ {precio}</span>
                </div>
              </div>



   
    </>
  )
}

export default CardPedidoCliente;
