import React, { useContext, useEffect } from "react";
import { Fragment, useRef, useState } from "react";
import Ubicacion from "../images/iconos/ubicacion.png";
import { ca } from "date-fns/locale";
import axios from "axios";
import { GlobalContext } from "../context/GlobalContext";
import Swal from "sweetalert2";
import { set } from "date-fns";

const ModalInicio = ({ setViandas}) => {
  const { SERVER, localidadProv, user,idZona } = useContext(GlobalContext);
  const [open, setOpen] = useState(false);
  const [zonasReparto, setZreparto] = useState([]);


  useEffect(() => {
    const hasShownModal = localStorage.getItem("hasShownModal");
    // Mostrar el modal solo si el usuario existe y el modal no se ha mostrado antes
    if (user && !hasShownModal) {
      setOpen(true);
    }
  }, [user]);

  //-----------
  useEffect(() => {
    // Restablecer la marca del modal al desloguear
    if (!user) {
      localStorage.removeItem("hasShownModal");
    }
  }, [user]);
  //---------------------

  //mettods
  //---------------------
  const cargaZonasRepartos = async () => {
    try {
      const res = await axios.get(`${SERVER}zonaReparto`);
      setZreparto(res.data);
      // console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    cargaZonasRepartos();
  }, []);

  const fetchViandasPorZona = async (id) => {
    try {
      const res = await axios.get(
        `${SERVER}viandero/zona-reparto-viandas/${id}`
      );
      const vianderosPorZona = res.data;
      const viandasDeLaZona = vianderosPorZona.vianderos.reduce(
        (acc, viandero) => {
          // concatena viandas de todos los vianderos
          return acc.concat(viandero.viandas);
        },
        []
      );
      setViandas(viandasDeLaZona);
      // localStorage.setItem("viandas", JSON.stringify(viandasDeLaZona));// A.u 

      setOpen(false);
      localStorage.setItem("hasShownModal", true); // Guardar en el localStorage que el modal ya se ha mostrado a este usuario
    } catch (error) {
      console.error(error);
    }
  };

  const enviarZona = (e) => {
    e.preventDefault();
    const id = e.target.zReparto.value;
    console.log(id);
    // setViandasZonal(id);
    // console.log(e.target.zReparto.value);
    if (id !== "") {
      fetchViandasPorZona(id);
    } else {
      // setSelectValido(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debe seleccionar un lugar de entrega!",
        // footer: '<a href>Why do I have this issue?</a>'
      });
    }
    // console.log(selectValido);
  };

  return (
    <>
      {open ? (
        <>
          <form onSubmit={enviarZona}>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-500 outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <div className="text-start font-semibold">
                      <div>
                        <p className="text-4xl  text-center font-light border-gray-50 mb-3 ">
                          {" "}
                          Bienvenidos!
                        </p>
                        <div className="flex items-center justify-center ">
                          <img className="w-20 p-3 " src={Ubicacion} alt="" />
                        </div>
                        <div className=" flex-col  text-center  ">
                          <p>Tu ubicacion actual es: </p>
                          <p className="text-gray-950 ">
                            Provincia: {localidadProv.provincia?.nombre}
                          </p>

                          <p className=" mb-3 border-b text-gray-950">
                            {" "}
                            Localidad: {localidadProv.departamento?.nombre}
                          </p>
                          <p className="text-xl shadow-lg ">
                            Antes de elegir tu vianda, te pedimos que elijas la
                            zona mas cercana al lugar donde te encuentres.
                          </p>
                        </div>
                      </div>

                      <div className="mt-4">
                        <label htmlFor="zonaEntrega" className="text-gray-200 ">
                          Zona de entrega
                        </label>
                        <select
                          name="zReparto"
                          className="w-full py-2 px-4 dark:bg-gray-700  border rounded-full mt-2 outline-none focus:border-indigo-400"
                          placeholder="Eliga una direccion"
                        >
                          <option value={""}>
                            Selecione una zona de repartos
                          </option>
                          {zonasReparto.map((zona) => (
                            <option key={zona.id} value={zona.id}>
                              {zona.nombreZona}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  {/*body*/}
                  {/* <div className="relative p-6 flex-auto">
                    <p className="my-1 text-blueGray-500 text-lg leading-relaxed">
                      Esta sección mostrará a tus potenciales clientes lo que
                      describas de ti y tus viandas
                    </p>

                 
                  </div> */}
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    {/* <button
                      className="text-red-300 hover:bg-slate-400 hover:text-red-600 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      No quiero vender
                    </button> */}
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Comenzar..
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-90 fixed inset-0 z-40 bg-black"></div>
          </form>
        </>
      ) : null}
    </>
  );
};

export default ModalInicio;
