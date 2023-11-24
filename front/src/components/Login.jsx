import React, { useState, useContext, useEffect } from "react";
import Nav from "../components/Nav";
// import "../myCss.css";
import "../index.css";
import { NavLink, redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "../context/GlobalContext";
import { useForm } from "react-hook-form";
import Footer from "./Footer";
import Swal from "sweetalert2";

export default function Loggin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // console.log(errors);
 

  const onSubmit = handleSubmit((data) => {
    // console.log(data);
    fetchData(data);
  });

  
  const navigate = useNavigate();
  const {viandero, getViandero, setUser, SERVER } = useContext(GlobalContext);

  // --------------------------------------------------


  const fetchData = async (data) => {
 
    try {
      const result = await axios.post(`${SERVER}login`, data);
      
      // setMsj(result.data.message);
      console.log(result)
      setUser(result.data);
      getViandero();
      // console.log(result)
      Swal.fire("Bienvenido al sistema!");
      viandero?.lenght > 1 ? navigate("/crearVianda") : navigate("/");

      // navigate("/home");
    } catch (err) {
      // console.error(err);
      if (err?.response?.status == 401) {
        // alert(err.response.status)
         Swal.fire("Usuario o clave no coinciden!");
      }
    }

  };
 
  return (
    <>
      {/* <!-- HTML --> */}
      <div className="min-h-screen  bg-[#2e313b] grid grid-cols-1 lg:grid-cols-1 container mx-auto ">
        <Nav />
        <div className="text-white flex flex-col items-center justify-center gap-8 p-8 max-w-lg mx-auto text-center">
          {/* <!-- Titulo --> */}
          <div className="flex flex-col gap-1 w-full">
            <h1 className="text-4xl font-medium">Iniciar sesión</h1>
            <p className="text-gray-400">
              Ingresa al sistema con tus credenciales
            </p>
          </div>
          {/* <!-- Boton para ingresar con Google --> */}
          <div className="w-full"></div>
          {/* <!-- Form --> */}
          <form className="flex flex-col gap-4" onSubmit={onSubmit}>
            <div>
              <label htmlFor="email" className="text-gray-200">
                Correo electrónico *
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Este campo es requerido.",
                  },
                  minLength: {
                    value: 2,
                    message: "menimo 2 caracteres",
                  },
                  maxLength: {
                    value: 40,
                    message: "A superado el maximo de caracteres",
                  },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "El correo no cumple el formato",
                  },
                })}
                // onChange={(e) => setEmail(e.target.value)}
                // value={email}
                type="text"
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent  border rounded-full mt-2 outline-none focus:border-indigo-400"
                placeholder="Ingresa tu correo electrónico"
              />
              {errors.email && (
                <div className="flex  shadow-lg rounded-lg mt-1">
                  <div className=" bg-red-600 flex justify-center items-center  px-2 rounded-tr-3xl rounded-lg"></div>

                  <div className="flex flex-col p-2  rounded-tr-lg rounded-br-lg">
                    <h2 className="font-semibold text-red-200">
                      {errors.email.message}
                    </h2>
                    <p className="text-gray-700"></p>
                  </div>
                </div>
              )}
              {/* {errors.email && (
                <div className="flex  shadow-lg rounded-lg mt-1">
                  <div className=" bg-red-600 flex justify-center items-center  px-2 rounded-tr-3xl rounded-lg"></div>

                  <div className="flex flex-col p-2  rounded-tr-lg rounded-br-lg">
                    <h2 className="font-semibold text-red-200">
                      Debe tener mas de 2 caracteres
                    </h2>
                    <p className="text-gray-700"></p>
                  </div>
                </div>
              )} */}
              {/* {errors.email?.type == "mxLength" && (
                <div className="flex  shadow-lg rounded-lg mt-1">
                  <div className=" bg-red-600 flex justify-center items-center  px-2 rounded-tr-3xl rounded-lg"></div>

                  <div className="flex flex-col p-2  rounded-tr-lg rounded-br-lg">
                    <h2 className="font-semibold text-red-200">
                      Debe tener menos de 20 caracteres
                    </h2>
                    <p className="text-gray-700"></p>
                  </div>
                </div>
              )} */}
              {/* {errors.email?.type == "pattern" && (
                <div className="flex  shadow-lg rounded-lg mt-1">
                  <div className=" bg-red-600 flex justify-center items-center  px-2 rounded-tr-3xl rounded-lg"></div>

                  <div className="flex flex-col p-2  rounded-tr-lg rounded-br-lg">
                    <h2 className="font-semibold text-red-200">
                      Debe tener formato de correo electronico!!
                    </h2>
                    <p className="text-gray-700"></p>
                  </div>
                </div>
              )} */}
            </div>
            <div>
              <label htmlFor="password" className="text-gray-200">
                Contraseña *
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Campo requerido",
                  },
                  minLength: {
                    value: 8,
                    message: "Debe tener 8 caracteres !!",
                  },
                })}
                // onChange={(e) => setPass(e.target.value)}
                // value={pass}
                type="password"
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                placeholder="Ingresa tu contraseña"
              />
              {errors.password && (
                <div className="flex  shadow-lg rounded-lg mt-1">
                  <div className=" bg-red-600 flex justify-center items-center  px-2 rounded-tr-3xl rounded-lg"></div>

                  <div className="flex flex-col p-2  rounded-tr-lg rounded-br-lg">
                    <h2 className="font-semibold text-red-200">
                      {errors.password.message}
                    </h2>
                    <p className="text-gray-700"></p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 order-2 md:order-1">
              <span className="text-gray-400">
                ¿No tienes cuenta?{" "}
                {/* <a
                  href="#"
                  className="text-indigo-400 hover:text-indigo-500 transition-colors"
                >
                  Registrate
                </a> */}
                <NavLink
                  to="/register"
                  className={
                    "text-indigo-400 hover:text-indigo-500 transition-colors"
                  }
                >
                  Registrate
                </NavLink>
              </span>
              {/* <a
                href="#"
                className="text-gray-400 hover:text-gray-200 transition-colors"
              >
                ¿Olvidaste tu contraseña?
              </a> */}
              {/* El siguiente cod prueba enviar datos por parametros */}
              <NavLink
                // to={`/nosotros/${id}`}
                className={
                  "text-gray-400 hover:text-gray-200 transition-colors"
                }
              >
                {/* ¿Olvidaste tu contraseña? */}
              </NavLink>
            </div>
            <div className="mt-4 order-1 md:order-2">
              <button
                onClick={(e) => fetchData(e)}
                type="submit"
                className="mb-8 w-full bg-indigo-700 p-2 rounded-full hover:bg-indigo-800 transition-colors"
              >
                Iniciar sesión
              </button>
            </div>
          </form>
          {/* {msj} */}
        </div>
        {/* <!-- Imagen de fondo --> to={"/nosotros/"+id}*/}
        <Footer />
        {/* <div className="bg hidden lg:block"></div> */}
      </div>
    </>
  );
}
