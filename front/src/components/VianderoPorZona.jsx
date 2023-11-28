import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import SidebarCliente from "./SidebarCliente";
import axios from "axios";

import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { GlobalContext } from "../context/GlobalContext";
import CardTableVianderoPorZona from "./CardTableVianderoPorZona";

const VianderoPorZona = () => {
  const { user, SERVER } = useContext(GlobalContext);
 
  const [loading, setLoading] = useState(true);

  const [zonaReparto, setZonaReparto] = useState([]);
  const [vianderoZona, setVianderoZona] = useState([]);
  const [selectedZona, setSelectedZona] = useState('');
  const [showVianderos, setShowVianderos] = useState(false);

  useEffect(() => {
    axios
      .get(`${SERVER}zonaReparto`)
      .then((response) => {
        setZonaReparto(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener opciones:", error);
      });
  }, [SERVER]);


 
  const handleSubmitSearch = async (e) => {
    e.preventDefault();
    console.log(e.target.zonaReparto_id.value);
    const id = e.target.zonaReparto_id.value;

    try 
    {
      
      const res = await axios.get(`${SERVER}viandero/zona-reparto-viandas/${id}`);
      console.log("res data",res.data);
     setVianderoZona(res.data);
      setShowVianderos(true); // Mostrar la sección de vianderos al obtener datos
    } catch (error) {
      console.log(error);
    }
    //   //calcular cantidad de viandas por zona
  };

  const handleInputChange = (e) => {
    setSelectedZona(e.target.value);
  };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };
 console.log("prueba vianderoZona", vianderoZona)
 return (
    <>
      <Nav />     
        <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen  bg-gray-100 dark:bg-gray-400 text-black">       
          <SidebarCliente />        
            <div className="lg:col-span-3 xl:col-span-5 p-8 h-[100vh] overflow-y-scroll bg-gray-700 dark:bg-gray-400">                                
              <section className="grid grid-cols-1 mt-6 gap-8">
              <div class="col-span-12">
    <div class="bg-white overflow-auto lg:overflow-visible p-3 rounded-xl shadow-2xl mb-2 flex flex-col gap-8">
      <div class="bg-white flex lg:justify-between border-b-2 border-fuchsia-900 pb-1">
        <h2 class="text-2xl text-gray-500 font-bold">Vianderos por zona - MENÚ</h2></div>

        <form
        onSubmit={handleSubmitSearch}
        className="max-w-full mt-8 h-50 md:h-auto w-full items-center justify-center text-center"
      >

        <label htmlFor="zonaEntrega" className="text-gray-600 text">
                      Seleccionar zona para ver sus vianderos
                </label>
                <select
                    name="zonaReparto_id"
                    className="w-full py-2 px-4 dark:bg-gray-600  border rounded-full mt-2 outline-none focus:border-indigo-400 text-white"
                    placeholder="Eliga una direccion"
                    onChange={handleInputChange}
                    value={selectedZona}
                    >
                    <option value={""}>
                        Selecione una zona
                    </option>
                      {zonaReparto.map((zona) => (
                        <option key={zona.id} value={zona.id}>
                          {zona.nombreZona} - ({zona.descripZona})
                        </option>
                       
                      ))}
                </select>
                <button
              type="submit"
              className="text-lg text-white font-medium w-52 bg-indigo-700 p-2 rounded-full hover:bg-indigo-800 m-5  transition-colors"
            >
              Buscar
            </button>
</form>

{/* {console.log("showVianderos1:", showVianderos)}
{console.log("vianderoZona1:", vianderoZona)} */}

<CardTableVianderoPorZona vianderos={vianderoZona.vianderos} />


{showVianderos && vianderoZona.length > 0 ? (
 
 
    <CardTableVianderoPorZona vianderos={vianderoZona.vianderos} />  
 
) : (    
<p></p>
 
)}

           

    
                           
                                    
                   
                </div>
        </div>
              </section>
              
            </div>
        </div>
      <Footer />
      <div className="  mt-10 flex flex-wrap justify-evenly duration-300 gap-5 lg:gap-4 w-full lg:px-5"></div>
      </>
      );
    };
    
    export default VianderoPorZona;

  