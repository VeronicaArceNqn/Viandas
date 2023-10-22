import React, { useContext, useEffect, Fragment, useState } from "react";
import { NavLink, useNavigate, Link, redirect } from "react-router-dom";
import "../index.css";
import "../App.css";
import { GlobalContext } from "../context/GlobalContext";
// import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import {
  RiNotification3Line,
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

// import axios from "axios";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const { user, setUser, logout,SERVER } = useContext(GlobalContext);
  const [showModal, setShowModal] = useState(false);
  const [msj,setMsj] = useState('')
  const navigate = useNavigate();
  // useEffect(() => {
  //   console.log(`clg useEf nav :user: ${user}`);
  // }, []);
  const venderVianda = async (e) => {
    setShowModal(false);
    const res = axios.post()
    console.log(user.user);
    navigate('/crear-viandas')
    try {
    } catch (err) {}
  };

  return (
    <nav>
      <div className="max-w-full h-54 bg-slate-500  rounded-t-lg p-4 grid md:grid-cols-12 gap-4 items-center justify-center">
        <h1 className="md:col-span-2 flex justify-center md:justify-start font-bold cursor-pointer text-3xl">
          <NavLink to="/"> Viandas</NavLink>
        </h1>

        {/* <form className="md:col-span-4 flex items-center justify-center gap-2">
          <input
            type="text"
            className="w-full bg-gray-100 outline-none p-2 rounded-lg"
            placeholder="Buscar"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </form> */}
        <nav className="md:col-span-6 flex items-center gap-4 justify-end sticky top-0">
          <NavLink to="/"> Inicio </NavLink>
          <NavLink to="/nosotros"> Nostros</NavLink>
          <NavLink to="/"> Servicios</NavLink>
          {!user ? <NavLink to="/register"> registro</NavLink> : ""}

          {user ? (
            <Menu
              menuButton={
                <MenuButton className="flex items-center gap-x-2 hover:bg-secondary-100 p-2 rounded-lg transition-colors">
                  <img
                    src="https://img.freepik.com/foto-gratis/feliz-optimista-guapo-gerente-ventas-latina-apuntando-lado-mirando-camara_1262-12679.jpg"
                    className="w-6 h-6 object-cover rounded-full"
                  />
                  <span>
                    {" "}
                    {user.user.nombre} {user.user.apellido}
                  </span>
                  <RiArrowDownSLine />
                </MenuButton>
              }
              align="end"
              arrow
              // arrowClassName="bg-secondary-100"
              transition
              menuClassName="bg-secondary-100 p-4"
            >
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/perfil"
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                >
                  <img
                    src="https://img.freepik.com/foto-gratis/feliz-optimista-guapo-gerente-ventas-latina-apuntando-lado-mirando-camara_1262-12679.jpg"
                    className="w-8 h-8 object-cover rounded-full"
                  />
                  <div className="flex flex-col text-sm">
                    <span className="text-sm"> {user.user.nombre}</span>
                    <span className="text-xs text-gray-500">
                      {user.user.email}
                    </span>
                  </div>
                </Link>
              </MenuItem>
              <hr className="my-4 border-gray-500" />
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/"
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                >
                  <RiSettings3Line /> Configuración
                </Link>
              </MenuItem>
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/"
                  onClick={logout}
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                >
                  <RiLogoutCircleRLine /> Cerrar sesión
                </Link>
              </MenuItem>
            </Menu>
          ) : (
            <NavLink to="/Login"> Login</NavLink>
          )}
        </nav>
        {user ? (
          <span className="text-white  ">
            <RiShoppingCart2Fill className="text-3xl" />
          </span>
        ) : (
          ""
        )}
        {user ? (
          <span className="text-white  ">
            <NavLink>
              <RiStore3Line
                title="Crear viandas"
                className="text-3xl"
                onClick={() => {
                  setShowModal(true);
                }}
              />
            </NavLink>{" "}
          </span>
        ) : (
          ""
        )}
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-500 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Informacion Importante
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
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Es seccion mostrara a tus potenciales clientes lo que
                    describas de ti y la viandas
                  </p>
                  <p>Descripcion:</p>

                  <textarea 
                  
                  
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Hola! Mi nombre es..."
                  />
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
                    type="button"
                    onClick={venderVianda}
                  >
                    Comenzar..
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </nav>
  );
}
