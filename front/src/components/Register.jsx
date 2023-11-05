import React, { useEffect, useState } from "react";

// import "../myCss.css";
import Nav from "../components/Nav";
import { NavLink, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "./Footer";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


export default function Register() {
  const navigate = useNavigate(); 

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm(); 


  // const [ciudades, setCiudades] = useState([]);

  const onSubmit = handleSubmit((data) => {
    // console.log(data);
    saveRegister(data);
  });

  const getCiudades = async () => {
    await axios
      .get("https://apis.datos.gob.ar/georef/api/provincias")
      .then((response) => setCiudades(response.data.provincias));
  };
  // console.log(watch("ciudade_id"))
  const getLocalidades = () => {
    axios
      .get(
        "https://apis.datos.gob.ar/georef/api/municipios?provincia=58&campos=id,nombre&max=100"
      )
      .then((loc) => console.log(loc));
  };

  // useEffect(() => {
  //   getCiudades();
  // }, []);

  // useEffect(() => {
  //   getLocalidades();
  // }, []);

  const saveRegister = (data) => {
    try {
      const response = axios.post("http://localHost:8000/api/register", data);

      console.log("Respuesta del servidor:", response.data);
      //swit alerta confirmacion
      Swal.fire("Ya estas registrado al sistema, ahora puedes iniciar session !");
      navigate("/login");
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  return (
    <>
      {/* <!-- HTML --> */}
      <div className=" container mx-auto min-h-screen bg-[#252831] grid grid-cols-1 lg:grid-cols-1">
        <Nav />
        <div className="text-white flex flex-col items-center justify-center gap-8 p-8 max-w-lg mx-auto lg:grid-cols-1 text-center">
          {/* <!-- Titulo con descripción --> */}
          <div className="flex flex-col gap-1 w-full">
            <h1 className="text-4xl font-medium ">Crear cuenta</h1>
            <p className="text-gray-400">Registrate en la plataforma</p>
          </div>

          {/* <!-- Form --> */}
          <form className="flex flex-col gap-4" onSubmit={onSubmit}>
            <div>
              {/* Input Genero */}

              <label htmlFor="genero" className="text-gray-200">
                Género *
              </label>
              <select
                {...register("genero", {
                  required: {
                    value: true,
                    message: "Este campo es obligatorio!",
                  },
                })}
                className="w-full py-2 px-4  border rounded-full mt-2 outline-none focus:border-indigo-400"
                label="genero"
              >
                <option value={""}>Selecione Género</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                <option value="NoBinario">No binario</option>
              </select>
              {errors.genero && (
                <div className="flex  shadow-lg rounded-lg mt-1">
                  <div className=" bg-red-600 flex justify-center items-center  px-2 rounded-tr-3xl rounded-lg"></div>

                  <div className="flex flex-col p-2  rounded-tr-lg rounded-br-lg">
                    <h2 className="font-semibold text-red-200">
                      {errors.genero.message}
                    </h2>
                    <p className="text-gray-700"></p>
                  </div>
                </div>
              )}
            </div>

            <div>
              <label htmlFor="name" className="text-gray-200">
                Nombre *
              </label>
              <input
                {...register("nombre", {
                  required: {
                    value: true,
                    message: "Este campo es requerido.!",
                  },
                  minLength: {
                    value: 2,
                    message: "Mínimo 2 caracteres!",
                  },
                  maxLength: {
                    value: 10,
                    message: "A superado el máximo de 10 caracteres!",
                  },
                  pattern: {
                    value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g,
                    message: "Solo texto !!",
                  },
                })}
                type="text"
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                placeholder="Ingresa tu nombre completo"
              />
              {errors.nombre && (
                <div className="flex  shadow-lg rounded-lg mt-1">
                  <div className=" bg-red-600 flex justify-center items-center  px-2 rounded-tr-3xl rounded-lg"></div>

                  <div className="flex flex-col p-2  rounded-tr-lg rounded-br-lg">
                    <h2 className="font-semibold text-red-100">
                      {errors.nombre.message}
                    </h2>
                    <p className="text-gray-700"></p>
                  </div>
                </div>
              )}
            </div>

            <div>
              <label htmlFor="apellido" className="text-gray-200">
                Apellido *
              </label>
              <input
                {...register("apellido", {
                  required: {
                    value: true,
                    message: "Campo requerido!!",
                  },
                  minLength: {
                    value: 2,
                    message: "Mínimos 2 caracteres!",
                  },
                  pattern: {
                    value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g,
                    message: "Solo texto !!",
                  },
                  //^[a-zA-Z]+$
                })}
                type="text"
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                placeholder="Ingresa tu apellido"
              />
              {errors.apellido && (
                <div className="flex  shadow-lg rounded-lg mt-1">
                  <div className=" bg-red-600 flex justify-center items-center  px-2 rounded-tr-3xl rounded-lg"></div>

                  <div className="flex flex-col p-2  rounded-tr-lg rounded-br-lg">
                    <h2 className="font-semibold text-red-100">
                      {errors.apellido.message}
                    </h2>
                    <p className="text-gray-700"></p>
                  </div>
                </div>
              )}
            </div>
           
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
                    message: "mínimo 2 caracteres",
                  },
                  maxLength: {
                    value: 40,
                    message: "A superado el máximo de caracteres",
                  },
                  pattern: {
                    //value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    value: /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "El correo no cumple el formato",
                  },
                })}
                type="email"
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                placeholder="Ingresa tu correo electrónico"
              />
              {errors.email && (
                <div className="flex  shadow-lg rounded-lg mt-1">
                  <div className=" bg-red-600 flex justify-center items-center  px-2 rounded-tr-3xl rounded-lg"></div>

                  <div className="flex flex-col p-2  rounded-tr-lg rounded-br-lg">
                    <h2 className="font-semibold text-red-100">
                      {errors.email.message}
                    </h2>
                    <p className="text-gray-700"></p>
                  </div>
                </div>
              )}
            </div>
            <div>
              <label htmlFor="telefono" className="text-gray-200">
                Teléfono * ( sin 0 y sin 15 )
              </label>
              <input
                {...register("telefono", {
                  required: {
                    value: true,
                    message: "Este campo es requerido!",
                  },
                  minLength: {
                    value: 8,
                    message: "Debe tener mínimo 8 caracteres",
                  },
                  maxLength: {
                    value: 10,
                    message: "A superado el máximo de caracteres",
                  },
                  pattern: {
                    value: /^\d{10}$/,
                    // value: /^\d{3}\d{8}$/,
                    message: "Faltan digitos...",
                  },
                })}
                type="texto"
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                placeholder="Ingresa un nro de contacto"
              />
              {errors.telefono && (
                <div className="flex  shadow-lg rounded-lg mt-1">
                  <div className=" bg-red-600 flex justify-center items-center  px-2 rounded-tr-3xl rounded-lg"></div>

                  <div className="flex flex-col p-2  rounded-tr-lg rounded-br-lg">
                    <h2 className="font-semibold text-red-100">
                      {errors.telefono.message}
                    </h2>
                    <p className="text-gray-700"></p>
                  </div>
                </div>
              )}
            </div>
            <div>
              <label htmlFor="fechaNac" className="text-gray-200">
                Fecha de nacimiento *
              </label>
              <input
                type="date"
                {...register("fechaNac", {
                  required: {
                    value: true,
                    message: "Campo requerido",
                  },
                  validate: (value) => {
                    const fIngr = new Date(value);
                    const fActual = new Date();
                    // console.log(fActual);
                    let edad = fActual.getFullYear() - fIngr.getFullYear();

                    if (
                      fActual.getMonth() == fIngr.getMonth() &&
                      fIngr.getDay() > fActual.getDay()
                    ) {
                      edad = edad - 1;
                    }
                    if (fIngr.getMonth() > fActual.getMonth()) {
                      edad = edad - 1;
                    }
                    console.log(edad);

                    return edad >= 18 || "Debe ser mayor de 18 anos";
                  },
                })}
                className="w-full text-center py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                name="fechaNac"
              />
              {errors.fechaNac && (
                <div className="flex  shadow-lg rounded-lg mt-1">
                  <div className=" bg-red-600 flex justify-center items-center  px-2 rounded-tr-3xl rounded-lg"></div>

                  <div className="flex flex-col p-2  rounded-tr-lg rounded-br-lg">
                    <h2 className="font-semibold text-red-100">
                      {errors.fechaNac.message}
                    </h2>
                    <p className="text-gray-700"></p>
                  </div>
                </div>
              )}
            </div>
            {/* <div>
              <label htmlFor="ciudad_id" className="text-gray-200">
                Ciudad *
              </label>
              <select
                {...register("ciudade_id", {
                  required: {
                    value: true,
                    message: "Seleccione una provincia",
                  },
                })}
               
                className="w-full py-2 px-4  border rounded-full mt-2 outline-none focus:border-indigo-400"
                placeholder="Eliga una provincia"
              >
                <option value={""}>Selecione una provincia</option>
                {ciudades.map((ciudad) => (
                  <option key={ciudad.id} value={ciudad.id}>
                    {ciudad.nombre}
                  </option>
                ))}
              </select>
              {errors.ciudade_id && (
                <div className="flex  shadow-lg rounded-lg mt-1">
                  <div className=" bg-red-600 flex justify-center items-center  px-2 rounded-tr-3xl rounded-lg"></div>

                  <div className="flex flex-col p-2  rounded-tr-lg rounded-br-lg">
                    <h2 className="font-semibold text-red-100">
                      {errors.ciudade_id.message}
                    </h2>
                    <p className="text-gray-700"></p>
                  </div>
                </div>
              )}

            </div> */}
            <div>
              <label htmlFor="password" className="text-gray-200">
                Contraseña *
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Campo requerido!",
                  },
                  minLength: {
                    value: 8,
                    message: "Mínimo de 8 caracteres",
                  },
                })}
                type="password"
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                placeholder="Ingresa tu contraseña"
              />
              {errors.password && (
                <div className="flex  shadow-lg rounded-lg mt-1">
                  <div className=" bg-red-600 flex justify-center items-center  px-2 rounded-tr-3xl rounded-lg"></div>

                  <div className="flex flex-col p-2  rounded-tr-lg rounded-br-lg">
                    <h2 className="font-semibold text-red-100">
                      {errors.password.message}
                    </h2>
                    <p className="text-gray-700"></p>
                  </div>
                </div>
              )}
            </div>
            <div>
              <label htmlFor="password2" className="text-gray-200">
                Repetir Contraseña *
              </label>
              <input
                type="password"
                {...register("password2", {
                  required: {
                    value: true,
                    message: "Debe confirmar password!!!",
                  },

                  validate: (value) =>
                    value == watch("password") ||
                    "Las claves deben ser iguales",
                })}
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                placeholder="Repetir contraseña"
              />
              {errors.password2 && (
                <div className="flex  shadow-lg rounded-lg mt-1">
                  <div className=" bg-red-600 flex justify-center items-center  px-2 rounded-tr-3xl rounded-lg"></div>

                  <div className="flex flex-col p-2  rounded-tr-lg rounded-br-lg">
                    <h2 className="font-semibold text-red-100">
                      {errors.password2.message}
                    </h2>
                    <p className="text-gray-700"></p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 order-2 md:order-1">
              <span className="text-gray-400">
                ¿Ya tienes cuenta?{" "}
                <Link
                  to="/login"
                  className={
                    "text-indigo-400 hover:text-indigo-500 transition-colors"
                  }
                >
                  ingresa
                </Link>
              </span>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200 transition-colors"
              >
               {/*<!-- ¿Olvidaste tu contraseña?-->*/}
              </a>
            </div>
            <div className="mt-4 order-1 md:order-2">
              <button
                type="submit"
                className="w-full bg-indigo-700 p-2 rounded-full hover:bg-indigo-800 transition-colors"
              >
                Crear cuenta
              </button>
            </div>
            {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
          </form>
        </div>
        {/* <!-- Imagen de fondo --> */}
        <div className="bg hidden lg:block"></div>
        <Footer />
      </div>
    </>
  );
}
