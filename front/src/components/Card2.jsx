import React, { useState, useContext, useEffect } from "react";
// import VerifiedIcon from "@mui/icons-material/Verified";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import Rating from "./Rating";
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

  return (
    <>
      {/* <!-- component --> */}
      {/* <!-- component --> */}
      {/* <!-- This is an example component --> */}

      <div className="max-w-xl mx-1 my-1 w-auto">
        <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-300 dark:border-gray-700 justify-center">
          {/* validar si viandero existe  para mostrar icono de edicion */}

          {/*           
          <Link to={`/editar-vianda/${id}`} >
           <RiEdit2Line/>          

           </Link> */}

          <div className="grid justify-items-center p-2 ">
            <img
              className="object-cover object-center h-40 w-40 rounded-3xl cursor-pointer"
              src={img}
              // src="viandaNapo.png"
              alt={nombre}
              // onClick={cambiarImagen}
            />
          </div>
          <div className="px-5 pb-5">
            <a href="#">
              <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-black">
                {/* Milanesa napolitana con pure */}
                {nombre}
                <hr className="border-t-2 border-blue-300 my-1" />
              </h3>
              <p>{descripcion}</p>
            </a>
            {/* //Rating */}
            <div className="flex items-center mt-2.5 mb-5">
              <svg
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                5.0
              </span>
            </div>
            {/* //Rating */}
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-black">
                {/* $1599 */}${precio}
              </span>

              {user ? (
                cantidad != 0 ? (
                  added ? (
                    <button
                      className="border border-sky-600 text-sky-600 py-2 px-4 hover:bg-sky-600 hover:text-white rounded-full transition-colors"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Card2;
