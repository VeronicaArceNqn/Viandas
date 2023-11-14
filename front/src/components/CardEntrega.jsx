import React, { useContext, useState} from 'react'
import { GlobalContext } from "../context/GlobalContext";
import { NavLink, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


function CardEntrega ({calle, nroCalle, nombreLugar, ciudad, provincia, onDelete}) {
   
        const navigate = useNavigate(); 
        const { SERVER } = useContext(GlobalContext);
        const [lugarEntrega, setLugarEntrega] = useState([]);
                
        const handleDelete = () => {
            onDelete(); // Llama a la función de eliminación pasada como prop
          };     
      
        // const handleDelete = async (id) => {
        //     console.log("este es el id ".id)
            
        //     try {
        //       const res = await axios.delete(`${SERVER}lugarEntrega/${id}`);
        //       console.log(res)
        //       setLugarEntrega(lugarEntrega.filter(lugar => lugar.id !== id));
            
        //     //console.log("Respuesta del servidor:", response.data);
           
        //     //swit alerta confirmacion
        //     // Swal.fire("Se ha borrado el lugar de entrega correctamente !");
        //     // navigate("/EntregaListar");
        //   } catch (error) {
        //     console.error("Error al eliminar el lugar de entrega", error);
        //   }
        // };        
return (
    <>
    <div>

        <div className="mt-3 sm:max-w-xl sm:mx-auto  rounded-xl shadow-2xl flex bg-indigo-50 border-4 border-indigo-700 flex-col sm:flex-row" id="widget">
        <div className="py-6 sm:rounded-l-full pr-10 relative rounded-xl mx-auto bg-white w-full sm:w-auto">
            
            <svg className="rounded-full w-28 h-28 object-cover border-indigo-200 border-4 relative left-8 sm:inline-block mx-auto 
             text-purple-500" viewBox="0 0 26 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="7" cy="17" r="2" />  <circle cx="17" cy="17" r="2" />  <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" /></svg>
                <div className="bg-green-300 w-7 h-7 absolute rounded-full right-6 top-6 border-4 border-white"></div>
                
        </div>
        
        <div className="flex flex-col ml-2 p-4">
            <div className="flex justify-between items-center">
                <h4 className="text-lg font-semibold mt-2 mr-5">                
                    <span className="font-medium text-black text-md bg-indigo-200 py-1 px-2 rounded-md">
                        {nombreLugar}
                    </span>
                </h4>
            </div>
           <div className=" p-3 mr-5"> 
            <div className="mt-2 font text-gray-500">Calle: <span className="text-black">{calle}</span>{}</div>
            <div className="mt-2 font text-gray-500">Altura de calle: <span className="text-black">{nroCalle}</span>{}</div>
            
            <div className="mt-2 font text-gray-600">
            Ciudad: <span className="text-black">{ciudad}</span> 
            </div>
            <div className="font text-gray-500"> 
            Provincia: <span className="text-black">{provincia}</span> 
            </div>
            
            <div className=" relative right-3 top-3 "> 
                <button
                    onClick={handleDelete}                    
                    className=" p-2 mt-3 rounded-full hover:bg-red-300 transition-colors"
                                       
                        >
                            <svg class="h-10 w-10 text-red-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/> 
                        </svg>
                    
                </button>
                
            </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default CardEntrega;
