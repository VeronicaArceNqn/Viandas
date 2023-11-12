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
    const {user,  SERVER } = useContext(GlobalContext);
  

const [pedido, setPedido] = useState([]);

const fetchPedido = async () => {
  await axios.get(`${SERVER}pedido/user/${user.user.id}`)
    .then((res) => {
     console.log(res.data);
     console.log(res)
    if (res.data===null || res.data.mensaje){
      console.log("sin lugares");
      navigate("/");
    }else{
      setPedido(res.data);
    }
  });
};
useEffect(() => {
  fetchPedido();
  console.log("lugar???");
}, []);

console.log(pedido)


  return (
    <>
      <Nav />     
        <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">       
          <SidebarCliente />        
            <div className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll bg-gray-700 dark:bg-gray-400">                                
              <section className="grid grid-cols-1 mt-10 gap-8">
                <div>
                  <h1 className="text-2xl font-bold text-white mb-8">Mi pedido de hoy</h1>
                    <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">

                      {pedido.length > 0 ? (                 
                        pedido.map((pedidoVianda) => (                   
                              
                              <CardPedidoCliente
                                key={pedidoVianda.id}
                                vianda_id={pedidoVianda.vianda_id}
                                pedido_id={pedidoVianda.pedido_id}
                                cantidad={pedidoVianda.cantidad}
                                precio={pedidoVianda.precio}
                                id={pedidoVianda.id}                        
                              />                    
                            )
                            )
                            ) : (
                              <div></div>
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
