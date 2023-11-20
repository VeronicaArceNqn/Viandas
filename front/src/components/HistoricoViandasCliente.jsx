import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import SidebarCliente from "./SidebarCliente";
import axios from "axios";

import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { GlobalContext } from "../context/GlobalContext";
import CardTableHistPedCliente from "./CardTableHistPedCliente";

const HistoricoViandasCliente = () => {
  const { user, SERVER } = useContext(GlobalContext);
  const [histViandasCliente, setHistViandasCliente] = useState([]);

  const [fechaHoy, setFechaHoy] = useState("");
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchHistViandasCliente  = async () => {
      try {
        // const hoy = new Date();
        // // Formatear la fecha como 'YYYY-MM-DD'
        // const fecha = hoy.toISOString().split('T')[0];
        
        // // Establecer la fecha en el estado
        // setFechaHoy(fecha);
        
        //console.log(`${SERVER}pedido/user/${user.user.id}`);
        const res = await axios.get(`${SERVER}pedido/user/${user.user.id}`);
        
        //console.log("res data:", res.data);
        
        // if (res.data === null || res.data.mensaje) {
        //   throw new Error("Error en la respuesta del servidor");
        // }

        if(res.data && res.data.pedidos){


        
  
        setHistViandasCliente(res.data.pedidos);
        //onsole.log("res histViandasCliente:", histViandasCliente);
        setLoading(false); // Se ha completado la carga de datos
        }else{
          throw new Error ("No se encontraron datos de pedidos")
        }

      } catch (error) {
        console.error("Error al obtener histViandasCliente:", error.message);
        setLoading(false); // Manejar el error y actualizar el estado de carga
      }
    };
  
    fetchHistViandasCliente ();
  }, [SERVER]);
  
  // useEffect(() => {
  //   console.log("histViandasCliente actualizado:", histViandasCliente);
  // }, [histViandasCliente]);

 

  return (
    <>
      <Nav />     
        <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">       
          <SidebarCliente />        
            <div className="lg:col-span-3 xl:col-span-5 p-8 h-[100vh] overflow-y-scroll bg-gray-700 dark:bg-gray-400">                                
              <section className="grid grid-cols-1 mt-6 gap-8">
              <div class="col-span-12">
    <div class="bg-white overflow-auto lg:overflow-visible p-3 rounded-xl shadow-2xl mb-2 flex flex-col gap-8">
      <div class="bg-white flex lg:justify-between border-b-2 border-fuchsia-900 pb-1">
        <h2 class="text-2xl text-gray-500 font-bold">Histórico de viandas consumidas</h2></div>


                
                      {loading ? (
                <div>Cargando...</div>
              ) : (
                 
                histViandasCliente.length > 0 ? (
                  histViandasCliente.map(pedidos => {
                  
                    if (pedidos && pedidos.id && pedidos.user_id){ 
                    return (
                      <CardTableHistPedCliente 
                        key={pedidos.id} 
                        user_id={pedidos.user_id}
                        id={pedidos.id}
                      />
                    );
                  }else{
                    console.error("Estructura incorrecta en el pedido:", pedidos);
                    return null;
                  }
                  })
                ) : (
                  
                  <div>No hay viandas para mostrar.</div>
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
    
    export default HistoricoViandasCliente;

  