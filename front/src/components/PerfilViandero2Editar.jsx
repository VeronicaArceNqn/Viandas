import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import "../index.css";
import "../App.css";
import { GlobalContext } from "../context/GlobalContext";
import icoUser from "../images/iconos/Usuario.png";
import { format } from "date-fns";
import { Badge } from "@mui/material";
import AddHomeIcon from "@mui/icons-material/AddHome";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import imgCocinero from "../images/iconos/cocinero2.png";
import {
  RiArrowDownSLine,
  RiSettings3Line,
  RiLogoutCircleRLine,
  RiThumbUpLine,
  RiShoppingCart2Fill,
  RiStore3Line,
  RiChat3Line,
} from "react-icons/ri";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import axios from "axios";
import { registerLocale } from "react-datepicker";
import { CarritoContext } from "../context/CarritoContext";
import { vi } from "date-fns/locale";



const PerfilViandero2Editar = () => {

    const { user, setUser, logout, SERVER, viandero, getViandero } =
    useContext(GlobalContext);
    const [showModal, setShowModal] = useState(false);
    const [zReparto, setZreparto] = useState([]);

    useEffect(() => {
        // Realizar una solicitud GET a la API externa para obtener las opciones
        axios
          .get(`${SERVER}zonaReparto`)
          .then((response) => {
            setZreparto(response.data);
            // console.log(zReparto);
            // console.log(viandero);
          })
          .catch((error) => {
            console.error("Error al obtener opciones:", error);
          });
      }, []);



    const venderVianda = async (e) => {
        e.preventDefault();
        // const viandero = axios.get(`${SERVER}viandero/${user.user.id}`);
        // console.log(viandero);
        // console.log(e.target.descripcion.value);
        //setShowModal(false);
        const data = {
          user_id: user.user.id,
          descripcion: e.target.descripcion.value,
          zonaReparto_id: e.target.zReparto.value,
        };
        console.log(viandero);
        try {
          // const res = axios.get(`${SERVER}zonaReparto`);
          const res = axios.post(`${SERVER}viandero`, data);
          // const res = axios.get(`${SERVER}zonaReparto`);
          // console.log(user.user);
    
          // .then((res)=>{
          // })
          // setViandero()
          getViandero();
          //navigate("/crear-viandas");
        } catch (err) {
          console.log(err.message);
        }
      };


  return (

    <>
    <div>PerfilViandero2Editar</div>

    <form onSubmit={venderVianda}>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
               
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-500 outline-none focus:outline-none">
                  
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Información Importante
                    </h3>

                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                      Esta sección mostrará a tus potenciales clientes lo que
                      describas de ti y tus viandas
                    </p>
                    <p>Descripcion:</p>

                    <textarea
                      name="descripcion"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Hola! Mi nombre es... Me dedico a la elaboración de... etc."
                    />
                    <label htmlFor="zonaEntrega" className="text-gray-200">
                      Zona de entrega
                    </label>
                    <select
                      name="zReparto"
                      className="w-full py-2 px-4 dark:bg-gray-700  border rounded-full mt-2 outline-none focus:border-indigo-400"
                      placeholder="Eliga una direccion"
                    >
                      <option value={""}>
                        Selecione una zona a entregar su vianda
                      </option>
                      {zReparto.map((zona) => (
                        <option key={zona.id} value={zona.id}>
                          {zona.nombreZona}
                        </option>
                      ))}
                    </select>
                  </div>
                  
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
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </form>

    </>
  )
}

export default PerfilViandero2Editar;
