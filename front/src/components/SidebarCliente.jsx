import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { NavLink } from 'react-router-dom'
import {
  RiHome3Line,
  RiFileCopyLine,
  RiWalletLine,
  RiPieChartLine,
  RiMore2Fill,
  RiCloseFill,
} from "react-icons/ri";

const SidebarCliente = () => {
    const { user, SERVER } = useContext(GlobalContext);
  //console.log("Valor de user:", user);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
    <div
        className={`bg-gray-300 h-full fixed lg:static w-[80%] md:w-[40%] lg:w-full transition-all z-50 duration-300 ${
          showMenu ? "left-0" : "-left-full"
        }`}
      >
    
 
  {/* <section> */}
    {/* <!-- Logo --> */}
    <div className="flex flex-col items-center justify-center p-2 gap-2 h-[20vh]">
    {/* <div className="logo flex items-center gap-4 mb-8"> */}
      <span
        src=""
        className="w-15 h-15 bg-purple-400 p-2 rounded-xl">
        <svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4H1m3 4H1m3 4H1m3 4H1m6.071.286a3.429 3.429 0 1 1 6.858 0M4 1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm9 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
  </svg>
      </span>
      
      <div>
        <h3 className="font-bold text-indigo-600">Gestion de mis pedidos </h3>
        <p className="text-gray-800 text-xs">
         Administracion de mis pedidos
        </p>
      </div>
    </div>
    {/* <!-- Search -->  */}
    {/* <form>
      <input
        type="text"
        className="w-full p-2 rounded-lg outline-none bg-gray-200"
        placeholder="Buscador"
      />
    </form> */}
    <ul className="mt-4 mb-8">
      <li>
      <NavLink to='/AdminCliente'

          className="flex items-center gap-4 p-2 hover:bg-gray-200 transition-colors rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
            />
          </svg>
          <span>Vianda de hoy</span>
        </NavLink>
      </li>
     
      <li>
      <NavLink
      to='/BuscarPedidoPorFecha'
          className="flex items-center gap-4 p-2 hover:bg-gray-200 transition-colors rounded-lg"
        >
         
          {/* <span>Pedidos programados</span> */}
          </NavLink>
      </li>
    </ul>
    <hr className="my-8" />
    <h5 className="uppercase font-semibold text-xs text-indigo-600 tracking-[2px] mb-4">
      Informes
    </h5>
    <ul>
      <li>
      <NavLink
      to='/HistoricoViandasCliente'
          className="flex items-center gap-4 p-2 hover:bg-gray-200 transition-colors rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
            />
          </svg>
          <span>Histórico de viandas</span>
          </NavLink>
      </li>
      <li>
      <NavLink
       to='/VianderoPorZona'
          className="flex items-center gap-4 p-2 hover:bg-gray-200 transition-colors rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
            />
          </svg>
          <span>Vianderos por zona</span>
          </NavLink>
      </li>
      <li>
      <NavLink
          className="flex items-center gap-4 p-2 hover:bg-gray-200 transition-colors rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
            />
          </svg>
          <span className="text-red-600">Calificar</span>
          </NavLink>
      </li>
    </ul>
    <hr className="my-8" />
    <h5 className="uppercase font-semibold text-xs text-indigo-600 tracking-[2px] my-4">
      Personal
    </h5>
    <ul>
      <li>
      <NavLink to="/Perfil"
          className="flex   items-center justify-start gap-4 p-2 hover:bg-gray-200 transition-colors rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5  text-sky-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
            />
          </svg>
          <span>Mi perfil</span>
          </NavLink>
      
      </li>
      <li>
      <NavLink to="/EntregaListar"
          className="flex items-center justify-start gap-4 p-2 hover:bg-gray-200 transition-colors rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-indigo-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
            />
          </svg>
          <span>Mis lugares de entrega</span>
          </NavLink>
      </li>
    
    </ul>
  {/* </section> */}
  {/* <!-- Bottom --> */}
  <section>

    
  
    <div className="flex items-center justify-center gap-4 pt-4 border-t">
      <img
        src="https://img.freepik.com/fotos-premium/retrato-viejo-mexicano-sombrero_379858-2229.jpg"
        className="w-8 h-8 object-cover rounded-xl ring-4 ring-gray-200"
      />
      <div>
        <h3 className="font-bold text-gray-900">
          Viandas FAI
        </h3>
        <p className="text-gray-800 text-xs">Desarrollador fullstack</p>
      </div>
    </div>
    <button
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden fixed right-5 top-12 text-4xl bg-primary-900 p-3 rounded-full text-white z-50"
      >
        {showMenu ? <RiCloseFill /> : <RiMore2Fill />}
      </button>
  </section>
  
</div> 

    </>
  )
}

export default SidebarCliente

