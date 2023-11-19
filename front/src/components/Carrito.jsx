import React, { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import Nav from "./Nav";
import Footer from "./Footer";
import axios from "axios";
import { GlobalContext } from "../context/GlobalContext";
import { NavLink } from "react-router-dom";

const Carrito = () => {
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

  /**
   * fx para realizar la compra
   */
  const comprar = async() => {
    const user = {
      user_id:3
    };

    let pedidoVianda = {
      pedido_Id: 1,
      vianda_Id: 1,
      cantidad: 1,
      precio: 1,
      fechaEntrega: "2021-10-10",
      lugarEntrega_id: 1,
    }
    /**
     * Nuevo pedido
     */
    try {
     await axios.post(`${SERVER}pedido`, user )
      .then((res) => {
        console.log(res.data);

      });
      
    } catch (error) {console.log(error)}
    /**
     * solicitar id pedido para crear pedidoVianda
     */
    try {
      const response = await axios.get(`${SERVER}pedido/user/${user.user_id}` );
      console.log(response.data);
      const filterVianda = response.data.filter((item) => {
        const fechaItem = new Date(item.created_at).toLocaleDateString();
        const fechaActual = new Date().toLocaleDateString();
      
        console.log(fechaItem);
        console.log(fechaActual);
        return fechaItem === fechaActual;
      });
      // const filterVianda = response.data.filter((item) => new Date(item.created_at).toLocaleString() === new Date().toLocaleDateString() );
      console.log(filterVianda);
     
      // console.log(item.created_at)
      // await axios.get(`${SERVER}pedido` )
      // .then((res) => {
      //   console.log(res.data);
      //   //crear filter para obtener el ultimo id  de pedido
                
      // });
    } catch (error) {console.log(error)}

    /**
     * enviar lista de compras para crear pedidoVianda
     //  */    

     
    // try { 
    //   await axios.post(`${SERVER}pedidoVianda`, listaCompras )
    //   .then((res) => {
    //     console.log(res.data);
    //   });
    // } catch (error) {console.log(error)}
    
  };
  //dar formato a fecha que viene de base de datos
  const fechaFormateada = (fecha) => {
    const fechaFormateada = new Date(fecha);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return fechaFormateada.toLocaleDateString("es-ES", options);
  };
  console.log(listaCompras)
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
