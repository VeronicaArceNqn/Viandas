import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import "../index.css";
import "../App.css";
import { GlobalContext } from "../context/GlobalContext";
import icoUser from "../images/iconos/Usuario.png";
import { format } from "date-fns";
import { Badge } from "@mui/material";
import AddHomeIcon from '@mui/icons-material/AddHome';
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import {
  RiArrowDownSLine,
  RiSettings3Line,
  RiLogoutCircleRLine,
  RiThumbUpLine,
  RiShoppingCart2Fill,
  RiStore3Line,
  RiChat3Line,
} from "react-icons/ri";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import axios from "axios";
import { registerLocale } from "react-datepicker";
import { CarritoContext } from "../context/CarritoContext";

// import axios from "axios";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const fecha = format(new Date(), "dd-MM-yy");
  const { user, setUser, logout, SERVER, viandero, getViandero } =
    useContext(GlobalContext);
  const {listaCompras} = useContext(CarritoContext)
  const [showModal, setShowModal] = useState(false);
  const [msj, setMsj] = useState("");
  const [zReparto, setZreparto] = useState([]);
  const navigate = useNavigate();

  const vistaViandero = () => {
    // getViandero()
    console.log(viandero[0]);
    if (viandero?.[0]?.id) {
      // console.log(navigate())
      navigate("/crear-viandas");
      // history.push('/crear-viandas')
    } else {
      setShowModal(true);
    }
  };
  // async function getViandero() {
  //   const arrVianderos = await axios.get(`${SERVER}viandero`);
  //   const vianderos = arrVianderos.data;
  //   const result = vianderos.filter(
  //     (viandero) => viandero.user_id === user.user.id
  //   );
  //   if(result.lenght = 1){
  //     console.log("1")
  //     // navigate("/crear-viandas")
  //   }
  // }

  // useEffect(() => {
  //   if (user?.user.id) {
  //     getViandero();
  //   }
  // }, [user]);

  useEffect(() => {
    // Realizar una solicitud GET a la API externa para obtener las opciones
    axios
      .get(`${SERVER}zonaReparto`)
      .then((response) => {
        setZreparto(response.data);
        // console.log(zReparto);
        // console.log(viandero);
      })
      .catch((error) => {
        console.error("Error al obtener opciones:", error);
      });
  }, []);
  //
  const venderVianda = async (e) => {
    e.preventDefault();
    // const viandero = axios.get(`${SERVER}viandero/${user.user.id}`);
    // console.log(viandero);
    // console.log(e.target.descripcion.value);
    setShowModal(false);
    const data = {
      user_id: user.user.id,
      descripcion: e.target.descripcion.value,
      zonaReparto_id: e.target.zReparto.value,
    };
    console.log(viandero);
    try {
      // const res = axios.get(`${SERVER}zonaReparto`);
      const res = axios.post(`${SERVER}viandero`, data);
      // const res = axios.get(`${SERVER}zonaReparto`);
      // console.log(user.user);

      // .then((res)=>{
      // })
      // setViandero()
      getViandero();
      navigate("/crear-viandas");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <nav>

      
      <div className="flex flex-col md:flex-row max-w-full h-54 bg-slate-500  rounded-t-lg p-4 grid md:grid-cols-12 gap-4 items-center justify-center">
        <h1 className="md:col-span-2 flex justify-center md:justify-start font-bold cursor-pointer text-3xl">
          <NavLink to="/"> Viandas</NavLink>

      

        </h1>

          <div className="text-lg border-l-2 text-white ">{fecha}</div>

        <nav className="md:col-span-6 flex items-center gap-4 justify-end sticky top-0">
          <NavLink to="/"><AddHomeIcon fontSize="large"/></NavLink>
          <NavLink to="/nosotros"> Nosotros</NavLink>
          <NavLink to="/"> Servicios</NavLink>
          {!user ? <NavLink to="/register"> Registro</NavLink> : ""}

          {user ? (
            <Menu
              menuButton={
                <MenuButton className="z-40 flex items-center gap-x-2 hover:bg-secondary-100 p-2 rounded-lg transition-colors">
                  <img
                    src={icoUser}
                    className="w-6 h-6 object-cover rounded-full"
                  />
                  <span>
                    {" "}
                    {user.user.nombre} {user.user.apellido}
                  </span>
                  <RiArrowDownSLine />
                </MenuButton>
              }
              align="end"
              arrow
              // arrowClassName="bg-secondary-100"
              transition
              menuClassName="bg-secondary-100 p-4"
            >
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/perfil"
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                >
                  <img
                    // src="https://img.freepik.com/foto-gratis/feliz-optimista-guapo-gerente-ventas-latina-apuntando-lado-mirando-camara_1262-12679.jpg"
                    src={icoUser}
                    className="w-8 h-8 object-cover rounded-full"
                  />
                  <div className="flex flex-col text-sm">
                    <span className="text-sm"> {user.user.nombre}</span>
                    <span className="text-xs text-gray-500">
                      {user.user.email}
                    </span>
                  </div>
                </Link>
              </MenuItem>
              <hr className="my-4 border-gray-500" />
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/Perfil"
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                >
                  <RiSettings3Line /> Mi perfil
                </Link>
              </MenuItem>
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/AdminCliente"
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                >
                  <RiSettings3Line /> Administrar mis pedidos
                </Link>
              </MenuItem>
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/"
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                >
                  <RiSettings3Line /> Configuración
                </Link>
              </MenuItem>
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/"
                  onClick={logout}
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                >
                  <RiLogoutCircleRLine /> Cerrar sesión
                </Link>
              </MenuItem>
            </Menu>
          ) : (
            <NavLink to="/Login"> Login</NavLink>
          )}
        </nav>
        <span className="text-white  ">
          <NavLink to="/carrito">
            <Badge badgeContent={listaCompras.length} color="secondary">
              <RiShoppingCart2Fill
                // onClick={() => {
                //   console.log("carrito");
                // }}
                className="text-3xl pointer-events-auto"
              />
            </Badge>
          </NavLink>
        </span>
        {/* {user? (
          ""
        ) : (
          ""
        )} */}
        {user ? (
          <span className="text-white  ">
            <RiStore3Line
              title="Crear viandas"
              className="text-3xl"
              onClick={() => {
                vistaViandero();
              }}
            />
          </span>
        ) : (
          ""
        )}
      </div>
      {showModal ? (
        <>
          <form onSubmit={venderVianda}>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-500 outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Información Importante
                    </h3>

                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                      Esta sección mostrará a tus potenciales clientes lo que
                      describas de ti y tus viandas
                    </p>
                    <p>Descripcion:</p>

                    <textarea
                      name="descripcion"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Hola! Mi nombre es... Me dedico a la elaboración de... etc."
                    />
                    <label htmlFor="zonaEntrega" className="text-gray-200">
                      Zona de entrega
                    </label>
                    <select
                      name="zReparto"
                      className="w-full py-2 px-4 dark:bg-gray-700  border rounded-full mt-2 outline-none focus:border-indigo-400"
                      placeholder="Eliga una direccion"
                    >
                      <option value={""}>
                        Selecione una zona a entregar su vianda
                      </option>
                      {zReparto.map((zona) => (
                        <option key={zona.id} value={zona.id}>
                          {zona.nombreZona}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-300 hover:bg-slate-400 hover:text-red-600 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      No quiero vender
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Comenzar..
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </form>
        </>
      ) : null}
    </nav>
  );
}
