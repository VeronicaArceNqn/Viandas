import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import axios from "axios";

import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { GlobalContext } from "../context/GlobalContext";
import CardTablePedidosHoy from "./CardTablePedidosHoy";

const PedidosHoyViandero = () => {
  const { viandero, SERVER } = useContext(GlobalContext);
  const [pedidosViandaHoy, setPedidosViandaHoy] = useState([]);

  const [fechaHoy, setFechaHoy] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPedidoViandaHoy = async () => {
      try {
        const hoy = new Date();
        // Formatear la fecha como 'YYYY-MM-DD'
        const fecha = hoy.toISOString().split("T")[0];

        // Establecer la fecha en el estado
        setFechaHoy(fecha);

        console.log(`${SERVER}pedido-viandas/por-fecha-y-viandero`, {
          params: {
            fecha: fecha,
            viandero_id: viandero?.id,
          },
        });
        const res = await axios.get(
          `${SERVER}pedido-viandas/por-fecha-y-viandero`,
          {
            params: {
              fecha: fecha,
              viandero_id: viandero?.id,
            },
          }
        );

        console.log("res data:", res.data);

        if (res.data === null || res.data.mensaje) {
          throw new Error("Error en la respuesta del servidor");
        }

        setPedidosViandaHoy(res.data);
        console.log("res pedidosViandaHoy:", pedidosViandaHoy);
        setLoading(false); // Se ha completado la carga de datos
      } catch (error) {
        //console.error("Error al obtener pedidosViandaHoy:", error.message);
        setLoading(false); // Manejar el error y actualizar el estado de carga
      }
    };

    fetchPedidoViandaHoy();
  }, [SERVER, viandero]);

  useEffect(() => {
    //console.log("pedidosViandaHoy actualizado:", pedidosViandaHoy);
  }, [pedidosViandaHoy]);

  return (
    <>
      <Nav />
      <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen  bg-gray-100 dark:bg-gray-400 text-black">
        <Sidebar />
        <div className="lg:col-span-3 xl:col-span-5  p-8 h-[100vh]  bg-gray-700 dark:bg-gray-400">
          <section className="grid grid-cols-1 mt-6 gap-8">
            <div class="col-span-12">
              <div class="bg-white overflow-auto lg:overflow-visible p-3 rounded-xl shadow-2xl mb-2 flex flex-col gap-8">
                <div class="bg-white flex lg:justify-between border-b-2 border-fuchsia-900 pb-1">
                  <h2 class="text-2xl text-gray-500 font-bold">
                    Pedidos de viandas para hoy
                  </h2>
                
                </div>

                {/* <div>
                  <h1 className="text-2xl font-bold text-white mb-6">Pedidos de hoy </h1>
                    <div className="bg-white p-3 rounded-xl shadow-2xl mb-2 flex flex-col gap-8">
                    
                    
                            <h1 className="text-indigo-600 font-bold">{fechaHoy}</h1> */}
                <div class="col-span-12">
                  <div class="overflow-auto "></div>
                  <table class="   table text-indigo-700  space-y-6 text-sm">
                    <thead class="bg-indigo-500 text-dark">
                      <tr>
                        <th class="p-2">Vianda</th>
                        <th class="p-2 ">Cantidad</th>
                        <th class="p-2 ">Entrega</th>
                        <th class="p-2 ">Precio</th>
                        <th class="p-2 ">Estado</th>
                        <th class="p-2 ">Acciones</th>
                      </tr>
                    </thead>

                    {loading ? (
                      <div>Cargando...</div>
                    ) : Array.isArray(pedidosViandaHoy.pedido_viandas) &&
                      pedidosViandaHoy.pedido_viandas.length > 0 ? (
                      pedidosViandaHoy.pedido_viandas.map((pedidoVianda) => {
                        return (
                          <CardTablePedidosHoy
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
                    )}
                  </table>
                </div>

                {/* </div>         
                </div>         */}
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

export default PedidosHoyViandero;
