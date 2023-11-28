import React, { useContext, useState, useEffect } from "react";
import { CarritoContext } from "../context/CarritoContext";
import Nav from "./Nav";
import Footer from "./Footer";
import axios from "axios";
import { GlobalContext } from "../context/GlobalContext";
import { NavLink, useNavigate } from "react-router-dom";
import { set } from "date-fns";
import moment from "moment";
import Swal from "sweetalert2";
import { it } from "date-fns/locale";

const Carrito = () => {
  const [loading, setLoading] = useState(false);
  // const [fecha, setFecha] = useState(moment().format("YYYY-MM-DD"));
  const navigate = useNavigate();
  const { SERVER, user } = useContext(GlobalContext);

  const {
    listaCompras,
    agregarCompra,
    aumentarCompra,
    disminuirCompra,
    quitarCompra,
    vaciarCarrito,
  } = useContext(CarritoContext);
  const [selectValido, setSelectValido] = useState(false);
  const [fechas, setFechas] = useState(() => {
    const initialFechas = {};
    listaCompras.forEach((item) => {
      initialFechas[item.id] = moment().format("YYYY-MM-DD");
    });
    return initialFechas;
  });
  const [lugarEntrega1, setLugarEntrega1] = useState(() => {
    const initialOpciones = {};
    listaCompras.forEach((item) => {
      initialOpciones[item.id] = ""; // Opción seleccionada inicialmente vacía
    });
    return initialOpciones;
  });
  const handleSelectChange = (e, itemId) => {
    const opcionSeleccionada = e.target.value;
    setLugarEntrega1((prevOpciones) => ({// prevOpciones es el arreglo del estado inicial que ya se creo
      ...prevOpciones,
      [itemId]: e.target.value,
    }));
    setSelectValido(opcionSeleccionada !== "");
  };
  /**
   * context carrito
   */

  /**
   *Context global
   */

  //Calcular total de los elementos seleccionados segun las cantidades de cada items
  const calcularTotal = () => {
    return listaCompras
      .reduce((total, item) => total + item.precio * item.cant, 0)
      .toFixed(2);
  };
  //fx para realizar la compra
  const handleChangeFecha = (e, itemId) => {
    console.log(e.target.value, itemId);
    // Controlar que la fecha sea mayor a la actual
    if (e.target.value < moment().format("YYYY-MM-DD")) {
      Swal.fire("La fecha debe ser mayor a la actual");
    } else {
      setFechas((prevFechas) => ({
        ...prevFechas,
        [itemId]: e.target.value,
      }));
    }
  };

  // const handleChangeFecha = (e) => {
  //   //caontrolar que la fecha sea mayor a la actual
  //   if (e.target.value < moment().format("YYYY-MM-DD")) {
  //     Swal.fire("La fecha debe ser mayor a la actual");
  //   } else {
  //     setFecha(e.target.value);
  //   }
  // };

  /**
   * fx para realizar la compra
   */

  const comprar = async () => {
    // Funcion comprar elementos del carrito
    // console.log(listaCompras);
    setLoading(true); //

    /**
     * Conf array para enviar al back
     */
    const viandasArray = listaCompras.map((item) => ({
      vianda_id: item.id,
      cantidad: item.cant,
      precio: item.precio,
      // fechaEntrega: moment(item.fechaEntrega).format("YYYY-MM-DD"),
      fechaEntrega: fechas[item.id],
      lugarEntrega_id: lugarEntrega1[item.id],
      // lugarEntrega_id: item.lugarEntrega_id,
    }));
    console.log(viandasArray);
    const data = {
      user_id: user.user.id,
      items: viandasArray,
    };

    try {
      const res = await axios.post(`${SERVER}pedido`, data);
      //  console.log(res);
      Swal.fire( {
        icon: 'success',
        title: 'Compra realizada con exito!',
        text: 'Gracias por elegirnos! Te redirigimos a tu panel para seguir tu envio',
        showConfirmButton: false,
        timer: 1500
      })
      
      // alert("Compra realizada con exito!");
      vaciarCarrito();
      navigate("/adminCliente");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

    console.log(data);
  };

  const [lugarEntrega, setLugarEntrega] = useState([]);
  const fetchLugarEntrega = async () => {
    const res = await axios.get(`${SERVER}lugarEntrega/User/${user.user.id}`);
    console.log(res);
    if (res.data === null || res.data.mensaje) {
      alert("No tiene lugar de entrega registrado");
      navigate("/");
    } else {
      console.log(res.data);
      setLugarEntrega(res.data);
    }
  };
  useEffect(() => {
    fetchLugarEntrega();
  }, []);

  console.log(listaCompras);
  return (
    <>
      <Nav />
      <div className="flex flex-col   w-full p-1 bg-gray-50 dark:bg-gray-400 text-black  ">
        <h1 className="text-2xl shadow-lg"> Carrito</h1>
        {listaCompras.length < 1 ? (
          <p className="text-2xl font-serif shadow-lg">
            No hay elementos en el carrito
          </p>
        ) : (
          <table className=" mx-32 p-16 border-separate border border-slate-500 flex-col">
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
                  Lugar de entrega
                </th>
                <th scope="col" className="border border-slate-600 ">
                  Fecha de entrega
                </th>
                <th scope="col" className="border border-slate-600">
                  Eliminar
                </th>
              </tr>
            </thead>
            <tbody>
              {listaCompras.map((item) => (
                <tr key={item.id}>
                  <td className="border border-slate-700 ">{item.nombre}</td>
                  <td className="border border-slate-700 ">${item.precio}</td>
                  <td className="border border-slate-700 ">
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
                  <td>
                    {/* <label htmlFor="zonaEntrega" className="text-gray-200">
                      Zona de entrega
                    </label> */}
                    <select
                      name="lugarEntrega"
                      className="w-full py-2 border  border-slate-700  text-red-600  font-bold bg-gray-400"
                      placeholder="Eliga una direccion"
                      onChange={(e) => handleSelectChange(e, item.id)}
                    >
                      <option className="text-black" value={""}>
                        Su direccion 
                      </option>
                      {lugarEntrega.map((zona) => (
                        <option className="text-black" key={zona.id} value={zona.id}>
                          {zona.calle}
                          {zona.nroCalle}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="border border-slate-700">
                    <input
                      name="fechaEntrega"
                      className="bg-gray-400"
                      type="date"
                      value={fechas[item.id]}
                      onChange={(e) => handleChangeFecha(e, item.id)}
                    />
                  </td>
                  <td className="border border-slate-700 ">
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
              {/* <th>
              <p>Total</p>
            </th> */}

              {/* <td>{calcularTotal()}</td> */}
              {/* <td></td>
            <td></td> */}
            </tbody>
            <tfoot>
              <tr>
                <th>Total</th>
                <th>{calcularTotal()}</th>
              </tr>
            </tfoot>
          </table>
        )}
        <div>
          {listaCompras.length < 1 ? (
            <NavLink to="/">
              <button
                // onClick={() => {}}
                // disabled={listaCompras < 1}

                className=" py-2 px-6 text-center hover:bg-green-700-500 text-gray-900 border border-green-600 bg-yellow-400 overflow-hidden transition-all ease-in-out before:absolute before:bg-red-600 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10 before:transition-all before:duration-300 before:w-0 before:h-full hover:before:w-full hover:text-white mt-4"
              >
                Volver a la tienda
              </button>
            </NavLink>
          ) : (
            <button
              onClick={() => {
                if (selectValido){

                  comprar();
                }else{
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Debe seleccionar un lugar de entrega!',
                    // footer: '<a href>Why do I have this issue?</a>'
                  })
                }
              }}
              disabled={listaCompras < 1}
              className=" py-2 px-6 text-center hover:bg-green-700-500 text-gray-900 border border-green-600 bg-green-500 overflow-hidden transition-all ease-in-out before:absolute before:bg-red-600 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10 before:transition-all before:duration-300 before:w-0 before:h-full hover:before:w-full hover:text-white mt-4"
            >
              {/* Comprar */}
              {loading ? <Spinner /> : "Comprar"}
            </button>
          )}
          <button
          className=" ml-5 py-2 px-6 text-center hover:bg-green-700-500 text-gray-900 border border-green-600 bg-yellow-400 overflow-hidden transition-all ease-in-out before:absolute before:bg-red-600 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10 before:transition-all before:duration-300 before:w-0 before:h-full hover:before:w-full hover:text-white mt-4"
            onClick={() => {
              navigate("-1");
            }}
          >
            Volver
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};
const Spinner = () => {
  return (
    <div
      className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
};
export default Carrito;
