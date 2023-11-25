import React, { useContext, useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";

function CardPedidoCliente ({id, user_id}){
    const { SERVER } = useContext(GlobalContext);
    const [pedidoVianda, setPedidoVianda] = useState([]);
    const [vianda, setVianda] = useState([]);
    const [lugarEntrega, setLugarEntrega] = useState({});
    const [estadoVianda, setEstadoVianda] = useState({});

    //const [fechaHoy, setFechaHoy] = useState("");
        //console.log("pedido-id: ", id)

        const hoy = new Date();
        // Formatear la fecha como 'YYYY-MM-DD'
        const fecha = hoy.toISOString().split('T')[0];
        console.log("fecha: ", fecha)
        
        // Establecer la fecha en el estado
        //setFechaHoy(fecha);

    const fetchPedidoVianda = async () => {
        await axios.get(`${SERVER}porPedidoVianda/${id}`)
          .then((res) => {
           console.log(res.data);   

          if (Array.isArray(res.data?.pedidoVianda)) {
        setPedidoVianda(res.data.pedidoVianda);
      } else {
        console.log("El resultado no es un array válido");
        // Manejar el caso en que res.data no es un array
      }
        });
      };
      

      useEffect(() => {
        fetchPedidoVianda();
        // fetchLugarEntrega(),
        // fetchEstadoVianda();        
      }, []);

      const pedidoHoy = pedidoVianda.filter((pedido) => pedido.fechaEntrega === fecha);

           
return (
    <>
                
         {pedidoHoy.map((pedido, index) => (
          <div key={index}>Pedido: {id}
        
             <div className="grid grid-cols-1 xl:grid-cols-4 items-center mb-1 p-1 bg-purple-100">
                <div className="col-span-2 flex items-center gap-4"> 
                  {/* <img
                    src={pedido.vianda.urlFoto}
                    className="w-14 h-14 object-cover rounded-xl"
                  />  */}
                  {/* <h3>pedidoVianda id: {pedido.id}</h3> */}
                  <div> 
                    <h3 className="font-bold">{pedido.vianda.nombre}</h3>
                    <p className="text-gray-500">Cantidad: {pedido.cantidad}</p>
                    </div>
                  <div>
                   
                  
                    <h3 className="font-bold">{pedido.lugar_entrega.nombreLugar}</h3> 
                    
                     <p className="text-gray-500">{pedido.lugar_entrega.calle} {pedido.lugar_entrega.nroCalle} </p>
                  </div>               
                  
                </div>
                <div className="col-span-1 flex items-center gap-4">
                  <button className="bg-green-200 text-green-800 py-1 px-3 rounded-full font-medium"> VER
                  {/* {pedido?.estadoActual?.estadoActual?.nombreEstado} */}

                  </button>
                 
                </div>
                <div>
                    <span className="font-bold">$ {pedido.precio}</span>
                  </div>
              </div>
                

            </div>
          ))}
           
       
    </>
  )
}

export default CardPedidoCliente;
