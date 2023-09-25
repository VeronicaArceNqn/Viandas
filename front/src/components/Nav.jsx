import React from 'react'
import {NavLink} from 'react-router-dom';
import'../index.css'
import'../App.css'

export default function Nav() {
  return (
   <nav>
     <div className="max-w-full h-54 bg-slate-500  rounded-t-lg p-4 grid md:grid-cols-12 gap-4 items-center justify-center">
            <h1 className="md:col-span-2 flex justify-center md:justify-start font-bold cursor-pointer text-3xl">
             <NavLink to='/'> Viandas <span className='text-yellow-400'>Fai</span></NavLink>
            </h1>
            <form className="md:col-span-4 flex items-center justify-center gap-2">
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
            </form>
            <nav className="md:col-span-6 flex items-center gap-4 justify-end">
              <a
                href="#"
                className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
              </a>
                <NavLink to='/'> Inicio </NavLink>
              {/* <a
                href="#"
                className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-900 transition-colors"
              > */}
                <NavLink to='/'> Nostros</NavLink>
              {/* </a> */}
              {/* <a
                href="#"
                className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors"
              > */}
                Servicios
              {/* </a> */}
              {/* <a
                href="#"
                className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
              </a> */}
                <NavLink to='/Login'> Login</NavLink>
              {/* <a
                href="#"
                className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
               
              </a> */}
              <NavLink to='/register'> registro</NavLink>
            </nav>
          </div>
   </nav>
  )
}
