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
  const hoy = new Date();
        // Formatear la fecha como 'YYYY-MM-DD'
        const fecha = hoy.toISOString().split('T')[0];

  useEffect(() => {
    fetchPedidoViandaHoy()
  },[])
  //--  
  const fetchPedidoViandaHoy = async () => {
    await axios.get(`${SERVER}pedido/user/${user.user.id}`)
      .then((res) => {
      console.log("pedidos ", res.data);
       setPedidosViandaHoy(res.data.pedidos);//cargo todas las viandas
    });
  };

  return (
    <>
      <Nav />     
        <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen dark:bg-gray-400 text-black">       
          <SidebarCliente />        

            <div className="lg:col-span-3 xl:col-span-5 p-8 h-[100vh] overflow-y-scroll bg-gray-700 dark:bg-gray-400">                                

              <section className="grid grid-cols-1 mt-10 gap-8">
                <div>
                  <h1 className="text-2xl font-bold text-white mb-8">Mi pedido de hoy </h1>
                    <div className="bg-white p-4 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">{fecha }
                    
                    
                            {/* <h1 className="text-indigo-600 font-bold">{fechaHoy}</h1> */}

                            {pedidosViandaHoy.map(pedidos => (
                              
                                  <CardPedidoCliente 
                                  key={pedidos.id} 
                                  user_id={pedidos.user_id}                                 
                                  id={pedidos.id}
                                />
                                ))}
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

  