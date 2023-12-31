import React, { useContext, useEffect, useState } from "react";
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
  const [viandas, setViandas] = useState([]);

  const { SERVER, viandero } = useContext(GlobalContext);

  //--
  // console.log("AdminVianda", viandero)
  useEffect(() => {
    fetchViandas();
  }, []);
  //--
  const fetchViandas = async () => {
    await axios.get(`${SERVER}viandas`).then((res) => {
      console.log(res.data);
      setViandas(res.data); //cargo todas las viandas
    });
  };
  //--
  // console.log(viandero)
  return (
    <>
      <Nav />
      <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen bg-gray-100 dark:bg-gray-400 text-black">
        {/* <div className=" flex  gap-8 w-full p-1  bg-gray-50 dark:bg-gray-400 text-black  "> */}
        {/* <div className=" md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"> */}

       

               <Sidebar />
               <div className="lg:col-span-3 xl:col-span-5 p-6 h-[100vh] overflow-y-scroll bg-gray-700 dark:bg-gray-400">  
               <h1 className="text-2xl font-bold text-white">Mis viandas - MENÚ </h1>
               <div className="grid grid-cols-3 lg:col-span-3 xl:col-span-5  p-4 h-[100vh]  bg-gray-700 dark:bg-gray-400">
          

            {/* <div className="  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"> */}
            {/* <div className="flex flex-wrap "> */}
            {viandas
              .filter((vianda) => vianda.viandero_id === viandero.id)
              .map((vianda) => (
                <Card2Viand
                  key={vianda.id}
                  id={vianda.id}
                  nombre={vianda.nombre}
                  precio={vianda.precio}
                  img={vianda.urlFoto}
                  descripcion={vianda.descripcion}
                  cantidad={vianda.cantidad}
                />
              ))}

            {/* <CardTicket
                ticket="total"
                totalTickets="145,000"
                text="Tickets totales"
              /> */}
          </div>
        </div>
        {/* </div> */}

        <div>
     
        </div>
      </div>
      <Footer />
      <div className="  mt-10 flex flex-wrap justify-evenly duration-300 gap-5 lg:gap-4 w-full lg:px-5"></div>
    </>
  );
};
export default AdminVianda;
