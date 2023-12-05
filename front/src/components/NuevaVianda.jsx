import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  RiEdit2Line,
  RiShieldCheckLine,
  RiErrorWarningLine,
} from "react-icons/ri";
import img from "../images/iconos/imagen.png";
import { GlobalContext } from "../context/GlobalContext";
import Swal from 'sweetalert2'

const NuevaVianda = () => {
  const {
    register,reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // console.log(errors)
  const { SERVER, viandero } = useContext(GlobalContext);

  const navigate = useNavigate();

  const [imagen, setImagen] = useState(null);

  const onSubmit = handleSubmit((data) => {
    const formData = new FormData();

    console.log(data);
    data.viandero_id = viandero.id;
    data.horarioPedido = "12:00 am";
    data.precio = 0;
    data.publicado = 0;
    data.cantidad = 0;

    formData.append("urlFoto", data.urlFoto[0]);
    formData.append("nombre", data.nombre);
    formData.append("descripcion", data.descripcion);
    formData.append("tipoVianda_id", data.tipoVianda_id);
    formData.append("cantidad", data.cantidad);
    formData.append("precio", data.precio);
    formData.append("horarioPedido", data.horarioPedido);
    formData.append("publicado", data.publicado);
    formData.append("viandero_id", data.viandero_id);
    console.log(formData);
    let icono = "success"
    
    Swal.fire({
      title:"Vianda creada correctamente.",
      text:"Desea crear otra?",
      icon:`${icono}`,
      showDenyButton:true,
      confirmButtonText:"Si, crear otra mas"
    })
      .then(resp=>{
        enviarForm(formData);
        if(resp.isConfirmed){
          console.log(resp)
          reset()
          setImagen(null)
          navigate('/nueva-vianda')

        }else{
          navigate("/crear-viandas")
        }
      })

  });

  const enviarForm = async (data) => {
    try {
      await axios.post(`${SERVER}viandas`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then(()=>{console.log("todo then")});
     
      // console.log(response)
    } catch (error) {
      console.log(error);
    }
    // console.log(response)
  };

  /**
   * Evento input subir imagen
   * @param {*} e
   */
  const handleOnChange = (e) => {
    const file = e.target.files[0];

    // Mostrar la imagen en el formulario
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagen(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Nav />
      <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen bg-gray-100 dark:bg-gray-400 text-black">
      {/* <div className=" flex  w-full p-1  bg-gray-50 dark:bg-gray-400 text-black"> */}
        <Sidebar />
        <div className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-6 h-[100vh]  dark:bg-gray-300">
        {/* <div className="ml-9 text-center w-1/2 "> */}

          <h1 className="text-3xl my-5 font-bold text-indigo-600 shadow-lg  ">
            Crear viandas

          </h1>
          
          <p className="  py-4 px-6  border-l-4 border-yellow-600 border-b-2 text-gray-800  rounded-lg mb-6 flex items-center gap-3 shadow-lg bg-gray-100">
           Las viandas seran creadas por unica vez. Luego podras editar  precio, imagen y  cantidad en menu "Mis viandas".
          </p>
          
          <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-y-2 md:flex-row md:items-center mb-8 ">
              <div className="w-full md:w-1/4">
                <p className="">
                  Nombre <span className="text-red-500">*</span>
                </p>
              </div>
              <div className="flex-1 flex items-center gap-4">
                <div className="w-full text-gray-300">
                  <input
                    {...register("nombre", {
                      required: {
                        value: true,
                        message: "Campo requerido",
                      },
                    })}
                    type="text"
                    className=" w-full py-2 px-4 outline-none placeholder-g rounded-lg bg-secondary-900"
                    placeholder="Nombre de la vianda.... "
                  />
                  {errors.nombre && (
                    <div className="flex  shadow-lg rounded-lg mt-1">
                      <div className=" bg-red-600 flex justify-center items-center  px-2 rounded-tr-3xl rounded-lg"></div>

                      <div className="flex flex-col p-2  rounded-tr-lg rounded-br-lg">
                        <h2 className="font-semibold text-red-200">
                          {errors.nombre.message}
                        </h2>
                        <p className="text-gray-700"></p>
                      </div>
                    </div>
                  )}
                </div>
                {/* <div className="w-full">
                  <input
                    type="text"
                    className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                    placeholder="Apellido(s)"
                  /> 
                  </div>*/}
              </div>
            </div>
            <div className="flex flex-col-1 md:flex-row md:items-center gap-y-2 mb-8">
              <div className="w-full md:w-1/4">
                <p>
                  Tipo <span className="text-red-500">*</span>
                </p>
              </div>
              <div className="flex-1 ">
                <select
                  {...register("tipoVianda_id", {
                    required: {
                      value: true,
                      message: "Campo requerido",
                    },
                  })}
                  name="tipoVianda"
                  className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 text-gray-300 appearance-none"
                >
                  <option value="1">Tradicional</option>
                  <option value="2">Vegetariana</option>
                  <option value="3">Vegana</option>
                  <option value="4">Sin TACC</option>
                </select>
                {errors.nombre && (
                  <div className="flex  shadow-lg rounded-lg mt-1">
                    <div className=" bg-red-600 flex justify-center items-center  px-2 rounded-tr-3xl rounded-lg"></div>

                    <div className="flex flex-col p-2  rounded-tr-lg rounded-br-lg">
                      <h2 className="font-semibold text-red-200">
                        {errors.nombre.message}
                      </h2>
                      <p className="text-gray-700"></p>
                    </div>
                  </div>
                )}
                {/* <input
                  type="text"
                  className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                  placeholder="Nombre(s)"
                /> */}
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
              <div className="w-full md:w-1/4">
                <p>
                  Detalle <span className="text-red-500">*</span>
                </p>
              </div>
              <div className="flex-1 text-gray-700">
                <textarea
                  {...register("descripcion", {
                    required: {
                      value: true,
                      message: "Campo requerido",
                    },
                  })}
                  name="descripcion"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-secondary-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Descripcion relevante sobre tu vianda...."
                ></textarea>
                {errors.descripcion && (
                  <div className="flex  shadow-lg rounded-lg mt-1">
                    <div className=" bg-red-600 flex justify-center items-center  px-2 rounded-tr-3xl rounded-lg"></div>

                    <div className="flex flex-col p-2  rounded-tr-lg rounded-br-lg">
                      <h2 className="font-semibold text-red-200">
                        {errors.descripcion.message}
                      </h2>
                      <p className="text-gray-700"></p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center mb-8 ">
              <div className="w-1/2">
                <p>Foto</p>
              </div>
              <div className="flex-1 ">
                <div className="relative my-1">
                  <img
                    // src="https://img.freepik.com/foto-gratis/negocios-finanzas-empleo-concepto-mujeres-emprendedoras-exitosas-joven-empresaria-segura-anteojos-mostrando-gesto-pulgar-arriba-sostenga-computadora-portatil-garantice-mejor-calidad-servicio_1258-59118.jpg"

                    src={imagen != null ? imagen : img}
                    className="w-24 h-24 rounded-lg"
                    alt="nada"
                  />
                  <label
                    htmlFor="imgVianda"
                    className="absolute bg-secondary-100 p-2 rounded-full hover:cursor-pointer -top-2 left-28"
                  >
                    {/* <RiEdit2Line /> */}
                  </label>
                  <input
                    {...register("urlFoto", {
                      required: {
                        value: true,
                        message: "Debe ingresar una imagen",
                      },
                    })}
                    id="imgVianda"
                    onChange={handleOnChange}
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    className="my-2"
                  />
                  {errors.urlFoto && (
                    <div className="flex  shadow-lg rounded-lg mt-1">
                      <div className=" bg-red-600 flex justify-center items-center  px-2 rounded-tr-3xl rounded-lg"></div>

                      <div className="flex flex-col p-2  rounded-tr-lg rounded-br-lg">
                        <h2 className="font-semibold text-red-200">
                          {errors.urlFoto.message}
                        </h2>
                        <p className="text-gray-700"></p>
                      </div>
                    </div>
                  )}
                </div>
                <p className="text-gray-500 text-sm">
                  Tipos de imagenes admitidas: png, jpg, jpeg.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
              {/* <div className="w-full md:w-1/4"></div> */}
              <div className="w-full flex-1">
                <button
                  type="submit"
                  className="mb-6 w-72 bg-indigo-700 p-2 rounded-full hover:bg-indigo-800 transition-colors text-green-400"
                >
                  Crear Vianda
                </button>
              </div>
            </div>
            {/* <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
              <div className="w-full md:w-1/4">
                <p>
                  Página web <span className="text-red-500">*</span>
                </p>
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                  placeholder="Nombre(s)"
                />
              </div>
            </div> */}
            {/* <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
              <div className="w-full md:w-1/4">
                <p>
                  País <span className="text-red-500">*</span>
                </p>
              </div>
              <div className="flex-1">
                <select className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 appearance-none">
                  <option value="Argentina">Argentina</option>
                  <option value="Colombia">Colombia</option>
                  <option value="México">México</option>
                  <option value="Perú">Perú</option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Venezuela">Venezuela</option>
                </select>
              </div>
            </div> */}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NuevaVianda;
