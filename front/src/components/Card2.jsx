import React, { useState, useContext, useEffect } from "react";
// import VerifiedIcon from "@mui/icons-material/Verified";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
import Rating from "./Rating";
import MuiRating from "./MuiRating";
// import ButtonCard from "./ButtonCard";
// import img from "../images/vinda1.png";

import imgSinStock from "../images/iconos/sinStock.png";
import { GlobalContext } from "../context/GlobalContext";
import {
  RiEdit2Line,
  RiShieldCheckLine,
  RiErrorWarningLine,
} from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";
//
//
//

const Card2 = ({
  id,
  nombre,
  precio,
  img,
  handleAgregar,
  handleQuitar,
  descripcion,
  cantidad,
  agregado
}) => {
  const { user, viandero } = useContext(GlobalContext);
  const { loadingAdd } = useContext(CarritoContext);
  const [added, setAdded] = useState(true);

  const agregar = () => {
    handleAgregar();
    setAdded(false);
  };
  const quitar = () => {
    handleQuitar();
    setAdded(true);
  };
  // console.log(id)
  useEffect(() => {
    agregado ? setAdded(false) : setAdded(true);
  },[]);
  // console.log(loadingAdd)
  return (
    <>
      {/* <!-- component --> */}
      {/* <!-- component --> */}
      {/* <!-- This is an example component --> */}

          {/* <MuiRating /> */}
      <div className="max-w-xl mx-1 my-1 w-auto">
        <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-300 dark:border-gray-700 justify-center">
          {/* validar si viandero existe  para mostrar icono de edicion */}

          {/*           
          <Link to={`/editar-vianda/${id}`} >
           <RiEdit2Line/>          

           </Link> */}

          <div className="grid justify-items-center p-2 ">
            
            <img
              className="object-cover  hover:w-48 hover:h-64 hover:transition duration-500 ease-in-out object-center h-40 w-40 rounded-3xl cursor-pointer"
              src={img}
              // src="viandaNapo.png"
              alt={nombre}
              // onClick={cambiarImagen}
            />
          </div>
          <div className="px-5 pb-3">
            <a href="#">
              <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-black">
                {/* Milanesa napolitana con pure */}
                {nombre}
                <hr className="border-t-2 border-green-600 my-1" />
              </h3>
              <p>{descripcion}</p>
            </a>
            {/* //Rating */}
            <Rating />

           
            
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-black">
                {/* $1599 */}${precio}
              </span>

              {user ? (
                cantidad != 0 ? (
                  loadingAdd ? (
                    <Spinner />
                  ) :added ? (
                    <button
                      className="border border-sky-600 text-sky-600 py-2 px-4 hover:bg-green-400 hover:text-white rounded-full transition-colors"
                      onClick={agregar}
                    >
                      Agregar
                    </button>
                  ) : (
                    <button
                      className="border border-red-600 text-red-600 bg-red-200 py-2 px-4 hover:bg-red-600 hover:text-white rounded-full transition-colors"
                      onClick={quitar}
                    >
                      Quitar
                    </button>
                  )
                ) : (<img className="w-24" src={imgSinStock}/>)
              ) : null}
              
            </div>
            <p className="text-left text-gray-600">Disponibles: {cantidad}</p>
          </div>
        </div>
      </div>
    </>
  );
};
const Spinner = () => {
  return (
    <div
      className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
};

export default Card2;
