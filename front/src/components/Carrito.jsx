import React, { useContext, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";
import Nav from "./Nav";
import Footer from "./Footer";
import axios from "axios";
import { GlobalContext } from "../context/GlobalContext";
import { NavLink } from "react-router-dom";
import { set } from "date-fns";

const Carrito = () => {
  const [pedidoVianda, setPedidoVianda] = useState([]);
  /**
   * context carrito
   */
  const {
    listaCompras,
    agregarCompra,
    aumentarCompra,
    disminuirCompra,
    quitarCompra,
  } = useContext(CarritoContext);

  /**
   *Context global
   */
  const { SERVER, user } = useContext(GlobalContext);

  //Calcular total de los elementos seleccionados segun las cantidades de cada items
  const calcularTotal = () => {
    return listaCompras
      .reduce((total, item) => total + item.precio * item.cant, 0)
      .toFixed(2);
  };
  //fx para realizar la compra
  const handlePrint = () => {
    print();
    console.log(user);
  };
  // console.log(user)
  /**
   * fx para realizar la compra
   */
  const comprar = async () => {
    const user_id = {
      user_id: user.user.id,
    };
    console.log(listaCompras);

    /**
     * Nuevo pedido
     */
    try {
      await axios.post(`${SERVER}pedido`, user_id).then((res) => {
        console.log(res.data);
      });
    } catch (error) {
      console.log(error);
    }
    /**
     * solicitar id pedido para crear pedidoVianda
     */
    try {
      // Obtener el pedido del usuario
      const response = await axios.get(`${SERVER}pedido/user/${user_id.user_id}`);
      const pedidoVianda = response.data.pedidos;
      console.log(pedidoVianda);
    
      if (pedidoVianda.length > 0) {
        const pedidoId = pedidoVianda[0].id;
    
        // Crear un array para almacenar las viandas
        const viandasArray = listaCompras.map((item) => ({
          pedido_id: pedidoId,
          vianda_id: item.id,
          cantidad: item.cantidad,
          precio: item.precio,
          fechaEntrega: "2023-11-19",
          lugarEntrega_id: 1,
        }));
    
        console.log(viandasArray);
    
        // Realizar una única solicitud POST para todas las viandas
        try {
          const response = await axios.post(`${SERVER}pedidoVianda`, viandasArray);
          console.log(response);
        } catch (error) {
          console.log("Error al enviar viandas:", error);
        }
      } else {
        console.log("No se encontraron pedidos para el usuario");
      }
    } catch (error) {
      console.log("Error al obtener el pedido del usuario:", error);
    } 


  };
  //dar formato a fecha que viene de base de datos
  const fechaFormateada = (fecha) => {
    const fechaFormateada = new Date(fecha);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return fechaFormateada.toLocaleDateString("es-ES", options);
  };
  console.log(listaCompras);
  return (
    <>
      <Nav />
      <div className="flex flex-col justify-center w-full p-1 bg-gray-50 dark:bg-gray-400 text-black  ">
        <h1 className="text-2xl"> Carrito</h1>
        <table className="border-separate border border-slate-500 ...">
          <thead>
            <tr>
              <th scope="col" className="border border-slate-600">
                Nombre
              </th>
              <th scope="col" className="border border-slate-600">
                Precio
              </th>
              <th scope="col" className="border border-slate-600">
                Cantidad
              </th>
              <th scope="col" className="border border-slate-600">
                Fecha de Entrega
              </th>

              <th scope="col" className="border border-slate-600">
                Eliminar
              </th>
            </tr>
          </thead>
          <tbody>
            {listaCompras?.map((item) => (
              <tr key={item.id}>
                <td className="border border-slate-700 ...">{item.nombre}</td>
                <td className="border border-slate-700 ...">${item.precio}</td>
                <td className="border border-slate-700 ...">
                  <button
                    className="text-xl"
                    onClick={() => {
                      aumentarCompra(item.id);
                    }}
                  >
                    +
                  </button>
                  <button className="px-2 bg-sky-300 text-xl">
                    {item.cant}
                  </button>
                  <button
                    className="text-xl"
                    onClick={() => {
                      disminuirCompra(item.id);
                    }}
                  >
                    -
                  </button>
                  {/* {item.cant} */}
                </td>
                <td className="border border-slate-700 ...">
                  {fechaFormateada(item.created_at)}{" "}
                </td>
                <td className="border border-slate-700 ...">
                  <button
                    className="relative py-2 px-6 text-center hover:bg-red-500 text-red-600 border border-red-600 overflow-hidden transition-all ease-in-out before:absolute before:bg-red-600 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10 before:transition-all before:duration-300 before:w-0 before:h-full hover:before:w-full hover:text-white"
                    onClick={() => {
                      quitarCompra(item.id);
                    }}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
            <th>
              <p>Total</p>
            </th>

            <td>{calcularTotal()}</td>
            <td></td>
            <td></td>
          </tbody>
        </table>
        <div>
          {listaCompras.length < 1 ? (
            <NavLink to="/">
              <button
                onClick={() => {}}
                // disabled={listaCompras < 1}

                className="relative py-2 px-6 text-center hover:bg-green-700-500 text-gray-900 border border-green-600 bg-yellow-400 overflow-hidden transition-all ease-in-out before:absolute before:bg-red-600 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10 before:transition-all before:duration-300 before:w-0 before:h-full hover:before:w-full hover:text-white mt-4"
              >
                Volver a la tienda
              </button>
            </NavLink>
          ) : (
            <button
              onClick={() => {
                // handlePrint();
                comprar();
              }}
              disabled={listaCompras < 1}
              className="relative py-2 px-6 text-center hover:bg-green-700-500 text-gray-900 border border-green-600 bg-green-500 overflow-hidden transition-all ease-in-out before:absolute before:bg-red-600 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10 before:transition-all before:duration-300 before:w-0 before:h-full hover:before:w-full hover:text-white mt-4"
            >
              Comprar
            </button>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Carrito;
