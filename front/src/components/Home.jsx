import HomeSearchBar from "./HomeSearchBar";
import Card from "./Card";
import Card2 from "./Card2";
import Footer from "./Footer";
import Nav from "./Nav";
import { useContext, useEffect, useState } from "react";
import "../index.css";
// import "../App.css";
import axios from "axios";
import { GlobalContext } from "../context/GlobalContext";
import { CarritoContext } from "../context/CarritoContext";
import { set } from "date-fns";
import ModalInicio from "./ModalInicio";
import { vi } from "date-fns/locale";

function App() {
//
//
  const [viandas, setViandas] = useState([]);
  const [viandasTodas, setViandasTodas] = useState([]);
  const { SERVER, user } = useContext(GlobalContext);
  // const [showModal, setShowModal] = useState(false);
  const [originalViandas, setOriginalViandas] = useState([]);

  //--carrito
  const { listaCompras, agregarCompra, disminurCompra, quitarCompra } =
    useContext(CarritoContext);

  const handleAgregar = (compra) => {
    agregarCompra(compra);
  };
  const handleQuitar = (id) => {
    quitarCompra(id);
  };
  // const handleAumentar = (id) => {};
  // const handleDisminuir = (id) => {};
  //--carrito
  const estaEnCarrito = (id) => {
    return listaCompras.some((producto) => producto.id === id);
  };


  const fetchViandas = async () => {
    await axios.get(`${SERVER}viandas`).then((res) => {
      setViandasTodas(res.data);
    });
  };
  useEffect(() => {
    //carga las viandas del local storage
    const storedViandas = localStorage.getItem("viandas");
    if (storedViandas) {
      setViandas(JSON.parse(storedViandas));
    }
    //
    fetchViandas();
    // setOriginalViandas(viandas);
  }, []);

  const filterViandas = (id) => {
    //array esta vacio
    if (originalViandas.length === 0) {
      // console.log(originalViandas)
      setOriginalViandas(viandas); //copio viandas en originalViandas
      setViandas(originalViandas);
    }
  };

  return (
    <>
      {/* {showModal && <ModalInicio setViandas={setViandas} />} */}

      <ModalInicio setViandas={setViandas} />
      {/* <Header /> */}
      {/* <div className="text-3xl bg-black">Hola francisco</div> */}
      <Nav />

      <div className="flex flex-col justify-center w-auto p-1 bg-gray-400 text-black max-h-screem ">
        <HomeSearchBar
          setViandas={setViandas}
          viandas={viandas}
          filterViandas={filterViandas}
        />
        <div className=" mt-4 grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  min-h-screen bg-gray-400 text-black justify-center">
          {/* <div className="  mt-10 flex flex-wrap justify-evenly duration-300 gap-5 lg:gap-4 w-full lg:px-5"> */}
          {/* <div className="hidden xl:block"><Card /></div> */}
          {/* <div className="hidden xl:block"></div> */}
          {viandas.map((vianda) => (
            <Card2
              key={vianda.id}
              id={vianda.id}
              nombre={vianda.nombre}
              precio={vianda.precio}
              img={vianda.urlFoto}
              handleAgregar={() => handleAgregar(vianda)}
              handleQuitar={() => handleQuitar(vianda.id)}
              // home={home}
              cantidad={vianda.cantidad}
              descripcion={vianda.descripcion}
              agregado={estaEnCarrito(vianda.id)}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
