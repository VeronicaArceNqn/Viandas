import React, { useContext, useEffect, Fragment } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
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
  RiChat3Line,
} from "react-icons/ri";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
// import axios from "axios";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const { user, setUser, logout } = useContext(GlobalContext);
  useEffect(() => {
    console.log(`clg useEf nav :user: ${user}`);
  }, []);

  return (
    <nav>
      <div className="max-w-full h-54 bg-slate-500  rounded-t-lg p-4 grid md:grid-cols-12 gap-4 items-center justify-center">
        <h1 className="md:col-span-2 flex justify-center md:justify-start font-bold cursor-pointer text-3xl">
          <NavLink to="/">
            {" "}
            Viandas <span className="text-yellow-400"><RiShoppingCart2Fill  className="text-3xl"/></span>
          </NavLink>
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
          <a
            href="#"
            className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors"
          ></a>
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
      </div>
    </nav>
  );
}
