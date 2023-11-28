import React, { useContext, useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";
//import CardViandero from "./CardViandero";

function CardTableVianderoPorZona({ vianderos }) {
  console.log("vianderos en CardTableVianderoPorZona:", vianderos);
  if (!vianderos || vianderos.length === 0) {
    return <p>Vianderos por Zona</p>;
  }else{
    console.log("hola")
  }

  return (
    <section className="grid grid-cols-1 gap-4">
      {vianderos.map((viandero) => (
        <article key={viandero.id} className="bg-gray-200 p-4 rounded-md">
          <h2 className="text-xl font-semibold mb-2 text-indigo-800">{viandero.user.nombre} {viandero.user.apellido}</h2>
          <h2 className="text-lg font-semibold mb-2 text-purple-800">{viandero.descripcion}</h2>
          <ul className="list-disc ml-6 text-left">
            {viandero.viandas.map((vianda) => (
              <li key={vianda.id} className="mb-2">
                <strong>{vianda.nombre}</strong>: {vianda.descripcion}
                {/* Otros datos de vianda que desees mostrar */}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}

export default CardTableVianderoPorZona;