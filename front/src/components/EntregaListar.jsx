import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
// import "../myCss.css";
import Nav from "./Nav";
import SidebarCliente from "./SidebarCliente";
import { NavLink, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "./Footer";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const EntregaListar = () => {
  const { user, SERVER } = useContext(GlobalContext);
  console.log("Valor de user:", user);
  return (
    <>
  
      <div className="flex flex-col justify-center w-full p-1 bg-gray-700 dark:bg-gray-400  ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8  text-black">
       
      <div>EntregaListar</div>
      </div>
      </div>
    </>
    
  )
}

export default EntregaListar
