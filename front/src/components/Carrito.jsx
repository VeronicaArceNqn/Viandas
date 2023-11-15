import React, { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import Nav from "./Nav";
import Footer from "./Footer";

const Carrito = () => {
  const {
    listaCompras,
    agregarCompra,
    aumentarCompra,
    disminuirCompra,
    quitarCompra,
  } = useContext(CarritoContext);
  const calcularTotal = () => {
    return listaCompras
      .reduce((total, item) => total + item.precio * item.cant, 0)
      .toFixed(2);
  };
  const handlePrint = () => {
    print();
  };
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
            {listaCompras.map((item) => (
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
                  <button className="px-2 bg-sky-300 text-xl">{item.cant}</button>
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
                <td className="border border-slate-700 ..."></td>
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
            <th><p>Total</p></th>
           
            <td>{calcularTotal()}</td>
            <td></td>
            <td></td>
            
          </tbody>
        </table>
        <div>
            <button
              onClick={() => {
                handlePrint();
              }}
              disabled={listaCompras < 1}
              className="relative py-2 px-6 text-center hover:bg-green-700-500 text-gray-900 border border-green-600 bg-green-500 overflow-hidden transition-all ease-in-out before:absolute before:bg-red-600 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10 before:transition-all before:duration-300 before:w-0 before:h-full hover:before:w-full hover:text-white mt-4"
            >
              Comprar
            </button>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default Carrito;
