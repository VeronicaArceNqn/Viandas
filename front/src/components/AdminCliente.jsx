import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import SidebarCliente from "./SidebarCliente";
import EntregaListar from "./EntregaListar";
import CardTicket from "./CardTicket";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Link, Routes, Route } from "react-router-dom";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { GlobalContext } from "../context/GlobalContext";

const AdminCliente = () => {
    const { user } = useContext(GlobalContext);
  console.log("Valor de user:", user);

const [pedido, setPedido] = useState([]);



  return (
    <>
      <Nav />
      <div className="flex  justify-between w-full bg-gray-700 dark:bg-gray-400  ">
        <div className="grid grid-cols-1 md:grid-cols-2  text-black">
        <SidebarCliente />
          <div className="">
            <div className="bg-purple-600 rounded-xl text-white m-1">
            {/* <h1 className="text-2xl text-white bg-gray-700 my-10">Pedidos más recientes</h1> */}
              {/* <CardTicket
                ticket="total"
                totalTickets="145,000"
                text="Tickets totales"
              /> */}
                {/* <Routes>
                <Route path="/EntregaListar" component={EntregaListar} />
                </Routes>
                 */}
                {/* Otras rutas y componentes aquí */}
                <h1 className="text-2xl text-white font-bold my-5">Pedido para hoy</h1>
                <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-4 mb-3 p-2">
                  <h5>NroPedido</h5>
                  <h5>Descripción</h5>
                  <h5>Estatus</h5>
                  <h5>Fecha</h5>
                  <h5>Acciones</h5>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-2 bg-secondary-900 p-4 rounded-xl">
                  <div>
                    <h5 className="md:hidden text-white font-bold mb-2">ID</h5>
                    <span>#25546</span>
                  </div>
                  <div>
                    <h5 className="md:hidden text-white font-bold mb-2">
                      Descripción
                    </h5>
                    <p>Mi computadora no prende</p>
                  </div>
                  <div>
                    <h5 className="md:hidden text-white font-bold mb-2">Estatus</h5>
                    <span className="py-1 px-2 bg-yellow-500/10 text-yellow-500 rounded-lg">
                      Abierto
                    </span>
                  </div>
                  <div>
                    <h5 className="md:hidden text-white font-bold mb-2">Fecha</h5>
                    <span>28 octubre 2022</span>
                  </div>
                  <div>
                    <h5 className="md:hidden text-white font-bold mb-2">
                      Acciones
                    </h5>
                    <Menu
                      menuButton={
                        <MenuButton className="flex items-center gap-x-2 bg-secondary-100 p-2 rounded-lg transition-colors">
                          Acciones
                        </MenuButton>
                      }
                      align="end"
                      arrow
                      arrowClassName="bg-secondary-100"
                      transition
                      menuClassName="bg-secondary-100 p-4"
                    >
                      <MenuItem className="p-0 hover:bg-transparent">
                        <Link
                          to="/perfil"
                          className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                        >
                          Dashboard tickets
                        </Link>
                      </MenuItem>
                      <MenuItem className="p-0 hover:bg-transparent">
                        <Link
                          to="/perfil"
                          className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                        >
                          Información
                        </Link>
                      </MenuItem>
                    </Menu>
                  </div>
                </div>

            </div>
          
            </div>
            <div className="text-white ">
              <h1 className="text-2xl text-white my-10">Pedidos más recientes</h1>
              <div className="bg-secondary-100 p-8 rounded-xl">
                <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-4 mb-10 p-4">
                  <h5>NroPedido</h5>
                  <h5>Descripción</h5>
                  <h5>Estatus</h5>
                  <h5>Fecha</h5>
                  <h5>Acciones</h5>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
                  <div>
                    <h5 className="md:hidden text-white font-bold mb-2">ID</h5>
                    <span>#25546</span>
                  </div>
                  <div>
                    <h5 className="md:hidden text-white font-bold mb-2">
                      Descripción
                    </h5>
                    <p>Mi computadora no prende</p>
                  </div>
                  <div>
                    <h5 className="md:hidden text-white font-bold mb-2">Estatus</h5>
                    <span className="py-1 px-2 bg-yellow-500/10 text-yellow-500 rounded-lg">
                      Abierto
                    </span>
                  </div>
                  <div>
                    <h5 className="md:hidden text-white font-bold mb-2">Fecha</h5>
                    <span>28 octubre 2022</span>
                  </div>
                  <div>
                    <h5 className="md:hidden text-white font-bold mb-2">
                      Acciones
                    </h5>
                    <Menu
                      menuButton={
                        <MenuButton className="flex items-center gap-x-2 bg-secondary-100 p-2 rounded-lg transition-colors">
                          Acciones
                        </MenuButton>
                      }
                      align="end"
                      arrow
                      arrowClassName="bg-secondary-100"
                      transition
                      menuClassName="bg-secondary-100 p-4"
                    >
                      <MenuItem className="p-0 hover:bg-transparent">
                        <Link
                          to="/perfil"
                          className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                        >
                          Dashboard tickets
                        </Link>
                      </MenuItem>
                      <MenuItem className="p-0 hover:bg-transparent">
                        <Link
                          to="/perfil"
                          className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                        >
                          Información
                        </Link>
                      </MenuItem>
                    </Menu>
                  </div>
                </div>
                {/* <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
                  <div>
                    <h5 className="md:hidden text-white font-bold mb-2">ID</h5>
                    <span>#25546</span>
                  </div>
                  <div>
                    <h5 className="md:hidden text-white font-bold mb-2">
                      Descripción
                    </h5>
                    <p>Mi computadora no prende</p>
                  </div>
                  <div>
                    <h5 className="md:hidden text-white font-bold mb-2">Estatus</h5>
                    <span className="py-1 px-2 bg-blue-500/10 text-blue-500 rounded-lg">
                      En proceso
                    </span>
                  </div>
                  <div>
                    <h5 className="md:hidden text-white font-bold mb-2">Fecha</h5>
                    <span>28 octubre 2022</span>
                  </div>
                  <div>
                    <h5 className="md:hidden text-white font-bold mb-2">
                      Acciones
                    </h5>
                    <Menu
                      menuButton={
                        <MenuButton className="flex items-center gap-x-2 bg-secondary-100 p-2 rounded-lg transition-colors">
                          Acciones
                        </MenuButton>
                      }
                      align="end"
                      arrow
                      arrowClassName="bg-secondary-100"
                      transition
                      menuClassName="bg-secondary-100 p-4"
                    >
                      <MenuItem className="p-0 hover:bg-transparent">
                        <Link
                          to="/perfil"
                          className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                        >
                          Dashboard tickets
                        </Link>
                      </MenuItem>
                      <MenuItem className="p-0 hover:bg-transparent">
                        <Link
                          to="/perfil"
                          className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                        >
                          Información
                        </Link>
                      </MenuItem>
                    </Menu>
                  </div>
                </div> */}
                {/* <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
                  <div>
                    <h5 className="md:hidden text-white font-bold mb-2">ID</h5>
                    <span>#25546</span>
                  </div>
                  <div>
                    <h5 className="md:hidden text-white font-bold mb-2">
                      Descripción
                    </h5>
                    <p>Mi computadora no prende</p>
                  </div>
                  <div>
                    <h5 className="md:hidden text-white font-bold mb-2">Estatus</h5>
                    <span className="py-1 px-2 bg-green-500/10 text-green-500 rounded-lg">
                      Cerrado
                    </span>
                  </div>
                  <div>
                    <h5 className="md:hidden text-white font-bold mb-2">Fecha</h5>
                    <span>28 octubre 2022</span>
                  </div>
                  <div>
                    <h5 className="md:hidden text-white font-bold mb-2">
                      Acciones
                    </h5>
                    <Menu
                      menuButton={
                        <MenuButton className="flex items-center gap-x-2 bg-secondary-100 p-2 rounded-lg transition-colors">
                          Acciones
                        </MenuButton>
                      }
                      align="end"
                      arrow
                      arrowClassName="bg-secondary-100"
                      transition
                      menuClassName="bg-secondary-100 p-4"
                    >
                      <MenuItem className="p-0 hover:bg-transparent">
                        <Link
                          to="/perfil"
                          className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                        >
                          Dashboard tickets
                        </Link>
                      </MenuItem>
                      <MenuItem className="p-0 hover:bg-transparent">
                        <Link
                          to="/perfil"
                          className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                        >
                          Información
                        </Link>
                      </MenuItem>
                    </Menu>
                  </div>
                </div> */}
              </div>
            </div>
            </div>
      </div>
      <Footer />
      <div className="  mt-10 flex flex-wrap justify-evenly duration-300 gap-5 lg:gap-4 w-full lg:px-5"></div>
    </>
  );
};
export default AdminCliente;
