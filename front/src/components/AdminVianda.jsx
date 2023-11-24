import React ,{ useContext, useEffect, useState}from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import Card2 from "./Card2";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";
import Card2Viand from "./Card2Vind";

const AdminVianda = () => {
  //---
  const [viandas, setViandas] = useState([])

  const {SERVER, viandero} = useContext(GlobalContext)


  //--
  // console.log("AdminVianda", viandero)
  useEffect(()=>{
fetchViandas()
  },[])
  //--  
  const fetchViandas = async () => {
    await axios.get(`${SERVER}viandas`)
      .then((res) => {
      console.log(res.data);
       setViandas(res.data);//cargo todas las viandas
    });
  };
  //--
  // console.log(viandero)
  return (
    <>
      <Nav />
      <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen dark:bg-gray-400 text-black"> 
      {/* <div className=" flex  gap-8 w-full p-1  bg-gray-50 dark:bg-gray-400 text-black  "> */}
        {/* <div className=" md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"> */}
              <Sidebar />
              <div className="grid grid-cols-3 lg:col-span-3 xl:col-span-5  p-4 h-[100vh] overflow-y-scroll bg-gray-700 dark:bg-gray-400">
          
            {/* <div className="  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"> */}
            {/* <div className="flex flex-wrap "> */}
            {viandas.filter(vianda => vianda.viandero_id === viandero.id).map(vianda => (
            <Card2Viand
              key={vianda.id}
              id = {vianda.id}
              nombre={vianda.nombre}
              precio={vianda.precio}
              img={vianda.urlFoto}
              descripcion = {vianda.descripcion}
              cantidad={vianda.cantidad}
            />
          ))}
              


              {/* <CardTicket
                ticket="total"
                totalTickets="145,000"
                text="Tickets totales"
              /> */}
         
             
            </div>
          {/* </div> */}
       
        <div>
          {/* <h1 className="text-2xl text-white my-10">Tickets más recientes</h1> */}
          {/* <div className="bg-secondary-100 p-8 rounded-xl">
            <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-4 mb-10 p-4">
              <h5>ID</h5>
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
            </div>*/}
          {/* </div>  */}
        </div>
      </div>
      <Footer />
      <div className="  mt-10 flex flex-wrap justify-evenly duration-300 gap-5 lg:gap-4 w-full lg:px-5"></div>
    </>
  );
};
export default AdminVianda;
