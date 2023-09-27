import React, { useContext, useEffect, Fragment } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../index.css";
import "../App.css";
import { GlobalContext } from "../context/GlobalContext";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { BsFillEmojiSmileFill } from "react-icons/bs";
// import axios from "axios";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const { user, setUser,logout } = useContext(GlobalContext);
  useEffect(() => {
    console.log(user);
  }, []);
  

  return (
    <nav>
      <div className="max-w-full h-54 bg-slate-500  rounded-t-lg p-4 grid md:grid-cols-12 gap-4 items-center justify-center">
        <h1 className="md:col-span-2 flex justify-center md:justify-start font-bold cursor-pointer text-3xl">
          <NavLink to="/">
            {" "}
            Viandas <span className="text-yellow-400">Fai</span>
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
        <nav className="md:col-span-6 flex items-center gap-4 justify-end">
          <a
            href="#"
            className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors"
          ></a>
          <NavLink to="/"> Inicio </NavLink>
          
          <NavLink to="/"> Nostros</NavLink>
         
          Servicios
          
          {user ? (
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  <BsFillEmojiSmileFill />
                  <ChevronDownIcon
                    className="-mr-1 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          {user.user.nombre}
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Support
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          License
                        </a>
                      )}
                    </Menu.Item>
                    <form>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={logout}
                            type="submit"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block w-full px-4 py-2 text-left text-sm"
                            )}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </form>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          ) : (
            <NavLink to="/Login"> Login</NavLink>
          )}
          {/* <a
                href="#"
                className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
               
              </a> */}
          <NavLink to="/register"> registro</NavLink>
        </nav>
      </div>
    </nav>
  );
}
