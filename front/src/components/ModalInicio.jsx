import React from "react";
import { Fragment, useRef, useState } from "react";
import Ubicacion from "../images/iconos/ubicacion.png";

const ModalInicio = () => {
  const [open, setOpen] = useState(false);



  return (
    <>
      {open ? (
        <>
          <form>
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
                          <p className="">Provincia: <span>{" Props:ubicar"}</span> </p>
                          
                          <p className="border-b"> Localidad:<span>{" Props:ubicar"}</span> </p> 
                        <p className="text-xl shadow-lg ">
                          Antes de elegir tu vianda, te pedimos que eligas la
                          zona mas cercana al lugar donde te encuentras.
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
                          {/* {zReparto.map((zona) => (
                        <option key={zona.id} value={zona.id}>
                          {zona.nombreZona}
                        </option>
                      ))} */}
                        </select>
                      </div>
                    </div>
                  
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="my-1 text-blueGray-500 text-lg leading-relaxed">
                      Esta sección mostrará a tus potenciales clientes lo que
                      describas de ti y tus viandas
                    </p>

                    
                    {/* <textarea
                      name="descripcion"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Hola! Mi nombre es... Me dedico a la elaboración de... etc."
                    /> */}
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-300 hover:bg-slate-400 hover:text-red-600 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      No quiero vender
                    </button>
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
