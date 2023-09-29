import React, { useEffect, useState } from "react";

// import "../myCss.css";
import Nav from "../components/Nav";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "./Footer";
import { useForm } from "react-hook-form";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data)=>{
    console.log(`holis ${data}`)
  })

  const regUser = ()=>{
    
  }

  const getCiudades = async ()=>{
    axios.get
  }

  //   const [selectedDate, setSelectedDate] = useState(null);
  //   const handleDateChange = (date) => {
  //     setSelectedDate(date);
  //   };
  const [ciudades, setCiudades] = useState([]);

  // console.log(ciudades)
  useEffect(() => {
    axios
      .get("https://apis.datos.gob.ar/georef/api/provincias")
      // .then((response)=>response.json())
      //   .then((response)=>console.log(response))
      .then((response) => setCiudades(response.data.provincias));
    //   .then(response=>console.log(JSON.stringify(response)))
    //   const option2 = ciudades.json()
  }, []);

  // const data = {
  //   nombre: name,
  //   apellido: apellido,
  //   fechaNac: birthdate,
  //   telefono: telefono,
  //   genero:genero,
  //   ciudade_id:"1",
  //   email:email,
  //   password: pass
  // };

  const handleSubmitt = async (e) => {
    e.preventDefault();
    // Aquí puedes acceder a la fecha de nacimiento en 'birthdate' y realizar cualquier acción necesaria
    console.log("Fecha de nacimiento seleccionada:", birthdate);
    try {
      // Realiza la solicitud POST utilizando Axios
      const response = await axios.post(
        "http://localHost:8000/api/register",
        data
      );
      // Maneja la respuesta del servidor aquí
      console.log("Respuesta del servidor:", response.data);
      cleanForm();
      navigate("/login");
    } catch (error) {
      // Maneja los errores de la solicitud aquí
      console.error("Error al realizar la solicitud:", error);
    }
  };

  return (
    <>
      {/* <!-- HTML --> */}
      <div className=" container mx-auto min-h-screen bg-[#252831] grid grid-cols-1 lg:grid-cols-1">
        <Nav />
        <div className="text-white flex flex-col items-center justify-center gap-8 p-8 max-w-lg mx-auto lg:grid-cols-2 text-center">
          {/* <!-- Titulo con descripción --> */}
          <div className="flex flex-col gap-1 w-full">
            <h1 className="text-4xl font-medium">Crear cuenta</h1>
            <p className="text-gray-400">Registrate en la plataforma</p>
          </div>

          {/* <!-- Form --> */}
          <form className="flex flex-col gap-4" onSubmit={onSubmit}>
            <div>
              <select
                defaultValue="genero"
                className="w-full py-2 px-4  border rounded-full mt-2 outline-none focus:border-indigo-400"
                label="Genero"
                name="Genero"
              >
                <option defaultValue={"elegir algo"}>Selecione Genero</option>
                <option value="m">Masculino</option>
                <option value="f">Femenino</option>
                <option value="o">Otros</option>
              </select>
            </div>
            <div>
              <label htmlFor="apellido" className="text-gray-200">
                Apellido *
              </label>
              <input
                type="text"
                id="apellido"
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                placeholder="Ingresa tu apellido"
              />
              <label htmlFor="name" className="text-gray-200">
                Nombre *
              </label>
              <input
                type="text"
                id="name"
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                placeholder="Ingresa tu nombre completo"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-gray-200">
                Correo electrónico *
              </label>
              <input
                type="email"
                id="email"
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                placeholder="Ingresa tu correo electrónico"
              />
            </div>
            <div>
              <label htmlFor="telefono" className="text-gray-200">
                Telefono*
              </label>
              <input
                type="number"
                id="telefono"
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                placeholder="Ingresa un nro de contacto"
              />
            </div>
            <div>
              <label htmlFor="telefono" className="text-gray-200">
                Fecha de nacimineto*
              </label>
              <input
                className="w-full text-center py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                type="date"
                name="birthdate"
              />
            </div>
            <div>
              Ciudad *
              <select
                defaultValue={0}
                className="w-full py-2 px-4  border rounded-full mt-2 outline-none focus:border-indigo-400"
                label="selecione provincia"
                name="provincias"
              >
                <option defaultValue={"elegir algo"}>
                  Selecione una provincia
                </option>
                {ciudades.map((ciudad) => (
                  <option key={ciudad.id} value={ciudad.id}>
                    {ciudad.nombre}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="password" className="text-gray-200">
                Contraseña *
              </label>
              <input
                type="password"
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                placeholder="Ingresa tu contraseña"
              />
            </div>
            <div>
              <label htmlFor="password2" className="text-gray-200">
                Repetir Contraseña *
              </label>
              <input
                type="password"
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                placeholder="Ingresa tu contraseña"
              />
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
                ¿Olvidaste tu contraseña?
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
          </form>
        </div>
        {/* <!-- Imagen de fondo --> */}
        <div className="bg hidden lg:block"></div>
        <Footer />
      </div>
    </>
  );
}
