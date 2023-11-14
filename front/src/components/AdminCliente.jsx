import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import SidebarCliente from "./SidebarCliente";
import axios from "axios";

import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { GlobalContext } from "../context/GlobalContext";
import CardPedidoCliente from "./CardPedidoCliente";

const AdminCliente = () => {
  const { user, SERVER } = useContext(GlobalContext);
  const [pedidosViandaHoy, setPedidosViandaHoy] = useState([]);

  const [fechaHoy, setFechaHoy] = useState("");
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchPedidoViandaHoy  = async () => {
      try {
        const hoy = new Date();
        // Formatear la fecha como 'YYYY-MM-DD'
        const fecha = hoy.toISOString().split('T')[0];
        
        // Establecer la fecha en el estado
        setFechaHoy(fecha);
        
        //console.log(`${SERVER}porFecha?fecha=${fecha}`);
        const res = await axios.get(`${SERVER}porFecha?fecha=${fecha}`);
        
        //console.log("res data:", res.data);
        
        if (res.data === null || res.data.mensaje) {
          throw new Error("Error en la respuesta del servidor");
        }
  
        setPedidosViandaHoy(res.data);
        //console.log("res pedidosViandaHoy:", pedidosViandaHoy);
        setLoading(false); // Se ha completado la carga de datos
      } catch (error) {
        //console.error("Error al obtener pedidosViandaHoy:", error.message);
        setLoading(false); // Manejar el error y actualizar el estado de carga
      }
    };
  
    fetchPedidoViandaHoy ();
  }, [SERVER]);
  
  useEffect(() => {
    //console.log("pedidosViandaHoy actualizado:", pedidosViandaHoy);
  }, [pedidosViandaHoy]);

 

  return (
    <>
      <Nav />     
        <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen dark:bg-gray-400 text-black">       
          <SidebarCliente />        
            <div className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll bg-gray-700 dark:bg-gray-400">                                
              <section className="grid grid-cols-1 mt-10 gap-8">
                <div>
                  <h1 className="text-2xl font-bold text-white mb-8">Mi pedido de hoy </h1>
                    <div className="bg-white p-4 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
                    
                    
                            <h1 className="text-indigo-600 font-bold">{fechaHoy}</h1>
                            {loading ? (
                                  <div>Cargando...</div>
                                ) : (
                                  Array.isArray(pedidosViandaHoy.pedido_viandas) && pedidosViandaHoy.pedido_viandas.length > 0 ? (
                                    pedidosViandaHoy.pedido_viandas.map(pedidoVianda => {
                                      
                                      return (
                                        <CardPedidoCliente 
                                          key={pedidoVianda.id} 
                                          cantidad={pedidoVianda.cantidad}
                                          precio={pedidoVianda.precio}
                                          fechaEntrega={pedidoVianda.fechaEntrega}
                                          vianda_id={pedidoVianda.vianda_id}
                                          lugarEntrega_id={pedidoVianda.lugarEntrega_id}
                                          id={pedidoVianda.id}
                                        />
                                      );
                                    })
                                  ) : (
                                    <div>No hay pedidos para mostrar.</div>
                                  )
                                )} 
                           
                                    
                    </div>         
                </div>        
              </section>
            </div>
        </div>
      <Footer />
      <div className="  mt-10 flex flex-wrap justify-evenly duration-300 gap-5 lg:gap-4 w-full lg:px-5"></div>
      </>
      );
    };
    
    export default AdminCliente;

  