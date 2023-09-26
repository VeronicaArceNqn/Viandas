import React, { useEffect, useState } from "react";
import Select from "react-select";
// import "../myCss.css";
import Nav from "../components/Nav";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import { RegisterContextProvider } from "../context/RegisterContext";
// import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Footer from "./Footer";

export default function Register() {
  //   const [selectedDate, setSelectedDate] = useState(null);
  //   const handleDateChange = (date) => {
  //     setSelectedDate(date);
  //   };
  const [ciudades, setCiudades] = useState([]);
  const [birthdate, setBirthdate] = useState("");
  const [name, setName] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [genero, setGenero] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passRepit, setPassRepit] = useState("");

  const handleBirthdateChange = (e) => {
    setBirthdate(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleApellido = (e) => {
    setApellido(e.target.value);
  };
  const handleTelefono = (e) => {
    setTelefono(e.target.value);
    // console.log(telefono);
  };
  const handleGenero = (e) => {
    setGenero(e.target.value);
    // console.log(name)
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    // console.log(name)
  };
  const handlePass = (e) => {
    setPass(e.target.value);
    // console.log(name)
  };
  const handlePassRepit = (e) => {
      setPassRepit(e.target.value);
      // console.log(name)
    };
    

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
  const cleanForm = ()=>{
    setApellido('')
    setName('')
    setBirthdate('')
    setTelefono('')
    setGenero('')
    setPass('')
    
  }

  
  const data = {
    nombre: name,
    apellido: apellido,
    fechaNac: birthdate,
    telefono: telefono,
    genero:genero,
    ciudade_id:"1",
    email:email,
    password: pass
  };

  const handleSubmit = async (e) => {
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
      cleanForm()
      navigate("/login");
    } catch (error) {
      // Maneja los errores de la solicitud aquí
      console.error("Error al realizar la solicitud:", error);
    }
  };

  /**
   * {
        "nombre": "Pepe",
        "apellido": "Perez",
        "fechaNac": "2000-10-01",
        "telefono": "299-1111111",
        "genero": "masculino",
        "ciudade_id": 1,
        "email": "pperez@gmail.com",
        "password": "12345678"
    }
   */

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

          {/* <!-- Boton para ingresar con Google --> */}
          {/* <div className="w-full">
              <button
                  type="button"
                  className="w-full flex items-center justify-center gap-2 border p-2 px-4 rounded-full"
              >
                  <img
                      src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                      width="20"
                      height="20"
                  />
                  <span className="ml-2">Registrate con Google</span>
              </button>
          </div> */}
          {/* <!-- Form --> */}
          <form className="flex flex-col gap-4">
            {/* <Select
         theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: 'hotpink',
              primary: 'black',
            },
          })} */}
            {/* className=" bg-slate-500 w-full py-2 px-4  border rounded-full mt-2 outline-none focus:border-indigo-400" 
          options ={options} /> */}
            <div>
              <select
                defaultValue={genero}
                className="w-full py-2 px-4  border rounded-full mt-2 outline-none focus:border-indigo-400"
                label="Genero"
                name="Genero"
                
                onChange={handleGenero}
                required
                
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
                value={apellido}
                onChange={handleApellido}
                required
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
                value={name}
                onChange={handleName}
                required
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
                value={email}
                onChange={handleEmail}
                required
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
                value={telefono}
                onChange={handleTelefono}
                required
              />
            </div>
            <div>
              <label htmlFor="telefono" className="text-gray-200">
                Fecha de nacimineto*
              </label>
              <input
                className="w-full text-center py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                type="date"
                id="birthdate"
                name="birthdate"
                value={birthdate}
                onChange={handleBirthdateChange}
              />
            </div>
            <div>
              Ciudad *
              <select
                defaultValue={0}
                className="w-full py-2 px-4  border rounded-full mt-2 outline-none focus:border-indigo-400"
                label="selecione provincia"
                name="provincias"
                required
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
                id="password"
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                placeholder="Ingresa tu contraseña"
                value={pass}
                onChange={handlePass}
                required
              />
            </div>
            <div>
              <label htmlFor="password2" className="text-gray-200">
                Repetir Contraseña *
              </label>
              <input
                type="password"
                id="password2"
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                placeholder="Ingresa tu contraseña"
                value={passRepit}
                onChange={handlePassRepit}
                required
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
                onClick={handleSubmit}
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
