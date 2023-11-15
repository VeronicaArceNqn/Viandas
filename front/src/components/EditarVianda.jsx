import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import Swal from "sweetalert2";

const EditarVianda = () => {
  //-
  const { id } = useParams();
  //-
  // console.log(`id de useParams(): ${id}`);
  //-
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // console.log(errors)
  const { SERVER, viandero } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [imagen, setImagen] = useState(null);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const onchangeNombre = (e) => {
    // console.log(e.target.value);
    setNombre(e.target.value);
  };
  const onchangeDescripcion = (e) => {
    // console.log(e.target.value);
    setDescripcion(e.target.value);
  };

  const handleOnChangeImg = (e) => {
    // console.log(e.target.files[0]);
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagen(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  // console.log(viandero[0])
  useEffect(() => {
    axios.get(`${SERVER}viandas/${id}`).then((datos) => {
      console.log(datos.data);
      setNombre(datos.data.nombre);
      setDescripcion(datos.data.descripcion);
      setImagen(datos.data.urlFoto);
    });
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    console.log(data)
    // data.id = +id; con signo + se convienrte a numero
    data.viandero_id = viandero[0].id;
    data.horarioPedido = "12:00 am";
    // data.precio = 5000;
    data.publicado = 1;
    // data.cantidad = 10;
    // console.log(data);
    let icono = "success";
    // const res = await  axios.post(`${SERVER}viandas/${id}?_method=PUT`, data, {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // });
    // console.log(res)
    Swal.fire({
      title: "La vianda sera modificada.",
      text: "Los datos seran actualizados",
      icon: `${icono}`,
      showDenyButton: true,
      confirmButtonText: "Si",
    }).then((resp) => {
      // console.log(resp);
      if (resp.isConfirmed) {
        enviarForm(data);
        reset();
        setImagen(null);
        navigate("/crear-viandas");
      } else {
        navigate("/crear-viandas");
      }
    });
  });

  const enviarForm = async (data) => {
    console.log(data);
    const formData = new FormData();

    try {
      formData.append("id", id);
      formData.append("urlFoto", data.urlFoto[0]);
      formData.append("nombre", data.nombre);
      formData.append("descripcion", data.descripcion);
      formData.append("tipoVianda_id", data.tipoVianda_id);
      formData.append("cantidad", data.cantidad);
      formData.append("precio", data.precio);
      formData.append("horarioPedido", data.horarioPedido);
      formData.append("publicado", data.publicado);
      formData.append("viandero_id", data.viandero_id);
      // console.log(formData);
      const res = await axios.post(
        `${SERVER}viandas/${id}?_method=PUT`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res);
      // .then(() => {
      //   console.log("todo then");
      // });
    } catch (error) {
      console.error(error);
    }
    // console.log(response)
  };
  const eliminarVianda = async (data) => {
    console.log(data, "borarr");
    Swal.fire({
      title: "Eliminar vianda?.",
      text: "Los datos seran eliminados",
      icon: `warning`,
      showDenyButton: true,
      confirmButtonText: "Si",
    }).then((resp) => {
      // enviarForm(formData);
      if (resp.isConfirmed) {
        deleteVianda(id);
        console.log(resp);
        reset();
        setImagen(null);
        navigate("/crear-viandas");
      } else {
        navigate("/editar-viandas");
      }
    });
  };

  const deleteVianda = async (id) => {
    try {
      await axios.delete(`${SERVER}viandas/${id}`).then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Nav />
      <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen dark:bg-gray-100 text-black"> 
      {/* <div className=" flex  w-full p-1  bg-gray-50 dark:bg-gray-400 text-black"> */}
        <Sidebar />
        <div className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll bg-gray-100 dark:bg-gray-400 text-black">
        {/* <div className="ml-9 text-center w-1/2 "> */}
          <h1 className="text-3xl my-9 font-bold text-indigo-600 shadow-lg ">
            Editar Vianda
          </h1>

          <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-y-2 md:flex-row md:items-center mb-8">
              <div className="w-full md:w-1/4">
                <p className="">
                  Nombre <span className="text-red-500">*</span>
                </p>
              </div>
              <div className="flex-1 flex items-center gap-4">
                <div className="w-full text-gray-600">
                  <input
                    {...register("nombre")}
                    defaultValue={nombre}
                    onChange={onchangeNombre}
                    type="text"
                    className=" w-full py-2 px-4 outline-none placeholder-g rounded-lg bg-secondary-900"
                    placeholder="Nombre de la vianda"
                  />
                </div>
                <div className="w-full md:w-1/4 text-gray-600">
                  <p>
                    Precio:<span className="text-red-500 ">*</span>
                  </p>
                </div>
                <div className="w-full text-gray-600">
                  <input
                    {...register("precio")}
                    type="number"
                    className="w-full py-2 text-gray-600 px-1 outline-none rounded-lg bg-secondary-900"
                    placeholder="Valor de la vianda"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col-1 md:flex-row md:items-center gap-y-2 mb-8">
              <div className="w-full md:w-1/4">
                <p>
                  Tipo <span className="text-red-500">*</span>
                </p>
              </div>
              <div className="flex-1  ">
                <select
                  {...register("tipoVianda_id")}
                  className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 text-gray-600 appearance-none"
                >
                  <option value="1">Tradicional</option>
                  <option value="2">Vegetariana</option>
                  <option value="3">Vegana</option>
                  <option value="4">Sin TACC</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
              <div className="w-full md:w-1/4">
                <p>
                  Detalle <span className="text-red-500">*</span>
                </p>
              </div>
              <div className="flex-1">
                <textarea
                  {...register("descripcion")}
                  value={descripcion}
                  onChange={onchangeDescripcion}
                  name="descripcion"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-secondary-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Descripcion relevante sobre tu vianda...."
                ></textarea>
              </div>
            </div>

            <div className="flex items-center mb-8 ">
              <div className="w-1/2">
                <p>Foto de la vianda</p>
              </div>
              <div className="flex-1 ">
                <div className="relative my-1">
                  <img
                    src={imagen != null ? imagen : img}
                    className="w-24 h-24 rounded-lg"
                    alt="nada"
                  />
                  <label
                    htmlFor="img"
                    className="absolute bg-secondary-100 p-2 rounded-full hover:cursor-pointer -top-2 left-28"
                  >
                    <RiEdit2Line />
                  </label>
                  <input
                    {...register("urlFoto")}
                    //, {
                    //   required: {
                    //     value: true,
                    //     message: "Debe ingresar una imagen",
                    //   },
                    // })}

                    id="img"
                    onChange={handleOnChangeImg}
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    //  name="urlFoto"
                    className="my-2"
                  />
                </div>
                <p className="text-gray-500 text-sm">
                  Tipos de imagenes admitidas: png, jpg, jpeg.
                </p>
              </div>
            </div>
            <div className="w-full mx-auto text-2xl md:w-1/4 ">
              <p>
                Stock:<span className="text-red-500 ">*</span>
              </p>
            </div>
            <div className="w-full text-black">
              <input
                {...register("cantidad")}
                type="number"
                className="w-64 py-2 my-4 text-gray-600 px-1 outline-none rounded-lg bg-secondary-900"
                placeholder="Cantidad de esta vianda"
              />
            </div>
            <hr className="py-3" />
            <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
              {/* <div className="w-full md:w-1/4"></div> */}
              <div className="w-full flex-1 ">
                <button
                  type="submit"
                  className="mb-8 w-72 bg-indigo-700 p-2 rounded-full hover:bg-indigo-800 transition-colors text-green-400"
                >
                  Guardar Cambios
                </button>
                </div>
                <div className="flex-1 w-full">
                <button
                  type="button"
                  onClick={eliminarVianda}
                  className="mb-8  bg-red-500 p-2 rounded-full hover:bg-indigo-800 transition-colors text-white"
                >
                  Eliminar Vianda
                </button>
              </div>
              
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditarVianda;
