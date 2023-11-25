import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiTicketLine, RiMore2Fill, RiAddLine } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios"

const CardEstadoVianda = (props) => {
 // const { ticket, totalTickets, text } = props;
 const { pedidoViandaId, estado } = props;
 const { SERVER } = useContext(GlobalContext);
 const [estadoVianda, setEstadoVianda] = useState({});
 //console.log("pedidoViandaId", pedidoViandaId)

 const fetchEstadoVianda = async () => {
  console.log(`${SERVER}estadoVianda/obtenerEstado/${pedidoViandaId}`)
  await axios.get(`${SERVER}estadoVianda/obtenerEstado/${pedidoViandaId}`)
    .then((res) => {
     console.log(res.data); 
     console.log("res estado actual:", res);
    if (res.data===null || res.data.mensaje){
      console.log("hola");           
    }else{
      setEstadoVianda(res.data);
    }
  });
};

useEffect(() => {
  fetchEstadoVianda();        
}, []);
 


  let status = "";
  let textColor = "";

  switch (estadoVianda?.estadoActual?.id) {
    case 1:
      status = "bg-yellow-500/10 text-yellow-600";
      textColor = "text-yellow-600";
      break;
    case 2:
      status = "bg-blue-500/10 text-blue-500";
      textColor = "text-blue-500";
      break;
    case 3:
      status = "bg-green-500/10 text-green-500";
      textColor = "text-green-500";
      break;
    case 4:
      status = "bg-pink-500/10 text-pink-500";
      textColor = "text-pink-500";
      break;
  }

  return (
    <div className="bg-secondary-100 p-4 rounded-xl">
      <div className="flex items-center mb-4">
       
          <RiTicketLine
            className={`text-3xl ${status} p-2 box-content rounded-xl`}/>
            <h1 className="text-4xl text-dark font-bold mb-4 ml-6">{estadoVianda?.estadoActual?.nombreEstado}</h1>         
       

        <div className="flex items-center mb-4">
          <Menu
            menuButton={
              <MenuButton className="flex items-right  gap-x-2 hover:bg-secondary-900 p-2 rounded-lg transition-colors">
                <RiMore2Fill />
              </MenuButton>
            }
            align="end"
            arrow
            arrowClassName="bg-secondary-100"
            transition
            menuClassName="bg-secondary-100 p-4"
          >
            <MenuItem className="p-0 hover:bg-transparent">
              <Link
                to="/perfil"
                className="rounded-lg transition-colors text-gray-500 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
              >
                Datos del viandero
              </Link>
            </MenuItem>
            {/* <MenuItem className="p-0 hover:bg-transparent">
              <Link
                to="/perfil"
                className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
              >
                Información
              </Link>
            </MenuItem> */}
          </Menu>
        </div>
       
      </div>
      <div>
        <div> 
        <p className={textColor}>{estadoVianda?.estadoActual?.descripEstado}</p>
        </div>
        
      </div>
      {/* Number of tickets */}
     
      {/* <hr className="border border-dashed border-gray-500/50 my-4" /> */}
      {/* <div>
        <Link
          to="/"
          className="flex items-center gap-2 text-white hover:underline"
        >
          <RiAddLine /> Agregar nuevo ticket
        </Link>
      </div> */}
    </div>
  );
};

export default CardEstadoVianda;
