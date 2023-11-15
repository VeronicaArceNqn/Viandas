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

    <div className="grid grid-cols-1 xl:grid-cols-4 items-center mb-1 p-1 bg-purple-100">
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
                  <button className="bg-green-200 text-green-800 py-1 px-3 rounded-full font-medium">
                    {estadoVianda?.estadoActual?.nombreEstado}
                  </button>
                 
                </div>
                <div>
                  <span className="font-bold">$ {precio}</span>
                </div>
              </div>



   
    </>
  )
}

export default CardPedidoCliente;
