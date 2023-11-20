import React, { useState, useContext } from "react";
// import VerifiedIcon from "@mui/icons-material/Verified";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import Rating from "./Rating";
// import ButtonCard from "./ButtonCard";
// import img from "../images/vinda1.png";
// import Rating from "./Rating";
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

const Card2Viand = ({
  id,
  nombre,
  precio,
  img, 
  descripcion,
  cantidad
}) => {
  const { user, viandero } = useContext(GlobalContext);
  const [added, setAdded] = useState(true);

  const agregar = () => {
    // handleAgregar();
    setAdded(false);
  };
  const quitar = () => {
    setAdded(true);
  };

  return (
    <>
      {/* <!-- component --> */}
      {/* <!-- component --> */}
      {/* <!-- This is an example component --> */}
      <div className="max-w-xl mx-1 my-1 w-54">
        <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-300 dark:border-gray-700">
         <p className="bg-blue-500 hover:bg-blue-700 $ text-lime-400 font-bold py-2 px-4 rounded transition duration-300">Stock: <span className={`${cantidad > 4? 'text-green-300': 'text-red-600'}   text-xl`}> {cantidad}</span></p> 
          <Link className="" to={`/editar-vianda/${id}`}>
            <RiEdit2Line  />
          </Link>

          {/* } */}
          <div>
            <img
              className="rounded-3xl p-4 cursor-pointer "
              src={img}
              // src="viandaNapo.png"
              alt="product image"
              // onClick={cambiarImagen}
            />
          </div>
          <div className="px-5 pb-5">
            {/* <Rating /> */}
            <a href="#">
              <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-black">
                {/* Milanesa napolitana con pure */}
                {nombre}
                <hr className="border-t-2 border-blue-300 my-1" />
              </h3>
              <p>{descripcion}</p>
            </a>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-black">
                {/* $1599 */}${precio}
              </span>

              {added ? (
                <button
                  className="border border-sky-600 text-sky-600 py-2 px-4 hover:bg-sky-600 hover:text-white rounded-full transition-colors"
                  onClick={agregar}
                >
                  habilitar
                </button>
              ) : (
                <button
                  className="border border-red-600 text-red-600 bg-red-200 py-2 px-4 hover:bg-red-600 hover:text-white rounded-full transition-colors"
                  onClick={quitar}
                >
                  deshabilitar
                </button>
              )}
              {/* {user ? (
                //
              ) : ( // aqui el boton 
                ""
              )} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card2Viand;
