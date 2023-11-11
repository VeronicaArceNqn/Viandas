import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
// import "../myCss.css";
import Nav from "./Nav";
import SidebarCliente from "./SidebarCliente";
import CardEntrega from "./CardEntrega";
import { NavLink, Link, useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "./Footer";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const EntregaListar = () => {
  const { user, SERVER } = useContext(GlobalContext);
  //console.log("Valor de user:", user);
  const navigate = useNavigate(); 

  const [lugarEntrega, setLugarEntrega] = useState([]); // estado con arreglo vacio
  //const { SERVER } = useContext(GlobalContext);

  const fetchLugarEntrega = async () => {
    await axios.get(`${SERVER}lugarEntrega/User/${user.user.id}`)
      .then((res) => {
       console.log(res.data);
       console.log(res)
      if (res.data===null || res.data.mensaje){
        console.log("sin lugares");
        navigate("/EntregaListar");
      }else{
        setLugarEntrega(res.data);
      }
    });
  };
  useEffect(() => {
    fetchLugarEntrega();
    console.log("lugar???");
  }, []);

  //console.log(lugarEntrega)

  const entregaNuevaClick = () =>{
    navigate("/EntregaNuevo");
  }

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${SERVER}lugarEntrega/${id}`);
      setLugarEntrega(lugarEntrega.filter(lugar => lugar.id !== id))
      console.log("Respuesta del servidor:", response.data);
      console.log({id})
      //swit alerta confirmacion
      Swal.fire("Se ha borrado el lugar de entrega correctamente !");
      navigate("/EntregaListar");
    } catch (error) {
      console.error("Error al eliminar el lugar de entrega", error);
    }
  };  


  return (
    <>
     <Nav />
      <div className="flex justify-between w-full  bg-gray-600 dark:bg-gray-400  ">
        
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8  text-dark"> */}
          <div className="grid grid-cols-1  md:grid-cols-2 gap-8  text-dark">
            <SidebarCliente />
            <div className=" mt-5">
                  <span className="text-white font-bold text-2xl">Mis lugares de entrega</span>
            

                {lugarEntrega.length > 0 ? (
                 
                lugarEntrega.map((lugarEntrega) => (
                  
                      
                      <CardEntrega
                        key={lugarEntrega.id}
                        calle={lugarEntrega.calle}
                        nroCalle={lugarEntrega.nroCalle}
                        nombreLugar={lugarEntrega.nombreLugar}
                        ciudad={lugarEntrega.ciudad}
                        provincia={lugarEntrega.provincia}
                        id={lugarEntrega.id}
                        onDelete={() => handleDelete(lugarEntrega.id)}
                      />
                    

                    )
                    
                    )
                    ) : (
                      <div></div>
                      
                  )}
                <div className="mt-4 order-1 md:order-2">
              <button
                type="button"
                className="w-full bg-indigo-700 p-2 mt-3 rounded-full hover:bg-indigo-800 transition-colors text-sm text-white"
                onClick={entregaNuevaClick}
              >
                ¿Desea agregar un lugar de entrega?
              </button>
            </div>
            </div> 
                   
          
        </div>
      </div>
      <Footer />
      <div className="  mt-10 flex flex-wrap justify-evenly duration-300 gap-5 lg:gap-4 w-full lg:px-5"></div>
    </>
    
  )
}

export default EntregaListar
